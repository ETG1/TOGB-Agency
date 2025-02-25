export type PricingTier = {
  name: string
  price: number
  description: string
  features: {
    title: string
    description: string
  }[]
  buttonText: string
  popular?: boolean
}

export const pricingData: PricingTier[] = [
  {
    name: 'Basic Business',
    price: 4999,
    description:
      'Perfect for small businesses getting started with their online presence',
    features: [
      {
        title: '5-Page Website',
        description: 'Home, About, Services, Gallery, Contact pages',
      },
      {
        title: 'Mobile Responsive',
        description: 'Fully responsive design for all devices',
      },
      {
        title: 'Basic SEO Setup',
        description: 'Essential SEO optimization for local visibility',
      },
      {
        title: 'Contact Form',
        description: 'Standard contact form integration',
      },
      {
        title: 'Social Media Links',
        description: 'Integration with your social media profiles',
      },
      {
        title: '3 Months Support',
        description: 'Basic technical support and maintenance',
      },
    ],
    buttonText: 'Order Basic Package',
  },
  {
    name: 'Professional',
    price: 8999,
    description: 'Ideal for growing businesses needing advanced features',
    popular: true,
    features: [
      {
        title: '10-Page Website',
        description: 'Custom-designed pages for your business',
      },
      {
        title: 'E-commerce Ready',
        description: 'Up to 50 products with payment integration',
      },
      {
        title: 'Advanced SEO',
        description: 'Comprehensive SEO setup and optimization',
      },
      {
        title: 'Content Management',
        description: 'Easy-to-use CMS for updates',
      },
      {
        title: 'Analytics Integration',
        description: 'Google Analytics and reporting dashboard',
      },
      {
        title: '6 Months Support',
        description: 'Priority technical support and maintenance',
      },
    ],
    buttonText: 'Order Pro Package',
  },
  {
    name: 'Enterprise',
    price: 15999,
    description: 'Complete solution for established businesses',
    features: [
      {
        title: 'Custom Website',
        description: 'Unlimited pages with custom functionality',
      },
      {
        title: 'Full E-commerce',
        description: 'Unlimited products with advanced features',
      },
      {
        title: 'SEO & Marketing',
        description: 'Full SEO optimization and marketing setup',
      },
      {
        title: 'Custom Integration',
        description: 'Third-party APIs and systems integration',
      },
      {
        title: 'Performance Optimization',
        description: 'Advanced caching and speed optimization',
      },
      {
        title: '12 Months Support',
        description: '24/7 priority support and maintenance',
      },
    ],
    buttonText: 'Order Enterprise Package',
  },
]
