import React, { useState } from "react";
import RenderServerNotice from "./RenderServerNotice";

const RenderServerNoticeExample = () => {
  const [showNotice, setShowNotice] = useState(true);

  const handleClose = () => {
    setShowNotice(false);
    console.log("Notice closed by user");
  };

  const resetNotice = () => {
    localStorage.removeItem('render-notice-seen');
    setShowNotice(true);
  };

  return (
    <div className="min-h-screen bg-[#0f1624] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Render Server Notice Examples</h1>
        
        <div className="space-y-6">
          {/* Example 1: Basic Usage */}
          <div className="bg-[#1a2332] rounded-xl p-6 border border-[#2a3441]">
            <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
            <p className="text-gray-300 mb-4">
              The component automatically shows when the page loads and remembers if the user has seen it before.
            </p>
            <RenderServerNotice onClose={handleClose} isVisible={showNotice} />
          </div>

          {/* Example 2: Manual Control */}
          <div className="bg-[#1a2332] rounded-xl p-6 border border-[#2a3441]">
            <h2 className="text-xl font-semibold mb-4">Manual Control</h2>
            <p className="text-gray-300 mb-4">
              You can manually control when the notice appears and handle the close event.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowNotice(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Show Notice
              </button>
              <button
                onClick={() => setShowNotice(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Hide Notice
              </button>
              <button
                onClick={resetNotice}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Reset (Show Again)
              </button>
            </div>
          </div>

          {/* Example 3: Custom Styling */}
          <div className="bg-[#1a2332] rounded-xl p-6 border border-[#2a3441]">
            <h2 className="text-xl font-semibold mb-4">Integration Tips</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• The notice appears at the top of the page with high z-index</li>
              <li>• It automatically remembers if users have seen it (localStorage)</li>
              <li>• Users can dismiss it permanently or temporarily</li>
              <li>• The notice explains Render's sleep behavior professionally</li>
              <li>• It includes a link to learn more about Render's free tier</li>
            </ul>
          </div>

          {/* Example 4: When to Use */}
          <div className="bg-[#1a2332] rounded-xl p-6 border border-[#2a3441]">
            <h2 className="text-xl font-semibold mb-4">When to Use This Component</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-800/20 p-4 rounded-lg border border-green-400/20">
                <h3 className="font-semibold text-green-300 mb-2">✅ Perfect For:</h3>
                <ul className="text-green-200 text-sm space-y-1">
                  <li>• Portfolio websites</li>
                  <li>• Personal projects</li>
                  <li>• Demo applications</li>
                  <li>• Any app using Render free tier</li>
                </ul>
              </div>
              <div className="bg-blue-800/20 p-4 rounded-lg border border-blue-400/20">
                <h3 className="font-semibold text-blue-300 mb-2">🎯 Benefits:</h3>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• Sets user expectations</li>
                  <li>• Prevents confusion about delays</li>
                  <li>• Professional user experience</li>
                  <li>• Educates users about Render</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderServerNoticeExample;
