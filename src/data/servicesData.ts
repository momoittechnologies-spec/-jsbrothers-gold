export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  acceptedItems: string[];
  processSummary: string;
  idealFor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "old-gold-buying",
    slug: "old-gold-buying",
    title: "Old Gold Buying",
    subtitle: "Turn Unused Heirlooms Into Immediate Value",
    tagline: "Purchase of old, inherited and unused gold jewellery with instant transparency.",
    shortDescription: "Turn your old and unused gold into immediate value with our certified karatmeter testing and top market valuation in Kadapa.",
    fullDescription: "Whether you have vintage traditional jewellery, inherited ornaments you no longer wear, or gold coins, JS BROTHER'S GOLD provides an honest, dignified valuation experience. Every item is weighed on certified class-II high-precision digital scales right in front of you, with zero melting deductions or hidden wastage charges.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "100% In-front-of-you digital scale weighing",
      "Non-destructive German Karatmeter purity testing",
      "Instant spot valuation matching current bullion rates",
      "Immediate bank transfer (IMPS/NEFT) or cash payout as per regulations"
    ],
    acceptedItems: [
      "Traditional bridal necklaces & harams",
      "Old bangles, kadas, and bracelets",
      "Vintage rings, earrings, and jhumkas",
      "Gold coins, medallions, and legacy bars"
    ],
    processSummary: "We inspect your ornaments together, remove stone weights accurately without damage, verify purity via electronic Karatmeter, and provide an immediate value quotation.",
    idealFor: "Individuals and families wanting to liquidate unused gold ornaments or upgrade to new investments."
  },
  {
    id: "broken-gold-buying",
    slug: "broken-gold-buying",
    title: "Broken Gold Buying",
    subtitle: "Real Gold Retains Real Value, Even When Damaged",
    tagline: "Enquiries & instant purchase for broken, bent, single, and unwanted gold pieces.",
    shortDescription: "Damaged chains, bent rings, single earrings, or scrap gold—gold is gold. We evaluate pure gold content without penalizing you for physical condition.",
    fullDescription: "Jewellery stores often discount or refuse damaged or scrap gold. At JS BROTHER'S GOLD, we value gold strictly by its elemental purity and actual weight. A broken gold chain or a snapped bracelet holds the exact same intrinsic karat value as a brand-new showroom ornament.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "No penalty or discount for broken, scratched, or dented condition",
      "Pure gold content assessed by laser spectrometry",
      "Single earrings, detached pendants, and fragments accepted",
      "Fast 10-minute evaluation and instant settlement"
    ],
    acceptedItems: [
      "Snapped chains and mangalsutras",
      "Bent or deformed bangles and rings",
      "Single unmatched earrings or lockets",
      "Dental gold fragments & dental caps",
      "Assorted scrap jewellery pieces"
    ],
    processSummary: "Bring your damaged items to our Kadapa office; we gently inspect and weigh them on micro-gram scales to determine the exact pure gold mass.",
    idealFor: "Anyone with damaged jewellery lying forgotten in safety lockers or dressing tables."
  },
  {
    id: "professional-gold-valuation",
    slug: "professional-gold-valuation",
    title: "Professional Gold Valuation",
    subtitle: "Scientific, Non-Destructive Karatmeter Assessment",
    tagline: "Evaluation of gold based on certified, transparent valuation processes.",
    shortDescription: "Understand the precise purity, karat grade, and current market worth of your gold with certified non-destructive scientific testing.",
    fullDescription: "Wondering if your inherited gold is 22K, 18K, or 14K? Our professional valuation lab uses advanced X-ray Fluorescence (XRF) Karatmeter technology. Unlike archaic acid and rub-stone methods that damage jewellery, our optical testing is 100% non-invasive, preserving your gold's integrity while delivering down-to-the-decimal purity reports.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "100% Non-destructive XRF laser testing (no scratches, no acid)",
      "Instant Karat certificate & purity breakdown percentage",
      "Transparent breakdown of net gold vs gemstone weights",
      "No obligation to sell—pure clarity and peace of mind"
    ],
    acceptedItems: [
      "All hallmarked and non-hallmarked gold items",
      "White gold, rose gold, and yellow gold alloys",
      "Antique temple jewellery and heirloom pieces",
      "Investment bars, biscuits, and custom medallions"
    ],
    processSummary: "Your gold is placed inside our non-invasive Karatmeter chamber. Within seconds, a computerized printout reveals the exact percentage of Gold, Silver, Copper, and Zinc.",
    idealFor: "Family asset distribution, insurance evaluation, wealth planning, or simple peace of mind before making financial decisions."
  },
  {
    id: "pledged-gold-release",
    slug: "pledged-gold-release-assistance",
    title: "Pledged Gold Release Assistance",
    subtitle: "Clear Bank Loans & Release Your Pledged Gold Without Financial Stress",
    tagline: "Assistance and enquiries regarding pledged gold release from banks & pawnbrokers.",
    shortDescription: "Stuck with high interest rates on gold loans? We help you pay off your loan, release your pledged gold safely from banks or pawnbrokers, and buy the remaining gold or hand back surplus cash.",
    fullDescription: "Gold loans from non-banking finance companies (NBFCs), cooperative societies, and pawnbrokers often carry steep compounding interest rates that quickly accumulate. Our Pledged Gold Assistance team helps you navigate the settlement process transparently. We accompany you or clear the loan principal and interest directly, release the physical ornaments, perform an accurate valuation, and pay you the balance difference immediately.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "Complete relief from compounding high-interest pawn/loan traps",
      "Transparent settlement statement review with the lender",
      "Fast funding to clear the pending loan balance on your behalf",
      "Immediate payout of the surplus equity directly to your account"
    ],
    acceptedItems: [
      "Bank gold loans (SBI, Canara, Andhra Pragathi Grameena Bank, etc.)",
      "NBFC loans (Muthoot, Manappuram, IIFL, etc.)",
      "Private pawnbroker and local financier pledges",
      "Cooperative credit society gold loans"
    ],
    processSummary: "Share your loan receipt or pledge slip. We calculate the exact redemption amount vs the current market value of your gold. Once agreed, we settle the lender and release your gold securely.",
    idealFor: "Borrowers facing gold auction notices, skyrocketing monthly interest dues, or wishing to exit a costly loan with net positive cash."
  }
];

export const TRUST_FEATURES = [
  {
    id: "transparent-valuation",
    title: "Transparent Valuation Approach",
    description: "Every step is conducted directly in front of you. Class-II digital precision scales and electronic Karatmeters leave zero room for doubt or guesswork.",
    icon: "ShieldCheck"
  },
  {
    id: "professional-assistance",
    title: "Professional Customer Assistance",
    description: "Our Kadapa team treats every customer with deep respect, dignity, and confidential financial discretion throughout the evaluation.",
    icon: "Award"
  },
  {
    id: "convenient-enquiry",
    title: "Convenient Enquiry Process",
    description: "Connect instantly via direct phone call, prefilled WhatsApp enquiry, or walk into our landmark location opposite Zudio Showroom.",
    icon: "Clock"
  },
  {
    id: "local-presence",
    title: "Local Business Presence",
    description: "Deeply rooted in Kadapa at Y Junction, New Bus Stand Road. A trusted physical establishment with 55+ 5-star Google reviews.",
    icon: "MapPin"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Contact Our Team",
    short: "Call or WhatsApp",
    description: "Reach out via 079953 25224 or WhatsApp with details of the gold items you wish to evaluate or pledged loans you want to release.",
    time: "Instant"
  },
  {
    step: "02",
    title: "Discuss Your Gold",
    short: "Consultation",
    description: "Our gold specialists review your requirements, answer your questions, and explain live market bullion rates for 24K, 22K, and 18K purity.",
    time: "2 – 3 Mins"
  },
  {
    step: "03",
    title: "Arrange Evaluation",
    short: "Live Assessment",
    description: "Visit our showroom at Y Junction, Kadapa. We weigh and test your gold on non-destructive German Karatmeters right before your eyes.",
    time: "5 – 10 Mins"
  },
  {
    step: "04",
    title: "Proceed After Understanding",
    short: "Instant Settlement",
    description: "Once you are completely satisfied with the valuation breakdown, receive immediate payment via instant IMPS bank transfer or cash as per law.",
    time: "Immediate"
  }
];
