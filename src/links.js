// ============================================================
// CENTRAL LINKS CONFIG
// Paste your real URLs here. Everything reads from this file,
// so update once and every button/link updates automatically.
// ============================================================

export const LINKS = {
  // Resume file lives in /public
  resume: process.env.PUBLIC_URL + "/Fam%20Ashraf%20Resume.pdf",
  // The in-app resume preview path (hash route)
  resumePreview: "#resume",

  // Direct contact / social
  email: "mailto:famashraf9@gmail.com",
  phone: "tel:+201010145972",
  github: "https://github.com/Fam-Ashraf", // TODO: replace with real username
  linkedin: "https://www.linkedin.com/in/fam-ashraf",
  portfolio: "https://portfolio-famashraf.vercel.app/",
  location: "Assiut, Egypt · Remote Worldwide",

  // Projects: live demo (opens in new tab) + source repository
  projects: {
    travelize: {
      name: "Travel Website",
      demo: "https://travelize.vercel.app/",
      source: "https://github.com/Fam-Ashraf", // TODO: replace with repo URL
      tag: "Spatial / Map Platform",
    },
    ecommerce: {
      name: "E-commerce Website",
      demo: "https://e-store-rust.vercel.app/",
      source: "https://github.com/Fam-Ashraf", // TODO: replace with repo URL
      tag: "Commerce / Checkout",
    },
    restaurant: {
      name: "Pizza Restaurant Website",
      demo: "https://pizza-website-wheat.vercel.app/",
      source: "https://github.com/Fam-Ashraf", // TODO: replace with repo URL
      tag: "Real-Time / Food",
    },
    weather: {
      name: "Weather Intelligence Portal",
      demo: "https://portfolio-famashraf.vercel.app/", // TODO: replace with live demo URL
      source: "https://github.com/Fam-Ashraf", // TODO: replace with repo URL
      tag: "Data / Analytics",
    },
  },

  // Certificates / credentials verification URLs
  certificates: {
    alx: "https://intranet.alxswe.com/dashboards/my_curriculums",
    meta: "https://www.coursera.org/account/accomplishments/specialization/certificate/FK4N2BWMD5IR",
    google: "https://www.coursera.org/account/accomplishments/specialization/certificate/",
    ibm: "https://www.coursera.org/account/accomplishments/certificate/RHR6JPWXBU6X",
  },

  // Certificate images (drag scans into src/images and fill in the require path)
  certificateImages: {
    alx: require("./images/alx-8wegb5b6spwp23g3qtmae.webp"),
    meta: require("./images/Meta-Logo-1024x576.png.png"),
    google: require("./images/Google-Logo.wine.png"),
    ibm: require("./images/ibm-logo_brandlogos.net_ahkkf.png"),
  },
};
