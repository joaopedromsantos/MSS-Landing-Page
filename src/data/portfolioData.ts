// src/data/portfolioData.js

// Importe suas imagens da pasta de assets.
// Recomendo criar uma pasta 'portfolio' para organizar: src/assets/portfolio/
import sackCooxupe from '../assets/portfolio/juta.jpg';
import sackIpanema from '../assets/portfolio/poli.jpg';
import sackSMC from '../assets/portfolio/papel.jpg';

export const portfolioData = [
  {
    id: 1,
    client: 'Cooxupé',
    type: 'Polipropileno Personalizada',
    image: sackCooxupe,
  },
  {
    id: 2,
    client: 'Ipanema Coffees',
    type: 'Juta com Impressão Especial',
    image: sackIpanema,
  },
  {
    id: 3,
    client: 'SMC',
    type: 'Polipropileno Alta Resistência',
    image: sackSMC,
  },
  {
    id: 4,
    client: 'SMC',
    type: 'Polipropileno Alta Resistência',
    image: sackSMC,
  }
];