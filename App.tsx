import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Plans from './Plans';
import Process from './Process';
import WhyChooseUs from './WhyChooseUs';
import CustomerReviews from './CustomerReviews';
import TrustedBy from './TrustedBy';
import Blogs from './Blogs';
import Contact from './Contact';
import Footer from './Footer';
import Login from './Login';
import Form from './Form';
import Chatbot from './Chatbot';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [page, setPage] = useState('main'); // 'main', 'login', 'form'
    const [selectedPlan, setSelectedPlan] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
        setTheme(savedTheme);
    }, []);

    const applyTheme = (currentTheme) => {
        const htmlEl = document.documentElement;
        if (currentTheme === 'dark') {
            htmlEl.classList.add('dark');
        } else {
            htmlEl.classList.remove('dark');
        }
        localStorage.setItem('theme', currentTheme);
    };

    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };
    
    const showLoginPage = (plan = '') => {
        setSelectedPlan(plan);
        setPage('login');
        window.scrollTo(0, 0);
    };

    const handleLoginSuccess = () => {
        setPage('form');
        window.scrollTo(0, 0);
    };

    const handleFormSuccess = () => {
        setPage('main');
        window.scrollTo(0, 0);
    };

    const MainContent = () => (
        <>
            <Header theme={theme} onThemeToggle={handleThemeToggle} />
            <div id="main-content">
                <main>
                    <Hero />
                    <About />
                    <Plans onGetStarted={showLoginPage} />
                    <Process />
                    <WhyChooseUs />
                    <CustomerReviews />
                    <TrustedBy />
                    <Blogs />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );

    const renderPage = () => {
        switch (page) {
            case 'login':
                return <Login onLoginSuccess={handleLoginSuccess} />;
            case 'form':
                return <Form initialPlan={selectedPlan} onSubmitSuccess={handleFormSuccess} />;
            default:
                return <MainContent />;
        }
    };

    return (
        <>
            {renderPage()}
            <Chatbot />
        </>
    );
};

export default App;
