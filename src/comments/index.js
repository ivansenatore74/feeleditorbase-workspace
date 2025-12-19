import { syntaxTree } from '@codemirror/language';

export function isInComment(state, pos) {
  let node = syntaxTree(state).resolve(pos, -1);

  while (node) {
    if (
      node.name === 'LineComment' ||
      node.name === 'BlockComment' ||
      node.name === 'Comment'
    ) {
      return true;
    }
    node = node.parent;
  }

  return false;
}

export function disableInComments(source) {
  return (context) => {
    if (isInComment(context.state, context.pos)) {
      return null;
    }
    return source(context);
  };
}
