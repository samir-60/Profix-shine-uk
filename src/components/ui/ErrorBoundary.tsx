"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-brand-lg border border-border bg-white p-8 text-center">
            <p className="text-text-secondary">
              Something went wrong loading this section. Please refresh the page.
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
