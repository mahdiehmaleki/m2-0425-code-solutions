import type { Image } from './types';

export function ImageCard({ image }: { image: Image }) {
  return <img className="current-image" src={image.src} alt={image.alt} />;
}
