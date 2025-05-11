import { useState } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{text: string, isUser: boolean}>>([
    { text: 'Welcome to ClearPath Tech Solutions! How can we help with your Maryland IT support needs today?', isUser: false },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message to chat
      setChatHistory(prev => [...prev, { text: message, isUser: true }]);
      setMessage('');
      
      // Simulate response after a brief delay
      setTimeout(() => {
        setChatHistory(prev => [
          ...prev, 
          { 
            text: 'Thanks for reaching out! Our Maryland IT support team will get back to you shortly. You can call us at (410) 555-0123 for immediate assistance.',
            isUser: false 
          }
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg flex items-center justify-center"
            >
              <MessageCircle size={24} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-200"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Maryland IT Support Chat</h3>
                <p className="text-xs text-white/80">ClearPath Tech Solutions</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-primary/80"
              >
                <X size={18} />
              </Button>
            </div>
            
            {/* Chat Messages */}
            <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-3 bg-gray-50">
              {chatHistory.map((msg, index) => (
                <div 
                  key={index}
                  className={`${
                    msg.isUser 
                      ? 'ml-auto bg-primary text-white' 
                      : 'mr-auto bg-white border border-gray-200 text-gray-800'
                  } max-w-[80%] rounded-lg p-3 text-sm shadow-sm`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            
            {/* Input Area */}
            <div className="p-3 border-t border-gray-200 bg-white flex items-center">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 border-gray-300 focus:border-primary"
              />
              <Button 
                onClick={handleSendMessage}
                className="ml-2 bg-primary hover:bg-primary/90 text-white"
                size="icon"
              >
                <Send size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}