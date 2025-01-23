import { Link } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Resources</h1>
        </div>
        <div className="grid gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Documentation</h2>
            <p className="text-gray-600">Access comprehensive guides and documentation.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Tools</h2>
            <p className="text-gray-600">Essential tools to help you succeed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;