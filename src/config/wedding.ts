// Central wedding configuration. Edit values here — the whole site updates.
// Anything wrapped in TBC() is a placeholder shown with a "to be confirmed" tag.
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroLandscape from "@/assets/hero-landscape.jpg";
import music from "@/assets/music.m4a";
import us3 from "@/assets/us-3.jpg";
import us4 from "@/assets/us-4.jpg";
import us5 from "@/assets/us-5.jpg";
import us6 from "@/assets/us-6.jpg";
import haldiPhoto from "@/assets/haldi.jpg";
import sangeetPhoto from "@/assets/sangeet.jpg";
import weddingPhoto from "@/assets/wedding-ceremony.jpg";

export const TBC_PREFIX = "[TBC] ";
export const TBC = (s: string) => TBC_PREFIX + s;
export const isTBC = (s?: string) => !!s && s.startsWith(TBC_PREFIX);
export const clean = (s?: string) => (s ?? "").replace(TBC_PREFIX, "");

export type WeddingEvent = {
  id: string;
  name: string;
  ceremony: string; // traditional name, shown above the event name and used in RSVPs
  description: string;
  start: string; // ISO with timezone offset
  end: string; // same as start when no end time is set; shown as "onwards"
  timeIsPlaceholder: boolean;
  venue: string;
  address: string;
  hideDirections?: boolean; // e.g. a private home with no map pin yet
  dressCode?: string;
  image?: string;
};

export const wedding = {
  bride: "Nidhi",
  groom: "Puneet",
  brideParents: "Pooja Bansal & Parveen Kumar Bansal",
  groomParents: "Suman Goyal & Harcharan Dass Goyal",
  // This copy is sent by Puneet's parents to relatives, so it leads with Puneet and the
  // opening page says who the invitation is from.
  host: {
    from: "Mrs Suman Goyal & Er HD Goyal",
    address: "#103, Phase-3, Model\u00a0Town, Bathinda, Punjab",
  },
  // Two lines of a couplet, shown on separate lines under the names.
  invitation: "Bete ke sehre mein beti ki muskaan,\naapke aashirwad se poore hon armaan",
  date: "2026-12-05T20:00:00+05:30",
  dateIsPlaceholder: false,
  timeIsPlaceholder: false,
  timezone: "Asia/Kolkata",
  location: "Bathinda",
  hashtag: "#sarvgunNiPun",
  // The couple's names are hidden in the hashtag; the hero highlights these parts and names them.
  hashtagNames: [
    { part: "Ni", name: "Nidhi" },
    { part: "Pun", name: "Puneet" },
  ],
  hashtagTagline: "A union of virtues, a lifetime of love",
  rsvpDeadline: TBC("Date to be confirmed"),
  // Google Apps Script web app URL (ends in /exec) that appends each RSVP to a Google Sheet.
  // See docs/google-sheet-rsvp.md. Leave empty to skip the sheet.
  rsvpSheetUrl: "https://script.google.com/macros/s/AKfycbwCL5qN3ovunb5dtbxFRoEUYB1df5OS75XxeNi4mb6nQejh76YKMNfd7BkElQ2lat8Zow/exec",
  heroImage: heroPortrait,
  heroImageLandscape: heroLandscape,
  musicUrl: music, // Jashn-E-Bahaaraa, 0:24–1:30, looped

  events: [
    {
      id: "haldi",
      name: "Golden Hour",
      ceremony: "Haldi & Sainth",
      description: "Shagun ka noor, apno ka pyar",
      start: "2026-12-03T10:00:00+05:30",
      end: "2026-12-03T10:00:00+05:30",
      timeIsPlaceholder: false,
      venue: "At home",
      address: "Bathinda",
      hideDirections: true,
      dressCode: "Shades of yellow, bright and sunny",
      image: haldiPhoto,
    },
    {
      id: "sangeet",
      name: "An Evening of Music",
      ceremony: "Ladies Sangeet",
      description: "Jashan, junoon aur dance ka suroor",
      start: "2026-12-04T19:00:00+05:30",
      end: "2026-12-04T19:00:00+05:30",
      timeIsPlaceholder: false,
      venue: "Hotel Sepal",
      address: "Goniana Road, Bathinda, Punjab 151001",
      dressCode: "Festive glam or Indo-western, dress to dance",
      image: sangeetPhoto,
    },
    {
      id: "wedding",
      name: "The Big Day",
      ceremony: "Wedding",
      description: "Varmala ke rang, taaron ki chhaon mein saat janmon ka sang",
      start: "2026-12-05T20:00:00+05:30",
      end: "2026-12-05T20:00:00+05:30",
      timeIsPlaceholder: false,
      venue: "Sky Heights Resort",
      address: "National Highway 7, Barnala–Bathinda Road, Rampura Phul, Punjab 151111",
      dressCode: "Traditional Indian, formal",
      image: weddingPhoto,
    },
  ] as WeddingEvent[],

  travel: {
    venue: {
      name: "Bathinda, Punjab",
      address: "The Haldi and Sangeet are in Bathinda. The wedding is at Sky Heights Resort, Rampura Phul, about 30 km away.",
    },
    // Train timings change; guests are pointed to IRCTC / NTES for the current schedule.
    railway: {
      intro: "Bathinda Junction (BTI) is about 5 hours from Delhi, with several direct trains every day:",
      trains: [
        { no: "20409", name: "Delhi Cantt – Bathinda SF Express", note: "morning, about 5 hrs" },
        { no: "12481", name: "Delhi – Sri Ganganagar Intercity", note: "afternoon, about 5 hrs" },
        { no: "12455", name: "Delhi Sarai Rohilla – Bikaner Express", note: "overnight, about 6 hrs" },
        { no: "14731", name: "Kisan Express (Delhi – Bathinda)", note: "about 7 hrs" },
      ],
      outro: "Please check current timings on IRCTC or NTES before booking.",
    },
    airport: "Fly into Amritsar (ATQ), about 3.5 hours away by road; Ludhiana (LUH), about 2.5 hours; or Chandigarh (IXC), the biggest nearby airport, about 4 hours.",
    road: "Bathinda is about 320 km from Delhi, roughly 5 to 6 hours by car. Buses run from Delhi through the day and take about 6 to 7 hours.",
  },

  galleryTitle: "Our Beginning",
  // Written by Puneet's parents, who sign it (see host above).
  galleryNote: [
    "One of the most awaited days of our lives is finally here, and we can't imagine celebrating it without you. ❤️",
    "You've been such a special part of our lives, and having you by our side to bless Puneet and Nidhi as they begin this new chapter would mean the world to us.",
  ],

  gallery: [
    { src: us3, alt: "Nidhi and Puneet sharing an umbrella by the pool" },
    { src: us4, alt: "Nidhi and Puneet standing together in a cafe" },
    { src: us5, alt: "Puneet holding Nidhi's hand as she twirls an umbrella in the rain" },
    { src: us6, alt: "Nidhi and Puneet at a candlelit birthday dinner" },
  ],
};

export const coupleNames = `${wedding.groom} & ${wedding.bride}`;

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-IN", { timeZone: wedding.timezone, ...opts }).format(new Date(iso));
}
