import { Accordion } from './components/Accordion';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

const topics: Topic[] = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content:
      'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    id: 3,
    title: 'Cascading Style Sheets',
    content:
      'CSS is a style sheet language used for describing the presentation of a document written in HTML.',
  },
  {
    id: 9,
    title: 'JavaScript',
    content:
      'JavaScript is a high-level, interpreted scripting language that conforms to the ECMAScript specification.',
  },
];

export function App() {
  return (
    <main>
      <h1>Accordion Demo</h1>
      <Accordion topics={topics} />
    </main>
  );
}
