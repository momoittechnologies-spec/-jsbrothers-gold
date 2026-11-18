import img1 from '../assets/Gallery/uniform/1.webp';
import img3 from '../assets/Gallery/uniform/3.webp';
import img4 from '../assets/Gallery/uniform/4.webp';
import img5 from '../assets/Gallery/uniform/5.webp';
import img6 from '../assets/Gallery/uniform/6.webp';
import img7 from '../assets/Gallery/uniform/7.webp';
import img8 from '../assets/Gallery/uniform/8.webp';
import img9 from '../assets/Gallery/uniform/9.webp';
import img10 from '../assets/Gallery/uniform/10.webp';
import img11 from '../assets/Gallery/uniform/11.webp';
import img12 from '../assets/Gallery/uniform/12.webp';

import orig1 from '../assets/Gallery/1.webp';
import orig3 from '../assets/Gallery/3.webp';
import orig4 from '../assets/Gallery/4.webp';
import orig5 from '../assets/Gallery/5.webp';
import orig6 from '../assets/Gallery/6.webp';
import orig7 from '../assets/Gallery/7.webp';
import orig8 from '../assets/Gallery/8.webp';
import orig9 from '../assets/Gallery/9.webp';
import orig10 from '../assets/Gallery/10.webp';
import orig11 from '../assets/Gallery/11.webp';
import orig12 from '../assets/Gallery/12.webp';

export type GalleryCategory = 'all' | 'showroom' | 'establishment' | 'team-events';

export interface GalleryItem {
  id: number;
  title: string;
  category: 'showroom' | 'establishment' | 'team-events';
  categoryLabel: string;
  description: string;
  thumbnail: string;
  fullImage: string;
}

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Photos (11)' },
  { id: 'showroom', label: 'Showroom & Counters' },
  { id: 'establishment', label: 'Establishment & Facade' },
  { id: 'team-events', label: 'Team & Celebrations' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Dedicated Valuation Specialists",
    category: "team-events",
    categoryLabel: "Team & Staff",
    description: "Our certified, courteous valuation staff ready to assist you at JS BROTHER'S GOLD, Kadapa.",
    thumbnail: img1,
    fullImage: orig1
  },
  {
    id: 2,
    title: "Precision Digital Valuation Desk",
    category: "showroom",
    categoryLabel: "Showroom",
    description: "Live gram-by-gram evaluation desk equipped with certified digital carat scales and currency counters.",
    thumbnail: img3,
    fullImage: orig3
  },
  {
    id: 3,
    title: "Flagship Kadapa Commercial Landmark",
    category: "establishment",
    categoryLabel: "Establishment",
    description: "Multi-story gold valuation center at Y Junction, New Bus Stand Road, opposite Zudio Showroom.",
    thumbnail: img4,
    fullImage: orig4
  },
  {
    id: 4,
    title: "Auspicious Lamp Lighting Ceremony",
    category: "team-events",
    categoryLabel: "Celebrations",
    description: "Traditional inauguration ceremony marking the launch of our premier Kadapa gold buying center.",
    thumbnail: img5,
    fullImage: orig5
  },
  {
    id: 5,
    title: "Executive Showroom & Waiting Lounge",
    category: "showroom",
    categoryLabel: "Showroom",
    description: "Spacious, air-conditioned customer lounge designed for dignified, transparent private consultations.",
    thumbnail: img6,
    fullImage: orig6
  },
  {
    id: 6,
    title: "Customer Appraisal & Consultation Bay",
    category: "showroom",
    categoryLabel: "Showroom",
    description: "Direct appraisal counter where your jewellery is examined and tested in your presence without hidden deductions.",
    thumbnail: img7,
    fullImage: orig7
  },
  {
    id: 7,
    title: "Grand Opening Entrance Gate",
    category: "team-events",
    categoryLabel: "Celebrations",
    description: "Festive floral entrance welcoming customers to Kadapa's trusted gold valuation house.",
    thumbnail: img8,
    fullImage: orig8
  },
  {
    id: 8,
    title: "Illuminated Roadside Landmark Sign",
    category: "establishment",
    categoryLabel: "Establishment",
    description: "Prominent highway-facing illuminated signage guiding visitors directly to our showroom at Y Junction.",
    thumbnail: img9,
    fullImage: orig9
  },
  {
    id: 9,
    title: "Transparency & Fair Valuation Charter",
    category: "showroom",
    categoryLabel: "Showroom",
    description: "Official wall of transparent valuation policies, customer assurances, and compliance frameworks.",
    thumbnail: img10,
    fullImage: orig10
  },
  {
    id: 10,
    title: "Founder Media Press Conference",
    category: "team-events",
    categoryLabel: "Celebrations",
    description: "Leadership addressing television news networks on bringing genuine, transparent gold buying to Kadapa.",
    thumbnail: img11,
    fullImage: orig11
  },
  {
    id: 11,
    title: "Showroom Inaugural Hallmark Plaque",
    category: "establishment",
    categoryLabel: "Establishment",
    description: "Official royal blue hallmark plaque commemorating our Kadapa flagship showroom establishment.",
    thumbnail: img12,
    fullImage: orig12
  }
];
