/**
 * Single source of truth for every piece of content on the site.
 *
 * Components render this data and nothing else — to update the site, edit this
 * file only. No markup change should ever be needed to add a job, a project,
 * or a skill.
 */

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  url?: string;
}

export interface Project {
  name: string;
  blurb: string;
  tech: string[];
  url?: string;
  /** Shown instead of a link when the work isn't publicly reachable. */
  note?: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  notes?: string[];
}

export const profile = {
  name: 'Amirhossein Esmaeilipour',
  title: 'Android Software Engineer',
  tagline: 'Building scalable mobile systems and AI-powered apps',
  location: 'Tehran, Iran',

  bio: [
    'I am a computer engineer specialising in Android — from application-level work down to AOSP platform integration. Over the past six years I have shipped system applications that ride along with the OS, municipal-scale consumer apps, and POS software for international banking.',
    'My graduate work is in artificial intelligence, focused on medical imaging: my thesis combined image processing with NLP to detect brain tumours in MRI scans and generate the accompanying report automatically. That interest now shows up in my engineering work as on-device AI — running models under the memory and latency limits of real phones rather than in a datacentre.',
  ],

  links: {
    email: 'amir.h.esmailpor@gmail.com',
    github: 'https://github.com/Amirhesp',
    githubHandle: 'Amirhesp',
    linkedin: 'https://linkedin.com/in/amirhesp',
    linkedinHandle: 'in/amirhesp',
    resume: '/resume.pdf',
  },

  experience: [
    {
      role: 'Android Software Engineer',
      company: 'Daria Hamrah',
      period: '2021 — Present',
      location: 'Tehran, Iran',
      url: 'https://dariamobile.com/',
      bullets: [
        'Contributed to multiple AOSP-based Android system applications — Dialer, Messaging, File Manager and Recorder — covering feature development and platform-level integration.',
        'Developed blockchain-driven workflows and system-level operations, including update and installation mechanisms.',
        'Implemented on-device AI model workflows for mobile and embedded targets using LLM/MLC-based tooling, working within real deployment and runtime performance constraints.',
        'Built e-commerce applications aimed at improving user engagement and reducing friction in the purchase flow.',
      ],
    },
    {
      role: 'Android Developer',
      company: 'Zistpak Arman Shahr',
      period: '2020 — 2021',
      location: 'Qom, Iran',
      bullets: [
        'Developed “Zipak”, a waste recycling application for the Qom Municipality.',
        'Built the client, driver and supervisor modules in Java on an MVVM architecture.',
        'Designed complex UIs to Material Design standards and implemented server communication with Retrofit.',
      ],
    },
    {
      role: 'Android Developer',
      company: 'Tada Institute (Atrak)',
      period: '2019 — 2020',
      location: 'Tehran, Iran',
      bullets: [
        'Worked on international financial and banking projects, including POS terminal development against vendor-specific SDKs.',
        'Contributed to “Bache”, an educational application for RAHA private school.',
      ],
    },
  ] satisfies Experience[],

  projects: [
    {
      name: 'Zipak',
      blurb:
        'Waste-recycling platform for the Qom Municipality, spanning three coordinated Android apps — resident, collection driver, and supervisor — over a shared REST backend.',
      tech: ['Java', 'MVVM', 'Retrofit', 'Material Design'],
      url: 'https://cafebazaar.ir/app/app.zipak.client',
    },
    {
      name: 'AOSP System Applications',
      blurb:
        'Platform-level work on Dialer, Messaging, File Manager and Recorder for AOSP-based devices, including system update and installation mechanisms.',
      tech: ['Kotlin', 'Java', 'AOSP', 'NDK', 'Android SDK'],
      note: 'Proprietary — shipped on OEM devices',
    },
    {
      name: 'On-Device AI Deployment',
      blurb:
        'Running LLM and vision models directly on mobile and embedded hardware using MLC-based tooling, tuned against the memory ceilings and latency budgets of real devices.',
      tech: ['Python', 'TensorFlow Lite', 'MLC', 'Android NDK'],
      note: 'Ongoing work',
    },
    {
      name: 'Brain Tumour Detection & Report Generation',
      blurb:
        'MSc thesis. A transformer-based pipeline that detects tumours in MRI scans and generates the radiology report automatically, combining image processing with NLP.',
      tech: ['Python', 'Transformers', 'NLP', 'Medical Imaging'],
      note: 'MSc thesis, Islamic Azad University',
    },
    {
      name: 'MRI Tumour Segmentation (U-Net)',
      blurb:
        'Classification and pixel-level segmentation of tumours in MRI imagery using a U-Net architecture.',
      tech: ['Python', 'U-Net', 'Computer Vision'],
      note: 'Research project',
    },
  ] satisfies Project[],

  skills: [
    { group: 'Languages', items: ['Java', 'Kotlin', 'Python'] },
    {
      group: 'Android',
      items: [
        'Android SDK',
        'AOSP',
        'NDK',
        'Android Components',
        'Coroutines',
        'Room',
        'Hilt',
        'Retrofit',
        'MVVM',
      ],
    },
    {
      group: 'AI & Machine Learning',
      items: ['On-Device AI Deployment', 'TensorFlow Lite', 'Computer Vision', 'NLP'],
    },
    {
      group: 'Engineering',
      items: ['REST APIs', 'OOP', 'SOLID', 'Git', 'Linux', 'Agile'],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      degree: 'MSc',
      field: 'Artificial Intelligence',
      institution: 'Islamic Azad University',
      period: '2021 — 2024',
      location: 'Tehran, Iran',
      notes: [
        'Thesis: brain tumour detection and automatic report generation from MRI images using transformers, combining image processing and NLP techniques.',
        'Tumour classification and segmentation from MRI images using the U-Net model.',
      ],
    },
    {
      degree: 'BEng',
      field: 'Computer Systems Architecture',
      institution: 'Qom University of Technology',
      period: '2014 — 2019',
      location: 'Qom, Iran',
    },
  ] satisfies Education[],

  extras: {
    volunteering: [
      {
        role: 'Head of IEEE Student Branch',
        organisation: 'Qom University of Technology',
        period: '2017 — 2018',
      },
    ],
    languages: [
      { name: 'Persian', level: 'Native' },
      { name: 'English', level: 'Full professional proficiency' },
    ],
    interests: ['Mobile security', 'Machine learning', 'Social science'],
  },

  seo: {
    description:
      'Amirhossein Esmaeilipour — Android Software Engineer in Tehran, building AOSP system applications, scalable mobile platforms and on-device AI. MSc in Artificial Intelligence.',
  },
} as const;

export type Profile = typeof profile;
