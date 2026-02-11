// src/views/CreateNote.ts
import { store } from '../states/Store';
import { Router } from '../router/router';
export function CreateNoteView(): HTMLElement {
    const container = document.createElement('div');
    container.classList.add('page', 'create-page');
    container.innerHTML = `
    <h1>Create New Note</h1>
    <form id="create-note-form">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea id="content" name="content" required></textarea>
      </div>
      <div class="actions">
        <button type="button" id="cancel-btn">Cancel</button>
        <button type="submit">Save Note</button>
      </div>
    </form>
  `;
    // Attach Event Listeners
    const form = container.querySelector('#create-note-form') as HTMLFormElement;
    const cancelBtn = container.querySelector('#cancel-btn') as HTMLButtonElement;
    cancelBtn.onclick = () => {
        Router.navigateTo('/');
    };
    form.onsubmit = (e) => {
        e.preventDefault();

        // Read state from form inputs
        const formData = new FormData(form);
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        if (title && content) {
            store.addNote({ title, content });
            Router.navigateTo('/'); // Navigate back to Index
        }
    };
    return container;
}