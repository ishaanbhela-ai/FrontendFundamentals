import type { Note } from "../types/note";

export class Store {
    private notes: Note[] = [];
    private listeners: (() => void)[] = [];

    constructor() {
        this.notes = JSON.parse(localStorage.getItem("notes-app") || "[]");
    }

    getAllNotes() {
        return this.notes;
    }

    addNote(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) {
        const newNote: Note = {
            ...note,
            id: crypto.randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.notes.push(newNote);
        this.saveToLocalStorage();
        this.notifyListeners();
    }

    removeNote(id: string) {
        this.notes = this.notes.filter((note) => note.id !== id);
        this.saveToLocalStorage();
        this.notifyListeners();
    }

    private saveToLocalStorage() {
        localStorage.setItem("notes-app", JSON.stringify(this.notes));
    }

    private notifyListeners() {
        this.listeners.forEach((listener) => listener());
    }

    subscribe(listener: () => void) {
        this.listeners.push(listener);
    }

    getNote(id: string) {
        return this.notes.find((note) => note.id === id);
    }
}

export const store = new Store();