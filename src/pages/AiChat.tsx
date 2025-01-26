import { MainNav } from "@/components/MainNav";
import { Brain, Youtube, Instagram, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import { LlamaModel } from '../components/llama/LlamaModel';
import { formatPrompt, cleanResponse } from '../utils/llama';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';

const chatBots = [
  {
    id: "youtube",
    name: "YouTube Assistant",
    icon: Youtube,
    description: "Optimize your YouTube content and strategy",
    placeholder: "Ask about YouTube optimization...",
  },
  {
    id: "instagram",
    name: "Instagram Assistant",
    icon: Instagram,
    description: "Grow your Instagram presence",
    placeholder: "Ask about Instagram growth...",
  },
  {
    id: "tiktok",
    name: "TikTok Assistant",
    icon: MessageSquare,
    description: "Master TikTok content creation",
    placeholder: "Ask about TikTok strategies...",
  },
];

const dummyMessages = [
  {
    id: 1,
    role: "system",
    content: "Hello! I'm your AI assistant. How can I help you today?"
  },
  {
    id: 2,
    role: "user",
    content: "What are some trending topics on YouTube right now?"
  },
  {
    id: 3,
    role: "system",
    content: "Based on current trends, short-form content, AI tutorials, and lifestyle vlogs are performing well. Would you like specific strategies for any of these niches?"
  }
];

const AiChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setResponse('');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <MainNav />
        
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-[#9b87f5]" />
          <h1 className="text-4xl font-bold">AI Chat Assistant</h1>
        </div>

        <Card className="bg-[#1A1F2C] border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Choose Your Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="youtube" className="space-y-6">
              <TabsList className="bg-[#0a0a0a] border-gray-800">
                {chatBots.map((bot) => (
                  <TabsTrigger
                    key={bot.id}
                    value={bot.id}
                    className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
                  >
                    <bot.icon className="w-4 h-4 mr-2" />
                    {bot.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {chatBots.map((bot) => (
                <TabsContent key={bot.id} value={bot.id}>
                  <div className="space-y-4">
                    <div className="space-y-4 mb-4">
                      {dummyMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`p-4 rounded-lg ${
                            message.role === "user"
                              ? "bg-[#9b87f5] text-white ml-12"
                              : "bg-[#1A1F2C] mr-12"
                          }`}
                        >
                          {message.content}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Textarea 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={bot.placeholder}
                        className="flex-1 p-2 rounded-lg border border-gray-800 bg-[#0a0a0a] text-white"
                      />
                      <Button 
                        onClick={handleGenerate}
                        disabled={isGenerating || !input.trim()}
                        className="px-4 py-2 bg-[#9b87f5] text-white rounded-lg hover:bg-[#7E69AB] transition-colors"
                      >
                        Send
                      </Button>
                    </div>
                    {isGenerating && (
                      <LlamaModel 
                        prompt={formatPrompt(input)}
                        onResult={(text) => {
                          setResponse(cleanResponse(text));
                          setIsGenerating(false);
                        }}
                      />
                    )}
                    {response && (
                      <div className="mt-4 p-4 bg-gray-100 rounded">
                        <h2 className="font-semibold mb-2">Response:</h2>
                        <p>{response}</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AiChat;