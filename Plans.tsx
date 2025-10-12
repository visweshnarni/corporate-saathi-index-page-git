import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const Plans = ({ onGetStarted }) => {
    const plans = [
        {
            name: 'Startup Plan',
            description: 'For new founders',
            price: '₹999',
            priceSuffix: '+ Govt Fees',
            features: [
                'Company Incorporation',
                'PAN / TAN Registration',
                'Digital Signature Certificate',
                'Annual Compliances',
                'Any time free customer support',
            ],
            isRecommended: false,
            delay: '0s',
        },
        {
            name: 'Business Plan',
            description: 'For growing businesses',
            price: '₹4999',
            priceSuffix: '+ Govt Fee',
            features: [
                'All in Startup Plan',
                'Udyam Registration',
                'GST Registration & Returns',
                'Income Tax (Compliance & Return)',
                'Business Welcome Kit',
            ],
            isRecommended: true,
            delay: '0.2s',
        },
        {
            name: 'Enterprise Plan',
            description: 'For scaling companies',
            price: '₹9999',
            priceSuffix: '+ Govt Fee',
            features: [
                'All in Business Plan',
                'Trademark Registration',
                'FSSAI License',
                'Shareholders Certificate',
                'Company Letter Head',
                'Company Stamp',
                'Dedicated Account Manager',
                'Premium Welcome Kit',
            ],
            isRecommended: false,
            delay: '0.4s',
        },
    ];

    return (
        <section id="plans" className="pt-10 pb-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Pick your perfect plan</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">Launch your business in minutes with Corporatesaathi. Choose the plan that fits your needs.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map(plan => (
                        <ScrollAnimator key={plan.name} animation="fade-in-up" delay={plan.delay}>
                            <div className={`relative bg-white dark:bg-brand-light p-8 rounded-xl shadow-lg border transition-transform hover:-translate-y-2 h-full flex flex-col ${plan.isRecommended ? 'border-2 border-brand-purple' : 'border-slate-200 dark:border-slate-700'}`}>
                                {plan.isRecommended && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase whitespace-nowrap">Recommended by CorporateSaathi</div>
                                )}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold">{plan.name}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mb-6">{plan.description}</p>
                                    <p className="text-4xl font-bold mb-6">{plan.price} <span className="text-base font-normal text-slate-500">{plan.priceSuffix}</span></p>
                                    <ul className="space-y-3 text-slate-600 dark:text-slate-300 mb-8">
                                        {plan.features.map(feature => (
                                            <li key={feature} className="flex items-center">
                                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button onClick={() => onGetStarted(plan.name)} className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${plan.isRecommended ? 'bg-brand-purple text-white hover:bg-brand-purple-light' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'}`}>Get Started</button>
                            </div>
                        </ScrollAnimator>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;