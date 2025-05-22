// src/pages/Details.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Item } from './Dashboard';

const staticItems: Item[] = [
  {
    itemId: 8,
    name: 'Harry Houdini',
    image:
      'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQjD45v-qOUv4wtdI0Xl5NZsPF548LH3-cPAZt3RB8IAUIIbF_yMb3t-2o4prHe1pSQJghDstd8jbm8aQM',
    description: 'The most famous American magician and escape artist.',
  },
  {
    itemId: 12,
    name: 'Dorothy Dietrich',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBdp8xPuESU1ZftDol_pqQYJffdwKROHhvzTo3KMzg2dwL6YWB',
    description:
      'The first woman to perform a straitjacket escape while suspended hundreds of feet in the air from a burning rope.',
  },
  {
    itemId: 3,
    name: 'Criss Angel',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPc0RZ6Z3CjEKZihl0E4KNHSAjiTp3NDm0eth3NG8d3JRAkFAz',
    description:
      "Perhaps the world's most successful American magician, illusionist and musician.",
  },
  {
    itemId: 42,
    name: 'Dean Gunnarson',
    image:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuhEJE6lAIeY6xpiSggUF0gKujG8k8GVSfZTDHrcGc-9U8zlv6',
    description:
      'A Canadian escape artist who won China\'s "The World\'s Top Escape Artist" award.',
  },
  {
    itemId: 95,
    name: 'Robert Gallup',
    image:
      'https://www.hollywoodreporter.com/wp-content/uploads/2014/04/robert_gallup_magic_a_p.jpg',
    description:
      "The world's premier extreme magician and death-defying escape artist.",
  },
];

export default function Details() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<Item | undefined>();

  useEffect(() => {
    if (itemId) {
      const found = staticItems.find((item) => item.itemId === Number(itemId));
      setItem(found);
    }
  }, [itemId]);

  if (!item) {
    return <p>Loading or item not found...</p>;
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
      <img
        src={item.image}
        alt={item.name}
        className="w-full object-cover rounded mb-4"
      />
      <p className="text-gray-700 mb-6">{item.description}</p>

      <div className="flex gap-4">
        <Link to="/" className="text-blue-600 underline">
          Back to Dashboard
        </Link>
        <button
          onClick={() => {
            alert('Save clicked');
            navigate('/');
          }}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Save
        </button>
      </div>
    </div>
  );
}
