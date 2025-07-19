import '@testing-library/jest-dom';

// Polyfill ResizeObserver for Radix UI components in tests
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-ignore
global.ResizeObserver = global.ResizeObserver || ResizeObserver;
