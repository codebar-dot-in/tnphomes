import {
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  HardHat,
  IndianRupee,
  Paintbrush,
  ShieldCheck,
  Users,
} from 'lucide-react'

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Cost Estimator', to: '/cost-estimator' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
  {
    title: 'Residential Construction',
    description: 'Custom homes and villas built with quality materials and strict site supervision.',
    icon: HardHat,
  },
  {
    title: 'Commercial Construction',
    description: 'Offices and retail spaces delivered with structural precision and efficient execution plans.',
    icon: Building2,
  },
  {
    title: 'Architectural Design',
    description: 'Smart, approval-ready plans tailored to your plot, lifestyle, and local regulations.',
    icon: DraftingCompass,
  },
  {
    title: 'Interior Design',
    description: 'Functional interiors with modular kitchens, wardrobes, lighting, and premium finish options.',
    icon: Paintbrush,
  },
  {
    title: 'Renovation',
    description: 'Upgrade old spaces with structural improvements, modern finishes, and better space planning.',
    icon: Hammer,
  },
  {
    title: 'Turnkey Projects',
    description: 'End-to-end delivery from design to handover through one accountable execution team.',
    icon: ClipboardCheck,
  },
]

export const trustStats = [
  { label: 'Years in Construction', value: 15, suffix: '+' },
  { label: 'Completed Projects', value: 1200, suffix: '+' },
  { label: 'Cities Served', value: 8, suffix: '' },
  { label: 'Dedicated Site Engineers', value: 40, suffix: '+' },
]

export const trustPoints = [
  {
    title: 'Warranty-backed delivery',
    detail: 'Structural and finishing warranty included with every package agreement.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparent cost estimates',
    detail: 'Detailed BOQ and stage-wise payment milestones before construction begins.',
    icon: IndianRupee,
  },
  {
    title: 'Regional site supervision',
    detail: 'Our engineers conduct on-site checks every week across Chennai and nearby districts.',
    icon: Users,
  },
]

export const packages = [
  {
    title: 'Standard Package',
    cost: 'Starting ₹1,850 / sq.ft',
    includes: [
      'Architectural plan + structural design',
      'Certified steel and OPC cement',
      'Standard vitrified flooring + basic joinery',
      'Weekly progress photos and stage billing',
    ],
  },
  {
    title: 'Premium Package',
    cost: 'Starting ₹2,250 / sq.ft',
    includes: [
      'Everything in Standard + facade upgrade',
      'Premium sanitary fittings and branded switches',
      'Detailed interior layout support',
      'Dedicated project coordinator',
    ],
  },
  {
    title: 'Luxury Package',
    cost: 'Starting ₹2,850 / sq.ft',
    includes: [
      'Custom design development and 3D views',
      'Imported finish options and premium woodwork',
      'Smart-home ready electrical planning',
      'Bi-weekly quality audit reports',
    ],
  },
  {
    title: 'Ultra-Luxury Package',
    cost: 'From ₹3,650 / sq.ft',
    includes: [
      'Bespoke architecture and high-end interiors',
      'Private site engineer + senior architect reviews',
      'Marble/stone facade and custom metal detailing',
      'End-to-end concierge-style handover support',
    ],
  },
]

export const processSteps = [
  {
    title: 'Free Consultation',
    text: 'We understand plot details, timeline, family needs, and budget expectation in a 30-minute call.',
  },
  {
    title: 'Site Visit & Design',
    text: 'Our engineer and architect visit your site, verify constraints, and prepare concept-level planning.',
  },
  {
    title: 'Detailed Quotation',
    text: 'You receive a transparent BOQ with line-item clarity on civil, finishing, and MEP work.',
  },
  {
    title: 'Contract & Milestones',
    text: 'Scope lock, payment schedule, timeline, and quality checkpoints are formalized before kickoff.',
  },
  {
    title: 'Construction & Quality Checks',
    text: 'Execution with weekly site reviews, materials verification, and milestone photographs.',
  },
  {
    title: 'Handover & Warranty',
    text: 'Final snag closure, as-built records, and warranty documentation handed over in person.',
  },
]

export const testimonials = [
  {
    name: 'R. Lakshmi Narayanan',
    location: 'Thoraipakkam, Chennai',
    quote:
      'The biggest difference was cost transparency. Every stage was explained clearly, and there were no surprise bills.',
  },
  {
    name: 'Aarthi & Praveen',
    location: 'Avadi, Chennai',
    quote:
      'Our engineers visited the site every week. We always knew what was done and what was planned for the next week.',
  },
  {
    name: 'Dr. Kavitha Menon',
    location: 'Porur, Chennai',
    quote:
      'They built our clinic exactly to operational needs. Utility planning and ventilation were handled thoughtfully.',
  },
]

export const budgetOptions = [
  'Below ₹40 Lakhs',
  '₹40 Lakhs - ₹80 Lakhs',
  '₹80 Lakhs - ₹1.5 Crore',
  '₹1.5 Crore - ₹3 Crore',
  'Above ₹3 Crore',
]

export const initialForm = {
  name: '',
  phone: '',
  email: '',
  city: '',
  projectType: '',
  budget: '',
}
