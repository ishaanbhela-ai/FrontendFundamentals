// src/components/NoteItem.ts
import type { Note } from '../types/note';
export function NoteItem(note: Note): HTMLElement {
    const article = document.createElement('article');
    article.classList.add('note-item');

    // Format date
    const dateStr = new Date(note.createdAt).toLocaleDateString();
    article.innerHTML = `
    <h3>${escapeHtml(note.title)}</h3>
    <small>${dateStr}</small>
    <p>${escapeHtml(note.content.substring(0, 50))}...</p> 
  `;
    article.addEventListener('click', () => {
        alert(`Showing details for: ${note.title}\n\n${note.content}`);
    });
    return article;
}
// Helper to prevent XSS
function escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}