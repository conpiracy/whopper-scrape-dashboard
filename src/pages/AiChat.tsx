import { Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dummyMessages = [
  {
    id: 1,
    role: "system",
    content: "Hello! I'm your AI assistant. I can help you analyze your Whop data."
  },
  {
    id: 2,
    role: "user",
    content: "What are the top performing communities?"
  },
  {
    id: 3,
    role: "system",
    content: "Based on the current data, the top performing communities are Alpha Trading Group with $25,000 in earnings, followed by Crypto Masterminds with $22,000 in earnings."
  }
];

const AiChat = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">AI Chat with Data</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Ask AI About Your Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4">
              {dummyMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-lg ${
                    message.role === "user" 
                      ? "bg-primary text-primary-foreground ml-12" 
                      : "bg-muted mr-12"
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask a question about your data..."
                className="flex-1 p-2 rounded-lg border"
                disabled
              />
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                disabled
              >
                Send
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AiChat;