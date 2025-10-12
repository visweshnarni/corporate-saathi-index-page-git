import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-slate-100 dark:bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Why Choose CorporateSaathi?</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">See how we stack up against the old way of doing things. We're built for modern businesses.</p>
                </div>

                <ScrollAnimator animation="fade-in-up">
                    <div className="max-w-4xl mx-auto bg-white dark:bg-brand-dark rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center gap-3 mb-6">
                                    <a href="#" className="text-xl font-bold text-brand-purple">CorporateSaathi</a>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white">All-in-one pricing</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">A single package includes everything you need—no hidden charges or surprise fees.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white">Personalized assistance</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">A dedicated expert guides you at every step, providing tailored advice for your business.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white">End-to-end Service</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">From document collection to final registration and beyond, we handle it all for you.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white">Simplified process</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">Easy-to-follow steps and clear communication for a transparent and stress-free experience.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 md:border-l border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-6">
                                    <h3 className="text-xl font-bold text-slate-600 dark:text-slate-300">Others</h3>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white">Pay for each task</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">Separate charges for every single task add up quickly, leading to unpredictable costs.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white">No single point of contact</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">Constantly dealing with different people causes delays, miscommunication, and confusion.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white">Limited service scope</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">Only basic tasks are covered; extra services cost significantly more or are unavailable.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white">Unclear instructions</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">Poor guidance and complex jargon lead to errors, frustration, and slower processing.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollAnimator>
                
                <ScrollAnimator animation="fade-in-up">
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-12">Official Authorizations & Recognitions</h3>
                        <div className="flex flex-wrap items-start justify-center gap-y-10 gap-x-6">
                            <div className="text-center">
                                <div className="bg-white p-3 rounded-full w-32 h-32 flex items-center justify-center transition duration-300 shadow-md hover:shadow-xl hover:scale-105">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/ISO_9001-2015.svg" alt="ISO Certified" className="h-auto w-24 object-contain"/>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">ISO 9001:2015</p>
                            </div>
                             <div className="text-center">
                                <div className="bg-white p-3 rounded-full w-32 h-32 flex items-center justify-center transition duration-300 shadow-md hover:shadow-xl hover:scale-105">
                                    <img src="https://banner2.cleanpng.com/20180810/lpl/500460e06e895fc9fc17e8ad3c05413e.webp" alt="FSSAI" className="h-auto w-24 object-contain"/>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">FSSAI Licensed</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white p-3 rounded-full w-32 h-32 flex items-center justify-center transition duration-300 shadow-md hover:shadow-xl hover:scale-105">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/MSME_logo_%28colour%29.svg" alt="MSME" className="h-auto w-20 object-contain"/>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">MSME Registered</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white p-3 rounded-full w-32 h-32 flex items-center justify-center transition duration-300 shadow-md hover:shadow-xl hover:scale-105">
                                    <img src="https://ipr.icegate.gov.in/IPR/html5/assets/img/demo/ipr.png" alt="Intellectual Property India" className="h-auto w-24 object-contain"/>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">IP India Partner</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white p-3 rounded-full w-32 h-32 flex items-center justify-center transition duration-300 shadow-md hover:shadow-xl hover:scale-105">
                                    <img src="https://logo.clearbit.com/startupindia.gov.in" alt="Startup India" className="h-auto w-24 object-contain"/>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">Startup India Recognized</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white p-3 rounded-full w-32 h-32 flex items-center justify-center transition duration-300 shadow-md hover:shadow-xl hover:scale-105">
                                    <img src="https://seeklogo.com/images/A/aatmanirbhar-bharat-abhiyan-logo-339A325853-seeklogo.com.png" alt="Atmanirbhar Bharat" className="h-auto w-28 object-contain"/>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">Atmanirbhar Bharat</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white p-3 rounded-full w-32 h-32 flex items-center justify-center transition duration-300 shadow-md hover:shadow-xl hover:scale-105">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Make_in_India_logo.svg/240px-Make_in_India_logo.svg.png" alt="Make in India" className="h-auto w-24 object-contain"/>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">Make in India</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimator>
            </div>
        </section>
    );
};

export default WhyChooseUs;