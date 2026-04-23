import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { philoNotions } from '../../data/philoData';
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

export default function PhiloChapitre() {
  const { id } = useParams();
  const notion = philoNotions.find(n => n.id === id);
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  if (!notion) return <Navigate to="/philo" replace />;

  const key = `philo_${id}`;

  return (
    <div>
      <Link to="/philo" className="back-link">← Retour aux notions Philo</Link>

      <div className="page-header">
        <div className="subject-tag" style={{ background: '#e8d8f8', color: '#3d2b5e' }}>
          Philosophie · Notion
        </div>
        <h1>{notion.titre}</h1>
        <p>{notion.description}</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`${key}_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent
          cours={notion.cours}
          flashcards={notion.flashcards}
          onMarkRead={() => markDone(`${key}_cours`)}
          isRead={isDone(`${key}_cours`)}
        />
      )}

      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Swipe à droite si tu sais, à gauche si tu veux revoir.</p>
          {isDone(`${key}_flashcards`) && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards !</div>
          )}
          <Flashcard cards={notion.flashcards} onComplete={() => markDone(`${key}_flashcards`)} />
        </div>
      )}

      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte en cliquant sur les mots dans la banque.</p>
          {isDone(`${key}_trous`) && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>
          )}
          <TexteTrous data={notion.texteTrous} onComplete={() => markDone(`${key}_trous`)} />
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🧠 Quiz</h2>
          <p style={{ marginBottom: '2rem' }}>Réponds aux questions pour tester tes connaissances.</p>
          {isDone(`${key}_quiz`) && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi ce quiz !</div>
          )}
          <QuizQuestion questions={notion.quiz} onComplete={() => markDone(`${key}_quiz`)} />
        </div>
      )}
    </div>
  );
}
