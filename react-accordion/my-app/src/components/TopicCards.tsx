import type { Topic } from '../App';

interface TopicCardProps {
  topic: Topic;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export function TopicCard({ topic, isOpen, onToggle }: TopicCardProps) {
  return (
    <div className="topic-card">
      <h2 onClick={() => onToggle(topic.id)} className="topic-title">
        {topic.title}
      </h2>
      {isOpen && <p className="topic-content">{topic.content}</p>}
    </div>
  );
}
