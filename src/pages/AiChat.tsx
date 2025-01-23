import { Brain } from "lucide-react";

const AiChat = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">AI Chat with Data</h1>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Ask AI About Your Data</h2>
            <p className="text-gray-600">Get insights and analysis from our AI assistant.</p>
          </div>
          <div className="border rounded-lg p-4">
            <p className="text-gray-500 text-center">Chat interface coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiChat;