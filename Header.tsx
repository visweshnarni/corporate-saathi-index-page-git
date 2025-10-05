import React, { useState, useEffect, useRef } from 'react';

const Header = ({ theme, onThemeToggle }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSchemesOpen, setSchemesOpen] = useState(false);
    const [isServicesOpen, setServicesOpen] = useState(false);
    const [isHeaderShadow, setHeaderShadow] = useState(false);

    const schemesRef = useRef(null);
    const servicesRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
            setHeaderShadow(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (schemesRef.current && !schemesRef.current.contains(event.target)) {
                setSchemesOpen(false);
            }
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleSchemes = () => {
        setServicesOpen(false);
        setSchemesOpen(prev => !prev);
    };
    
    const toggleServices = () => {
        setSchemesOpen(false);
        setServicesOpen(prev => !prev);
    };

    return (
        <header id="header" className={`bg-white dark:bg-brand-dark/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderShadow ? 'shadow-md' : ''}`}>
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-brand-purple">CorporateSaathi</a>
                <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <a href="#" className="hover:text-brand-purple transition-colors">Home</a>
                    <a href="#about" className="hover:text-brand-purple transition-colors">About Us</a>
                    <a href="#plans" className="hover:text-brand-purple transition-colors">Plans</a>
                    <a href="#process" className="hover:text-brand-purple transition-colors">Process</a>
                    <div className="relative" ref={schemesRef}>
                        <button onClick={toggleSchemes} className="hover:text-brand-purple transition-colors flex items-center">
                            Schemes <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className={`absolute left-0 mt-2 w-48 bg-white dark:bg-brand-light rounded-md shadow-lg transition-opacity duration-300 ${isSchemesOpen ? 'block' : 'hidden'}`}>
                            <a href="#" className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Student Founder</a>
                            <a href="#" className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Women Founder</a>
                        </div>
                    </div>
                     <div className="relative" ref={servicesRef}>
                        <button onClick={toggleServices} className="hover:text-brand-purple transition-colors flex items-center">
                            Services <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className={`absolute left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-brand-light rounded-md shadow-lg transition-opacity duration-300 w-max ${isServicesOpen ? 'block' : 'hidden'}`}>
                            <div className="p-4 grid grid-cols-4 gap-x-8">
                                <div className="space-y-2">
                                    <h3 className="font-bold text-brand-purple mb-2">Business Registration</h3>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Company Registration</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">International Business Setup</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Licenses & Registrations</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Web Development</a>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-brand-purple mb-2">Tax & Compliance</h3>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">GST and Other Indirect Tax</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Changes in Pvt Ltd Company</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Changes in LLP</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Mandatory Annual Filings</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Labour Compliance</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Accounting & Tax</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Convert Your Business</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">GST</a>
                                </div>
                                 <div className="space-y-2">
                                    <h3 className="font-bold text-brand-purple mb-2">Trademark & IP</h3>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Trademark</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Copyright</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Patent</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Infringement</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Design Registration</a>
                                </div>
                                 <div className="space-y-2">
                                    <h3 className="font-bold text-brand-purple mb-2">Documentation</h3>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Free Legal Documents</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Business Contracts</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Personal & Family</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Real Estate</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">Notices</a>
                                    <a href="#" className="block px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md">HR Policies</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="tel:+911234567890" className="hidden sm:flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-brand-purple">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.76a11.05 11.05 0 005.466 5.465l.761-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V3z"></path></svg>
                        <span className="text-sm font-medium">+91 123 456 7890</span>
                    </a>
                     <button onClick={onThemeToggle} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                        <svg className={`w-5 h-5 text-slate-600 ${theme === 'dark' ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        <svg className={`w-5 h-5 text-slate-300 ${theme === 'light' ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"></path></svg>
                    </button>
                    <a href="#" className="hidden sm:inline-block bg-brand-purple text-white px-4 py-2 rounded-lg hover:bg-brand-purple-light transition-colors text-sm font-semibold">Login</a>
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
            <div className={`lg:hidden px-6 pb-4 space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                 <a href="#" className="block py-2 hover:text-brand-purple">Home</a>
                 <a href="#about" className="block py-2 hover:text-brand-purple">About Us</a>
                 <a href="#plans" className="block py-2 hover:text-brand-purple">Plans</a>
                 <a href="#process" className="block py-2 hover:text-brand-purple">Process</a>
                 <a href="#" className="block py-2 hover:text-brand-purple">Schemes</a>
                 <a href="#" className="block py-2 hover:text-brand-purple">Services</a>
                 <a href="#contact" className="block py-2 hover:text-brand-purple">Contact</a>
                 <a href="#" className="block mt-2 bg-brand-purple text-white text-center px-4 py-2 rounded-md hover:bg-brand-purple-light">Login</a>
            </div>
        </header>
    );
};

export default Header;
