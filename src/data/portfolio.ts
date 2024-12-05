import { PortfolioItem } from '../types';
import legalImage from '../assets/images/portfolio/legal.jpg';
import medicalImage from '../assets/images/portfolio/medical.jpg';
import technicalImage from '../assets/images/portfolio/technical.jpg';
import businessImage from '../assets/images/portfolio/business.jpg';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'portfolio.items.legal1.title',
    description: 'portfolio.items.legal1.description',
    category: 'legal',
    image: legalImage,
    client: 'portfolio.clients.law_firm',
    languages: ['English', 'French', 'Turkish']
  },
  {
    id: '2',
    title: 'portfolio.items.medical1.title',
    description: 'portfolio.items.medical1.description',
    category: 'medical',
    image: medicalImage,
    client: 'portfolio.clients.health_org',
    languages: ['English', 'French', 'Turkish', 'Spanish']
  },
  {
    id: '3',
    title: 'portfolio.items.technical1.title',
    description: 'portfolio.items.technical1.description',
    category: 'technical',
    image: technicalImage,
    client: 'portfolio.clients.engineering_corp',
    languages: ['English', 'German', 'French']
  },
  {
    id: '4',
    title: 'portfolio.items.business1.title',
    description: 'portfolio.items.business1.description',
    category: 'business',
    image: businessImage,
    client: 'portfolio.clients.multinational_corp',
    languages: ['English', 'Turkish', 'French']
  }
];
