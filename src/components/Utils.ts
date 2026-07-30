export const KEYS = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
} as const;

export type Key = (typeof KEYS)[keyof typeof KEYS];
