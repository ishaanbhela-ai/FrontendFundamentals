

export class Router {
    private routes: Record<string, () => HTMLElement> = {};
    private appContainer: HTMLElement;
    private static instance: Router;

    constructor(appContainer: HTMLElement) {
        this.appContainer = appContainer;
        Router.instance = this;

        // Handle back/forward browser buttons
        window.addEventListener('popstate', () => {
            this.render();
        });
    }

    addRoute(path: string, viewComponent: () => HTMLElement) {
        this.routes[path] = viewComponent;
    }

    navigateTo(path: string) {
        window.history.pushState({}, '', path);
        this.render();
    }

    static navigateTo(path: string) {
        if (Router.instance) {
            Router.instance.navigateTo(path);
        } else {
            console.error("Router instance not initialized");
        }
    }

    render() {
        const path = window.location.pathname;
        const viewForRoute = this.routes[path] || this.routes['/'];

        this.appContainer.innerHTML = ''; // Clear current view
        this.appContainer.appendChild(viewForRoute());
    }
}