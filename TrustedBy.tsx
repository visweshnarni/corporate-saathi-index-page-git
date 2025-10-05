import React from 'react';
import ScrollAnimator from './ScrollAnimator';

const TrustedBy = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <ScrollAnimator animation="fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16">Trusted by The Best</h2>
                </ScrollAnimator>
            </div>

            <ScrollAnimator animation="fade-in-up" delay="0.2s">
                <h3 className="text-center text-xl font-semibold text-slate-700 dark:text-slate-300 mb-10">Our Trusted Partners</h3>
                <div className="marquee">
                    <div className="marquee-content">
                        <img src="https://logo.clearbit.com/razorpay.com" alt="Razorpay" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/jodo.in" alt="Jodo" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/zoho.com" alt="Zoho" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/stripe.com" alt="Stripe" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/slack.com" alt="Slack" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/notion.so" alt="Notion" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/razorpay.com" alt="Razorpay" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/jodo.in" alt="Jodo" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/zoho.com" alt="Zoho" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/stripe.com" alt="Stripe" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/slack.com" alt="Slack" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/notion.so" alt="Notion" className="marquee-logo"/>
                    </div>
                </div>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-in-up" delay="0.4s">
                <div className="mt-20">
                    <h3 className="text-center text-xl font-semibold text-slate-700 dark:text-slate-300 mb-10">Featured On</h3>
                    <div className="marquee">
                        <div className="marquee-content reverse">
                            <img src="https://logo.clearbit.com/startupindia.gov.in" alt="#StartupIndia" className="marquee-logo" />
                            <img src="https://logo.clearbit.com/startup-insider.com" alt="StartupInsider" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/yourstory.com" alt="StartupByDoc (represented by YourStory)" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/inc42.com" alt="Inc42" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/economictimes.indiatimes.com" alt="The Economic Times" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/forbesindia.com" alt="Forbes India" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/startupindia.gov.in" alt="#StartupIndia" className="marquee-logo" />
                            <img src="https://logo.clearbit.com/startup-insider.com" alt="StartupInsider" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/yourstory.com" alt="StartupByDoc (represented by YourStory)" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/inc42.com" alt="Inc42" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/economictimes.indiatimes.com" alt="The Economic Times" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/forbesindia.com" alt="Forbes India" className="marquee-logo"/>
                        </div>
                    </div>
                </div>
            </ScrollAnimator>
        </section>
    );
};

export default TrustedBy;
