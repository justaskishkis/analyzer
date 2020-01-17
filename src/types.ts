export type Nullable<T> = { [P in keyof T]: T[P] | null };

export type OptionalProps<T> = { [P in keyof T]?: T[P] };

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
