export const validateCard = (name: string, value: string) => {
  if (name === 'author' && value?.length > 20) {
    return {
      author: 'Author name should be less than 20 characters',
    } as Record<string, string>;
  }
  if (name === 'text' && value.length > 500) {
    return {
      text: 'Text should be less than 500 characters',
    } as Record<string, string>;
  }
  return {};
};
