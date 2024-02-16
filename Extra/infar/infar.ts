type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function sampleFunction(a: number, b: number): string {
    return `${a + b}`;
}

type SampleFunctionReturnType = ReturnTypeOf<typeof sampleFunction>;