import { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'portfolio.items.legal1.title',
    description: 'portfolio.items.legal1.description',
    category: 'legal',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
    client: 'portfolio.clients.law_firm',
    languages: ['English', 'French', 'Turkish']
  },
  {
    id: '2',
    title: 'portfolio.items.medical1.title',
    description: 'portfolio.items.medical1.description',
    category: 'medical',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    client: 'portfolio.clients.health_org',
    languages: ['English', 'French', 'Turkish', 'Spanish']
  },
  {
    id: '3',
    title: 'portfolio.items.technical1.title',
    description: 'portfolio.items.technical1.description',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80',
    client: 'portfolio.clients.engineering_corp',
    languages: ['English', 'German', 'French']
  },
  {
    id: '4',
    title: 'portfolio.items.business1.title',
    description: 'portfolio.items.business1.description',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    client: 'portfolio.clients.multinational_corp',
    languages: ['English', 'Turkish', 'French']
  }
];
