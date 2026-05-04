import { cn } from '@/lib/cn';

function renderInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'ul'; items: string[] };

function parseMarkdown(src: string): Block[] {
  const lines = src.split('\n');
  const blocks: Block[] = [];
  let buffer: string[] = [];
  let listBuf: string[] = [];

  const flushParagraph = () => {
    if (buffer.length) {
      blocks.push({ type: 'p', text: buffer.join(' ').trim() });
      buffer = [];
    }
  };
  const flushList = () => {
    if (listBuf.length) {
      blocks.push({ type: 'ul', items: listBuf });
      listBuf = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      continue;
    }
    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'h3', text: line.slice(4).trim() });
      continue;
    }
    if (line.startsWith('> ')) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'quote', text: line.slice(2).trim() });
      continue;
    }
    if (line.startsWith('- ')) {
      flushParagraph();
      listBuf.push(line.slice(2).trim());
      continue;
    }
    buffer.push(line);
  }
  flushParagraph();
  flushList();
  return blocks;
}

export default function BlogContent({ body }: { body: string }) {
  const blocks = parseMarkdown(body);
  return (
    <div className="prose-custom space-y-6">
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2
              key={i}
              className="font-heading text-3xl md:text-4xl text-cream-light mt-10"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3
              key={i}
              className="font-heading text-2xl text-cream-light mt-8"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === 'quote') {
          return (
            <blockquote
              key={i}
              className="relative my-8 rounded-r-xl border-l-4 border-flame bg-flame/5 px-6 py-5 text-lg italic text-cream/85"
            >
              <span
                dangerouslySetInnerHTML={{ __html: renderInline(block.text) }}
              />
            </blockquote>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul
              key={i}
              className={cn('list-disc space-y-2 pl-6 text-cream/80 marker:text-flame')}
            >
              {block.items.map((item, j) => (
                <li
                  key={j}
                  dangerouslySetInnerHTML={{ __html: renderInline(item) }}
                />
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="text-base md:text-lg leading-[1.8] text-cream/80"
            dangerouslySetInnerHTML={{ __html: renderInline(block.text) }}
          />
        );
      })}
    </div>
  );
}
