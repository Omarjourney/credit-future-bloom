import '@testing-library/jest-dom';

// Polyfill ResizeObserver for Radix UI components in tests
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error - polyfill for test environment
global.ResizeObserver = global.ResizeObserver || ResizeObserver;
