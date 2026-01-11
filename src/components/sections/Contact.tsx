import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Github, Linkedin, Mail } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, "Name required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message too short"),
    honeypot: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            console.log('Message sent:', data);
            setStatus('success');
            reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Have a project in mind or want to discuss modern web architecture?
                                I'm always open to new opportunities and interesting conversations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:khalidgirma3@gmail.com" className="flex items-center space-x-4 p-4 card hover:shadow-md transition-all group">
                                <div className="p-3 bg-indigo-50 text-accent-primary rounded-full group-hover:bg-accent-primary group-hover:text-white transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-text-primary">khalidgirma3@gmail.com</span>
                            </a>
                            <div className="flex space-x-4">
                                <a href="https://github.com/khalidGir" target="_blank" rel="noopener noreferrer" className="p-4 card hover:shadow-md hover:text-accent-primary transition-all">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/khalid-girma-5a864a2a0/" target="_blank" rel="noopener noreferrer" className="p-4 card hover:shadow-md hover:text-accent-primary transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="card p-8 bg-white shadow-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <input {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-text-primary">Name</label>
                                <input
                                    {...register('name')}
                                    placeholder="Your name"
                                    className={`w-full bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary transition-all`}
                                />
                                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-text-primary">Email</label>
                                <input
                                    {...register('email')}
                                    placeholder="your@email.com"
                                    className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary transition-all`}
                                />
                                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-text-primary">Message</label>
                                <textarea
                                    {...register('message')}
                                    rows={4}
                                    placeholder="How can I help you?"
                                    className={`w-full bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary transition-all resize-none`}
                                />
                                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                disabled={status === 'sending'}
                                className="w-full btn-primary disabled:opacity-70"
                            >
                                <AnimatePresence mode="wait">
                                    {status === 'sending' ? (
                                        <motion.div key="sending" className="flex items-center justify-center">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                            Sending...
                                        </motion.div>
                                    ) : status === 'success' ? (
                                        <motion.div key="success" className="flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Message Sent
                                        </motion.div>
                                    ) : (
                                        <motion.div key="idle" className="flex items-center justify-center">
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
