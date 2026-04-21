import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre1HLP } from '../../data/hlpData';
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

export default function HLPChapitre1() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/hlp" className="back-link">← Retour aux chapitres HLP</Link>

      <div className="page-header">
        <div className="subject-tag" style={{ background: 'var(--sage-light)', color: 'var(--sage-dark)' }}>HLP · Chapitre 1</div>
        <h1>{chapitre1HLP.titre}</h1>
        <p>Rhétorique, argumentation, figures de style, parole poétique et politique.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`hlp_ch1_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent cours={chapitre1HLP.cours} flashcards={chapitre1HLP.flashcards} />
      )}

      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Clique sur la carte pour voir la définition.</p>
          {isDone('hlp_ch1_flashcards') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards — tu avances bien !</div>
          )}
          <Flashcard
            cards={chapitre1HLP.flashcards}
            onComplete={() => markDone('hlp_ch1_flashcards')}
          />
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>❓ Quiz guidé</h2>
          <p style={{ marginBottom: '2rem' }}>Réponds à chaque question — une explication t'attend après chaque réponse.</p>
          {isDone('hlp_ch1_quiz') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà complété ce quiz — tu avances bien !</div>
          )}
          <QuizQuestion
            questions={chapitre1HLP.quiz}
            onComplete={() => markDone('hlp_ch1_quiz')}
          />
        </div>
      )}

      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte en cliquant sur les mots dans la banque.</p>
          {isDone('hlp_ch1_trous') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>
          )}
          <TexteTrous
            data={chapitre1HLP.texteTrous}
            onComplete={() => markDone('hlp_ch1_trous')}
          />
        </div>
      )}
    </div>
  );
}
