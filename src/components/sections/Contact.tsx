import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="text-center space-y-8 mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                        Have a project in mind or want to discuss modern web architecture?
                        I'm always open to new opportunities and interesting conversations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Email */}
                    <a href="mailto:khalidgirma3@gmail.com" className="flex items-center space-x-4 p-6 card hover:shadow-md transition-all group">
                        <div className="p-4 bg-indigo-50 text-accent-primary rounded-full group-hover:bg-accent-primary group-hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider">Email</p>
                            <span className="font-semibold text-text-primary">khalidgirma3@gmail.com</span>
                        </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:0903146834" className="flex items-center space-x-4 p-6 card hover:shadow-md transition-all group">
                        <div className="p-4 bg-indigo-50 text-accent-primary rounded-full group-hover:bg-accent-primary group-hover:text-white transition-colors">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider">Phone</p>
                            <span className="font-semibold text-text-primary">0903 146 834</span>
                        </div>
                    </a>
                </div>

                <div className="flex justify-center space-x-6 mt-12">
                    <a href="https://github.com/khalidGir" target="_blank" rel="noopener noreferrer" className="p-4 card hover:shadow-md hover:text-accent-primary transition-all group">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/khalid-girma-5a864a2a0/" target="_blank" rel="noopener noreferrer" className="p-4 card hover:shadow-md hover:text-accent-primary transition-all group">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
