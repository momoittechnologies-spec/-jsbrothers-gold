export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappNumber: string;
  instagramHandle: string;
  instagramUrl: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  googleRating: number;
  reviewCount: number;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  openingHours: {
    weekdays: string;
    sunday: string;
    note: string;
  };
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "JS BROTHER'S GOLD",
  tagline: "Premier Gold Buyers & Valuation",
  subTagline: "Kadapa's Trusted Gold Evaluation Destination",
  phone: "079953 25224",
  phoneRaw: "917995325224",
  phoneFormatted: "+91 79953 25224",
  whatsappNumber: "917995325224",
  instagramHandle: "@js_brothers_gold",
  instagramUrl: "https://www.instagram.com/js_brothers_gold",
  address: {
    street: "Y Junction, New Bus Stand Road, Main Road",
    landmark: "Opposite Zudio Showroom",
    area: "Vivekananda Nagar",
    city: "Kadapa",
    state: "Andhra Pradesh",
    pincode: "516001",
    full: "Y Junction, New Bus Stand Road, Main Road, Opposite Zudio Showroom, Vivekananda Nagar, Kadapa, Andhra Pradesh – 516001"
  },
  googleRating: 5.0,
  reviewCount: 55,
  googleMapsUrl: "https://maps.google.com/?q=JS+BROTHER%27S+GOLD+Kadapa+Y+Junction+Opposite+Zudio",
  // Google Maps embed URL centered at Y Junction / New Bus Stand Road Kadapa
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.344445856417!2d78.823055!3d14.475306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3720760f38b1f%3A0x6b107e3a890a2a12!2sY%20Junction%2C%20New%20Bus%20Stand%20Rd%2C%20Vivekananda%20Nagar%2C%20Kadapa%2C%20Andhra%20Pradesh%20516001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  openingHours: {
    weekdays: "Monday – Saturday: 10:00 AM – 8:30 PM",
    sunday: "Sunday: 10:30 AM – 6:00 PM",
    note: "Subject to confirmation by phone"
  }
};
