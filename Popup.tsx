import React, { useState, useEffect } from 'react';

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 1500); // Show popup after 1.5 seconds

        const hideTimer = setTimeout(() => {
            handleClose();
        }, 10000); // Auto-hide after 10 seconds

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    if (!isVisible) {
        return null;
    }

    const popupClass = isClosing ? 'animate-popup-out' : 'animate-popup-in';

    return (
        <div 
            className={`fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-[100] transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            aria-modal="true"
            role="dialog"
        >
            <div className={`bg-white dark:bg-brand-light rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform relative border-t-4 border-brand-purple ${popupClass}`}>
                <button 
                    onClick={handleClose} 
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    aria-label="Close launch offer popup"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-light mb-4 -mt-16 ring-4 ring-white dark:ring-brand-light">
                         {/* Lightning Icon */}
                         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Finally, The Wait is Over!</h3>
                    <h4 className="text-xl font-semibold text-brand-purple mb-4">CorporateSaathi.com is LIVE! 🎉</h4>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        Your all-in-one partner for <span className="font-semibold">Legal, Registrations, Licenses & Branding</span>.
                    </p>

                    <div className="bg-brand-purple/10 dark:bg-brand-purple/20 border-l-4 border-brand-purple p-4 rounded-r-lg mb-6">
                        <p className="font-bold text-lg text-brand-purple dark:text-brand-purple-light">
                            <span className="text-3xl">💥 All Services FREE!</span>
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">
                            (For a limited time, until 15th October 2025)
                        </p>
                    </div>

                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc-wXH0sXUKgkGTSBlt9_sHBMrIjPbzWJ937k74KQRiE4g-UA/viewform" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full inline-block bg-brand-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-purple-light transition-transform hover:scale-105"
                        onClick={handleClose}
                    >
                        Claim Your FREE Services Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Popup;