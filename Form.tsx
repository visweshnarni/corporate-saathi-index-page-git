import React, { useState, useEffect } from 'react';

const Form = ({ initialPlan, onSubmitSuccess }) => {
    const [selectionType, setSelectionType] = useState('plan');
    const [selectedPlan, setSelectedPlan] = useState(initialPlan || '');

    useEffect(() => {
        // If an initial plan is passed, ensure the 'plan' radio is checked.
        if (initialPlan) {
            setSelectionType('plan');
        }
    }, [initialPlan]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Form Submitted:', data);
        alert('Thank you! Your details have been submitted.');
        onSubmitSuccess();
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-brand-dark">
            <div className="w-full max-w-2xl bg-white dark:bg-brand-light p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Tell Us About Your Business</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8">Please fill out the details below to proceed.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                            <input type="text" id="full-name" required className="mt-1 form-input" />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Mobile No.</label>
                            <input type="tel" id="mobile" required className="mt-1 form-input" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email-id" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email ID</label>
                        <input type="email" id="email-id" required className="mt-1 form-input" />
                    </div>
                     <div>
                        <label htmlFor="business-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Business Name <span className="text-slate-400">(Optional)</span></label>
                        <input type="text" id="business-name" className="mt-1 form-input" />
                    </div>

                    <fieldset>
                        <legend className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Selection</legend>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input type="radio" name="selection-type" value="plan" className="form-radio" checked={selectionType === 'plan'} onChange={() => setSelectionType('plan')} />
                                <span className="ml-2 text-sm">Plan</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="selection-type" value="service" className="form-radio" checked={selectionType === 'service'} onChange={() => setSelectionType('service')} />
                                <span className="ml-2 text-sm">Service</span>
                            </label>
                        </div>
                    </fieldset>

                    {selectionType === 'plan' && (
                        <div id="plan-options">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Choose a Plan</label>
                            <div className="space-y-2">
                                 <label className="block p-3 rounded-md border border-slate-300 dark:border-slate-600 has-[:checked]:border-brand-purple has-[:checked]:ring-1 has-[:checked]:ring-brand-purple">
                                    <input type="radio" name="plan" value="Startup Plan" className="hidden" defaultChecked={selectedPlan === 'Startup Plan'} />
                                    <span className="font-semibold text-slate-800 dark:text-slate-200">Startup Plan</span>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">For new founders</p>
                                </label>
                                 <label className="block p-3 rounded-md border border-slate-300 dark:border-slate-600 has-[:checked]:border-brand-purple has-[:checked]:ring-1 has-[:checked]:ring-brand-purple">
                                    <input type="radio" name="plan" value="Business Plan" className="hidden" defaultChecked={selectedPlan === 'Business Plan'} />
                                     <span className="font-semibold text-slate-800 dark:text-slate-200">Business Plan</span>
                                     <p className="text-sm text-slate-500 dark:text-slate-400">For growing businesses</p>
                                </label>
                                 <label className="block p-3 rounded-md border border-slate-300 dark:border-slate-600 has-[:checked]:border-brand-purple has-[:checked]:ring-1 has-[:checked]:ring-brand-purple">
                                    <input type="radio" name="plan" value="Enterprise Plan" className="hidden" defaultChecked={selectedPlan === 'Enterprise Plan'} />
                                     <span className="font-semibold text-slate-800 dark:text-slate-200">Enterprise Plan</span>
                                     <p className="text-sm text-slate-500 dark:text-slate-400">For scaling companies</p>
                                </label>
                            </div>
                        </div>
                    )}

                    {selectionType === 'service' && (
                        <div id="service-options">
                            <label htmlFor="service-search" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Search for a Service</label>
                            <input list="service-list" id="service-search" name="service-search" className="mt-1 form-input" />
                             <datalist id="service-list">
                                <option value="Company Registration" />
                                <option value="International Business Setup" />
                                <option value="GST" />
                                <option value="Trademark" />
                                <option value="HR Policies" />
                             </datalist>
                        </div>
                    )}

                    <div>
                        <label htmlFor="state" className="block text-sm font-medium text-slate-700 dark:text-slate-300">State</label>
                        <select id="state" name="state" required className="mt-1 form-input">
                            <option value="" disabled>Select your state</option>
                             {/* Add all states */}
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Karnataka">Karnataka</option>
                             <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="w-full bg-brand-purple text-white py-3 rounded-lg font-semibold hover:bg-brand-purple-light transition-colors">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Form;
