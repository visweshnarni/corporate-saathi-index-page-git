import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const Blogs = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Latest Blogs</h2>
                     <a href="#" className="border border-slate-300 dark:border-slate-600 rounded-full px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800">View All</a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ScrollAnimator animation="fade-in-up" className="group">
                        <div>
                            <div className="overflow-hidden rounded-xl mb-4">
                               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="Professionals in a business meeting discussing company equity" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                            </div>
                            <p className="text-sm text-slate-500 mb-2">September 13, 2025</p>
                            <h3 className="font-bold text-lg mb-2"><a href="#" className="hover:text-brand-purple">What is an ESOP for Private Limited Companies?</a></h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">An Employee Stock Option Plan (ESOP) in India allows employees of Pvt. Ltd. Companies to buy shares at a fixed...</p>
                        </div>
                    </ScrollAnimator>
                    <ScrollAnimator animation="fade-in-up" delay="0.2s" className="group">
                        <div>
                            <div className="overflow-hidden rounded-xl mb-4">
                               <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2940&auto=format&fit=crop" alt="Modern desk setup representing a virtual office" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                            </div>
                            <p className="text-sm text-slate-500 mb-2">September 12, 2025</p>
                            <h3 className="font-bold text-lg mb-2"><a href="#" className="hover:text-brand-purple">How Much Does a Virtual Office Cost in India?</a></h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">In the business world, a professional address is crucial for credibility, but a traditional office comes with a huge...</p>
                        </div>
                    </ScrollAnimator>
                    <ScrollAnimator animation="fade-in-up" delay="0.4s" className="group">
                        <div>
                            <div className="overflow-hidden rounded-xl mb-4">
                               <img src="https://images.unsplash.com/photo-1560518883-ce09059ee41F?q=80&w=2874&auto=format&fit=crop" alt="People signing official documents for company registration" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                            </div>
                            <p className="text-sm text-slate-500 mb-2">September 12, 2025</p>
                            <h3 className="font-bold text-lg mb-2"><a href="#" className="hover:text-brand-purple">What are the Fees of Registering a Private Ltd Company in India?</a></h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">For startups and entrepreneurs, understanding the costs and fees associated with registering a Private...</p>
                        </div>
                    </ScrollAnimator>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
