import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = [
  '/starry-sky.jpeg',
  '/cool-nature.jpg',
  '/cool-kitty.jpg',
  '/cool-dog.jpg',
  '/cool-car.jpg',
];
const captions = [
  'A Beautiful Image of Space',
  'An Amazing Capture of Nature',
  'A Cute Kitty',
  'A Little Lovely Puppy',
  'An Advanced AI Car',
];
const descriptions = [
  'Behold a breathtaking glimpse into the cosmos — a stunning image of space where endless stars shimmer like scattered diamonds against the deep velvet of the universe.',
  'This mesmerizing image reveals nature in all its majestic glory is a perfect harmony of colors, textures, and life.',
  'With its big, curious eyes and soft, fluffy fur, this adorable kitten melts hearts at first glance.',
  'This sweet little puppy is a bundle of joy and boundless energy. With floppy ears, a wagging tail, and innocent eyes full of wonder, it brings an instant smile to anyone face.',
  'Sleek, futuristic, and intelligent, this cutting-edge AI car is a marvel of modern engineering. With aerodynamic design and glowing interface lights, it glides effortlessly through smart cities, navigating with precision and responding in real-time.',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={srcs} />
      <Caption caption={captions} />
      <Description text={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
