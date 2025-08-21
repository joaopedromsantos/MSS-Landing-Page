import { Star, Leaf, FileText, CheckCircle } from 'lucide-react';

export const sackData = [
    {
      id: 1,
      icon: Star,
      name: 'Polipropileno',
      features: ['Alta durabilidade', 'Proteção contra umidade'],
      iconColor: 'text-blue-600',
      shadowColor: 'shadow-blue-500/10',
      borderColor: 'hover:border-blue-500',
    },
    {
      id: 2,
      icon: Leaf,
      name: 'Juta',
      features: ['100% biodegradável', 'Tradição no mercado'],
      iconColor: 'text-emerald-600',
      shadowColor: 'shadow-emerald-500/10',
      borderColor: 'hover:border-emerald-500',
    },
    {
      id: 3,
      icon: FileText,
      name: 'Papel',
      features: ['Visual premium', 'Ideal para microlotes'],
      iconColor: 'text-amber-700',
      shadowColor: 'shadow-amber-500/10',
      borderColor: 'hover:border-amber-500',
    },
  ];