/* =====================================================================
   SHIV PARVATI · HIMALAYAN WEDDING INVITATION
   EDIT ONLY THIS FILE FOR EACH COUPLE.
   Keep the "quotes" and the commas. Pictures live in the images folder.
   ===================================================================== */
window.WEDDING = {

  /* ---- couple ---- */
  groom: "Dharmesh",                   /* short name (opening screen & top of page) */
  bride: "Nikita",
  groomFull: "Dharmesh D Vira",        /* full name on the invitation card */
  brideFull: "Nikita Ghosh",
  monogram: "N & D",
  groomParents: "Late Shri Damji Shah & Mrs. Ansuya Damji Shah",
  groomLabel: "Son of",
  brideParents: "Mr. Sanjib Ghosh & Mrs. Bhaswati Ghosh",
  brideLabel: "Daughter of",

  /* ---- opening (lotus blooms when the Om is tapped) ---- */
  gateEyebrow: "With the blessings of Shiva & Parvati",
  gateText: "Tap the Om to begin",

  /* ---- words ---- */
  cardFooter: null,                    /* last line of the invitation card; null = auto (date + venue), "" = hide */
  heroEyebrow: "Where Shiva wed Parvati",
  place: "Triyuginarayan · Uttarakhand",
  blessing: "Shri Ganeshaya Namah",
  tagline: "In the sacred Himalayas, where Shiva and Parvati were wed, our forever begins.",
  inviteLine: "Together with our families, we joyfully invite you to celebrate our wedding.",

  /* ---- pictures (leave "" to hide) ---- */
  heroImage: "images/hero-shiv.jpg",   /* picture at the top of the page */
  heroFocus: "50% 70%",
  footerImage: "",
  couplePhoto: "",                     /* optional couple photo in the invitation card */
  venueImage: "images/venue-temple.jpg",
  venueFocus: "40% 55%",
  gallery: [                           /* the couple's photos (portrait looks best) */
    { src: "images/g1.jpg", cap: "Blessed by Mahadev" },
    { src: "images/g2.jpg", cap: "Two hearts, one journey" },
    { src: "images/g3.jpg", cap: "Walking into forever" },
    { src: "images/g4.jpg", cap: "Bound by love & tradition" }
  ],
  /* Shiv–Parvati blessing picture at the very end, after the names ("" = hide) */
  blessingImage: "images/shiv-parvati.jpg",
  blessingQuote: "As Shiva and Parvati are one, may our two souls become one.",
  blessingSub: "Seeking your blessings for our new beginning",

  /* ---- date (the three scratch cards reveal this — they appear on EVERY visit) ---- */
  weddingDateTime: "2027-01-31T10:00:00+05:30",   /* used for the countdown */
  dateDay: "31", dateMonth: "JAN", dateYear: "2027",
  sealText: "Scratch each card, one by one, to reveal the date",
  dateNote: "Wedding at Triyuginarayan Temple",

  /* ---- events (add / remove / reorder lines freely; "time" can also be a place) ---- */
  eventsEyebrow: "Five days in the Himalayas",
  events: [
    { date: "28 Jan", time: "Haridwar",            title: "Ganga Nimantran",   note: "Inviting Maa Ganga's blessings on the holy ghats",   image: "images/ganga.svg.PNG" },
    { date: "29 Jan", time: "Uttarakhand",         title: "Journey to the Mountains", note: "Reaching the wedding destination together",   image: "images/himalaya.svg.PNG", focus: "bottom" },
    { date: "30 Jan", time: "Morning",             title: "Haldi",             note: "Turmeric, sunshine & lots of laughter",              image: "images/ev-haldi.jpg" },
    { date: "30 Jan", time: "Evening",             title: "Mehndi",            note: "Henna, music & celebrations",                         image: "images/mehndi.svg.PNG" },
    { date: "31 Jan", time: "Triyuginarayan Temple", title: "The Wedding",     note: "Seven vows before the eternal sacred fire",           image: "images/venue-temple.jpg" },
    { date: "1 Feb",  time: "Rishikesh",           title: "Relax Halt",        note: "Unwinding by the Ganga before heading home",          image: "images/rishikesh.svg.PNG" }
  ],

  /* ---- venue ---- */
  venueNote: "The sacred temple where, it is believed, Lord Shiva married Goddess Parvati before the eternal flame that still burns today. We would be honoured to have you with us.",
  venueCity: "Venue · Rudraprayag, Uttarakhand",
  venueName: "Triyuginarayan Temple",
  venueAddress: "Triyuginarayan, Rudraprayag, Uttarakhand",
  mapLink: "https://share.google/ueKaTWxgdyoGqD82e",   /* the "Find your way" button opens this */
  mapQuery: "Triyuginarayan Temple Uttarakhand",

  /* ---- wardrobe planner ----
     image = outfit picture on the card; colors = colour dots; look = use | for a new line */
  dressEyebrow: "Dress for the moment",
  dressTitle: "Wardrobe Planner",
  dressCode: [                         /* poster = full dress-code poster (tap to enlarge) */
    { event: "Haldi",   look: "Sunshine yellow & floral pastels", colors: [], image: "", poster: "images/dress-haldi.jpg" },
    { event: "Mehendi", look: "Mehendi green, pink & orange",         colors: [], image: "", poster: "images/dress-mehendi.jpg" },
    { event: "Wedding", look: "Pastel, floral, light pink & green",   colors: [], image: "", poster: "images/dress-wedding.jpg.PNG" }
  ],

  /* ---- RSVP & closing ---- */
  whatsapp: "919874427128",            /* country code + number, no + sign. e.g. 919876543210 */
  rsvpBy: "(Reply by 27-28th Oct)",   /* line under the RSVP button ("" = hide) */
  closing: "Your presence and blessings will make our celebration complete.",
  families: "With love — The Ghosh & Vira Families",
  hashtag: "",                         /* "" = auto #NikitaWedsDharmesh */
  music: "music/song2.mp3",             /* "" = no music */

  /* ---- colours (hex) ---- */
  theme: { ink: "#5a1a24", blue: "#b8323a", sky: "#f6cfcf", mist: "#fdf0ee", gold: "#c99a3e" },

  /* hide sections: any of "date", "events", "venue", "gallery", "dress", "rsvp"  e.g. ["gallery"] */
  hideSections: []
};
