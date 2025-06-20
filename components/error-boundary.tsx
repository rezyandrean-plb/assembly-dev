"use client";

import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            className="flex items-center justify-center min-h-screen"
            data-oid="8dc5ln:"
          >
            <div className="text-center" data-oid="78sa8uc">
              <h2
                className="text-2xl font-bold text-gray-800 mb-4"
                data-oid="l55-y0y"
              >
                Something went wrong
              </h2>
              <p className="text-gray-600" data-oid="fbbmm0h">
                Please refresh the page to try again.
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
