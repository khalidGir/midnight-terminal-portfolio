import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../../data/portfolio';
import Section from '../shared/Section';

const Blog = () => {
    return (
        <Section id="blog" className="bg-zinc-900/50">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Latest <span className="gradient-text">Blog Posts</span>
                </h2>
                <p className="mt-4 text-zinc-400">
                    Thoughts on development, architecture, and best practices.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, i) => (
                    <motion.a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group card p-6 flex flex-col"
                    >
                        <div className="mb-4 flex items-center gap-3 text-sm text-zinc-500">
                            <span>{post.date}</span>
                            <span>&middot;</span>
                            <Clock size={12} />
                            <span>{post.readTime}</span>
                        </div>

                        <h3 className="mb-3 text-xl font-bold leading-tight text-zinc-100 transition-colors group-hover:text-amber-400">
                            {post.title}
                        </h3>

                        <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="flex items-center text-sm font-medium text-amber-400 opacity-0 transition-opacity group-hover:opacity-100">
                                Read <ArrowUpRight className="ml-1 h-4 w-4" />
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </Section>
    );
};

export default Blog;
