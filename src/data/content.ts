export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Transformation = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  price: string;
  badge: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
};

export const services: Service[] = [
  {
    id: 'haircuts-styling',
    title: 'Haircuts & Styling',
    description:
      'Precision cuts and personalised styling crafted by senior stylists to suit your face shape, hair texture and lifestyle.',
    icon: 'Scissors',
  },
  {
    id: 'hair-colour',
    title: 'Hair Colour',
    description:
      'From balayage to global colour, our colourists create rich, dimensional tones using premium, ammonia-free formulas.',
    icon: 'Palette',
  },
  {
    id: 'hair-spa',
    title: 'Hair Spa & Treatments',
    description:
      'Restorative keratin, scalp therapy and deep-conditioning rituals that revive shine, strength and softness.',
    icon: 'Sparkles',
  },
  {
    id: 'facials-skincare',
    title: 'Facials & Skincare',
    description:
      'Customised facials and advanced skincare designed to cleanse, hydrate and reveal a luminous, healthy glow.',
    icon: 'Flower2',
  },
  {
    id: 'bridal-makeup',
    title: 'Bridal & Party Makeup',
    description:
      'Flawless, long-wear makeup for brides and celebrations — soft, radiant and tailored to your features and outfit.',
    icon: 'Heart',
  },
  {
    id: 'manicure-pedicure',
    title: 'Manicure & Pedicure',
    description:
      'Pampering nail care with meticulous grooming, spa rituals and gel finishes for beautifully polished hands and feet.',
    icon: 'Hand',
  },
];

export const transformations: Transformation[] = [
  {
    id: 't1',
    title: 'Soft Layered Cut',
    category: 'Haircuts',
    image:
      'https://images.pexels.com/photos/36784935/pexels-photo-36784935.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Woman with a soft layered haircut standing confidently in a modern salon',
    span: 'tall',
  },
  {
    id: 't2',
    title: 'Balayage Glow',
    category: 'Hair Colouring',
    image:
      'https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hair stylist applying balayage colour to a clients hair in a salon',
    span: 'normal',
  },
  {
    id: 't3',
    title: 'Blow-Dry Volume',
    category: 'Hair Styling',
    image:
      'https://images.pexels.com/photos/14615063/pexels-photo-14615063.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Stylist blow-drying a clients hair to create voluminous styling',
    span: 'normal',
  },
  {
    id: 't4',
    title: 'Bridal Updo',
    category: 'Bridal Styling',
    image:
      'https://images.pexels.com/photos/11813979/pexels-photo-11813979.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Bride with an elegant updo hairstyle and warm soft lighting',
    span: 'tall',
  },
  {
    id: 't5',
    title: 'Precision Bob',
    category: 'Haircuts',
    image:
      'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Close-up of a hairstylist cutting wet hair into a precision bob',
    span: 'normal',
  },
  {
    id: 't6',
    title: 'Rich Global Colour',
    category: 'Hair Colouring',
    image:
      'https://images.pexels.com/photos/8468038/pexels-photo-8468038.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hairstylist applying rich global hair colour to a client in a salon',
    span: 'normal',
  },
  {
    id: 't7',
    title: 'Romantic Bridal Look',
    category: 'Bridal Styling',
    image:
      'https://images.pexels.com/photos/36612594/pexels-photo-36612594.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Close-up portrait of a bride wearing a white veil with elegant styling',
    span: 'tall',
  },
  {
    id: 't8',
    title: 'Polished Finish',
    category: 'Hair Styling',
    image:
      'https://images.pexels.com/photos/3331488/pexels-photo-3331488.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Side view of a woman receiving a polished hair styling in a modern salon',
    span: 'normal',
  },
];

export const offers: Offer[] = [
  {
    id: 'o1',
    title: 'Hair Spa + Styling',
    description:
      'A 90-minute ritual combining deep-conditioning hair spa therapy with a blow-dry finish for instantly softer, fuller hair.',
    price: 'Demo · $85',
    badge: 'Most Loved',
  },
  {
    id: 'o2',
    title: 'Hair Colour Consultation',
    description:
      'A one-on-one consultation with our senior colourist — tone mapping, strand test and a personalised colour plan.',
    price: 'Demo · Free',
    badge: 'Complimentary',
  },
  {
    id: 'o3',
    title: 'Bridal Beauty Package',
    description:
      'Complete bridal preparation: trial session, day-of hair and makeup, and touch-ups for a radiant, lasting glow.',
    price: 'Demo · $320',
    badge: 'By Appointment',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'r1',
    name: 'Ava Thompson',
    role: 'Hair Colour & Cut',
    quote:
      'The colourist completely understood the warm tones I wanted. My balayage looks sun-kissed and natural, and the cut grows out beautifully. I have never felt this confident leaving a salon.',
    rating: 5,
    initials: 'AT',
  },
  {
    id: 'r2',
    name: 'Priya Menon',
    role: 'Bridal Makeup',
    quote:
      'They did my bridal hair and makeup and it stayed flawless from the morning ceremony through the evening reception. Soft, elegant and exactly me. Every guest asked who my artist was.',
    rating: 5,
    initials: 'PM',
  },
  {
    id: 'r3',
    name: 'Sofia Romano',
    role: 'Hair Spa & Facial',
    quote:
      'The hair spa and facial combo was the most relaxing two hours I have had in months. My hair feels healthy again and my skin is glowing. It is my new monthly ritual.',
    rating: 5,
    initials: 'SR',
  },
];

export const serviceOptions = [
  'Haircuts & Styling',
  'Hair Colour',
  'Hair Spa & Treatments',
  'Facials & Skincare',
  'Bridal & Party Makeup',
  'Manicure & Pedicure',
];

export const timeSlots = [
  '10:00 AM',
  '11:30 AM',
  '1:00 PM',
  '2:30 PM',
  '4:00 PM',
  '5:30 PM',
  '7:00 PM',
];
