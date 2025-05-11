// Icon names are now strings instead of React components

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  heroImage?: string;
  sections?: {
    title: string;
    content: string;
  }[];
  benefits?: string[];
}

export interface Audience {
  slug: string;
  title: string;
  pageTitle: string;
  iconName: string; // Changed from React.ReactNode to string
  shortDescription: string;
  description: string;
  heroImage: string;
  sections?: {
    title: string;
    content: string;
  }[];
  challenges?: string[];
  benefits?: string[];
  relevantServices: string[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    initials: string;
  };
}

export const services: Service[] = [
  {
    slug: "pc-builds",
    title: "PC Builds",
    shortDescription: "Custom-built computers optimized for your specific needs, whether for gaming, creative work, or business applications.",
    description: "At ClearPath Tech, we design and build custom PCs tailored to your specific requirements and budget. Whether you need a high-performance gaming rig, a workstation for creative professionals, or a reliable business computer, our experts will create the perfect system using quality components with excellent reliability and performance.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    heroImage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Custom Design Process",
        content: "We start with understanding your needs, recommending components within your budget, and designing a system that delivers the performance you require while ensuring all parts work harmoniously together."
      },
      {
        title: "Premium Components",
        content: "We use only reliable, high-quality components from trusted manufacturers with proper warranties to ensure your new PC performs optimally and stands the test of time."
      },
      {
        title: "Expert Assembly & Testing",
        content: "Our technicians professionally build each system with meticulous attention to detail, including proper cable management, thermal considerations, and extensive testing to ensure stability and performance."
      }
    ],
    benefits: [
      "Better performance than mass-produced computers",
      "Customized to your exact requirements",
      "Higher quality components than off-the-shelf options",
      "Future-proof design with upgrade paths",
      "Proper thermal management for longevity",
      "Clean software installation without bloatware"
    ]
  },
  {
    slug: "smart-home",
    title: "Smart Home Automation",
    shortDescription: "Integrate and automate your home's lighting, security, climate, and entertainment systems for convenience and efficiency.",
    description: "Transform your living space with our comprehensive smart home solutions. We design, install, and configure integrated systems that connect your lighting, security, climate control, entertainment, and more into one seamless experience that's both intuitive and powerful.",
    image: "/src/assets/smart-home.png",
    heroImage: "/src/assets/smart-home.png",
    sections: [
      {
        title: "Whole-Home Integration",
        content: "We create seamless ecosystems where your devices work together intelligently, whether you prefer Apple HomeKit, Google Home, Amazon Alexa, or platform-agnostic solutions like Home Assistant."
      },
      {
        title: "Customized Automation",
        content: "Beyond basic control, we create sophisticated automation routines that anticipate your needs—lights that adjust with the time of day, climate that responds to occupancy, and security systems that work intelligently."
      },
      {
        title: "User-Friendly Controls",
        content: "We ensure your system is intuitive with simple controls through voice, smartphone apps, wall-mounted panels, or automated routines that require no intervention."
      }
    ],
    benefits: [
      "Enhanced convenience with automated routines",
      "Improved energy efficiency and reduced utility bills",
      "Strengthened home security with integrated monitoring",
      "Simplified control of complex systems",
      "Increased property value",
      "Future-ready infrastructure for emerging technologies"
    ]
  },
  {
    slug: "media-servers",
    title: "Media Servers",
    shortDescription: "Centralize your media with Plex, Jellyfin, or other solutions for seamless streaming to all your devices.",
    description: "Our media server solutions provide a centralized hub for all your digital content. We'll help you organize your movies, TV shows, music, and photos into an elegant, Netflix-like experience accessible from any device in your home or remotely when traveling.",
    image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    heroImage: "https://images.unsplash.com/photo-1593784991188-c899ca07263b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Custom Server Setup",
        content: "We build reliable, high-performance media servers using platforms like Plex, Jellyfin, or Emby, configured for optimal performance and designed to meet your specific needs."
      },
      {
        title: "Content Organization",
        content: "We'll help you organize your existing media library with proper metadata, artwork, and categories for an intuitive browsing experience across all your content."
      },
      {
        title: "Multi-Device Access",
        content: "Access your media library from smart TVs, streaming devices, smartphones, tablets, and computers both at home and when traveling with secure remote access."
      }
    ],
    benefits: [
      "Access your entire media collection from any device",
      "Eliminate multiple streaming subscriptions",
      "Organize and preserve your personal media collection",
      "Share media with family members with customized accounts",
      "Stream in original quality without compression",
      "Access your media securely when away from home"
    ]
  },
  {
    slug: "network-security",
    title: "Network & Cybersecurity",
    shortDescription: "Protect your digital assets with robust network setups, security monitoring, and proactive threat prevention.",
    description: "In today's connected world, a secure network is essential. We design and implement comprehensive network security solutions that protect your data, devices, and privacy from increasingly sophisticated cyber threats without sacrificing performance or convenience.",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    heroImage: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Network Infrastructure",
        content: "We design and implement robust network architectures with enterprise-grade equipment, secure Wi-Fi configurations, proper segmentation, and optimized coverage throughout your space."
      },
      {
        title: "Threat Prevention",
        content: "Our layered security approach includes advanced firewalls, intrusion detection, malware prevention, DNS filtering, and regular security audits to keep your network protected from emerging threats."
      },
      {
        title: "Privacy Protection",
        content: "We implement measures to safeguard your personal data including VPN configurations, encrypted connections, and proper access controls to keep your information private."
      }
    ],
    benefits: [
      "Protection against hackers, malware, and ransomware",
      "Secure remote access to your network when traveling",
      "Safe browsing for all family members or employees",
      "Reliable, high-performance internet throughout your space",
      "Prevention of unauthorized network access",
      "Visibility into network activity and potential threats"
    ]
  },
  {
    slug: "data-backup",
    title: "Data Backup & Recovery",
    shortDescription: "Safeguard your important data with automated backup systems and proven recovery solutions.",
    description: "Your data is invaluable—from irreplaceable family photos to critical business documents. Our comprehensive backup solutions ensure your data is automatically protected, securely stored, and easily recoverable in case of hardware failure, accidental deletion, ransomware, or other data loss scenarios.",
    image: "/src/assets/data-backup.png",
    heroImage: "/src/assets/data-backup.png",
    sections: [
      {
        title: "Comprehensive Backup Strategy",
        content: "We implement the industry-standard 3-2-1 backup approach: three copies of your data, on two different media types, with one copy stored off-site to ensure recoverability under any circumstance."
      },
      {
        title: "Automated Protection",
        content: "Our solutions run automatically in the background, continuously protecting your data without requiring manual intervention, ensuring nothing falls through the cracks."
      },
      {
        title: "Disaster Recovery Planning",
        content: "Beyond backups, we create detailed recovery plans tailored to your specific needs, with documented procedures to quickly restore operations after any data loss incident."
      }
    ],
    benefits: [
      "Peace of mind knowing your data is protected",
      "Quick recovery from accidental deletion or corruption",
      "Protection against ransomware and malware attacks",
      "Preservation of irreplaceable digital memories",
      "Business continuity during hardware failures",
      "Secure, encrypted storage of sensitive information"
    ]
  },
  {
    slug: "tech-support",
    title: "Tech Support",
    shortDescription: "Get help when you need it with our remote and onsite technical support for all your devices and systems.",
    description: "Technology should work for you, not against you. Our technical support services provide friendly, jargon-free assistance for all your devices and systems. Whether you're facing an urgent issue or need ongoing maintenance, our team is ready to help with responsive remote and onsite support options.",
    image: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Responsive Assistance",
        content: "When technology problems arise, we provide quick, effective support through your preferred channel—remote sessions, phone consultations, or onsite visits for hands-on help."
      },
      {
        title: "Comprehensive Coverage",
        content: "We support all your technology needs, from computers and mobile devices to networking equipment, smart home systems, and specialized hardware with a single point of contact."
      },
      {
        title: "Preventative Maintenance",
        content: "Beyond reactive support, we offer proactive monitoring and maintenance plans to prevent issues before they impact your productivity or disrupt your digital life."
      }
    ],
    benefits: [
      "Quick resolution of technology problems",
      "Reduced downtime and frustration",
      "Clear, jargon-free explanations",
      "Support for all your devices and systems",
      "Regular maintenance to prevent issues",
      "Technology guidance from trusted experts"
    ]
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortDescription: "Leverage artificial intelligence and automation tools to streamline processes and enhance productivity.",
    description: "Harness the transformative power of AI and automation to streamline your workflows, enhance productivity, and gain valuable insights. Our solutions make these cutting-edge technologies accessible and practical for both businesses and individuals, focusing on real-world applications that deliver tangible benefits.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    heroImage: "https://images.unsplash.com/photo-1685458521783-c31cab7c5be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Practical AI Implementation",
        content: "We identify meaningful applications of AI for your specific needs—from intelligent document processing and data analysis to personalized recommendations and automated decision support."
      },
      {
        title: "Workflow Automation",
        content: "Our experts design automated workflows that eliminate repetitive tasks, reduce manual effort, and create seamless processes across your various business tools and personal applications."
      },
      {
        title: "Data-Driven Insights",
        content: "We help you leverage your data through AI-powered analytics that reveal patterns, generate predictions, and provide actionable insights to drive better decisions."
      }
    ],
    benefits: [
      "Dramatic reduction in repetitive manual tasks",
      "Improved accuracy and consistency in processes",
      "Enhanced decision-making through data insights",
      "Increased productivity and operational efficiency",
      "Scalable solutions that grow with your needs",
      "Competitive advantage through technology adoption"
    ]
  },
  {
    slug: "web-design",
    title: "Website Design & Hosting",
    shortDescription: "Create a compelling online presence with custom websites designed for impact and optimized for performance.",
    description: "Your website is often the first impression potential customers have of your brand. We design and develop beautiful, functional websites that not only look impressive but also drive results. From small business sites to complex web applications, our solutions are built with your specific goals in mind.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Custom Design & Development",
        content: "We create websites tailored to your brand and objectives, with intuitive user experiences, responsive designs that work beautifully on all devices, and visual appeal that captures attention."
      },
      {
        title: "Performance Optimization",
        content: "Our websites are built for speed and reliability, with optimized images, efficient code, and streamlined functionality that provides a fast, frustration-free experience for your visitors."
      },
      {
        title: "Reliable Hosting & Maintenance",
        content: "We provide secure, high-performance hosting solutions with regular maintenance, security updates, and monitoring to ensure your site remains fast, secure, and always available."
      }
    ],
    benefits: [
      "Professional online presence that builds credibility",
      "Mobile-optimized experience for all visitors",
      "Improved search engine visibility",
      "Easy-to-use content management",
      "Protection against website vulnerabilities",
      "Ongoing support and evolution of your site"
    ]
  },
  {
    slug: "business-it",
    title: "Business IT Infrastructure",
    shortDescription: "Build reliable, scalable technology foundations for your business with comprehensive IT solutions.",
    description: "Your business depends on technology that just works. We design, implement, and maintain comprehensive IT infrastructure that provides the reliability, security, and performance your business needs to thrive—from network design and server setup to cloud integration and ongoing management.",
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Infrastructure Design & Implementation",
        content: "We build technology foundations tailored to your business needs—from robust networks and server systems to cloud platforms and collaboration tools, all designed for reliability and scalability."
      },
      {
        title: "Security & Compliance",
        content: "Our solutions incorporate comprehensive security measures and compliance considerations, protecting your business data and ensuring you meet regulatory requirements specific to your industry."
      },
      {
        title: "Proactive Management",
        content: "We provide ongoing monitoring, maintenance, and support services that keep your systems running smoothly, address issues before they impact operations, and provide predictable IT costs."
      }
    ],
    benefits: [
      "Reliable technology that supports business operations",
      "Scalable infrastructure that grows with your needs",
      "Enhanced security posture and data protection",
      "Improved employee productivity and collaboration",
      "Reduced downtime and technology disruptions",
      "Strategic technology planning aligned with business goals"
    ]
  }
];

export const audiences: Audience[] = [
  {
    slug: "homeowners",
    title: "Homeowners",
    pageTitle: "Intelligent Home Technology Solutions",
    iconName: "Home",
    shortDescription: "Transform your living space with integrated technology that enhances comfort, security, and efficiency.",
    description: "Modern homes deserve modern technology solutions. Whether you're looking to create a fully automated smart home, improve your entertainment systems, or ensure your home network is secure and reliable, ClearPath Tech provides homeowners with thoughtfully designed technology that enhances daily life without adding complexity.",
    heroImage: "https://images.unsplash.com/photo-1558442086-8ea5ff4c8d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Smart Home Integration",
        content: "We create seamless technology experiences throughout your home—from lighting and climate control to entertainment and security—all working together intelligently and controlled through simple interfaces."
      },
      {
        title: "Home Network Solutions",
        content: "Your home network is the foundation of your digital life. We design and implement robust, secure networks that provide reliable coverage throughout your home for all your connected devices."
      }
    ],
    challenges: [
      "Multiple disconnected smart home devices and systems",
      "Wi-Fi dead zones and unreliable internet connections",
      "Concerns about home security and data privacy",
      "Complicated entertainment setups with multiple remotes",
      "Difficulty managing and backing up family photos and documents"
    ],
    benefits: [
      "Simplified control of all home technology",
      "Enhanced security and peace of mind",
      "Improved energy efficiency and reduced utility bills",
      "Reliable connectivity throughout your home",
      "Protection for your digital memories and important files"
    ],
    relevantServices: ["smart-home", "network-security", "media-servers", "data-backup", "tech-support"],
    testimonial: {
      quote: "ClearPath transformed our home with technology that actually makes life easier. From reliable Wi-Fi in every corner to smart lighting that anticipates our needs, everything just works beautifully together.",
      name: "Jennifer & Mark Davidson",
      role: "Homeowners in Pacific Heights",
      initials: "JD"
    }
  },
  {
    slug: "small-business",
    title: "Small Businesses",
    pageTitle: "Technology Solutions for Growing Businesses",
    iconName: "Store",
    shortDescription: "Reliable, scalable IT infrastructure and services designed specifically for small business needs and budgets.",
    description: "Small businesses need right-sized technology that provides enterprise-level reliability without the enterprise-level complexity or cost. ClearPath Tech delivers IT solutions specifically designed for small businesses—providing the security, performance, and support you need to focus on growing your business rather than managing technology.",
    heroImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Complete Business IT",
        content: "We provide comprehensive technology solutions that cover all your business needs—from secure networks and reliable workstations to cloud services, data protection, and ongoing support."
      },
      {
        title: "Scalable Solutions",
        content: "Our technology implementations are designed to grow with your business, providing solutions that work today while accommodating future expansion without requiring complete overhauls."
      }
    ],
    challenges: [
      "Limited IT resources and expertise",
      "Concerns about data security and business continuity",
      "Need for professional technology on a small business budget",
      "Keeping up with rapidly evolving technology",
      "Unreliable systems that impact productivity and customer service"
    ],
    benefits: [
      "Professional IT support without a full-time IT staff",
      "Enhanced data security and regulatory compliance",
      "Improved operational efficiency and productivity",
      "Reduced technology-related disruptions",
      "Strategic guidance on technology investments"
    ],
    relevantServices: ["business-it", "network-security", "data-backup", "tech-support", "web-design"],
    testimonial: {
      quote: "As a growing business, we needed technology that worked reliably but couldn't justify a full-time IT person. ClearPath has been the perfect solution—professional support, strategic guidance, and systems that just don't break down.",
      name: "Robert Chen",
      role: "Founder, Artisan Bakery Co.",
      initials: "RC"
    }
  },
  {
    slug: "seniors",
    title: "Seniors",
    pageTitle: "Technology Made Simple for Seniors",
    iconName: "Users",
    shortDescription: "User-friendly technology solutions with simplified interfaces and supportive training for seniors.",
    description: "Technology should enhance life at any age. We specialize in creating simple, intuitive technology solutions for seniors that facilitate connection with family, enhance home security, and provide convenience without complexity. Our patient approach includes clear setup, simplified interfaces, and ongoing support when questions arise.",
    heroImage: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Simplified Technology",
        content: "We configure devices and systems with simplified interfaces, clear instructions, and streamlined functionality that focuses on what's important without overwhelming complexity."
      },
      {
        title: "Patient Support & Training",
        content: "Our approach includes personalized setup, hands-on training sessions, and ongoing support with clear explanations in non-technical language whenever you have questions."
      }
    ],
    challenges: [
      "Intimidating or confusing technology interfaces",
      "Concern about scams and online security",
      "Difficulty staying connected with family members",
      "Frustration with constantly changing technology",
      "Limited technical support options that provide patient assistance"
    ],
    benefits: [
      "Easier communication with family and friends",
      "Enhanced home safety and security",
      "Simplified access to entertainment options",
      "Protection against scams and security threats",
      "Patient, respectful technical assistance when needed"
    ],
    relevantServices: ["tech-support", "smart-home", "network-security", "media-servers", "data-backup"],
    testimonial: {
      quote: "I was hesitant about getting all these smart devices, but ClearPath made everything so simple. They set up video calls with my grandchildren with just one button, and I can get help anytime something confuses me.",
      name: "Margaret Wilson",
      role: "Retired Educator, 78",
      initials: "MW"
    }
  },
  {
    slug: "airbnb-hosts",
    title: "Airbnb Hosts",
    pageTitle: "Smart Technology for Vacation Rentals",
    iconName: "Key",
    shortDescription: "Enhance guest experiences and streamline property management with specialized rental property technology.",
    description: "The right technology can transform your rental property business—increasing guest satisfaction while reducing management headaches. We create custom solutions for Airbnb and vacation rental hosts that enhance the guest experience, automate routine tasks, improve security, and allow for effective remote management of your properties.",
    heroImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Guest Experience Enhancement",
        content: "We implement systems that delight your guests—from self-check-in solutions and smart entertainment to automated welcome sequences and intuitive controls that require no technical knowledge."
      },
      {
        title: "Remote Management",
        content: "Our solutions allow you to monitor and manage your properties from anywhere—including remote access systems, security monitoring, automated alerts, and streamlined communication tools."
      }
    ],
    challenges: [
      "Managing property access securely without physical keys",
      "Monitoring property remotely between guest stays",
      "Providing reliable Wi-Fi and entertainment for guests",
      "Creating exceptional guest experiences that generate positive reviews",
      "Protecting property and detecting potential issues early"
    ],
    benefits: [
      "Streamlined check-in/check-out processes",
      "Improved security and monitoring capabilities",
      "Enhanced guest experience driving better reviews",
      "Reduced operational workload through automation",
      "Early detection of maintenance issues or rule violations"
    ],
    relevantServices: ["smart-home", "network-security", "media-servers", "ai-automation", "tech-support"],
    testimonial: {
      quote: "The smart property system ClearPath installed has transformed my hosting business. Guests love the seamless check-in and entertainment options, while I can manage everything remotely. My properties now practically run themselves.",
      name: "Carlos Mendez",
      role: "Superhost with 5 Properties",
      initials: "CM"
    }
  },
  {
    slug: "remote-workers",
    title: "Remote Workers",
    pageTitle: "Professional Home Office Technology",
    iconName: "Laptop",
    shortDescription: "Create a reliable, productive, and professional work-from-home environment with optimized technology.",
    description: "Working remotely requires professional-grade technology that ensures productivity, reliability, and a polished presence. We design comprehensive home office solutions that provide the performance, connectivity, and user experience needed for successful remote work across any industry or role.",
    heroImage: "https://images.unsplash.com/photo-1591382696684-38c427c7547a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Complete Workspace Solutions",
        content: "We create optimized home office environments with all the technology elements needed for productivity—from ergonomic workstations and reliable connectivity to proper lighting and audio/video for professional video calls."
      },
      {
        title: "Enterprise-Grade Home Networks",
        content: "Remote work demands internet that doesn't fail during critical moments. Our network solutions provide business-class reliability, security, and performance throughout your home office environment."
      }
    ],
    challenges: [
      "Unreliable internet connections disrupting work",
      "Unprofessional appearance in video meetings",
      "Security concerns when handling company data",
      "Suboptimal workspace ergonomics causing discomfort",
      "Difficulty separating work and personal technology"
    ],
    benefits: [
      "Professional-quality video conferencing setups",
      "Reliable, high-speed network connections",
      "Enhanced security for company data and systems",
      "Ergonomic workspace design for comfort and health",
      "Seamless integration with company tools and workflows"
    ],
    relevantServices: ["pc-builds", "network-security", "tech-support", "smart-home", "data-backup"],
    testimonial: {
      quote: "My home office setup from ClearPath has made all the difference in my remote work. The reliable connectivity, professional video conferencing setup, and ergonomic workstation have boosted both my productivity and credibility with clients.",
      name: "Sarah Johnson",
      role: "Senior Marketing Consultant",
      initials: "SJ"
    }
  },
  {
    slug: "non-profits",
    title: "Non-Profits",
    pageTitle: "Mission-Focused Technology Solutions",
    iconName: "Heart",
    shortDescription: "Cost-effective technology that maximizes impact and efficiency while respecting limited resources.",
    description: "Non-profit organizations face unique technology challenges—needing to maximize impact while working with limited budgets. We create thoughtful technology solutions tailored to the non-profit sector that improve operational efficiency, enhance communication capabilities, and support mission fulfillment while respecting resource constraints.",
    heroImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Value-Optimized Solutions",
        content: "We design technology implementations that deliver maximum impact for your investment, focusing on areas that directly support your mission while maintaining appropriate cost controls."
      },
      {
        title: "Grant-Friendly Planning",
        content: "Our solutions and documentation are structured to align with grant requirements and funding cycles, with clear objectives, measurable outcomes, and appropriate sustainability planning."
      }
    ],
    challenges: [
      "Limited technology budgets and resources",
      "Need to demonstrate impact to funders and stakeholders",
      "Managing volunteer and donor relationships effectively",
      "Securing sensitive constituent and donor data",
      "Supporting both in-office and remote/field operations"
    ],
    benefits: [
      "Greater operational efficiency with limited resources",
      "Enhanced data collection and impact reporting",
      "Improved communication with stakeholders and communities",
      "Appropriate security for sensitive information",
      "Technology that supports rather than distracts from mission"
    ],
    relevantServices: ["business-it", "web-design", "network-security", "data-backup", "tech-support"],
    testimonial: {
      quote: "ClearPath understood our unique needs as a non-profit. They developed solutions that respect our budget constraints while dramatically improving our operational capabilities and security posture. Their work has directly enabled us to expand our programs.",
      name: "David Langhorne",
      role: "Executive Director, Community Action Foundation",
      initials: "DL"
    }
  },
  {
    slug: "diplomats-expats",
    title: "Diplomats & Expats",
    pageTitle: "Global-Ready Technology Solutions",
    iconName: "Globe",
    shortDescription: "Secure, adaptable technology that works seamlessly across international borders and relocations.",
    description: "International lifestyles require specialized technology solutions that maintain security, accessibility, and continuity across borders. We create systems for diplomats and expatriates that provide secure access to content and services regardless of location, protect sensitive data from elevated threats, and facilitate smooth transitions during relocation.",
    heroImage: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Location-Independent Systems",
        content: "We design technology ecosystems that maintain access to your content, services, and media regardless of your global location, overcoming regional restrictions while ensuring security."
      },
      {
        title: "Relocation Services",
        content: "Our comprehensive services for international moves include pre-departure preparation, technology transportation guidance, and rapid setup in new locations to minimize disruption during transitions."
      }
    ],
    challenges: [
      "Accessing content and services across country restrictions",
      "Maintaining security in high-risk environments",
      "Ensuring data continuity during frequent relocations",
      "Adapting to different power standards and infrastructure",
      "Communicating reliably with family and colleagues globally"
    ],
    benefits: [
      "Secure access to your digital life from anywhere",
      "Enhanced protection for sensitive communications",
      "Seamless transitions during international relocations",
      "Reliable connection to home content and services",
      "Systems adaptable to varying global infrastructure"
    ],
    relevantServices: ["network-security", "data-backup", "media-servers", "tech-support", "pc-builds"],
    testimonial: {
      quote: "As a foreign service family moving every 2-3 years, having technology that works globally is essential. ClearPath designed systems that keep us connected to our media, protected from threats, and make each move dramatically easier.",
      name: "Jonathan Reid",
      role: "Foreign Service Officer",
      initials: "JR"
    }
  },
  {
    slug: "healthcare",
    title: "Healthcare Providers",
    pageTitle: "Secure Healthcare Technology Solutions",
    iconName: "Activity",
    shortDescription: "HIPAA-compliant technology systems for medical practices with enhanced security and reliability.",
    description: "Healthcare technology requires the highest standards of security, reliability, and compliance. We create specialized solutions for medical practices and healthcare providers that safeguard patient information, streamline clinical workflows, and ensure compliance with regulatory requirements while improving both provider and patient experiences.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "HIPAA-Compliant Systems",
        content: "We design and implement technology solutions that meet stringent healthcare compliance requirements while remaining practical and user-friendly for clinical environments."
      },
      {
        title: "Practice Infrastructure",
        content: "Our comprehensive healthcare IT services include secure networks, appropriate hardware selection, telehealth capabilities, and integration with electronic health record systems."
      }
    ],
    challenges: [
      "Maintaining strict HIPAA compliance",
      "Protecting sensitive patient data",
      "Integrating with healthcare-specific systems",
      "Supporting telehealth and remote care needs",
      "Ensuring reliability for critical clinical functions"
    ],
    benefits: [
      "Demonstrable regulatory compliance",
      "Enhanced protection for patient information",
      "Improved clinical workflow efficiency",
      "Reliable telehealth capabilities",
      "Reduced IT-related stress and interruptions"
    ],
    relevantServices: ["network-security", "business-it", "data-backup", "tech-support", "smart-home"],
    testimonial: {
      quote: "ClearPath's understanding of healthcare compliance requirements was impressive. They created systems that protect our patient data while actually improving our clinical workflow efficiency. Worth every penny for the peace of mind alone.",
      name: "Dr. Elaine Sharma",
      role: "Medical Director, Family Health Associates",
      initials: "ES"
    }
  },
  {
    slug: "education",
    title: "Educational Institutions",
    pageTitle: "Technology Solutions for Modern Learning",
    iconName: "GraduationCap",
    shortDescription: "Comprehensive technology infrastructure for schools and educational organizations of all sizes.",
    description: "Educational excellence requires technology that enhances learning while remaining manageable and secure. We create comprehensive technology ecosystems for schools and educational organizations that support modern teaching methodologies, improve administrative efficiency, ensure appropriate safeguards, and provide reliable performance within educational budgets.",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Learning-Focused Infrastructure",
        content: "We design complete technology systems optimized for educational environments—including networks that support high-density usage, appropriate device management, and classroom-specific technologies."
      },
      {
        title: "Digital Protection",
        content: "Our solutions include appropriate safety measures for educational settings, with content filtering, monitoring capabilities, and security measures that protect students while respecting privacy considerations."
      }
    ],
    challenges: [
      "Supporting hundreds of simultaneous connections",
      "Maintaining appropriate content filtering and safety",
      "Managing student devices and access permissions",
      "Integrating with educational software platforms",
      "Maximizing technology impact with limited budgets"
    ],
    benefits: [
      "Reliable infrastructure for digital learning",
      "Appropriate safeguards for student online activities",
      "Simplified management of educational technologies",
      "Enhanced collaboration capabilities",
      "Strategic technology planning for educational outcomes"
    ],
    relevantServices: ["business-it", "network-security", "data-backup", "tech-support", "web-design"],
    testimonial: {
      quote: "The campus-wide technology solution from ClearPath has transformed our learning environment. Their understanding of educational needs—from classroom technology to administrative systems—created an ecosystem that truly supports our mission.",
      name: "Michael Thornton",
      role: "Technology Director, Westwood Academy",
      initials: "MT"
    }
  },
  {
    slug: "real-estate",
    title: "Real Estate Professionals",
    pageTitle: "Technology Solutions for Real Estate Success",
    iconName: "Building",
    shortDescription: "Mobile-optimized technology that enhances property marketing and streamlines real estate operations.",
    description: "Today's real estate industry requires sophisticated technology to market properties effectively and manage client relationships. We create specialized solutions for real estate professionals that enhance property presentation, streamline operations, and provide reliable technology that works both in the office and in the field.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80",
    sections: [
      {
        title: "Property Marketing Technology",
        content: "We implement advanced systems for showcasing properties—including virtual tour capabilities, high-quality photography solutions, and online marketing tools that help properties stand out in competitive markets."
      },
      {
        title: "Mobile-First Systems",
        content: "Our solutions emphasize mobility and reliability—ensuring you have secure access to all your critical information and tools whether you're in the office, showing properties, or working from home."
      }
    ],
    challenges: [
      "Creating compelling property presentations",
      "Managing client information securely",
      "Accessing systems reliably while mobile",
      "Standing out in competitive markets",
      "Balancing technological advancements with ease of use"
    ],
    benefits: [
      "Enhanced property marketing capabilities",
      "Improved client relationship management",
      "Reliable mobile access to critical information",
      "Streamlined transaction management",
      "Competitive advantage through technology adoption"
    ],
    relevantServices: ["web-design", "tech-support", "smart-home", "network-security", "pc-builds"],
    testimonial: {
      quote: "The technology solutions ClearPath implemented have directly contributed to my business growth. From the stunning property showcases to the reliable mobile systems, I can serve clients better and market properties more effectively than my competition.",
      name: "Alexis Torres",
      role: "Luxury Real Estate Agent",
      initials: "AT"
    }
  }
];
