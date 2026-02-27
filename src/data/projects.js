export const projects = [
  {
    id: 'p1',
    category: 'residential',
    status: 'completed',
    statusLabel: 'Completed',
    title: 'Annanagar Courtyard Home',
    location: 'Anna Nagar, Chennai',
    type: 'Independent Residence',
    area: '3,250 sq.ft',
    floors: 'G + 2',
    package: 'Premium Package',
    year: '2025',
    progressClass: 'w-full',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageHeight: 'h-72',
    summary:
      'Built on a compact urban plot with a central courtyard for daylight, cross ventilation, and family privacy.',
    story:
      'The client wanted privacy for three generations while keeping the home naturally lit. We designed an inward-facing courtyard with separate floor zones and service shafts for easier maintenance.',
    highlights: [
      'RCC frame with seismic-compliant detailing',
      'Courtyard lighting strategy reduces daytime power use',
      'Branded plumbing and concealed electrical network',
      'Stage-wise execution reviews with weekly client updates',
    ],
  },
  {
    id: 'p2',
    category: 'commercial',
    status: 'near_completion',
    statusLabel: 'Near Completion',
    title: 'Velachery Business Hub',
    location: 'Velachery, Chennai',
    type: 'Commercial Office',
    area: '11,400 sq.ft',
    floors: 'B + G + 4',
    package: 'Luxury Commercial Package',
    year: '2026',
    progressClass: 'w-5/6',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    imageHeight: 'h-96',
    summary:
      'G+4 office with basement parking, facade glazing strategy, and optimized MEP routing for long-term maintenance.',
    story:
      'This project required an aggressive timeline and tenant-ready floor plates. We used a phased fit-out approach and early MEP coordination to keep the final handover on schedule.',
    highlights: [
      'Basement ventilation and drainage optimized for monsoon load',
      'Facade design aligned with thermal performance goals',
      'Dedicated risers for MEP serviceability',
      'Weekly quality and safety walkthroughs with the client team',
    ],
  },
  {
    id: 'p3',
    category: 'residential',
    status: 'active',
    statusLabel: 'Active',
    title: 'ECR Twin Villa Project',
    location: 'ECR, Chennai',
    type: 'Luxury Villas',
    area: '4,100 sq.ft each',
    floors: 'G + 1',
    package: 'Ultra-Luxury Package',
    year: '2026',
    progressClass: 'w-2/5',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    imageHeight: 'h-80',
    summary:
      'Two side-by-side villas designed for joint families with separate access, shared service core, and landscape zoning.',
    story:
      'The owners wanted two villas with a unified visual language but independent daily routines. We balanced both requirements through mirrored planning and separate service entries.',
    highlights: [
      'Shared utility corridor with independent metering',
      'Premium facade finish and weather-protected openings',
      'Site-level drainage and recharge pit planning',
      'Execution monitored with architect + engineer sign-offs',
    ],
  },
  {
    id: 'p4',
    category: 'commercial',
    status: 'completed',
    statusLabel: 'Completed',
    title: 'Porur Healthcare Centre',
    location: 'Porur, Chennai',
    type: 'Medical Facility',
    area: '8,900 sq.ft',
    floors: 'G + 3',
    package: 'Premium Commercial Package',
    year: '2024',
    progressClass: 'w-full',
    image:
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80',
    imageHeight: 'h-72',
    summary:
      'Outpatient-focused healthcare block with sterile zoning, patient flow planning, and hospital-grade finishing.',
    story:
      'Clinical flow and hygiene were top priorities. Our team worked closely with medical planners to separate patient movement, diagnostics, and service access in each floor.',
    highlights: [
      'Functional zoning for OP, diagnostics, and pharmacy',
      'Medical-grade washable wall and floor finish package',
      'Power backup interface for critical equipment',
      'Structured snag list closure before commissioning',
    ],
  },
  {
    id: 'p5',
    category: 'residential',
    status: 'near_completion',
    statusLabel: 'Near Completion',
    title: 'Coimbatore Row Homes',
    location: 'Saravanampatti, Coimbatore',
    type: 'Row House Cluster',
    area: '2,150 sq.ft each',
    floors: 'G + 1',
    package: 'Standard Plus Package',
    year: '2026',
    progressClass: 'w-4/5',
    image:
      'https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=1200&q=80',
    imageHeight: 'h-96',
    summary:
      'Eight-row-house gated development with shared STP planning, rainwater recharge pits, and turnkey interiors.',
    story:
      'For this gated development, the focus was repeatable quality across all units. We standardized structural and finishing workflows to keep each handover consistent.',
    highlights: [
      'Uniform structural grid across all units',
      'Shared STP and rainwater recharge infrastructure',
      'Optimized material procurement for cost stability',
      'Unit-wise checklist before interior handover',
    ],
  },
  {
    id: 'p6',
    category: 'commercial',
    status: 'active',
    statusLabel: 'Active',
    title: 'Trichy Retail Complex',
    location: 'Cantonment, Trichy',
    type: 'Retail + Office Mix',
    area: '14,300 sq.ft',
    floors: 'G + 5',
    package: 'Commercial Package',
    year: '2026',
    progressClass: 'w-1/3',
    image:
      'https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&w=1200&q=80',
    imageHeight: 'h-80',
    summary:
      'High-footfall mixed-use building delivered with phased handover so tenants could begin fit-out early.',
    story:
      'The goal was early tenant occupation without compromising final quality. We executed a phased completion plan with strict floor-wise handover and inspection checkpoints.',
    highlights: [
      'Phased occupancy support for retail tenants',
      'Service core planning for mixed-use circulation',
      'Fire and safety compliance reviews at each stage',
      'Joint punch-list review before final completion',
    ],
  },
]

export function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId)
}
