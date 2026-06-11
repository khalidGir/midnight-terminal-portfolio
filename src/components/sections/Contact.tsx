import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../shared/Icons';
import { personalInfo } from '../../data/portfolio';
import Section from '../shared/Section';

const Contact = () => {
    const contactCards = [
        {
            label: 'Email',
            value: personalInfo.email,
            icon: <Mail className="h-5 w-5" />,
            href: `mailto:${personalInfo.email}`,
        },
        {
            label: 'Phone',
            value: personalInfo.phone,
            icon: <Phone className="h-5 w-5" />,
            href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
        },
        {
            label: 'Location',
            value: personalInfo.location,
            icon: <MapPin className="h-5 w-5" />,
            href: '#',
        },
    ];

    return (
        <Section id="contact">
            <div className="text-center space-y-8 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                    Have a project in mind or want to discuss modern web architecture?
                    I&apos;m always open to new opportunities and interesting conversations.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {contactCards.map((card) => (
                    <a
                        key={card.label}
                        href={card.href}
                        className="flex flex-col items-center space-y-4 p-8 card hover:shadow-card-hover transition-all group text-center"
                        {...(card.label === 'Location' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                        <div className="p-4 rounded-full bg-amber-400/10 text-amber-400 transition-colors">
                            {card.icon}
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">
                                {card.label}
                            </p>
                            <span className="font-medium text-zinc-200 text-sm">
                                {card.value}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="flex justify-center space-x-6 mt-12">
                <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition-colors hover:border-amber-400 hover:text-amber-400"
                >
                    <GithubIcon size={20} />
                </a>
                <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition-colors hover:border-amber-400 hover:text-amber-400"
                >
                    <LinkedInIcon size={20} />
                </a>
                <a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition-colors hover:border-amber-400 hover:text-amber-400"
                >
                    <TwitterIcon size={20} />
                </a>
            </div>
        </Section>
    );
};

export default Contact;
