
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button immediately or after a small delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="https://wa.me/5511947944777"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group animate-in fade-in slide-in-from-bottom-8"
            aria-label="Contato via WhatsApp"
        >
            <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-75 group-hover:opacity-100 duration-1000"></div>
            <MessageCircle size={32} className="relative z-10 fill-white" />
        </a>
    );
};
