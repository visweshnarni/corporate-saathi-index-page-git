import React from 'react';

const Login = ({ onLoginSuccess }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a successful login
        onLoginSuccess();
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-brand-dark">
            <div className="w-full max-w-md bg-white dark:bg-brand-light p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">Welcome Back!</h2>
                <p className="text-center text-slate-500 dark:text-slate-400 mb-8">Please login to continue.</p>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email address</label>
                            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-brand-dark border border-slate-300 dark:border-slate-600 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                            <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-brand-dark border border-slate-300 dark:border-slate-600 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-purple focus:border-brand-purple" />
                        </div>
                        <button type="submit" className="w-full bg-brand-purple text-white py-3 rounded-lg font-semibold hover:bg-brand-purple-light transition-colors">Login</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
