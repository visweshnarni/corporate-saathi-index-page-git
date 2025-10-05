import React, { useState, useEffect, useRef } from 'react';

const stepsData = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 00.865-.501 48.17 48.17 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>,
        title: "Free Consultation",
        description: "Tell us about your business needs and we will guide you on the best path forward, ensuring you have a clear roadmap for your legal requirements."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25V9A2.25 2.25 0 0017.25 6.75h-5.25v-5.25H6.75A2.25 2.25 0 004.5 3.75v16.5A2.25 2.25 0 006.75 22.5h10.5a2.25 2.25 0 002.25-2.25v-2.25" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25h-5.25v-5.25" />
        </svg>,
        title: "Document Submission",
        description: "Easily upload all required documents through our secure and intuitive online portal. Our system ensures your data is safe and organized."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        title: "Processing & Filing",
        description: "Our team of experts will meticulously handle all the paperwork, registration, and filing processes with government agencies on your behalf."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>,
        title: "Business Launch",
        description: "Receive your official incorporation documents and licenses. You are now ready to launch your new venture and conquer the market!"
    }
];

const Process = () => {
    const [activeStep, setActiveStep] = useState(-1);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);
    const animationSpeed = 3000;

    const advanceStep = () => {
        setActiveStep(prev => (prev + 1) % stepsData.length);
    };

    const startAnimation = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        advanceStep();
        intervalRef.current = setInterval(advanceStep, animationSpeed);
    };

    const stopAnimation = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const handleStepClick = (index) => {
        setIsPaused(true);
        stopAnimation();
        setActiveStep(index);
    };

    const handleMouseLeave = () => {
        if (isPaused) {
            setIsPaused(false);
            startAnimation();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!intervalRef.current && !isPaused) {
                        startAnimation();
                    }
                } else {
                    stopAnimation();
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            stopAnimation();
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isPaused]);


    return (
        <section id="process" ref={sectionRef} onMouseLeave={handleMouseLeave} className="py-20 bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Simple Process</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">We have streamlined the entire process to be as simple and transparent as possible.</p>
                </div>

                <div className="max-w-4xl mx-auto mb-16 px-4">
                    <div className="flex items-start">
                        {stepsData.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className={`process-step flex-shrink-0 text-center relative w-14 ${index <= activeStep ? 'active' : ''}`} onClick={() => handleStepClick(index)}>
                                    <div className="process-step-circle w-14 h-14 rounded-full flex items-center justify-center relative z-10">
                                        {step.icon}
                                        <span className="absolute -top-2 -right-2 bg-brand-purple text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</span>
                                    </div>
                                </div>
                                {index < stepsData.length - 1 && (
                                    <div className="process-line flex-grow h-1 bg-slate-200 dark:bg-slate-700 mt-7 relative">
                                        <div className={`process-line-progress absolute h-full bg-brand-purple top-0 left-0 ${index < activeStep ? 'active' : ''}`}></div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {stepsData.map((step, index) => (
                        <div key={index} className={`process-card text-center ${index === activeStep ? 'active' : ''}`} onClick={() => handleStepClick(index)}>
                            <div className="process-card-content bg-white dark:bg-brand-light p-6 rounded-xl h-full border-2 border-transparent transition-all duration-300">
                                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
