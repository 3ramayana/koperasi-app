import { z } from 'zod';

export const customerFormSchema = z.object({
  firstname: z.string({ required_error: 'Firstname is required' }),
  lastname: z.string({ required_error: 'Lastname is required' }),
  email: z.string({ required_error: 'Email is required' }),
  contact: z.string({ required_error: 'Contact is required' }),
  gender: z.enum(['Man', 'Woman'], {
    required_error: 'You need select a gender',
  }),
  placeOfBirth: z.string({ required_error: 'Place of birth is required' }),
  dateOfBirth: z.date({ required_error: 'Date of birth is required' }),
  address: z.string({ required_error: 'Address is required' }),
  placeOfDuty: z.enum(
    ['SMAS Averos', 'MTs Sains Algebra', 'MI Sains Alhidayah', 'RA Avicenna'],
    { required_error: 'You need select a place of duty' }
  ),
});
