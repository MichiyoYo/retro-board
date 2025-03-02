import { useState } from 'react';

export const useForm = <T extends Record<string, unknown>>(
  initialValues: T,
  onSubmit: (values: T) => void
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (name === 'author' && value?.length > 20) {
      setErrors((prev) => ({
        ...prev,
        author: 'Author name should be less than 20 characters',
      }));
      return;
    }
    if (name === 'text' && value.length > 500) {
      setErrors((prev) => ({
        ...prev,
        text: 'Text should be less than 500 characters',
      }));
      return;
    }

    setValues((prev: T) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return { values, errors, handleChange, handleSubmit };
};
