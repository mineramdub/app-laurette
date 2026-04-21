import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre1 } from '../../data/svtData';
import { useProgress } from '../../hooks/useProgress';
import CourseContent from '../../components/CourseContent';
import Flashcard from '../../components/Flashcard';
import TexteTrous from '../../components/TexteTrous';
import Associations from '../../components/Associations';

const tabs = [
  { id: 'cours', label: '📚 Cours' },
  { id: 'flashcards', label: '🃏 Flashcards' },
  { id: 'trous', label: '✏️ Texte à trous' },
  { id: 'assoc', label: '🔗 Associations' },
];

export default function Chapitre1() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/svt" className="back-link">← Retour aux chapitres SVT</Link>

      <div className="page-header">
        <div className="subject-tag">SVT · Chapitre 1</div>
        <h1>{chapitre1.titre}</h1>
        <p>ADN, transcription, traduction, mutations et régulation de l'expression génétique.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {isDone(`svt_ch1_${tab.id}`) && tab.id !== 'cours' && (
              <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {activeTab === 'cours' && (
        <CourseContent cours={chapitre1.cours} flashcards={chapitre1.flashcards} />
      )}

      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Clique sur la carte pour voir la définition.</p>
          {isDone('svt_ch1_flashcards') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards — tu avances bien !</div>
          )}
          <Flashcard
            cards={chapitre1.flashcards}
            onComplete={() => markDone('svt_ch1_flashcards')}
          />
        </div>
      )}

      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte en cliquant sur les mots dans la banque.</p>
          {isDone('svt_ch1_trous') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>
          )}
          <TexteTrous
            data={chapitre1.texteTrous}
            onComplete={() => markDone('svt_ch1_trous')}
          />
        </div>
      )}

      {activeTab === 'assoc' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🔗 Associations</h2>
          <p style={{ marginBottom: '2rem' }}>Associe chaque terme à sa définition ou son processus correspondant.</p>
          {isDone('svt_ch1_assoc') && (
            <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà complété cet exercice !</div>
          )}
          <Associations
            pairs={chapitre1.associations}
            onComplete={() => markDone('svt_ch1_assoc')}
          />
        </div>
      )}
    </div>
  );
}
