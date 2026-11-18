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
    tagline: "Purchase of old, inherited and unused gold jewellery with straightforward transparency.",
    shortDescription: "Turn your old and unused gold into immediate value with our transparent digital scale weighing and current market valuation in Kadapa.",
    fullDescription: "Whether you have vintage traditional jewellery, inherited ornaments you no longer wear, or gold coins, JS BROTHER'S GOLD provides an honest, dignified valuation experience. Every item is weighed on precision digital scales right in front of you, with clear explanation of the valuation process.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "100% In-front-of-you digital scale weighing",
      "Transparent purity and weight evaluation",
      "Fair spot valuation matching current bullion rates",
      "Immediate bank transfer (IMPS/NEFT) or cash payout as per regulations"
    ],
    acceptedItems: [
      "Traditional bridal necklaces & harams",
      "Old bangles, kadas, and bracelets",
      "Vintage rings, earrings, and jhumkas",
      "Gold coins, medallions, and legacy bars"
    ],
    processSummary: "We inspect your ornaments together, account for stone weights accurately, evaluate purity directly in front of you, and provide an immediate value quotation.",
    idealFor: "Individuals and families wanting to liquidate unused gold ornaments or upgrade to new investments."
  },
  {
    id: "broken-gold-buying",
    slug: "broken-gold-buying",
    title: "Broken Gold Buying",
    subtitle: "Real Gold Retains Real Value, Even When Damaged",
    tagline: "Enquiries & instant purchase for broken, bent, single, and unwanted gold pieces.",
    shortDescription: "Damaged chains, bent rings, single earrings, or scrap gold—gold is gold. We evaluate pure gold content without penalizing you for physical condition.",
    fullDescription: "Jewellery stores often discount or refuse damaged or scrap gold. At JS BROTHER'S GOLD, we value gold strictly by its elemental purity and actual weight. A broken gold chain or a snapped bracelet holds intrinsic gold value based on its purity grade.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "No penalty or unfair discount for broken or scratched condition",
      "Gold content evaluated accurately in your presence",
      "Single earrings, detached pendants, and fragments accepted",
      "Fast, courteous evaluation and instant settlement"
    ],
    acceptedItems: [
      "Snapped chains and mangalsutras",
      "Bent or deformed bangles and rings",
      "Single unmatched earrings or lockets",
      "Dental gold fragments & small items",
      "Assorted scrap jewellery pieces"
    ],
    processSummary: "Bring your damaged items to our Kadapa showroom; we gently inspect and weigh them on precision scales to determine the exact gold content.",
    idealFor: "Anyone with damaged jewellery lying forgotten in safety lockers or dressing tables."
  },
  {
    id: "professional-gold-valuation",
    slug: "professional-gold-valuation",
    title: "Professional Gold Valuation",
    subtitle: "Transparent In-Person Gold Valuation",
    tagline: "Evaluation of gold based on relevant, transparent valuation processes.",
    shortDescription: "Understand the precise purity, karat grade, and current market worth of your gold through our transparent in-person evaluation process.",
    fullDescription: "Wondering what purity your inherited gold is? Our professional valuation desk in Kadapa provides complete clarity. We examine your gold directly in your presence, explain every gram and purity percentage, and provide an itemized breakdown with zero obligation to sell.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "In-front-of-you visual and weight examination",
      "Clear explanation of purity grade and karat assessment",
      "Transparent breakdown of net gold vs gemstone weights",
      "No obligation to sell—pure clarity and peace of mind"
    ],
    acceptedItems: [
      "All hallmarked and non-hallmarked gold items",
      "White gold, rose gold, and yellow gold alloys",
      "Antique temple jewellery and heirloom pieces",
      "Investment bars, biscuits, and custom medallions"
    ],
    processSummary: "Your gold is weighed and examined on our valuation desk. We clearly explain the net gold content, applicable bullion rates, and provide an honest valuation breakdown.",
    idealFor: "Family asset distribution, wealth planning, or simple peace of mind before making financial decisions."
  },
  {
    id: "pledged-gold-release",
    slug: "pledged-gold-release-assistance",
    title: "Pledged Gold Release Assistance",
    subtitle: "Assistance Regarding Pledged Gold Release",
    tagline: "Assistance and enquiries regarding pledged gold release from banks & pawnbrokers.",
    shortDescription: "Stuck with high interest rates on gold loans? We assist you in reviewing your pledge details, releasing your pledged gold from banks or lenders, and receiving the remaining balance value.",
    fullDescription: "Gold loans from non-banking finance companies (NBFCs), cooperative societies, and local lenders often carry steep interest rates that accumulate over time. Our Pledged Gold Assistance team helps you navigate the settlement process transparently. We assist in clearing the loan dues, retrieve the physical ornaments, perform an accurate valuation, and pay you the balance difference immediately.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "Relief from compounding high-interest pawn/loan payments",
      "Transparent settlement statement review with the lender",
      "Assistance to clear the pending loan balance smoothly",
      "Immediate payout of the surplus balance directly to your account"
    ],
    acceptedItems: [
      "Bank gold loans (SBI, Canara, Andhra Pragathi Grameena Bank, etc.)",
      "NBFC loans (Muthoot, Manappuram, IIFL, etc.)",
      "Private pawnbroker and local financier pledges",
      "Cooperative credit society gold loans"
    ],
    processSummary: "Share your loan receipt or pledge slip. We calculate the pending redemption amount against the current market value of your gold. Once agreed, we assist in settling the lender and releasing your gold securely.",
    idealFor: "Borrowers facing gold auction deadlines, high interest dues, or wishing to exit a loan with net positive cash."
  },
  {
    id: "gold-purity-testing",
    slug: "gold-purity-testing",
    title: "Gold Purity Testing",
    subtitle: "Non-Destructive Karat & Purity Analysis",
    tagline: "Transparent and precise gold purity verification conducted directly in your view.",
    shortDescription: "Determine the exact karat and fineness of your gold ornaments with our transparent, non-destructive purity testing process in Kadapa.",
    fullDescription: "Whether you want to verify the authenticity of hallmarked or non-hallmarked jewellery, heirlooms, or bullion, JS BROTHER'S GOLD provides honest, non-invasive purity testing. Our transparent methodology ensures your precious ornaments are never scratched, melted, or chemically damaged, giving you complete confidence in the real karat value of your gold.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "100% Non-destructive evaluation with zero scratches or damage",
      "Accurate karat determination (24K, 22K, 18K, 14K & custom alloys)",
      "Performed directly in your presence for total transparency",
      "Itemized purity explanation with zero obligation to sell"
    ],
    acceptedItems: [
      "Hallmarked 916 and non-hallmarked vintage jewellery",
      "Traditional temple jewellery and antique heirlooms",
      "Gold coins, bullion bars, and commemorative medallions",
      "White gold, yellow gold, and rose gold ornaments"
    ],
    processSummary: "We inspect and test your ornaments in your presence using precision evaluation equipment, explaining every karat detail and purity percentage openly.",
    idealFor: "Anyone wishing to verify the true purity of their gold before selling, exchanging, or valuing family assets."
  },
  {
    id: "instant-cash-payment",
    slug: "instant-cash-payment",
    title: "Instant Cash Payment",
    subtitle: "Immediate Spot Settlement in Hand or Bank Transfer",
    tagline: "Fair spot valuation paid out instantaneously upon deal agreement.",
    shortDescription: "Receive immediate payment in hand or direct to your bank account via instant IMPS transfer with zero waiting time and zero deductions.",
    fullDescription: "We respect your time and financial needs. Once your gold is weighed, tested, and valued to your satisfaction, JS BROTHER'S GOLD settles your payment on the spot. Choose between immediate cash in hand (in full compliance with statutory limits) or instant IMPS/NEFT bank transfer directly credited to your account before you leave our Kadapa showroom.",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=85",
    benefits: [
      "Instant on-the-spot payment settlement within minutes",
      "Choice of immediate cash payout (as per regulatory guidelines)",
      "Direct instant bank credit via IMPS / UPI / RTGS",
      "Transparent receipt with clear weight, purity, and rate calculations"
    ],
    acceptedItems: [
      "All gold items sold at our Kadapa showroom",
      "Old, broken, single, and pledged gold liquidations",
      "Gold coins, legacy bars, and scrap jewellery payouts"
    ],
    processSummary: "Upon accepting our transparent valuation quotation, your preferred payment method is processed immediately with an official acknowledgement receipt.",
    idealFor: "Customers needing urgent liquidity, emergency funds, or a fast, reliable, and secure gold selling transaction."
  }
];

export const TRUST_FEATURES = [
  {
    id: "transparent-valuation",
    title: "Transparent Valuation Approach",
    description: "Every step is conducted directly in front of you. Precision digital scales and clear visual assessment leave zero room for doubt or guesswork.",
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
    description: "Our gold specialists review your requirements, answer your questions, and explain prevailing market bullion rates for 24K, 22K, and 18K purity.",
    time: "2 – 3 Mins"
  },
  {
    step: "03",
    title: "Arrange Evaluation",
    short: "Live Assessment",
    description: "Visit our showroom at Y Junction, Kadapa. We weigh and examine your gold on precision digital scales right before your eyes.",
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
