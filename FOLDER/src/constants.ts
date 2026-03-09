import { Project, Certificate, Hackathon, Feedback, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Bionic Robotic Arm',
    description: 'Advanced bio-mechanical prototype with articulated joints for realistic movement and automation.',
    image: '/proj-bionic-arm.png',
    link: 'https://github.com/gabicaronaldp-pixel',
    previewAvailable: false,
    languages: ['C++', 'Arduino', 'ESP32'],
    tags: ['Robotics', 'Bionics', 'Hardware'],
    status: 'completed'
  },
  {
    id: '2',
    title: 'RFID Secure Lock System',
    description: 'Developed an automated hardware access control security system using RFID technology.',
    image: '/proj-rfid.jpg',
    link: 'https://github.com/gabicaronaldp-pixel',
    previewAvailable: false,
    languages: ['C++', 'Embedded Systems'],
    tags: ['Security', 'Automation'],
    status: 'completed'
  },
  {
    id: '3',
    title: 'POS & Inventory System',
    description: 'A full-stack Point of Sale and inventory management customized tool developed specifically for gadget shops.',
    image: '/proj-pos.jpg',
    link: 'https://github.com/gabicaronaldp-pixel',
    previewAvailable: true,
    languages: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    tags: ['Full-stack Web', 'System Integration'],
    status: 'completed'
  },
  {
    id: '4',
    title: 'SMARS Robot & Light Follower',
    description: 'Engineered an autonomous SMARS (Screwed Modular Assemblable Robotic System) robot and a light-following robot using sensor arrays and motor control logic.',
    image: '/proj-smars.png',
    link: 'https://github.com/gabicaronaldp-pixel',
    previewAvailable: false,
    languages: ['C++', 'Robotics Design'],
    tags: ['Robotics', 'Autonomous'],
    status: 'completed'
  },
  {
    id: '6',
    title: 'Soccer Bot',
    description: 'Designed and built a competitive Soccer Bot capable of autonomous ball-tracking and kicking using ultrasonic sensors and motor drivers.',
    image: '/proj-soccer.png',
    link: 'https://github.com/gabicaronaldp-pixel',
    previewAvailable: false,
    languages: ['C++', 'Arduino', 'Sensors'],
    tags: ['Robotics', 'Competition'],
    status: 'completed'
  },
  {
    id: '5',
    title: 'Environmental Tracking Machine',
    description: 'Engineered a Humidity and Temperature Machine for real-time environmental data tracking and feedback.',
    image: '/proj-humidifier.png',
    link: 'https://github.com/gabicaronaldp-pixel',
    previewAvailable: false,
    languages: ['C++', 'ESP32'],
    tags: ['IoT', 'Sensors'],
    status: 'completed'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    description: 'Completed the Introduction to Packet Tracer course, learning network simulation, device configuration, and foundational networking principles.',
    image: '/cert-packet-tracer.pdf',
    date: '2024',
    pdfUrl: '/cert-packet-tracer.pdf'
  }
];

export const HACKATHONS: Hackathon[] = [
  {
    id: '1',
    title: 'Robotics Competition Champion 2026',
    description: '1st place in SMARS Robot Line Follower Track. School Competitions | Universidad De Dagupan',
    date: 'August 2024 – Present',
    position: 'Champion',
    image: '/ach-robotics.jpg'
  },
  {
    id: '2',
    title: 'DOST Robotics Competition',
    description: 'Received the prestigious Market Disruptor Award.',
    date: '2026',
    position: 'Market Disruptor Award',
    image: '/ach-dost.jpg'
  },
  {
    id: '3',
    title: 'Hackathon Regional Convention 2026',
    description: 'Regional Hackathon showcasing systems integration and physical hardware solutions.',
    date: '2026',
    position: 'Champion',
    image: '/ach-hackathon.jpg'
  }
];

export const FEEDBACKS: Feedback[] = [
  {
    id: '1',
    name: 'Gadget Shop Owner',
    image: 'https://i.pravatar.cc/150?u=client1',
    role: 'Small Business Owner',
    rating: 5,
    skillTag: 'Full-stack Web',
    productivityBoost: '50%',
    comment: 'The custom POS and Inventory system perfectly suited our gadget shops. It has streamlined our entire sales process.'
  },
  {
    id: '2',
    name: 'Project Collaborator',
    image: 'https://i.pravatar.cc/150?u=client2',
    role: 'Hardware Engineer',
    rating: 5,
    skillTag: 'Embedded Systems',
    productivityBoost: '40%',
    comment: 'Ronald engineered an amazing RFID secure lock system and the Bionic arm. His knowledge of bio-mechanical logic is top-notch.'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'Bridging Hardware and Software',
    excerpt: 'Exploring how embedded systems and full-stack development can come together to solve real-world problems.',
    date: 'Mar 08, 2026',
    category: 'Engineering',
    image: 'https://picsum.photos/seed/blog1/800/600'
  },
  {
    id: '2',
    title: 'Building a Bionic Robotic Arm',
    excerpt: 'A deep dive into prototyping advanced bio-mechanical arms with articulated joints.',
    date: 'Feb 20, 2026',
    category: 'Robotics',
    image: 'https://picsum.photos/seed/blog2/800/600'
  }
];
