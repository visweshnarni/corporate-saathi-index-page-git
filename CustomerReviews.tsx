import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const reviews = [
    {
        name: 'Priya Sharma',
        title: 'Founder, TechSolutions Pvt. Ltd.',
        review: 'CorporateSaathi made our company incorporation seamless. Their team was incredibly responsive and handled everything with utmost professionalism. Highly recommended for new startups!',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Rohan Mehta',
        title: 'CEO, InnovateHub',
        review: 'The entire process, from GST registration to annual compliance, was handled flawlessly. Their platform is user-friendly, and the expert guidance was invaluable for our growth.',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
        name: 'Anjali Desai',
        title: 'Director, Creative Weaves',
        review: 'As a small business owner, legalities felt overwhelming. CorporateSaathi simplified everything. Their transparent pricing and dedicated support gave me peace of mind.',
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    },
    {
        name: 'Vikram Singh',
        title: 'Co-Founder, NutriFoods',
        review: "Fast, efficient, and reliable. We got our FSSAI license and trademark registration done in record time. It's the perfect partnership for any entrepreneur.",
        avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
];

const StarRating = () => (
    <div className="flex items-center text-yellow-400">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        ))}
    </div>
);

const CustomerReviews = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollAnimator animation="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What Our Clients Say</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">Real stories from entrepreneurs and business owners who trust CorporateSaathi to handle their legal needs.</p>
                    </ScrollAnimator>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {reviews.map((review, index) => (
                        <ScrollAnimator key={index} animation="fade-in-up" delay={`${index * 0.15}s`}>
                            <div className="bg-white dark:bg-brand-light p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                                <div className="flex-grow">
                                    <div className="flex items-center mb-4">
                                        <img className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-brand-purple/50" src={review.avatar} alt={`${review.name}'s review photo`} />
                                        <div>
                                            <h4 className="font-bold text-slate-800 dark:text-white">{review.name}</h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">{review.title}</p>
                                        </div>
                                    </div>
                                    <StarRating />
                                    <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm">"{review.review}"</p>
                                </div>
                            </div>
                        </ScrollAnimator>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;