export const validateCard = (
  name: string,
  value: string
): Record<string, string> => {
  if (name === 'author') {
    if (value.trim() === '') {
      return { author: 'Author is required' };
    }
    return { author: '' };
  }
  if (name === 'text') {
    if (value.trim() === '') {
      return { text: 'Text is required' };
    }
    return { text: '' };
  }
  return {};
};
