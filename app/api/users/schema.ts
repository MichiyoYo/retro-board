import { z } from 'zod';

const schema = z.object({
  name: z.string().min(4).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
});

export default schema;
