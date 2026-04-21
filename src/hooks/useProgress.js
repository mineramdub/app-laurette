import { useState, useCallback } from 'react';

const STORAGE_KEY = 'laure_bac_progress';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // silent
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress);

  const markDone = useCallback((key) => {
    setProgress(prev => {
      const next = { ...prev, [key]: true };
      saveProgress(next);
      return next;
    });
  }, []);

  const markUndone = useCallback((key) => {
    setProgress(prev => {
      const next = { ...prev };
      delete next[key];
      saveProgress(next);
      return next;
    });
  }, []);

  const isDone = useCallback((key) => !!progress[key], [progress]);

  const countDone = useCallback((keys) => keys.filter(k => progress[k]).length, [progress]);

  return { progress, markDone, markUndone, isDone, countDone };
}
