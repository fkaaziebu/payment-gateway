export function it(testDescription: string, options: any) {
  console.log(`${testDescription}: ${options()}`);
}

export function expect(response: string | number | boolean | null) {
  return {
    toBe: (value: string | number | boolean | null) =>
      response === value ? "test passed" : "test failed",
  };
}
