import { Carousel } from './Carousel';
import type { Image } from './types';

const images: Image[] = [
  { src: '/images/fushiguro.webp', alt: 'Megumi Fushiguro' },
  { src: '/images/inumaki.webp', alt: 'Toge Inumaki' },
  { src: '/images/itadori.webp', alt: 'Yuji Itadori' },
  { src: '/images/kugisaki.webp', alt: 'Nobara Kugisaki' },
  { src: '/images/panda.webp', alt: 'Panda' },
  { src: '/images/zen-in.webp', alt: "Maki Zen'in" },
];

export function App() {
  return (
    <main>
      <h1>Anime Carousel</h1>
      <Carousel images={images} />
    </main>
  );
}
