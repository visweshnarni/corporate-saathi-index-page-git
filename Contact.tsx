import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Contact Form Submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
    };

    return (
        <section id="contact" className="py-20 bg-slate-100 dark:bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl mx-auto">Have a question or need a custom quote? We'd love to hear from you. Reach out and we'll get back to you shortly.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-brand-dark p-8 space-y-8">
                         <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                            <p className="text-slate-300">Fill up the form and our Team will get back to you within 24 hours.</p>
                         </div>
                         <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-brand-purple/20 text-brand-purple-light p-3 rounded-full">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <a href="tel:+9102269622654" className="text-slate-300 hover:text-white transition-colors">+91 022 6962 2654</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                 <div className="bg-brand-purple/20 text-brand-purple-light p-3 rounded-full">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <a href="mailto:support@corporatesaathi.com" className="text-slate-300 hover:text-white transition-colors">support@corporatesaathi.com</a>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                 <div className="bg-brand-purple/20 text-brand-purple-light p-3 rounded-full">
                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Address</h4>
                                    <p className="text-slate-300">Floor No. 3, CorporateSaathi HQ, Near Peninsula Corporate Park, Lower Parel, Mumbai - 400...</p>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="bg-white dark:bg-brand-dark p-8">
                        <form id="contact-form" className="space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                                <input type="text" id="contact-name" name="name" required placeholder="John Doe" className="contact-form-input" />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Email</label>
                                <input type="email" id="contact-email" name="email" required placeholder="john.doe@example.com" className="contact-form-input" />
                            </div>
                             <div>
                                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                                <input type="text" id="contact-subject" name="subject" required placeholder="Regarding startup registration" className="contact-form-input" />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                                <textarea id="contact-message" name="message" required rows={3} placeholder="I'd like to inquire about..." className="contact-form-input resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-purple text-white py-3 rounded-lg font-semibold hover:bg-brand-purple-light transition-colors">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;