import React, { useState } from 'react';

const Footer = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <footer id="footer" className="bg-brand-dark text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="space-y-10">
                    <div className="border-b border-slate-700 pb-10">
                        <h4 className="text-xl font-semibold text-white mb-6">Startup Registration</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4 text-sm">
                           <a href="#" className="hover:text-white">Private Limited Company</a>
                            <a href="#" className="hover:text-white">Public Limited Company</a>
                            <a href="#" className="hover:text-white">Limited Liability Partnership</a>
                            <a href="#" className="hover:text-white">One Person Company</a>
                            <a href="#" className="hover:text-white">Partnership Firm</a>
                            <a href="#" className="hover:text-white">Section 8 Company</a>
                            <a href="#" className="hover:text-white">Trust Registration</a>
                            <a href="#" className="hover:text-white">Producer Company</a>
                            <a href="#" className="hover:text-white">Indian Subsidiary</a>
                            <a href="#" className="hover:text-white">Proprietorship</a>
                            <a href="#" className="hover:text-white">UAE Company</a>
                            <a href="#" className="hover:text-white">Singapore Company</a>
                        </div>
                    </div>
                    <div className="border-b border-slate-700 pb-10">
                        <h4 className="text-xl font-semibold text-white mb-6">Intellectual Property (IP) Registration</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4 text-sm">
                            <a href="#" className="hover:text-white">Trademark Registration</a>
                            <a href="#" className="hover:text-white">Trademark Objection</a>
                            <a href="#" className="hover:text-white">Trademark Certificate</a>
                            <a href="#" className="hover:text-white">Trademark Transfer</a>
                            <a href="#" className="hover:text-white">Trademark Renewal</a>
                            <a href="#" className="hover:text-white">International Trademark</a>
                            <a href="#" className="hover:text-white">Logo Designing</a>
                            <a href="#" className="hover:text-white">Design Registration</a>
                            <a href="#" className="hover:text-white">Copyright Registration</a>
                            <a href="#" className="hover:text-white">Copyright Objection</a>
                            <a href="#" className="hover:text-white">Patent Registration</a>
                            <a href="#" className="hover:text-white">IP Notice</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-6">Goods & Services Tax</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4 text-sm">
                             <a href="#" className="hover:text-white">GST Registration</a>
                            <a href="#" className="hover:text-white">GST Return Filing</a>
                            <a href="#" className="hover:text-white">GST E-Invoicing Software</a>
                            <a href="#" className="hover:text-white">GST Notice</a>
                            <a href="#" className="hover:text-white">Income Tax E-Filing</a>
                            <a href="#" className="hover:text-white">Business Tax Filing</a>
                            <a href="#" className="hover:text-white">ITR Return Filing</a>
                            <a href="#" className="hover:text-white">Income Tax Notice</a>
                        </div>
                    </div>
                </div>

                <div className={`mt-10 space-y-10 ${showMore ? 'block' : 'hidden'}`}>
                    <div className="border-b border-slate-700 pb-10">
                        <h4 className="text-xl font-semibold text-white mb-6">License Registrations</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-4 text-sm">
                            <a href="#" className="hover:text-white">Startup India Registration</a>
                            <a href="#" className="hover:text-white">Udyam Registration</a>
                            <a href="#" className="hover:text-white">FSSAI Registration</a>
                            <a href="#" className="hover:text-white">FSSAI License</a>
                            <a href="#" className="hover:text-white">Import Export Code</a>
                            <a href="#" className="hover:text-white">Legal Entity Identifier Code</a>
                            <a href="#" className="hover:text-white">ISO Registration</a>
                            <a href="#" className="hover:text-white">Digital Signature Certificate</a>
                            <a href="#" className="hover:text-white">BIS Registration</a>
                            <a href="#" className="hover:text-white">Barcode Registration</a>
                            <a href="#" className="hover:text-white">Trade License</a>
                            <a href="#" className="hover:text-white">Drug License</a>
                            <a href="#" className="hover:text-white">ICEGATE Registration</a>
                            <a href="#" className="hover:text-white">PF Registration</a>
                            <a href="#" className="hover:text-white">ESI Registration</a>
                            <a href="#" className="hover:text-white">RCMC Registration</a>
                            <a href="#" className="hover:text-white">12A and 80G Registration</a>
                            <a href="#" className="hover:text-white">Certificate of Incumbency</a>
                            <a href="#" className="hover:text-white">Fire License</a>
                            <a href="#" className="hover:text-white">Darpan Registration</a>
                        </div>
                    </div>
                    {/* ... other hidden sections ... */}
                </div>

                <div className="text-center mt-12">
                    <button onClick={() => setShowMore(!showMore)} className="border border-slate-500 rounded-full px-8 py-2 text-sm font-semibold hover:bg-slate-700 hover:border-slate-700 transition-colors">
                        {showMore ? 'See Less' : 'See More'}
                    </button>
                </div>
                
                <div className="border-t border-slate-700 pt-6 mt-12">
                    <div className="flex flex-wrap justify-center items-center text-center gap-x-8 gap-y-4 mb-6">
                        <a href="#about" className="hover:text-white text-sm">About Us</a>
                        <a href="#" className="hover:text-white text-sm">Our Product</a>
                        <a href="#" className="hover:text-white text-sm">News</a>
                        <a href="#" className="hover:text-white text-sm">Blogs</a>
                        <a href="#" className="hover:text-white text-sm">Careers</a>
                        <a href="#" className="hover:text-white text-sm">Partner with Us</a>
                        <a href="footerpages/privacy policy.html" className="hover:text-white text-sm">Privacy Policy</a>
                        <a href="footerpages/terms and conditions.html" className="hover:text-white text-sm">Terms and Conditions</a>
                        <a href="footerpages/refund policy.html" className="hover:text-white text-sm">Refund Policy</a>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 mt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                     <p className="order-2 md:order-1 mt-4 md:mt-0">&copy; 2025 corporatesaathi</p>
                     <div className="order-1 md:order-2">
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">FOLLOW US ON SOCIAL MEDIA:</span>
                            <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-brand-purple transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.058 1.644.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667 0 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></a>
                            <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-brand-purple transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                            <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-brand-purple transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                            <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-brand-purple transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.506 2.506 0 0 1-1.768 1.768C18.254 19 12 19 12 19s-6.255 0-7.814-.418a2.506 2.506 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.506 2.506 0 0 1 1.768-1.768C5.745 5 12 5 12 5s6.255 0 7.812.418zM9.5 15.5l7-3.5-7-3.5v7z" clipRule="evenodd" /></svg></a>
                            <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-brand-purple transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.336 8.905H4.002v-8.59h2.671v8.59zM17.638 2H6.362A4.362 4.362 0 002 6.362v11.276A4.362 4.362 0 006.362 22h11.276A4.362 4.362 0 0022 17.638V6.362A4.362 4.362 0 0017.638 2z" clipRule="evenodd" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;