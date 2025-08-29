import { Calendar, Package, Building2 } from 'lucide-react';

export const statisticsData = [
    {
      icon: Calendar,
      number: import.meta.env.VITE_YEARS_OF_EXPERIENCE,
      unit: 'Anos de Experiência',
      color: 'bg-yellow',
    },
    {
      icon: Package,
      number: import.meta.env.VITE_SACKS,
      unit: 'Sacas Estampadas',
      color: 'bg-accent',
    },
    {
      icon: Building2,
      number: import.meta.env.VITE_COMPANIES,
      unit: 'Empresas Atendidas',
      color: 'bg-secondary',
    },
  ];