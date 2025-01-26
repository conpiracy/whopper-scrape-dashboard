export const formatPrompt = (text: string): string => {
  return `<|system|>You are a helpful AI assistant.<|user|>${text}<|assistant|>`;
};

export const cleanResponse = (text: string): string => {
  return text.replace(/<\|.*?\|>/g, '').trim();
};
