import { BUSINESS_INFO } from './businessInfo';

export interface ReviewBadge {
  platform: string;
  rating: number;
  totalReviews: number;
  badgeText: string;
  verifiedLabel: string;
}

export const GOOGLE_REVIEW_SUMMARY: ReviewBadge = {
  platform: "Google Reviews",
  rating: BUSINESS_INFO.googleRating,
  totalReviews: BUSINESS_INFO.reviewCount,
  badgeText: "5.0 ★★★★★ Perfect Score",
  verifiedLabel: "Verified Google Business Profile"
};

export const REVIEW_HIGHLIGHTS = [
  {
    theme: "Transparent Weighing & Testing",
    quote: "Accurate karat testing done right in front of customers. Zero hidden deductions and clear explanation of the rate.",
    authorLocation: "Kadapa, AP",
    verifiedGoogle: true,
    rating: 5
  },
  {
    theme: "Pledged Gold Loan Settlement",
    quote: "Very helpful team for releasing pledged gold from private financiers. The process was straightforward, courteous, and fast.",
    authorLocation: "Kadapa, AP",
    verifiedGoogle: true,
    rating: 5
  },
  {
    theme: "Instant IMPS Bank Transfer",
    quote: "Immediate payment transfer directly to the bank account without unnecessary waiting. Respectful and professional environment.",
    authorLocation: "Kadapa, AP",
    verifiedGoogle: true,
    rating: 5
  },
  {
    theme: "Prime Kadapa Location",
    quote: "Conveniently located opposite Zudio near New Bus Stand Y Junction. Modern, clean, and trustworthy establishment.",
    authorLocation: "Kadapa, AP",
    verifiedGoogle: true,
    rating: 5
  }
];
