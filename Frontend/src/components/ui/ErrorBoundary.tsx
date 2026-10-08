import { Component, type ReactNode } from "react";

// Se un chunk lazy non è più disponibile dopo un deploy, ricarica una volta.
const RELOAD_FLAG = "chunk-reload";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    try {
      if (sessionStorage.getItem(RELOAD_FLAG)) return;
      sessionStorage.setItem(RELOAD_FLAG, "1");
      window.location.reload();
    } catch {
      // storage non disponibile: resta il fallback con il pulsante
    }
  }

  render() {
    if (!this.state.failed) {
      return this.props.children;
    }

    return (
      <div className="section-pad mx-auto max-w-xl text-center">
        <h1 className="section-heading mt-3">Qualcosa è andato storto</h1>
        <p className="prose-body mt-4">
          Ricarica la pagina per continuare la navigazione.
        </p>
        <button
          type="button"
          className="btn-primary mt-6"
          onClick={() => window.location.reload()}
        >
          Ricarica
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
