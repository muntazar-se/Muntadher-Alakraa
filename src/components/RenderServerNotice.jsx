import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiServer, FiX } from "react-icons/fi";

const RenderServerNotice = ({ onClose, isVisible = true }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    onClose && onClose();
  };



  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[1000] max-w-md w-full mx-4"
      >
        <div className="bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-sm border border-blue-400/20 rounded-xl shadow-lg p-4 text-white">
          {/* Compact Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <motion.div
                className="p-1.5 bg-blue-500/20 rounded-full"
                animate={{ 
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiServer className="w-4 h-4 text-blue-300" />
              </motion.div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  ⚡ Performance Notice
                </h3>
              </div>
            </div>
            
            <motion.button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX className="w-4 h-4 text-gray-300 hover:text-white" />
            </motion.button>
          </div>

          {/* Compact Content */}
          <div className="space-y-2 mb-3">
            <p className="text-xs text-blue-100 leading-relaxed mb-2">
              <span className="font-semibold text-blue-300">Server is waking up...</span> 
              This is normal for Render's free tier - servers sleep after 15 minutes of inactivity.
            </p>
            <p className="text-xs text-yellow-200 leading-relaxed">
              <span className="font-semibold">Please wait 15-20 seconds</span> for the server to fully wake up. 
              You'll see your portfolio data once it's ready.
            </p>
          </div>

          {/* Auto-dismiss timer */}
          <div className="flex justify-center">
            <motion.button
              onClick={handleDismiss}
              className="text-xs text-gray-300 hover:text-white transition-colors duration-200 underline"
              whileHover={{ scale: 1.05 }}
            >
              Dismiss
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RenderServerNotice;
