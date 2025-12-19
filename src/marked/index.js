import { marked } from 'marked';
import { domify } from 'min-dom';

marked.use({
  async: false,
  gfm: true,
  breaks: true
});

export function markdownInfo(info) {
  if (typeof info === 'string') {
    return () => {
      const markDown = info ? marked.parse(info) : '';
      return domify(`<div class="description">${markDown}<div>`);
    };
  }
  return info;
}