import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Github, Linkedin, Mail } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, "Identification required (min 2 chars)"),
    email: z.string().email("Invalid communication channel (email)"),
    message: z.string().min(10, "Transmission too brief (min 10 chars)"),
    honeypot: z.string().max(0).optional(), // Simple bot protection
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
            console.log('Secure transmission received:', data);
            setStatus('success');
            reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-status-warning font-mono text-sm mb-2">04_secure_comms</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Establish Connection</h3>
                        <p className="text-text-muted leading-relaxed">
                            Open to architectural discussions, product inquiries, or engineering partnerships.
                            Standard response latency: {'<'} 24 hours.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href="mailto:khalidgirma3@gmail.com" className="flex items-center space-x-4 p-4 terminal-panel hover:border-accent-cyan/30 group">
                            <Mail className="w-5 h-5 text-accent-cyan" />
                            <span className="font-mono text-sm text-text-muted group-hover:text-text-primary transition-colors">khalidgirma3@gmail.com</span>
                        </a>
                        <div className="flex space-x-4">
                            <a href="https://github.com/khalidGir" target="_blank" rel="noopener noreferrer" className="p-4 terminal-panel hover:text-accent-cyan transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/khalid-girma-5a864a2a0/" target="_blank" rel="noopener noreferrer" className="p-4 terminal-panel hover:text-accent-cyan transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="terminal-panel p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <input {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

                        <div className="space-y-2">
                            <label className="block font-mono text-xs text-text-muted uppercase tracking-widest">Comm_Identifier</label>
                            <input
                                {...register('name')}
                                placeholder="Ex: John Doe"
                                className={`w-full bg-bg-primary border ${errors.name ? 'border-status-warning/50' : 'border-text-muted/10'} rounded-md p-3 text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors`}
                            />
                            {errors.name && <p className="text-[10px] text-status-warning font-mono mt-1">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="block font-mono text-xs text-text-muted uppercase tracking-widest">Channel_Endpoint</label>
                            <input
                                {...register('email')}
                                placeholder="Ex: user@endpoint.io"
                                className={`w-full bg-bg-primary border ${errors.email ? 'border-status-warning/50' : 'border-text-muted/10'} rounded-md p-3 text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors`}
                            />
                            {errors.email && <p className="text-[10px] text-status-warning font-mono mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="block font-mono text-xs text-text-muted uppercase tracking-widest">Transmission_Buffer</label>
                            <textarea
                                {...register('message')}
                                rows={4}
                                placeholder="Initialize message stream..."
                                className={`w-full bg-bg-primary border ${errors.message ? 'border-status-warning/50' : 'border-text-muted/10'} rounded-md p-3 text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none`}
                            />
                            {errors.message && <p className="text-[10px] text-status-warning font-mono mt-1">{errors.message.message}</p>}
                        </div>

                        <button
                            disabled={status === 'sending'}
                            className="w-full group relative px-8 py-3 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan rounded-md overflow-hidden hover:bg-accent-cyan/20 transition-all font-mono disabled:opacity-50"
                        >
                            <AnimatePresence mode="wait">
                                {status === 'sending' ? (
                                    <motion.div key="sending" className="flex items-center justify-center">
                                        <div className="w-4 h-4 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin mr-2" />
                                        Transmitting...
                                    </motion.div>
                                ) : status === 'success' ? (
                                    <motion.div key="success" className="flex items-center justify-center text-status-success">
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        Received
                                    </motion.div>
                                ) : (
                                    <motion.div key="idle" className="flex items-center justify-center">
                                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Execute Send
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
