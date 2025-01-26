
declare module '@huggingface/transformers' {
  export const pipeline: (task: string, model: string) => Promise<any>;
  export const env: {
    backends: {
      onnx: {
        wasm: {
          wasmPaths: string;
        };
      };
    };
  };
}