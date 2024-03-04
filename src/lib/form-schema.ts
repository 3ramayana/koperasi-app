import { z } from 'zod';

export const customerFormSchema = z.object({
  firstname: z.string({ required_error: 'Firstname is required' }),
  lastname: z.string({ required_error: 'Lastname is required' }),
  email: z.string({ required_error: 'Email is required' }),
  contact: z.string({ required_error: 'Contact is required' }),
  gender: z.string({ required_error: 'You need select a gender' }),
  address: z.string({ required_error: 'Address is required' }),
  schoolId: z.string({ required_error: 'You need select a place of duty' }),
});
