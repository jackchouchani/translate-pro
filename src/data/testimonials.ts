import { Testimonial } from '../types';
import sarahImage from '../assets/images/testimonials/Sarah.jpg';
import michaelImage from '../assets/images/testimonials/Micheal.jpg';
import emmaImage from '../assets/images/testimonials/Emma.jpg';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'testimonials.roles.legal_director',
    company: 'Global Law Partners',
    content: 'testimonials.content.sarah',
    image: sarahImage
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'testimonials.roles.medical_officer',
    company: 'HealthTech Solutions',
    content: 'testimonials.content.michael',
    image: michaelImage
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'testimonials.roles.tech_manager',
    company: 'TechCorp International',
    content: 'testimonials.content.emma',
    image: emmaImage
  }
];