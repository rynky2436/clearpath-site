import { Phone } from "lucide-react";

export default function ContactButton() {
  return (
    <div 
      onClick={() => window.location.href = "tel:+13017488360"}
      className="fixed bottom-6 right-6 z-50 bg-[#2196f3] text-white px-4 py-3 rounded-full shadow-md cursor-pointer font-bold flex items-center gap-2 hover:bg-blue-600 transition-colors"
    >
      <Phone size={20} />
      <span>Call IT Support: 301.748.8360</span>
    </div>
  );
}