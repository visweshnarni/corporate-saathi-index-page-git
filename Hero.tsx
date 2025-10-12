import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden hero-bg">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <ScrollAnimator animation="fade-in-up">
                        <div className="mb-4 flex items-center justify-center space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-sm p-2 px-4 rounded-full mx-auto max-w-max">
                             <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#00B67A" xmlns="http://www.w3.org/2000/svg"><path d="M22.56,9.25,16.4,8.62l-2.6-5.32a.79.79,0,0,0-1.4,0L9.8,8.62,3.64,9.25a.79.79,0,0,0-.44,1.35l4.5,4.38-1.06,6.17a.79.79,0,0,0,1.15.83L12,19.23l5.52,2.9a.79.79,0,0,0,1.15-.83l-1.06-6.17,4.5-4.38A.79.79,0,0,0,22.56,9.25Z"/></svg>
                            <div className="hidden sm:flex -space-x-2 overflow-hidden">
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white/30" src="https://randomuser.me/api/portraits/men/60.jpg" alt="User review photo" />
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white/30" src="https://randomuser.me/api/portraits/women/60.jpg" alt="User review photo" />
                                <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white/30" src="https://randomuser.me/api/portraits/men/61.jpg" alt="User review photo" />
                            </div>
                            <div className="flex items-center text-yellow-400">
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="grad_4_8">
                                            <stop offset="80%" stopColor="#FBBF24" />
                                            <stop offset="80%" stopColor="rgba(255, 255, 255, 0.4)" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#grad_4_8)"/>
                                </svg>
                            </div>
                            <p className="text-white text-sm font-medium">Rated 4.8/5 on Google & Trustpilot</p>
                        </div>
                    </ScrollAnimator>
                    <ScrollAnimator animation="fade-in-up" delay="0.2s">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Your Trusted Partner For Startup Legalities.</h1>
                    </ScrollAnimator>
                    <ScrollAnimator animation="fade-in-up" delay="0.4s">
                        <p className="text-lg text-slate-300 mb-8">Get fast, reliable, and customizable online business solutions & legal services with free expert consultation.</p>
                    </ScrollAnimator>
                    <ScrollAnimator animation="fade-in-up" delay="0.6s">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf8OwmZd3IxB4N8IuJDhWSTW428IDoZ2dyux7R17C4SX_7iPQ/viewform" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-purple-light transition-transform hover:scale-105">Claim Your Free Consultation</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-wXH0sXUKgkGTSBlt9_sHBMrIjPbzWJ937k74KQRiE4g-UA/viewform" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-transform hover:scale-105">Claim Launch Offer</a>
                        </div>
                    </ScrollAnimator>
                </div>
            </div>
        </section>
    );
};

export default Hero;