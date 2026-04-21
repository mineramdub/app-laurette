import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre3 } from '../../data/svtData';
import { useProgress } from '../../hooks/useProgress';
import CourseContent from '../../components/CourseContent';
import QuizQuestion from '../../components/QuizQuestion';
import SchemaInteractif from '../../components/SchemaInteractif';
import TexteTrous from '../../components/TexteTrous';

const tabs = [
  { id: 'cours', label: '📚 Cours' },
  { id: 'quiz', label: '❓ Quiz guidé' },
  { id: 'schema', label: '🛡️ Réponse immunitaire' },
  { id: 'trous', label: '✏️ Texte à trous' },
];

export default function Chapitre3() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/svt" className="back-link">← Retour aux chapitres SVT</Link>

      <div className="page-header">
        <div className="subject-tag">SVT · Chapitre 3</div>
        <h1>{chapitre3.titre}</h1>
        <p>Immunité innée et adaptative, lymphocytes B et T, anticorps, vaccins, VIH et SIDA.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`svt_ch3_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent cours={chapitre3.cours} flashcards={chapitre3.flashcards} />
      )}

      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>❓ Quiz guidé</h2>
          <p style={{ marginBottom: '2rem' }}>Questions sur la réponse immunitaire — une explication après chaque réponse.</p>
          {isDone('svt_ch3_quiz') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà complété ce quiz !</div>
          )}
          <QuizQuestion
            questions={chapitre3.quizImmuno}
            onComplete={() => markDone('svt_ch3_quiz')}
          />
        </div>
      )}

      {activeTab === 'schema' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🛡️ La réponse immunitaire étape par étape</h2>
          <p style={{ marginBottom: '1.5rem' }}>Explore chaque étape de la réponse immunitaire en cliquant dessus.</p>
          {isDone('svt_ch3_schema') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as exploré toutes les étapes !</div>
          )}
          <SchemaInteractif
            stages={chapitre3.immunoSteps}
            title="Réponse immunitaire"
            onComplete={() => markDone('svt_ch3_schema')}
          />
        </div>
      )}

      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous — La vaccination</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte sur le mécanisme de la vaccination.</p>
          {isDone('svt_ch3_trous') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>
          )}
          <TexteTrous
            data={chapitre3.texteTrousVaccin}
            onComplete={() => markDone('svt_ch3_trous')}
          />
        </div>
      )}
    </div>
  );
}
