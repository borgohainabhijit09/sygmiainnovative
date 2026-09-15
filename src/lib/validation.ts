import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  businessName: z.string().min(2, 'Business or organization name is required'),
  phone: z.string().min(8, 'Valid phone or WhatsApp number is required'),
  email: z.string().email('Please enter a valid email address'),
  requirement: z.enum([
    'new-website',
    'website-redesign',
    'business-automation',
    'custom-software',
    'ecommerce',
    'something-else',
    'not-sure'
  ], { message: 'Please select a requirement option' }),
  message: z.string().min(10, 'Please share a brief description of what you want to achieve (at least 10 characters)'),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  landingPage: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
