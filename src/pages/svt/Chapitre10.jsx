import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre10 } from '../../data/svtData';
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

export default function Chapitre10() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/svt" className="back-link">← Retour aux chapitres SVT</Link>

      <div className="page-header">
        <div className="subject-tag">SVT · Chapitre 10</div>
        <h1>{chapitre10.titre}</h1>
        <p>Carottes de glace, δ18O, foraminifères, cycles de Milankovitch et paléoclimatologie.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`svt_ch10_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent
          cours={chapitre10.cours}
          flashcards={chapitre10.flashcards}
          onMarkRead={() => markDone('svt_ch10_cours')}
          isRead={isDone('svt_ch10_cours')}
        />
      )}

      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Swipe à droite si tu sais, à gauche si tu veux revoir.</p>
          {isDone('svt_ch10_flashcards') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards !</div>
          )}
          <Flashcard cards={chapitre10.flashcards} onComplete={() => markDone('svt_ch10_flashcards')} />
        </div>
      )}

      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte en cliquant sur les mots dans la banque.</p>
          {isDone('svt_ch10_trous') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>
          )}
          <TexteTrous data={chapitre10.texteTrous} onComplete={() => markDone('svt_ch10_trous')} />
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🧠 Quiz</h2>
          <p style={{ marginBottom: '2rem' }}>Réponds aux questions pour tester tes connaissances.</p>
          {isDone('svt_ch10_quiz') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi ce quiz !</div>
          )}
          <QuizQuestion questions={chapitre10.quiz} onComplete={() => markDone('svt_ch10_quiz')} />
        </div>
      )}
    </div>
  );
}
