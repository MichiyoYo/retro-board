import { z } from 'zod';

const schema = z.object({
  title: z.string().min(3).default(''),
  lists: z.array(z.string()).default([]),
});

export default schema;
