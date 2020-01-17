// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#rest-elements-in-tuple-types
export const tuple = <T extends string[]>(...args: T) => args;
