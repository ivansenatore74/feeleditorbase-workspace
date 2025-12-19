import { snippets, keywordCompletions } from 'lang-feel';

import { pathExpressionCompletion } from './pathExpression';
import { variableCompletion } from './variable';

import { snippetsCompletion } from './snippets';
import { disableInComments } from '../comments';

function wrapCompletions(sources, wrapper) {
  return sources.map(wrapper);
}

/**
 * @typedef { import('../core').Variable } Variable
 * @typedef { import('@codemirror/autocomplete').CompletionSource } CompletionSource
 */

/**
 * @param { {
 *   variables?: Variable[],
 *   builtins?: Variable[]
 * } } options
 *
 * @return { CompletionSource[] }
 */
export function completions({ variables = [], builtins = [] }) {

  const sources = [
    pathExpressionCompletion({ variables }),
    variableCompletion({ variables, builtins }),
    snippetsCompletion(snippets),
    ...keywordCompletions
  ];

  return wrapCompletions(sources, disableInComments);
}