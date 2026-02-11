// src/components/NoteList.ts
import type { Note } from '../types/note';
import { NoteItem } from './NoteItem';
export function NoteList(notes: Note[]): HTMLElement {
  const container = document.createElement('div');
  container.classList.add('note-list');
  if (notes.length === 0) {
    container.innerHTML = '<p>No notes yet. Create one!</p>';
    return container;
  }
  notes.forEach(note => {
    container.appendChild(NoteItem(note));
  });
  return container;
}