export function it(testDescription: string, options: any) {
  console.log(`${testDescription}: ${options()}`);
}

export function expect(response: string[] | string | number | boolean | null) {
  return {
    toBe: (value: string | number | boolean | null) =>
      response === value ? "test passed" : "test failed",
    toEqual: (arrayValue: string[]) => {
      // @ts-ignore
      for (let i = 0; i < response?.length; i++) {
        // @ts-ignore
        if (arrayValue[i] !== response[i]) {
          return "test failed";
        }
      }
      return "test passed";
    },
  };
}
