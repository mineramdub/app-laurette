import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre7 } from '../../data/svtData';
import { useProgress } from '../../hooks/useProgress';
import CourseContent from '../../components/CourseContent';
import Flashcard from '../../components/Flashcard';
import TexteTrous from '../../components/TexteTrous';
import QuizQuestion from '../../components/QuizQuestion';

const tabs = [
  { id: 'cours', label: '📚 Cours' },
  { id: 'flashcards', label: '🃏 Flashcards' },
  { id: 'trous', label: '✏️ Texte à trous' },
  { id: 'quiz', label: '🧠 Quiz' },
];

export default function Chapitre7() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/svt" className="back-link">← Retour aux chapitres SVT</Link>

      <div className="page-header">
        <div className="subject-tag">SVT · Chapitre 7</div>
        <h1>{chapitre7.titre}</h1>
        <p>Régulation de la glycémie, rôle du pancréas et du foie, diabète de type 1 et 2.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`svt_ch7_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent
          cours={chapitre7.cours}
          flashcards={chapitre7.flashcards}
          onMarkRead={() => markDone('svt_ch7_cours')}
          isRead={isDone('svt_ch7_cours')}
        />
      )}

      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Swipe à droite si tu sais, à gauche si tu veux revoir.</p>
          {isDone('svt_ch7_flashcards') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards !</div>
          )}
          <Flashcard cards={chapitre7.flashcards} onComplete={() => markDone('svt_ch7_flashcards')} />
        </div>
      )}

      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte en cliquant sur les mots dans la banque.</p>
          {isDone('svt_ch7_trous') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>
          )}
          <TexteTrous data={chapitre7.texteTrous} onComplete={() => markDone('svt_ch7_trous')} />
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🧠 Quiz</h2>
          <p style={{ marginBottom: '2rem' }}>Réponds aux questions pour tester tes connaissances.</p>
          {isDone('svt_ch7_quiz') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi ce quiz !</div>
          )}
          <QuizQuestion questions={chapitre7.quiz} onComplete={() => markDone('svt_ch7_quiz')} />
        </div>
      )}
    </div>
  );
}
