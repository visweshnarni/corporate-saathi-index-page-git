import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const About = () => {
    return (
        <section id="about" className="pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollAnimator animation="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About CorporateSaathi</h2>
                    </ScrollAnimator>
                    <ScrollAnimator animation="fade-in-up" delay="0.2s">
                        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-3xl mx-auto">CorporateSaathi is your all-in-one partner for corporate, legal, and business compliance services. We help entrepreneurs, startups, and enterprises manage registrations, licenses, tax filings, and government schemes with ease. Our mission is to simplify business processes so you can focus on what matters most growth and innovation. With a team of experts and a tech-driven approach, we’re transforming how businesses handle compliance making it transparent, accessible, and stress-free.</p>
                    </ScrollAnimator>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <ScrollAnimator animation="fade-in-up">
                        <div className="bg-white dark:bg-brand-light p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-brand-purple/10 text-brand-purple p-3 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400">To become India’s most trusted digital platform for corporate and legal services, empowering every business from startup to enterprise to grow without barriers.</p>
                        </div>
                    </ScrollAnimator>
                    <ScrollAnimator animation="fade-in-up" delay="0.2s">
                        <div className="bg-white dark:bg-brand-light p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 h-full">
                           <div className="flex items-center gap-4 mb-4">
                                <div className="bg-brand-purple/10 text-brand-purple p-3 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                            </div>
                            <ul className="space-y-3 text-slate-500 dark:text-slate-400">
                                <li className="flex items-start"><svg className="w-5 h-5 text-brand-purple mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span>To simplify legal and corporate processes through technology and expert guidance.</span></li>
                                <li className="flex items-start"><svg className="w-5 h-5 text-brand-purple mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span>To help businesses stay compliant and focus on innovation.</span></li>
                                <li className="flex items-start"><svg className="w-5 h-5 text-brand-purple mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span>To build long-term relationships based on trust, transparency, and efficiency.</span></li>
                            </ul>
                        </div>
                    </ScrollAnimator>
                    <ScrollAnimator animation="fade-in-up" delay="0.4s">
                        <div className="bg-white dark:bg-brand-light p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-brand-purple/10 text-brand-purple p-3 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Core Values</h3>
                            </div>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-brand-purple mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m0-4l-4 4-4-4"></path></svg>
                                    <div><strong>Integrity:</strong> We uphold honesty and transparency in every service we provide.</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-brand-purple mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <div><strong>Reliability:</strong> We deliver accurate, timely, and dependable support to our clients.</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-brand-purple mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    <div><strong>Innovation:</strong> We use technology to make business management smarter and simpler.</div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-brand-purple mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    <div><strong>Customer-Centricity:</strong> Our clients’ growth and satisfaction are at the heart of everything we do.</div>
                                </li>
                            </ul>
                        </div>
                    </ScrollAnimator>
                </div>

                <div className="text-center mt-20">
                    <ScrollAnimator animation="fade-in-up">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-12">Meet the Team</h3>
                    </ScrollAnimator>
                    <div className="flex flex-wrap justify-center gap-10">
                        <ScrollAnimator animation="fade-in-up" className="w-56">
                            <div className="text-center">
                                <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" src="https://randomuser.me/api/portraits/men/11.jpg" alt="Team member photo" />
                                <h4 className="text-xl font-bold">John Doe</h4>
                                <p className="text-brand-purple">CEO & Co-Founder</p>
                            </div>
                        </ScrollAnimator>
                        <ScrollAnimator animation="fade-in-up" delay="0.2s" className="w-56">
                            <div className="text-center">
                                <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Team member photo" />
                                <h4 className="text-xl font-bold">Jane Smith</h4>
                                <p className="text-brand-purple">COO & Co-Founder</p>
                            </div>
                        </ScrollAnimator>
                        <ScrollAnimator animation="fade-in-up" delay="0.4s" className="w-56">
                            <div className="text-center">
                                <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg" src="https://randomuser.me/api/portraits/men/14.jpg" alt="Team member photo" />
                                <h4 className="text-xl font-bold">Sam Wilson</h4>
                                <p className="text-brand-purple">Head of Legal</p>
                            </div>
                        </ScrollAnimator>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
