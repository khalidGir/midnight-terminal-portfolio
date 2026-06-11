import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import Section from '../shared/Section';

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

    const t = testimonials[current];

    return (
        <Section id="testimonials" className="bg-zinc-900/50">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    What People <span className="gradient-text">Say</span>
                </h2>
                <p className="mt-4 text-zinc-400">
                    Feedback from clients and collaborators.
                </p>
            </div>

            <div className="relative mx-auto max-w-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="card p-8 md:p-12 text-center"
                    >
                        <Quote className="mx-auto mb-6 h-8 w-8 text-amber-400/40" />
                        <blockquote className="mb-8 text-lg leading-relaxed text-zinc-300 md:text-xl">
                            &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-700">
                                <div className="flex h-full w-full items-center justify-center text-lg font-bold text-zinc-400">
                                    {t.name.charAt(0)}
                                </div>
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-zinc-100">{t.name}</p>
                                <p className="text-sm text-zinc-500">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <button
                        onClick={prev}
                        className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-amber-400"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2 w-2 rounded-full transition-all ${
                                    i === current ? 'bg-amber-400 w-6' : 'bg-zinc-600'
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-amber-400"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;
