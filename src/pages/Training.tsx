import { BookOpen } from "lucide-react";

const Training = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Training</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600">Learn the basics of our platform and how to maximize your earnings.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Advanced Techniques</h2>
            <p className="text-gray-600">Master advanced strategies for better performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;