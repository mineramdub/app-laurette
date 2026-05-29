import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Terminal, Clock, ChevronRight, Copy, Check, Lightbulb,
  ArrowLeft, Trophy, Play, Code2, Zap, Shield, Bug,
  AlertTriangle, ChevronDown, ChevronUp, RotateCcw,
  Eye, EyeOff, Skull, Radio, Lock,
  GitBranch, Key, Package, BookOpen
} from 'lucide-react'
import { GAMES } from './data/games.js'

/* ─── tiny helpers ─── */
const clsx = (...args) => args.filter(Boolean).join(' ')

function useCopy(text) {
  const [copied, setCopied] = useState(false)
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* ignore */ }
  }, [text])
  return [copied, copy]
}

/* ─── DESIGN TOKENS per difficulty ─── */
const ICONS = {
  'last-commit': Zap,
  'valgrind-nightmare': Bug,
  'sleeper-agent': Radio,
  'zero-day': Skull,
  'poisoned-commit': GitBranch,
  'broken-cipher': Key,
  'root-or-nothing': Shield,
  'rogue-container': Package,
}

/* ════════════════════════════════════════════
   ATOM: CodeBlock
   ════════════════════════════════════════════ */
function CodeBlock({ code, language = 'bash' }) {
  const [copied, copy] = useCopy(code)
  return (
    <div className="relative rounded-xl overflow-hidden border"
      style={{ background: '#070712', borderColor: 'rgba(255,255,255,0.07)' }}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>{language}</span>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={copy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all duration-200 mono text-xs"
          style={{
            background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.06)',
            color: copied ? '#10b981' : 'rgba(255,255,255,0.4)',
            border: `1px solid ${copied ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)'}`,
          }}>
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? 'Copié' : 'Copier'}
        </motion.button>
      </div>
      {/* Code */}
      <pre className="p-4 overflow-x-auto mono text-xs leading-relaxed"
        style={{ color: 'rgba(232,232,242,0.8)', tabSize: 2 }}>
        <code>{code.trim()}</code>
      </pre>
    </div>
  )
}

/* ════════════════════════════════════════════
   ATOM: HintSystem
   ════════════════════════════════════════════ */
function HintSystem({ hints }) {
  const [revealed, setRevealed] = useState(0)
  return (
    <div className="space-y-2">
      {hints.slice(0, revealed).map((hint, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 px-4 py-3 rounded-xl"
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}>
          <Lightbulb size={14} className="mt-0.5 shrink-0" style={{ color: '#f59e0b' }} />
          <span className="mono text-xs leading-relaxed" style={{ color: 'rgba(232,232,242,0.7)' }}>{hint}</span>
        </motion.div>
      ))}
      {revealed < hints.length && (
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setRevealed(r => r + 1)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl w-full transition-all duration-200 mono text-xs"
          style={{
            background: 'rgba(245,158,11,0.05)',
            border: '1px dashed rgba(245,158,11,0.2)',
            color: 'rgba(245,158,11,0.6)',
          }}>
          <Lightbulb size={12} />
          Indice {revealed + 1}/{hints.length}
        </motion.button>
      )}
      {revealed === hints.length && revealed > 0 && (
        <p className="mono text-xs text-center" style={{ color: 'rgba(255,255,255,0.2)' }}>
          — plus d'indices —
        </p>
      )}
    </div>
  )
}

/* ════════════════════════════════════════════
   ATOM: ConceptCard
   ════════════════════════════════════════════ */
function ConceptCard({ concept, accent }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl overflow-hidden transition-all duration-200"
      style={{ border: `1px solid ${open ? accent + '30' : 'rgba(255,255,255,0.06)'}`, background: open ? `${accent}07` : 'transparent' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left"
        style={{ cursor: 'pointer' }}>
        <BookOpen size={12} style={{ color: accent, flexShrink: 0 }} />
        <span className="mono text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {concept.name}
        </span>
        <span className="mono text-xs flex-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
          — {concept.summary}
        </span>
        {open
          ? <ChevronUp size={11} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
          : <ChevronDown size={11} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}>
            <pre className="px-4 pb-4 pt-0 mono text-xs leading-relaxed overflow-x-auto"
              style={{ color: 'rgba(232,232,242,0.55)', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
              {concept.content}
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ════════════════════════════════════════════
   ATOM: AnswerInput
   ════════════════════════════════════════════ */
function AnswerInput({ stage, accent, onCorrect }) {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('idle')
  const [tries, setTries] = useState(0)
  const textareaRef = useRef(null)

  // Normalize a single line: trim, lowercase, collapse spaces/tabs (NOT newlines)
  const normalizeLine = s => s.trim().toLowerCase().replace(/[ \t]+/g, ' ')

  const isMultiline = stage.answer.includes('\n') || stage.answerLabel?.includes('ligne')

  const autoGrow = (el) => {
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 360) + 'px'
  }

  const checkAnswer = () => {
    // Empty answer — only valid when stage explicitly allows it
    if (stage.acceptEmpty && value.trim() === '') {
      setStatus('correct')
      setTimeout(() => onCorrect(), 900)
      return
    }

    if (isMultiline) {
      // Split on newlines FIRST, then normalize each line independently
      const vLines = value.split('\n').map(normalizeLine).filter(Boolean)
      const eLines = stage.answer.split('\n').map(normalizeLine).filter(Boolean)
      // All expected lines must appear somewhere in the user's lines
      const allPresent = eLines.every(el =>
        vLines.some(vl => vl === el || vl.includes(el))
      )
      if (allPresent) {
        setStatus('correct')
        setTimeout(() => onCorrect(), 900)
      } else {
        setStatus('wrong')
        setTries(t => t + 1)
        setTimeout(() => setStatus('idle'), 1500)
      }
      return
    }

    // Single-line answer
    const v = normalizeLine(value)
    const expected = normalizeLine(stage.answer)
    if (v === expected) {
      setStatus('correct')
      setTimeout(() => onCorrect(), 900)
    } else {
      setStatus('wrong')
      setTries(t => t + 1)
      setTimeout(() => setStatus('idle'), 1500)
    }
  }

  const borderColor = status === 'correct'
    ? 'rgba(16,185,129,0.5)'
    : status === 'wrong'
    ? 'rgba(239,68,68,0.5)'
    : 'rgba(255,255,255,0.08)'

  const bgColor = status === 'correct'
    ? 'rgba(16,185,129,0.05)'
    : status === 'wrong'
    ? 'rgba(239,68,68,0.05)'
    : 'rgba(255,255,255,0.03)'

  return (
    <div className="space-y-3">
      <div>
        <label className="block mono text-xs mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
          {stage.answerLabel || 'Ta réponse'}
        </label>
        {isMultiline ? (
          <>
            <textarea
              ref={textareaRef}
              value={value}
              onChange={e => {
                setValue(e.target.value)
                setStatus('idle')
                autoGrow(e.target)
              }}
              onKeyDown={e => e.key === 'Enter' && e.metaKey && checkAnswer()}
              placeholder="Une réponse par ligne"
              enterKeyHint="enter"
              rows={5}
              className="w-full px-4 py-3 rounded-xl outline-none mono text-sm transition-all duration-200"
              style={{
                background: bgColor,
                border: `1px solid ${borderColor}`,
                color: 'var(--text)',
                resize: 'vertical',
                minHeight: '120px',
                maxHeight: '360px',
              }}
            />
            <p className="mono text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.18)' }}>
              Entrée = nouvelle ligne · bouton Valider pour soumettre
            </p>
          </>
        ) : (
          <input
            type="text"
            value={value}
            onChange={e => { setValue(e.target.value); setStatus('idle') }}
            onKeyDown={e => e.key === 'Enter' && checkAnswer()}
            placeholder="→"
            className="w-full px-4 py-3 rounded-xl outline-none mono text-sm transition-all duration-200"
            style={{
              background: bgColor,
              border: `1px solid ${borderColor}`,
              color: 'var(--text)',
            }}
          />
        )}
      </div>

      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={checkAnswer}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200"
          style={{
            background: status === 'correct'
              ? 'rgba(16,185,129,0.2)'
              : `${accent}22`,
            border: `1px solid ${status === 'correct' ? 'rgba(16,185,129,0.35)' : accent + '44'}`,
            color: status === 'correct' ? '#10b981' : accent,
          }}>
          {status === 'correct' ? (
            <><Check size={14} /> Correct !</>
          ) : status === 'wrong' ? (
            <><AlertTriangle size={14} /> Essaie encore</>
          ) : (
            <><ChevronRight size={14} /> Valider</>
          )}
        </motion.button>

        {tries >= 2 && (
          <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            {tries} tentatives — utilise les indices
          </span>
        )}
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   ATOM: ProgressDots
   ════════════════════════════════════════════ */
function ProgressDots({ total, current, accent, completed }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => {
        const done = completed.includes(i + 1)
        const active = i + 1 === current
        return (
          <motion.div
            key={i}
            initial={false}
            animate={{
              scale: active ? 1 : 0.85,
              opacity: done ? 1 : active ? 1 : 0.3,
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: active ? 20 : 8,
              height: 8,
              background: done ? accent : active ? accent : 'rgba(255,255,255,0.2)',
            }}
          />
        )
      })}
    </div>
  )
}

/* ════════════════════════════════════════════
   VIEW: HomeScreen
   ════════════════════════════════════════════ */
function HomeScreen({ onSelect }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-8 pt-10 pb-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg"
          style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)' }}>
          <Terminal size={16} style={{ color: '#8b5cf6' }} />
        </div>
        <span className="font-semibold tracking-tight text-sm" style={{ color: 'var(--text)' }}>
          Escape Terminal
        </span>
      </div>

      {/* Hero */}
      <div className="px-8 pt-12 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight leading-tight"
          style={{ color: 'var(--text)' }}>
          Hack. Trouve. Escape.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-base max-w-md leading-relaxed"
          style={{ color: 'var(--text-dim)' }}>
          Des escape games où chaque énigme se résout dans ton terminal — Shell, C, forensique système.
          Choisis ton créneau.
        </motion.p>
      </div>

      {/* Game cards */}
      <div className="px-8 pb-16 grid grid-cols-1 gap-4 max-w-2xl">
        {GAMES.map((game, i) => {
          const Icon = ICONS[game.id] || Terminal
          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              whileHover={{ scale: 1.012, y: -2 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect(game)}
              className="group relative cursor-pointer rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}>
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 20% 50%, ${game.glow}, transparent 70%)` }} />

              <div className="relative flex items-start gap-5">
                {/* Icon */}
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                  style={{
                    background: `${game.accent}18`,
                    border: `1px solid ${game.accent}30`,
                  }}>
                  <Icon size={20} style={{ color: game.accent }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h2 className="font-semibold text-base tracking-tight"
                      style={{ color: 'var(--text)' }}>{game.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--text-dim)' }}>{game.tagline}</p>

                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Duration badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mono text-xs font-medium"
                      style={{
                        background: `${game.accent}15`,
                        color: game.accent,
                        border: `1px solid ${game.accent}30`,
                      }}>
                      <Clock size={10} />
                      {game.duration}
                    </span>
                    {/* Genre badge */}
                    <span className="mono text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: 'rgba(255,255,255,0.35)',
                      }}>
                      {game.genre}
                    </span>
                    {/* Difficulty dots */}
                    <div className="flex items-center gap-1 ml-auto">
                      {Array.from({ length: 4 }).map((_, d) => (
                        <div key={d} className="w-1.5 h-1.5 rounded-full"
                          style={{ background: d < game.difficulty ? game.accent : 'rgba(255,255,255,0.1)' }} />
                      ))}
                    </div>
                  </div>
                </div>

                <ChevronRight size={16} className="shrink-0 mt-1 opacity-0 group-hover:opacity-40 transition-opacity duration-200"
                  style={{ color: 'var(--text)' }} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   VIEW: IntroScreen
   ════════════════════════════════════════════ */
function IntroScreen({ game, onStart }) {
  const Icon = ICONS[game.id] || Terminal
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < game.intro.length) {
      const t = setTimeout(() => setLineIndex(l => l + 1), 700)
      return () => clearTimeout(t)
    }
  }, [lineIndex, game.intro.length])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg space-y-8">

        {/* Game badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${game.accent}18`, border: `1px solid ${game.accent}30` }}>
            <Icon size={18} style={{ color: game.accent }} />
          </div>
          <div>
            <p className="mono text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {game.duration} · {game.genre}
            </p>
            <h1 className="font-bold text-xl tracking-tight">{game.title}</h1>
          </div>
        </div>

        {/* Story lines */}
        <div className="rounded-2xl p-6 space-y-4"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          {game.intro.map((line, i) => (
            <AnimatePresence key={i}>
              {i < lineIndex && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mono text-sm leading-relaxed"
                  style={{
                    color: i === game.intro.length - 1
                      ? 'var(--text)'
                      : 'var(--text-dim)'
                  }}>
                  {i < game.intro.length - 1 && (
                    <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: 10 }}>›</span>
                  )}
                  {line}
                </motion.p>
              )}
            </AnimatePresence>
          ))}
          {lineIndex < game.intro.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 mono"
              style={{ background: game.accent }}
            />
          )}
        </div>

        {/* Stage overview */}
        <div className="space-y-2">
          <p className="mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            {game.totalStages} stages à résoudre
          </p>
          <div className="flex gap-2">
            {game.stages.map((s, i) => (
              <div key={i} className="flex-1 rounded-lg py-2 px-1.5 text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                <p className="mono text-xs font-medium" style={{ color: game.accent }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mono text-xs mt-0.5 leading-tight" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  {s.title.split(' ').slice(0, 2).join(' ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: lineIndex >= game.intro.length ? 1 : 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-200"
          style={{
            background: `${game.accent}22`,
            border: `1px solid ${game.accent}44`,
            color: game.accent,
          }}>
          <Play size={15} fill="currentColor" />
          Commencer l'investigation
        </motion.button>
      </motion.div>
    </div>
  )
}

/* ════════════════════════════════════════════
   VIEW: StageView
   ════════════════════════════════════════════ */
function StageView({ game, stage, stageIndex, completedStages, onComplete, onBack }) {
  const [showSetup, setShowSetup] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [solved, setSolved] = useState(completedStages.includes(stage.id))
  const topRef = useRef(null)

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
    setSolved(completedStages.includes(stage.id))
    setShowExplanation(false)
  }, [stage.id, completedStages])

  const handleCorrect = () => {
    setSolved(true)
    setShowExplanation(true)
    setTimeout(() => onComplete(stage.id), 400)
  }

  const accent = game.accent

  return (
    <div className="min-h-screen" ref={topRef}>
      {/* Top bar */}
      <div className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between"
        style={{ background: 'rgba(8,8,15,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <button onClick={onBack}
          className="flex items-center gap-2 mono text-xs transition-opacity duration-200 hover:opacity-70"
          style={{ color: 'rgba(255,255,255,0.4)' }}>
          <ArrowLeft size={14} />
          {game.title}
        </button>

        <ProgressDots
          total={game.totalStages}
          current={stageIndex + 1}
          accent={accent}
          completed={completedStages}
        />

        <div className="flex items-center gap-1.5">
          <Clock size={12} style={{ color: 'rgba(255,255,255,0.2)' }} />
          <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>{game.duration}</span>
        </div>
      </div>

      {/* Stage content */}
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-7">

        {/* Stage number + title */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={stage.id}>
            <div className="flex items-center gap-2 mb-2">
              <span className="mono text-xs px-2.5 py-1 rounded-full"
                style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}>
                Stage {stageIndex + 1}/{game.totalStages}
              </span>
              {solved && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mono text-xs px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)' }}>
                  ✓ Résolu
                </motion.span>
              )}
            </div>
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              {stage.title}
            </h2>
          </motion.div>
        </div>

        {/* Narrative */}
        <div className="rounded-2xl p-5 space-y-2"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
          {stage.narrative.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              {para}
            </p>
          ))}
        </div>

        {/* Setup script */}
        {stage.setup && (
          <div>
            <button
              onClick={() => setShowSetup(s => !s)}
              className="flex items-center gap-2 mono text-xs mb-3 transition-opacity hover:opacity-70"
              style={{ color: 'rgba(255,255,255,0.35)' }}>
              <Terminal size={12} />
              Setup — lance ce script d'abord
              {showSetup ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
            <AnimatePresence>
              {showSetup && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}>
                  <CodeBlock code={stage.setup} language="bash" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Mission */}
        <div className="rounded-2xl p-5"
          style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: `${accent}20` }}>
              <Code2 size={13} style={{ color: accent }} />
            </div>
            <div>
              <p className="mono text-xs mb-2" style={{ color: accent, opacity: 0.7 }}>MISSION</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                {stage.task}
              </p>
            </div>
          </div>
        </div>

        {/* Tools */}
        {stage.tools && stage.tools.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>outils :</span>
            {stage.tools.map(tool => (
              <span key={tool} className="mono text-xs px-2 py-0.5 rounded"
                style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}>
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* Concepts / Cours rapides */}
        {stage.concepts && stage.concepts.length > 0 && (
          <div>
            <p className="mono text-xs mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>
              📚 Cours rapides
            </p>
            <div className="space-y-1.5">
              {stage.concepts.map((c, i) => (
                <ConceptCard key={i} concept={c} accent={accent} />
              ))}
            </div>
          </div>
        )}

        {/* Hints */}
        {!solved && (
          <div>
            <p className="mono text-xs mb-3" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Bloqué ?
            </p>
            <HintSystem hints={stage.hints} />
          </div>
        )}

        {/* Answer */}
        {!solved ? (
          <div className="rounded-2xl p-5"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <AnswerInput stage={stage} accent={accent} onCorrect={handleCorrect} />
          </div>
        ) : null}

        {/* Explanation — shown after solving */}
        <AnimatePresence>
          {(solved || showExplanation) && stage.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-5 space-y-2"
              style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
              <p className="mono text-xs" style={{ color: '#10b981', opacity: 0.7 }}>EXPLICATION</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                {stage.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   VIEW: WinScreen
   ════════════════════════════════════════════ */
function WinScreen({ game, onRestart, onHome }) {
  const Icon = ICONS[game.id] || Terminal
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="w-full max-w-md text-center space-y-8">

        {/* Trophy */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, -5, 5, 0] }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          className="mx-auto w-20 h-20 rounded-3xl flex items-center justify-center"
          style={{ background: `${game.accent}20`, border: `2px solid ${game.accent}40` }}>
          <Trophy size={36} style={{ color: game.accent }} />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mono text-sm mb-2"
            style={{ color: 'rgba(255,255,255,0.3)' }}>
            Investigation terminée
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold tracking-tight">
            {game.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-2 text-sm"
            style={{ color: 'var(--text-dim)' }}>
            {game.totalStages} stages résolus · {game.duration}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="rounded-2xl p-5"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            Tu as maîtrisé <strong style={{ color: 'var(--text)' }}>{game.genre}</strong>.
            Les techniques de ce scénario s'appliquent directement en environnement réel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-3">
          <button
            onClick={onHome}
            className="flex-1 py-3 rounded-2xl mono text-sm transition-all duration-200 hover:opacity-70"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'var(--text-dim)' }}>
            ← Accueil
          </button>
          <button
            onClick={onRestart}
            className="flex-1 py-3 rounded-2xl mono text-sm font-semibold transition-all duration-200"
            style={{
              background: `${game.accent}20`,
              border: `1px solid ${game.accent}40`,
              color: game.accent,
            }}>
            Rejouer
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ════════════════════════════════════════════
   ROOT: App
   ════════════════════════════════════════════ */
export default function App() {
  const [view, setView] = useState('home')       // home | intro | game | win
  const [selectedGame, setSelectedGame] = useState(null)
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [completedStages, setCompletedStages] = useState([])

  const handleSelectGame = (game) => {
    setSelectedGame(game)
    setCurrentStageIndex(0)
    setCompletedStages([])
    setView('intro')
  }

  const handleStartGame = () => setView('game')

  const handleStageComplete = (stageId) => {
    setCompletedStages(prev => {
      if (prev.includes(stageId)) return prev
      const next = [...prev, stageId]

      // Auto-advance after a short pause
      setTimeout(() => {
        const nextIdx = currentStageIndex + 1
        if (nextIdx < selectedGame.stages.length) {
          setCurrentStageIndex(nextIdx)
        } else {
          setView('win')
        }
      }, 1200)

      return next
    })
  }

  const handleBack = () => setView('intro')

  const handleRestart = () => {
    setCurrentStageIndex(0)
    setCompletedStages([])
    setView('intro')
  }

  const handleHome = () => {
    setSelectedGame(null)
    setView('home')
  }

  const pageVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
    exit:    { opacity: 0, y: -8, transition: { duration: 0.2 } },
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div key="home" {...pageVariants}>
            <HomeScreen onSelect={handleSelectGame} />
          </motion.div>
        )}

        {view === 'intro' && selectedGame && (
          <motion.div key="intro" {...pageVariants}>
            <IntroScreen game={selectedGame} onStart={handleStartGame} />
          </motion.div>
        )}

        {view === 'game' && selectedGame && (
          <motion.div key={`stage-${currentStageIndex}`} {...pageVariants}>
            <StageView
              game={selectedGame}
              stage={selectedGame.stages[currentStageIndex]}
              stageIndex={currentStageIndex}
              completedStages={completedStages}
              onComplete={handleStageComplete}
              onBack={handleBack}
            />
          </motion.div>
        )}

        {view === 'win' && selectedGame && (
          <motion.div key="win" {...pageVariants}>
            <WinScreen
              game={selectedGame}
              onRestart={handleRestart}
              onHome={handleHome}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
