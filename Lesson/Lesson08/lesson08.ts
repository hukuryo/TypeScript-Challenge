type MyAwaited<T> = T extends Promise<infer R> ? R : never;
type ExampleType = Promise<string>;

type Result2 = MyAwaited<ExampleType>; // string
