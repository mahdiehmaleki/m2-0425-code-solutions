import { useState } from 'react';
import type { Topic } from '../App';
import { TopicCard } from './TopicCards';

interface AccordionProps {
  topics: Topic[];
}

export function Accordion({ topics }: AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openId === topic.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
