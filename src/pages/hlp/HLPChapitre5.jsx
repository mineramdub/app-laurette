import { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapitre5HLP } from '../../data/hlpData';
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

export default function HLPChapitre5() {
  const [activeTab, setActiveTab] = useState('cours');
  const { isDone, markDone } = useProgress();

  return (
    <div>
      <Link to="/hlp" className="back-link">← Retour aux chapitres HLP</Link>
      <div className="page-header">
        <div className="subject-tag" style={{ background: 'var(--sage-light)', color: 'var(--sage-dark)' }}>HLP · Chapitre 5</div>
        <h1>{chapitre5HLP.titre}</h1>
        <p>Rousseau, Kant, Durkheim, Bourdieu, transmission des savoirs et construction du sujet.</p>
      </div>
      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button key={tab.id} className={`exercise-tab${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>
            {tab.label}
            {isDone(`hlp_ch5_${tab.id}`) && tab.id !== 'cours' && <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem' }}>✓</span>}
          </button>
        ))}
      </div>
      {activeTab === 'cours' && (
        <CourseContent cours={chapitre5HLP.cours} flashcards={chapitre5HLP.flashcards}
          onMarkRead={() => markDone('hlp_ch5_cours')} isRead={isDone('hlp_ch5_cours')} />
      )}
      {activeTab === 'flashcards' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>🃏 Flashcards</h2>
          <p style={{ marginBottom: '2rem' }}>Swipe à droite si tu sais, à gauche si tu veux revoir.</p>
          {isDone('hlp_ch5_flashcards') && <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà parcouru ces flashcards !</div>}
          <Flashcard cards={chapitre5HLP.flashcards} onComplete={() => markDone('hlp_ch5_flashcards')} />
        </div>
      )}
      {activeTab === 'quiz' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>❓ Quiz guidé</h2>
          <p style={{ marginBottom: '2rem' }}>Réponds aux questions pour tester tes connaissances.</p>
          {isDone('hlp_ch5_quiz') && <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà complété ce quiz !</div>}
          <QuizQuestion questions={chapitre5HLP.quiz} onComplete={() => markDone('hlp_ch5_quiz')} />
        </div>
      )}
      {activeTab === 'trous' && (
        <div className="card">
          <h2 style={{ marginBottom: '0.5rem' }}>✏️ Texte à trous</h2>
          <p style={{ marginBottom: '2rem' }}>Complète le texte en cliquant sur les mots dans la banque.</p>
          {isDone('hlp_ch5_trous') && <div className="encouragement" style={{ marginBottom: '1.5rem' }}>🌿 Tu as déjà réussi cet exercice !</div>}
          <TexteTrous data={chapitre5HLP.texteTrous} onComplete={() => markDone('hlp_ch5_trous')} />
        </div>
      )}
    </div>
  );
}
