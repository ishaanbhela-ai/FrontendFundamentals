// src/main.ts
import './style.css';
import { Router } from './router/router';
import { HomeView } from './views/home';
import { CreateNoteView } from './views/CreateNote';
const app = document.querySelector<HTMLDivElement>('#app')!;
// Initialize Router
export const router = new Router(app);
// Define Routes
router.addRoute('/', HomeView);
router.addRoute('/create', CreateNoteView);
// Initial Render
router.render();