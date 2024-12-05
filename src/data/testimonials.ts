import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'testimonials.roles.legal_director',
    company: 'Global Law Partners',
    content: 'testimonials.content.sarah', // Clé de traduction
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'testimonials.roles.medical_officer',
    company: 'HealthTech Solutions',
    content: 'testimonials.content.michael',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'testimonials.roles.tech_manager',
    company: 'TechCorp International',
    content: 'testimonials.content.emma',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  }
];