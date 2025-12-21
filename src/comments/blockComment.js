import { EditorView } from '@codemirror/view';
import { isInComment } from './index';

export const autoBlockComment = EditorView.inputHandler.of((view, from, to, text) => {
  if (text === '*'
    && view.state.sliceDoc(from - 1, from) === '/'
    && !isInComment(view.state, from)) {
    view.dispatch({
      changes: {
        from: from - 1,
        to,
        insert: '/*\n\t\n*/'
      },
      selection: { anchor: from + 2 }
    });
    return true;
  }
  return false;
});
