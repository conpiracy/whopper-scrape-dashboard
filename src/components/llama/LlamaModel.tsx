import { pipeline, env } from '@huggingface/transformers';
import { useState, useEffect } from 'react';

interface LlamaModelProps {
  onResult: (text: string) => void;
  prompt: string;
}

export const LlamaModel = ({ onResult, prompt }: LlamaModelProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initModel = async () => {
      try {
        env.backends.onnx.wasm.wasmPaths = 'onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX';
        const generator = await pipeline('text-generation', 'onnx-community/DeepSeek-R1-Distill-Qwen-1.5B-ONNX');
        const result = await generator(prompt, {
          max_new_tokens: 100,
          temperature: 0.7,
        });
        onResult(result[0].generated_text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load model');
      } finally {
        setIsLoading(false);
      }
    };

    initModel();
  }, [prompt, onResult]);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (isLoading) return <div className="animate-pulse">Loading model...</div>;
  return null;
};
