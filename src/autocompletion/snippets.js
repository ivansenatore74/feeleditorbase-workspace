export function snippetsCompletion(snippets) {
  return (context) => {
    const word = context.matchBefore(/\w+/);
    if (!word) {
      return null;
    }
    return {
      from: word.from,
      options: snippets,
    };
  };
}
