import { store } from '../states/Store';
import { NoteList } from '../components/NoteList';
import { Router } from '../router/router'; // Import router singleton from main
export function HomeView(): HTMLElement {
    const container = document.createElement('div');
    container.classList.add('page', 'home-page');
    const header = document.createElement('header');
    header.innerHTML = `<h1>My Notes</h1>`;

    const createBtn = document.createElement('button');
    createBtn.innerText = 'Create New Note';
    createBtn.onclick = () => Router.navigateTo('/create');

    header.appendChild(createBtn);
    container.appendChild(header);
    // Render List
    const listContainer = document.createElement('div');

    // Initial render
    listContainer.appendChild(NoteList(store.getAllNotes()));
    container.appendChild(listContainer);
    return container;
}