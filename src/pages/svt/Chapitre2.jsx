import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre2 } from '../../data/svtData';
import { useProgress } from '../../hooks/useProgress';
import CourseContent from '../../components/CourseContent';
import QuizQuestion from '../../components/QuizQuestion';
import SchemaInteractif from '../../components/SchemaInteractif';
import Flashcard from '../../components/Flashcard';

const tabs = [
  { id: 'cours', label: '📚 Cours' },
  { id: 'quiz', label: '❓ Quiz guidé' },
  { id: 'schema', label: '🔬 Méiose interactive' },
  { id: 'flashcards', label: '🃏 Flashcards' },
];

export default function Chapitre2() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/svt" className="back-link">← Retour aux chapitres SVT</Link>

      <div className="page-header">
        <div className="subject-tag">SVT · Chapitre 2</div>
        <h1>{chapitre2.titre}</h1>
        <p>Méiose, brassages génétiques, mutations, sélection naturelle, dérive génétique et spéciation.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`svt_ch2_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent cours={chapitre2.cours} flashcards={chapitre2.flashcards} />
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>❓ Quiz guidé</h2>
          <p style={{ marginBottom: '2rem' }}>Réponds à chaque question — une explication t'attend après chaque réponse.</p>
          {isDone('svt_ch2_quiz') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà complété ce quiz — tu avances bien !</div>
          )}
          <QuizQuestion
            questions={chapitre2.quizQuestions}
            onComplete={() => markDone('svt_ch2_quiz')}
          />
        </div>
      )}

      {activeTab === 'schema' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🔬 Les étapes de la méiose</h2>
          <p style={{ marginBottom: '1.5rem' }}>Clique sur chaque étape pour découvrir ce qui se passe à ce moment.</p>
          {isDone('svt_ch2_schema') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as exploré toutes les étapes !</div>
          )}
          <SchemaInteractif
            stages={chapitre2.meioseStages}
            title="Étapes de la méiose"
            onComplete={() => markDone('svt_ch2_schema')}
          />
        </div>
      )}

      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Vocabulaire clé de la génétique et de l'évolution.</p>
          {isDone('svt_ch2_flashcards') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards !</div>
          )}
          <Flashcard
            cards={chapitre2.flashcards2}
            onComplete={() => markDone('svt_ch2_flashcards')}
          />
        </div>
      )}
    </div>
  );
}
