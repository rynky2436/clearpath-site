import { useEffect } from 'react';

interface ChatWidgetProps {
  domainName: string;
  chatKey: string;
  primaryColor: string;
}

const ChatWidget = ({ 
  domainName = 'clearpathtech.3cx.us', 
  chatKey = 'clearpathtech', 
  primaryColor = '#0066CC' 
}: ChatWidgetProps) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://${domainName}/livechat/loader.js`;
    
    // Set up the widget settings
    // @ts-ignore
    window.tcx_widget_settings = {
      domain: domainName,
      key: chatKey,
      chatButtonColor: primaryColor,
      startChat: {
        name: 'ClearPath Tech Support',
        message: 'Welcome to ClearPath Tech Solutions! How can we help with your Maryland IT support needs today?'
      },
      fields: {
        headerText: 'Maryland IT Support Chat',
        thankyouText: 'Thank you for contacting our Maryland IT team. We\'ll be with you shortly.',
      },
      styles: {
        theme: 'light'
      },
      location: {
        showForm: true
      },
      colors: {
        bubbleBg: primaryColor,
        bubbleText: '#ffffff',
        buttonBg: primaryColor,
        headerBg: primaryColor
      }
    };

    // Add script to document
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, [domainName, chatKey, primaryColor]);

  return null; // This component doesn't render anything visible
};

export default ChatWidget;