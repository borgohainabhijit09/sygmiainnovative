import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  businessName: z.string().min(2, 'Business or organization name is required').max(100, 'Business name is too long'),
  phone: z.string().min(8, 'Valid phone or WhatsApp number is required').max(20, 'Phone number is too long'),
  email: z.string().email('Please enter a valid email address').max(100, 'Email address is too long'),
  requirement: z.enum([
    'new-website',
    'website-redesign',
    'ecommerce',
    'restaurant-website',
    'business-automation',
    'custom-software',
    'something-else',
    'not-sure'
  ], { message: 'Please select a requirement option' }),
  budget: z.enum([
    'under-15k',
    '15k-30k',
    '30k-50k',
    '50k-plus'
  ]).optional().default('15k-30k'),
  message: z.string().min(10, 'Please share a brief description of what you want to achieve (at least 10 characters)').max(2000, 'Message is too long'),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
  landingPage: z.string().optional(),
  referrer: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

