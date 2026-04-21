import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre3HLP } from '../../data/hlpData';
import { useProgress } from '../../hooks/useProgress';
import CourseContent from '../../components/CourseContent';
import Flashcard from '../../components/Flashcard';
import QuizQuestion from '../../components/QuizQuestion';
import TexteTrous from '../../components/TexteTrous';

const tabs = [
  { id: 'cours', label: '📚 Cours' },
  { id: 'flashcards', label: '🃏 Flashcards' },
  { id: 'quiz', label: '❓ Quiz guidé' },
  { id: 'trous', label: '✏️ Texte à trous' },
];

export default function HLPChapitre3() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/hlp" className="back-link">← Retour aux chapitres HLP</Link>

      <div className="page-header">
        <div className="subject-tag" style={{ background: 'var(--sage-light)', color: 'var(--sage-dark)' }}>HLP · Chapitre 3</div>
        <h1>{chapitre3HLP.titre}</h1>
        <p>Histoire, mémoire collective, devoir de mémoire, guerre, paix et progrès historique.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`hlp_ch3_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent cours={chapitre3HLP.cours} flashcards={chapitre3HLP.flashcards} />
      )}

      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Clique sur la carte pour voir la définition.</p>
          {isDone('hlp_ch3_flashcards') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards — tu avances bien !</div>
          )}
          <Flashcard
            cards={chapitre3HLP.flashcards}
            onComplete={() => markDone('hlp_ch3_flashcards')}
          />
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>❓ Quiz guidé</h2>
          <p style={{ marginBottom: '2rem' }}>Réponds à chaque question — une explication t'attend après chaque réponse.</p>
          {isDone('hlp_ch3_quiz') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà complété ce quiz — tu avances bien !</div>
          )}
          <QuizQuestion
            questions={chapitre3HLP.quiz}
            onComplete={() => markDone('hlp_ch3_quiz')}
          />
        </div>
      )}

      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte en cliquant sur les mots dans la banque.</p>
          {isDone('hlp_ch3_trous') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>
          )}
          <TexteTrous
            data={chapitre3HLP.texteTrous}
            onComplete={() => markDone('hlp_ch3_trous')}
          />
        </div>
      )}
    </div>
  );
}
