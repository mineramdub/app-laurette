import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre2HLP } from '../../data/hlpData';
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

export default function HLPChapitre2() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/hlp" className="back-link">← Retour aux chapitres HLP</Link>

      <div className="page-header">
        <div className="subject-tag" style={{ background: 'var(--sage-light)', color: 'var(--sage-dark)' }}>HLP · Chapitre 2</div>
        <h1>{chapitre2HLP.titre}</h1>
        <p>Mythes, naissance de la pensée scientifique, révolutions scientifiques, raison et éthique.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`hlp_ch2_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent cours={chapitre2HLP.cours} flashcards={chapitre2HLP.flashcards} />
      )}

      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Clique sur la carte pour voir la définition.</p>
          {isDone('hlp_ch2_flashcards') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards — tu avances bien !</div>
          )}
          <Flashcard
            cards={chapitre2HLP.flashcards}
            onComplete={() => markDone('hlp_ch2_flashcards')}
          />
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>❓ Quiz guidé</h2>
          <p style={{ marginBottom: '2rem' }}>Réponds à chaque question — une explication t'attend après chaque réponse.</p>
          {isDone('hlp_ch2_quiz') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà complété ce quiz — tu avances bien !</div>
          )}
          <QuizQuestion
            questions={chapitre2HLP.quiz}
            onComplete={() => markDone('hlp_ch2_quiz')}
          />
        </div>
      )}

      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte en cliquant sur les mots dans la banque.</p>
          {isDone('hlp_ch2_trous') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>
          )}
          <TexteTrous
            data={chapitre2HLP.texteTrous}
            onComplete={() => markDone('hlp_ch2_trous')}
          />
        </div>
      )}
    </div>
  );
}
