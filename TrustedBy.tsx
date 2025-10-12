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
                        <img src="https://logo.clearbit.com/zoho.com" alt="Zoho" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/freshworks.com" alt="Freshworks" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/razorpay.com" alt="Razorpay" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/icicibank.com" alt="ICICI Bank" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/paytm.com" alt="Paytm" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/wordpress.com" alt="Wordpress" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/zoho.com" alt="Zoho" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/freshworks.com" alt="Freshworks" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/razorpay.com" alt="Razorpay" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/icicibank.com" alt="ICICI Bank" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/paytm.com" alt="Paytm" className="marquee-logo"/>
                        <img src="https://logo.clearbit.com/wordpress.com" alt="Wordpress" className="marquee-logo"/>
                    </div>
                </div>
            </ScrollAnimator>

            <ScrollAnimator animation="fade-in-up" delay="0.4s">
                <div className="mt-20">
                    <h3 className="text-center text-xl font-semibold text-slate-700 dark:text-slate-300 mb-10">Featured On</h3>
                    <div className="marquee">
                        <div className="marquee-content reverse">
                            <img src="https://logo.clearbit.com/startupbydoc.com" alt="Startup by Doc" className="marquee-logo" />
                            <img src="https://logo.clearbit.com/yourstory.com" alt="YourStory" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/startupindia.gov.in" alt="Startup India" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/yoast.com" alt="Yoast News" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/news29.tv" alt="News 29 TV" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/thenewsroom.com" alt="The News Room" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/theinfluencerstory.com" alt="The Influencers Story" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/businessofceo.com" alt="Business of CEO" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/startupbydoc.com" alt="Startup by Doc" className="marquee-logo" />
                            <img src="https://logo.clearbit.com/yourstory.com" alt="YourStory" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/startupindia.gov.in" alt="Startup India" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/yoast.com" alt="Yoast News" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/news29.tv" alt="News 29 TV" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/thenewsroom.com" alt="The News Room" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/theinfluencerstory.com" alt="The Influencers Story" className="marquee-logo"/>
                            <img src="https://logo.clearbit.com/businessofceo.com" alt="Business of CEO" className="marquee-logo"/>
                        </div>
                    </div>
                </div>
            </ScrollAnimator>
        </section>
    );
};

export default TrustedBy;