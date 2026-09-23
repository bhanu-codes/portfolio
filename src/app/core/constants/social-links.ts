import { SocialLink } from '../models/social-link.model';

export const CONTACT_EMAIL = 'bhanuneeli2930@gmail.com';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/bhanu-codes', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhanu-neeli', external: true },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}` }
];
