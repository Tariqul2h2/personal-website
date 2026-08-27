import { PortfolioData } from '../types/portfolio';

export const defaultPortfolioData: PortfolioData = {
  profile: {
    name: "Md. Tariqulhasan Fazle Rabbi",
    roleTitle: "DevOps Engineer & Cloud Infrastructure Specialist",
    tagline: "Engineering automated CI/CD pipelines, highly available AWS cloud environments, and end-to-end observability across enterprise systems.",
    shortBio: "DevOps Engineer with extensive production experience architecting automated CI/CD pipelines with Docker & Kubernetes, managing scalable AWS cloud infrastructure, and building centralized logging and telemetry with Grafana, Loki, and the ELK Stack.",
    fullBio: [
      "I am a DevOps Engineer at US-Bangla Group with deep hands-on expertise in Kubernetes (K8s), Docker containerization, GitLab CI/CD, Ansible, and AWS cloud management. I specialize in building zero-downtime deployment pipelines and high-availability infrastructure for business-critical and financial applications.",
      "Throughout my engineering career across US-Bangla Group, Mulytic Energy, Tirzok Private Limited, and Mulytic Labs GmbH, I have architected centralized logging systems with the ELK Stack, built real-time monitoring dashboards with Grafana and Prometheus, managed IoT device deployments via Balena Cloud, and led production payment gateway operations.",
      "I am pursuing an M.Engg. in Computer Science & Engineering at Military Institute of Science and Technology (MIST) and hold a B.Sc. in CSE from University of Asia Pacific (CGPA 3.72/4.00, Dean's & VC's Award recipient). I have also published research in IEEE conferences and academic journals on CNN signature verification and IoT smart automation systems."
    ],
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    location: "Mirpur, Dhaka, Bangladesh",
    status: "Available for DevOps, SRE & Cloud Engineering opportunities",
    isAvailableForWork: true,
    yearsExperience: 5,
    completedProjects: 35,
    contributionsCount: "3,200+",
    email: "tariqul.rabby@gmail.com",
    phone: "+8801558921524",
    resumeUrl: "#contact",
    highlights: [
      {
        icon: "ShieldCheck",
        title: "Production CI/CD & K8s",
        desc: "Automated pipelines using Docker, Kubernetes (K8s), GitLab CI/CD, and Ansible for zero-downtime releases."
      },
      {
        icon: "Zap",
        title: "Full-Stack Observability",
        desc: "End-to-end monitoring using Grafana, Prometheus, Elasticsearch, Elastic APM, Loki, and centralized log aggregation."
      },
      {
        icon: "Cloud",
        title: "AWS Cloud & Infrastructure",
        desc: "Architecting scalable AWS environments, reverse proxies, SSL/DNS management, and cost-efficient cloud resources."
      },
      {
        icon: "Cpu",
        title: "IoT & Distributed Systems",
        desc: "Automating IoT fleets with Balena Cloud, Hasura backend services, and Python/Django REST API microservices."
      }
    ]
  },
  socials: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/Tariqul2h2",
      username: "Tariqul2h2"
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/Tariqul2h2",
      username: "Tariqul2h2"
    },
    {
      platform: "docker",
      label: "DockerHub",
      url: "https://hub.docker.com/u/Tariqul2h2",
      username: "Tariqul2h2"
    },
    {
      platform: "scholar",
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=MTFRabbi",
      username: "MTF Rabbi"
    },
    {
      platform: "upwork",
      label: "Upwork",
      url: "https://www.upwork.com/freelancers/~01b6354f",
      username: "Tariqulf"
    },
    {
      platform: "email",
      label: "Email",
      url: "mailto:tariqul.rabby@gmail.com",
      username: "tariqul.rabby@gmail.com"
    }
  ],
  skills: [
    {
      id: "container-orchestration",
      name: "Containerization & Orchestration",
      description: "Automating application packaging, scaling, and cluster management.",
      icon: "Cloud",
      skills: [
        { name: "Docker & Containerization", level: 96, popular: true, experienceYears: "5+ yrs" },
        { name: "Kubernetes (K8s)", level: 92, popular: true, experienceYears: "4+ yrs" },
        { name: "ArgoCD & GitOps", level: 88, popular: true, experienceYears: "3 yrs" },
        { name: "Docker Compose", level: 95, popular: true, experienceYears: "5 yrs" },
        { name: "Balena Cloud (IoT Containerization)", level: 90, popular: true, experienceYears: "3 yrs" }
      ]
    },
    {
      id: "cloud-iac",
      name: "Cloud & Infrastructure as Code (IaC)",
      description: "Managing secure, cost-optimized, and automated multi-region cloud resources.",
      icon: "Server",
      skills: [
        { name: "AWS Managed Services (EC2, S3, RDS, IAM, VPC)", level: 94, popular: true, experienceYears: "5 yrs" },
        { name: "Terraform (IaC)", level: 88, popular: true, experienceYears: "3 yrs" },
        { name: "Ansible Automation", level: 90, popular: true, experienceYears: "4 yrs" },
        { name: "Linux Server Administration (Ubuntu/Debian)", level: 96, popular: true, experienceYears: "6+ yrs" },
        { name: "Nginx & Reverse Proxies", level: 92, popular: true, experienceYears: "5 yrs" },
        { name: "SSL/TLS & DNS Configuration", level: 94, experienceYears: "5 yrs" }
      ]
    },
    {
      id: "observability-monitoring",
      name: "Observability & Monitoring",
      description: "Centralized logging, real-time metrics, tracing, and automated alerting.",
      icon: "Sparkles",
      skills: [
        { name: "ELK Stack (Elasticsearch, Logstash, Kibana)", level: 95, popular: true, experienceYears: "5 yrs" },
        { name: "Grafana Dashboards", level: 95, popular: true, experienceYears: "5 yrs" },
        { name: "Prometheus Monitoring", level: 90, popular: true, experienceYears: "4 yrs" },
        { name: "Elastic APM & Distributed Tracing", level: 88, popular: true, experienceYears: "3 yrs" },
        { name: "Loki Centralized Log Aggregation", level: 86, experienceYears: "3 yrs" },
        { name: "Zabbix Infrastructure Monitoring", level: 84, experienceYears: "3 yrs" }
      ]
    },
    {
      id: "cicd-automation",
      name: "CI/CD & Automation Pipelines",
      description: "Building fast, reliable, and secure release workflows from commit to production.",
      icon: "Layout",
      skills: [
        { name: "GitLab CI/CD", level: 94, popular: true, experienceYears: "4+ yrs" },
        { name: "GitHub Actions", level: 92, popular: true, experienceYears: "4 yrs" },
        { name: "Git & Version Control Workflows", level: 96, popular: true, experienceYears: "6 yrs" },
        { name: "Automated Rollbacks & Health Checks", level: 90, experienceYears: "4 yrs" },
        { name: "Security & Secret Management", level: 88, experienceYears: "4 yrs" }
      ]
    },
    {
      id: "backend-development",
      name: "Backend, Scripting & Data",
      description: "Developing backend services, automation scripts, and analytical dashboards.",
      icon: "Database",
      skills: [
        { name: "Python & Automation Scripting", level: 90, popular: true, experienceYears: "5 yrs" },
        { name: "Django & Django REST Framework", level: 88, experienceYears: "4 yrs" },
        { name: "Bash / Shell Scripting", level: 94, popular: true, experienceYears: "6 yrs" },
        { name: "Hasura GraphQL Engine", level: 86, experienceYears: "2 yrs" },
        { name: "Metabase BI (RBAC Dashboards)", level: 90, popular: true, experienceYears: "3 yrs" },
        { name: "PostgreSQL & Database Optimization", level: 86, experienceYears: "4 yrs" }
      ]
    }
  ],
  projects: [
    {
      id: "payment-gateway-infra",
      title: "Production Payment Gateway Infrastructure",
      tagline: "High-availability, PCI-compliant infrastructure for mission-critical financial transactions.",
      description: "Led the deployment, configuration, and operational lifecycle of production-grade payment gateway services at US-Bangla Group, ensuring 99.99% service availability, automated failovers, and secure transaction handling under heavy load.",
      category: "Cloud & Systems",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000",
      technologies: ["AWS", "Kubernetes", "Docker", "Ansible", "Nginx", "SSL/TLS", "Grafana", "Linux"],
      githubUrl: "https://github.com/Tariqul2h2",
      liveUrl: "https://us-bangla.com",
      featured: true,
      role: "DevOps Engineer & Infrastructure Lead",
      duration: "Ongoing",
      stats: [
        { label: "Availability", value: "99.99% Uptime" },
        { label: "Pipeline Release Time", value: "< 4 mins" },
        { label: "Security Compliance", value: "Strict SSL/RBAC" }
      ],
      highlights: [
        "Architected automated CI/CD pipelines using GitLab CI/CD and Docker for rapid zero-downtime releases.",
        "Engineered reverse proxy load balancing with Nginx and hardened SSL certificate automation.",
        "Integrated centralized logging with Elasticsearch and Grafana APM to diagnose transaction anomalies in real-time."
      ],
      architectureOverview: "Kubernetes orchestrates containerized payment microservices behind high-throughput Nginx reverse proxies with automated SSL renewal, monitored by Prometheus/Grafana and backed by scalable AWS managed databases."
    },
    {
      id: "enterprise-observability",
      title: "Centralized Enterprise Observability Suite",
      tagline: "Unified monitoring, distributed tracing, and log analytics with ELK & Grafana.",
      description: "Engineered comprehensive observability across multi-environment infrastructures, aggregating logs, server metrics, and APM telemetry into centralized Grafana and Elasticsearch dashboards for proactive anomaly resolution.",
      category: "CI/CD & DevOps",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Elasticsearch", "Logstash", "Kibana", "Grafana", "Prometheus", "Elastic APM", "Loki", "Zabbix"],
      githubUrl: "https://github.com/Tariqul2h2",
      featured: true,
      role: "DevOps Engineer",
      duration: "Continuous Implementation",
      stats: [
        { label: "Log Ingestion", value: "Millions/Day" },
        { label: "Mean Time to Detect (MTTD)", value: "-65%" },
        { label: "Dashboard Response", value: "< 250ms" }
      ],
      highlights: [
        "Constructed intuitive Grafana dashboards tailored for engineering, SRE, and management stakeholders.",
        "Configured Elastic APM agents across microservices to isolate bottleneck database queries and slow HTTP endpoints.",
        "Implemented proactive Slack and email alerting rules based on dynamic Prometheus threshold evaluations."
      ],
      architectureOverview: "Beats and fluentd agents stream log events to Logstash pipelines for enrichment and indexing into Elasticsearch, while Prometheus scrapes cluster metrics to power Grafana visualizations and automated alerts."
    },
    {
      id: "iot-fleet-balena",
      title: "IoT Edge Device Automation & Fleet Management",
      tagline: "Automated containerized deployments and remote management for IoT device networks.",
      description: "Engineered automated edge deployment pipelines for connected energy and environmental IoT systems utilizing Balena Cloud, Docker Compose, Hasura GraphQL backend, and customized Metabase reporting with role-based access control.",
      category: "IoT & Automation",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Balena Cloud", "Docker Compose", "Hasura", "GraphQL", "Metabase", "AWS", "Grafana", "Python"],
      githubUrl: "https://github.com/Tariqul2h2",
      featured: true,
      role: "DevOps Engineer at Mulytic Energy",
      duration: "9 Months",
      stats: [
        { label: "Edge Device Fleet", value: "Hundreds of Nodes" },
        { label: "Deployment Failure Rate", value: "< 0.5%" },
        { label: "Data Telemetry Sync", value: "Real-time" }
      ],
      highlights: [
        "Implemented zero-downtime rolling over-the-air (OTA) updates for remote embedded IoT devices across distributed sites.",
        "Built customizable Metabase analytics dashboards with granular RBAC permissions for client executives.",
        "Configured Grafana and Elasticsearch monitoring specifically tailored for IoT telemetry streaming."
      ],
      architectureOverview: "Edge devices run Balena OS multi-container stacks that transmit telemetry data through secure tunnels to Hasura backend services on AWS, visualized via Metabase and Grafana."
    },
    {
      id: "automated-cicd-engine",
      title: "Automated Multi-Environment CI/CD Pipeline",
      tagline: "Enterprise-grade deployment automation from Git commit to Kubernetes staging and production.",
      description: "Designed and implemented robust automated continuous integration and continuous deployment pipelines using GitLab CI/CD, GitHub Actions, Docker, Kubernetes, and Ansible, cutting manual deployment overhead and eliminating configuration drift.",
      category: "CI/CD & DevOps",
      thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
      technologies: ["GitLab CI/CD", "GitHub Actions", "Docker", "Kubernetes", "Ansible", "Terraform", "Git"],
      githubUrl: "https://github.com/Tariqul2h2",
      featured: true,
      role: "DevOps Engineer",
      duration: "Ongoing",
      stats: [
        { label: "Deployment Frequency", value: "Daily Continuous" },
        { label: "Rollback Time", value: "< 30 seconds" },
        { label: "Manual Effort Saved", value: "85%" }
      ],
      highlights: [
        "Created standardized reusable pipeline templates with automated security scanning and linting gates.",
        "Implemented dynamic staging environment provisioning triggered directly on pull requests.",
        "Employed Ansible playbooks for automated server provisioning and consistent configuration baselines."
      ],
      architectureOverview: "Code pushes trigger parallel test/build runners in GitLab CI, building Docker images pushed to private registries, which are then applied to Kubernetes clusters using Ansible and GitOps."
    },
    {
      id: "python-django-backend",
      title: "Scalable Python Microservices & Elasticsearch Integration",
      tagline: "High-performance REST APIs and search query optimization on AWS cloud.",
      description: "Engineered scalable backend services using Python and Django REST Framework at Mulytic Labs GmbH, optimizing complex Elasticsearch search queries and automating cloud deployments on AWS infrastructure.",
      category: "Full-Stack",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Python", "Django REST Framework", "Elasticsearch", "AWS", "Jira", "Linux", "PostgreSQL"],
      githubUrl: "https://github.com/Tariqul2h2",
      featured: false,
      role: "Junior Software Engineer",
      duration: "1+ Year",
      stats: [
        { label: "Query Speedup", value: "4.5x faster" },
        { label: "Code Coverage", value: "90%+" }
      ],
      highlights: [
        "Optimized Elasticsearch search indexing and queries supporting rapid data analysis for enterprise clients.",
        "Served as technical liaison resolving critical system challenges and maintaining comprehensive technical documentation.",
        "Mentored incoming software engineers and interns on cloud fundamentals and best practices."
      ],
      architectureOverview: "Django REST microservices exposed API endpoints connected to PostgreSQL and an optimized Elasticsearch cluster hosted on AWS EC2/RDS."
    },
    {
      id: "cnn-signature-verification",
      title: "Handwritten Signature Verification using CNN & AI",
      tagline: "Academic research and computer vision model with data augmentation for biometric verification.",
      description: "Published research project developing a Convolutional Neural Network (CNN) architecture with data augmentation techniques to accurately verify handwritten signatures and prevent fraudulent document tampering.",
      category: "AI & Research",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      technologies: ["Python", "TensorFlow / Keras", "CNN", "OpenCV", "Computer Vision", "Data Augmentation"],
      githubUrl: "https://github.com/Tariqul2h2",
      featured: false,
      role: "Lead Researcher & Author",
      duration: "Research Publication",
      stats: [
        { label: "Verification Accuracy", value: "98.2%" },
        { label: "Published Venue", value: "Journal of Contents Computing" }
      ],
      highlights: [
        "Engineered custom data augmentation pipelines to overcome limited training sample constraints.",
        "Extracted deep invariant visual features to distinguish genuine signatures from skilled forgeries.",
        "Published in peer-reviewed academic journal (The Journal of Contents Computing, 2019)."
      ],
      architectureOverview: "Preprocessed and augmented signature image datasets are fed through a deep convolutional neural network for feature representation and classification with high precision."
    }
  ],
  experiences: [
    {
      id: "us-bangla",
      role: "DevOps Engineer",
      company: "US-Bangla Group",
      companyUrl: "https://us-bangla.com",
      location: "Dhaka, Bangladesh",
      period: "December 2025 – Present",
      type: "Full-Time",
      current: true,
      description: [
        "Designed and maintained automated CI/CD pipelines using Docker, Kubernetes (K8s), GitLab CI/CD, and Ansible, enabling reliable and efficient application deployments across multiple environments.",
        "Implemented end-to-end monitoring and observability using Grafana, Elasticsearch, Elastic APM, and centralized logging to improve system visibility, accelerate troubleshooting, and enhance application performance.",
        "Managed and optimized AWS cloud infrastructure, ensuring high availability, scalability, security, and cost-efficient resource utilization.",
        "Led the deployment, configuration, and operational management of production-grade payment gateway services, ensuring secure, highly available, and reliable transaction processing.",
        "Administered Linux servers, reverse proxies, SSL certificates, DNS, and infrastructure components to support business-critical applications.",
        "Conducted technical training and knowledge-sharing sessions on cloud platforms, DevOps practices, containerization, Kubernetes, and infrastructure automation for engineering teams."
      ],
      technologies: ["Docker", "Kubernetes", "GitLab CI/CD", "Ansible", "Grafana", "Elasticsearch", "Elastic APM", "AWS", "Linux", "SSL/TLS", "DNS"]
    },
    {
      id: "mulylic-energy",
      role: "DevOps Engineer",
      company: "Mulytic Energy",
      location: "Dhaka, Bangladesh",
      period: "December 2024 – August 2025",
      type: "Full-Time",
      current: false,
      description: [
        "Managed and optimized AWS cloud infrastructure, ensuring high availability, reliability, and efficient resource utilization.",
        "Automated application deployments using GitHub Actions, Docker Compose, and containerization best practices.",
        "Developed and maintained Dockerfiles to build and deploy containerized applications across environments.",
        "Implemented monitoring and observability with Grafana and Elasticsearch for IoT systems and applications.",
        "Enforced security best practices to protect cloud infrastructure, applications, and sensitive client data.",
        "Managed backend services with Hasura GraphQL and IoT device deployments using Balena Cloud.",
        "Built and maintained Metabase dashboards with role-based access control (RBAC) for secure client reporting.",
        "Delivered technical training on cloud platforms, DevOps practices, and infrastructure management."
      ],
      technologies: ["AWS", "GitHub Actions", "Docker Compose", "Grafana", "Elasticsearch", "Hasura", "Balena Cloud", "Metabase", "IoT"]
    },
    {
      id: "tirzok",
      role: "Junior DevOps Engineer",
      company: "Tirzok Private Limited",
      location: "Dhaka, Bangladesh",
      period: "May 2023 – October 2024",
      type: "Full-Time",
      current: false,
      description: [
        "Deployed and maintained applications across various environments, including cloud infrastructure, ensuring stable and reliable system performance.",
        "Used Docker and Kubernetes to containerize applications and improve deployment consistency and scalability.",
        "Monitored system performance using Grafana and analyzed logs with Elasticsearch to identify and resolve critical issues.",
        "Worked with team members and stakeholders during remote and on-site deployments to ensure smooth system integration.",
        "Conducted internal sessions on Linux system administration, monitoring tools, and system security to support team knowledge sharing."
      ],
      technologies: ["Docker", "Kubernetes", "Grafana", "Elasticsearch", "Linux Admin", "Cloud Deployments"]
    },
    {
      id: "mulytic-labs",
      role: "Junior Software Engineer / Tech Support Engineer",
      company: "Mulytic Labs GmbH",
      location: "Dhaka, Bangladesh",
      period: "December 2020 – January 2023",
      type: "Full-Time",
      current: false,
      description: [
        "Built backend services using Python and Django REST Framework, emphasizing clean, maintainable, and scalable code.",
        "Managed and optimized AWS infrastructure for performance, reliability, and cost efficiency.",
        "Developed and optimized Elasticsearch queries, supporting application features, client requirements, and data analysis.",
        "Automated deployments and supported cloud-based applications while troubleshooting infrastructure and application issues.",
        "Monitored applications and client environments using AWS and Elasticsearch to ensure system reliability and performance.",
        "Served as a primary technical contact for clients, delivering solutions and resolving complex technical issues.",
        "Used Jira and Confluence for project tracking, collaboration, and technical documentation.",
        "Conducted internal training sessions and mentored interns on Elasticsearch, cloud technologies, and engineering best practices."
      ],
      technologies: ["Python", "Django REST Framework", "Elasticsearch", "AWS", "Jira", "Confluence", "Linux"]
    },
    {
      id: "wow-bangla",
      role: "IT Officer",
      company: "Wow Bangla Ltd",
      location: "Dhaka, Bangladesh",
      period: "May 2019 – August 2020",
      type: "Full-Time",
      current: false,
      description: [
        "Provided technical support, hardware setup, network maintenance, and troubleshot complex operating system and networking issues."
      ],
      technologies: ["Linux Administration", "Networking", "System Support", "Hardware Maintenance"]
    },
    {
      id: "uap-ta",
      role: "Teaching Assistant",
      company: "University of Asia Pacific",
      location: "Dhaka, Bangladesh",
      period: "October 2018 – March 2019",
      type: "Academic",
      current: false,
      description: [
        "Conducted programming classes and practical lab sessions for Computer Science & Engineering students.",
        "Taught fundamental computing and digital literacy to students in the Law and English departments.",
        "Assisted senior faculty with coursework delivery, assignment evaluations, and student mentoring."
      ],
      technologies: ["C / C++", "Python", "Data Structures", "Algorithms", "Computer Fundamentals"]
    }
  ],
  education: [
    {
      id: "mist-master",
      degree: "M.Engg. in Computer Science and Engineering (Ongoing)",
      institution: "Military Institute of Science and Technology (MIST)",
      location: "Dhaka, Bangladesh",
      period: "March 2023 – Present",
      details: "Advanced coursework in Distributed Systems, Cloud Computing Architectures, Advanced Computer Networks, and Machine Learning Systems."
    },
    {
      id: "uap-bachelor",
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "University of Asia Pacific (UAP)",
      location: "Dhaka, Bangladesh",
      period: "May 2014 – March 2018",
      grade: "CGPA: 3.72 / 4.00",
      details: "Comprehensive study in Software Engineering, Database Systems, Operating Systems, Algorithm Design, and Network Security.",
      honors: "VC's Award & Dean's Award (2 times) for Academic Excellence"
    },
    {
      id: "agrani-hsc",
      degree: "Higher Secondary Certificate (HSC), Science",
      institution: "Agrani School and College",
      location: "Rajshahi, Bangladesh",
      period: "2010 – 2012",
      grade: "GPA: 4.60 / 5.00"
    },
    {
      id: "rajshahi-ssc",
      degree: "Secondary School Certificate (SSC), Science",
      institution: "Rajshahi Chini Kal High School",
      location: "Rajshahi, Bangladesh",
      period: "2008 – 2010",
      grade: "GPA: 4.69 / 5.00"
    }
  ],
  certifications: [
    {
      id: "cert-aws-cloud",
      title: "AWS Cloud Infrastructure & Services Specialization",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialUrl: "https://aws.amazon.com"
    },
    {
      id: "cert-k8s-docker",
      title: "Kubernetes & Docker Microservices Administration",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialUrl: "https://cncf.io"
    },
    {
      id: "cert-elk-observability",
      title: "Elasticsearch & Centralized Observability Engineering",
      issuer: "Elastic",
      date: "2023",
      credentialUrl: "https://elastic.co"
    }
  ],
  publications: [
    {
      id: "pub-journal-cnn",
      type: "journal",
      title: "Handwritten Signature Verification Using CNN with Data Augmentation",
      authors: "Rabbi, M. T. F., Rahman, S. T., Biswash, P., Kim, J., Sheikh, A., Saha, A. K., & Uddin, M. S.",
      venue: "The Journal of Contents Computing, Vol. 1, No. 1, pp. 25-37",
      year: "2019",
      details: "Proposed a high-accuracy Convolutional Neural Network with targeted data augmentation for verifying biometric handwritten signatures against skilled forgery attempts."
    },
    {
      id: "pub-ieee-iot",
      type: "conference",
      title: "IoT Based Home Automation System with Customizable GUI and Low Cost Embedded System",
      authors: "Haque, M. E., Islam, M. R., Rabbi, M. T. F., & Rafiq, J. I.",
      venue: "IEEE International Conference on Sustainable Technologies for Industry 4.0 (STI), pp. 1-5",
      year: "2019",
      link: "https://ieeexplore.ieee.org",
      details: "Architected a cost-effective, scalable embedded IoT automation platform featuring remote telemetry, interactive GUI dashboards, and secure sensor communication."
    }
  ],
  awards: [
    {
      id: "award-vc",
      title: "VC's Award for Academic Distinction",
      organization: "University of Asia Pacific (UAP)",
      year: "2018",
      description: "Conferred by the Vice Chancellor for outstanding academic rank and leadership across the Department of Computer Science & Engineering."
    },
    {
      id: "award-deans",
      title: "Dean's Award (2 Consecutive Semesters)",
      organization: "University of Asia Pacific (UAP)",
      year: "2016 – 2017",
      description: "Awarded for sustaining top-tier GPA and academic rigor throughout undergraduate engineering studies."
    },
    {
      id: "award-young-scientist",
      title: "Young Scientist Award (2nd Runner Up)",
      organization: "Science Fair 2011, BCSIR, Rajshahi",
      year: "2011",
      description: "Recognized for innovative applied science research and embedded hardware prototype demonstration."
    }
  ],
  testimonials: [
    {
      id: "test-nasir",
      name: "Md. Nasir Uddin",
      role: "Head of Cloud & DevOps",
      company: "TechnoNext Software Ltd.",
      quote: "Tariqulhasan has an exceptional grasp of container orchestration, automated CI/CD pipelines, and cloud security. His dedication to zero-downtime deployments and proactive observability makes him an invaluable asset to any high-stakes infrastructure team.",
      rating: 5,
      relationship: "Industry Reference & Senior DevOps Leader",
      date: "2025",
      email: "nasirnjs@gmail.com"
    },
    {
      id: "test-anower",
      name: "Md. Anower Perves",
      role: "General Manager",
      company: "Cloud Omnium Ltd.",
      quote: "Working with Tariqul is a pleasure. His depth of knowledge across AWS infrastructure, Elasticsearch log aggregation, and Linux kernel administration is top-notch. He reliably turns complex architectural requirements into bulletproof, automated solutions.",
      rating: 5,
      relationship: "Industry Reference & Cloud Executive",
      date: "2025",
      email: "anowerperves@gmail.com"
    },
    {
      id: "test-mulytic-vp",
      name: "Lead Engineering Manager",
      role: "VP of Cloud & IoT Solutions",
      company: "Mulytic Energy",
      quote: "Tariqul's work on automating Balena Cloud IoT fleet deployments and building centralized Metabase dashboards dramatically accelerated our product releases and simplified client observability. Highly recommended!",
      rating: 5,
      relationship: "Manager at Mulytic Energy",
      date: "2025"
    }
  ],
  blogPosts: [
    {
      id: "blog-observability",
      title: "Architecting End-to-End Observability with Grafana, Elastic APM & the ELK Stack in Production",
      date: "January 15, 2026",
      excerpt: "A practical deep-dive into instrumenting distributed microservices, aggregating millions of log lines with Elastic APM and Logstash, and building actionable Grafana alert dashboards.",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      author: "Md. Tariqulhasan Fazle Rabbi",
      readTime: "6 min read",
      category: "Observability",
      tags: ["DevOps", "Grafana", "Elasticsearch", "Prometheus", "APM"],
      content: `In high-throughput distributed systems, finding the root cause of an outage or slow transaction can feel like searching for a needle in a haystack. Traditional static logs scattered across multiple VMs or containers simply don't scale.

### The 3 Pillars of Cloud Observability
1. **Metrics**: Real-time numerical timeseries data scraped by Prometheus from application endpoints and node exporters.
2. **Logs**: Structured JSON events collected by Filebeat, transformed in Logstash, and indexed into Elasticsearch for instant full-text query capability.
3. **Traces (APM)**: Distributed transaction tracing that follows a user request from Nginx reverse proxies down through payment microservices to individual PostgreSQL database queries.

### Streamlining Grafana Dashboards
By configuring unified dashboards in Grafana that overlay APM trace timings directly atop cluster CPU/memory metrics and Elasticsearch error rates, engineering teams can pinpoint regressions in seconds rather than hours.

### Key Takeaways
- Always enforce consistent correlation IDs across all incoming HTTP requests.
- Set up intelligent alert thresholds based on P95 latency percentiles rather than simple arithmetic averages.
- Implement automated log index lifecycle management (ILM) in Elasticsearch to keep storage costs predictable.`
    },
    {
      id: "blog-cicd-kubernetes",
      title: "Building Zero-Downtime Multi-Environment CI/CD with GitLab, Docker & Kubernetes",
      date: "December 28, 2025",
      excerpt: "Step-by-step guide to constructing immutable container build pipelines, automated security linting gates, and GitOps-driven zero-downtime rolling updates.",
      coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
      author: "Md. Tariqulhasan Fazle Rabbi",
      readTime: "7 min read",
      category: "CI/CD & K8s",
      tags: ["Kubernetes", "GitLab CI", "Docker", "Ansible", "DevOps"],
      content: `Automating software delivery requires more than just running a test script. A production-ready CI/CD pipeline guarantees reproducibility, automated rollback capability, and strict security verification.

### Pipeline Stages
1. **Lint & Security Scan**: Static analysis, Dockerfile linting (Hadolint), and vulnerability vulnerability scanning (Trivy).
2. **Build & Tag**: Generating immutable multi-arch Docker images tagged with Git commit SHAs.
3. **Staging Validation**: Automated deployment to isolated preview namespaces with ephemeral ingress domains.
4. **Production Rolling Deploy**: Deploying Kubernetes manifests with readiness probes and automated rollbacks on health check failures.

\`\`\`yaml
# Sample GitLab CI Deployment Stage snippet
deploy_prod:
  stage: deploy
  image: bitnami/kubectl:latest
  script:
    - kubectl set image deployment/payment-svc payment-svc=$IMAGE_NAME:$CI_COMMIT_SHA
    - kubectl rollout status deployment/payment-svc --timeout=120s
  environment:
    name: production
  only:
    - main
\`\`\`

### Why Zero-Downtime Matters
By configuring proper \`readinessProbe\` and \`livenessProbe\` endpoints along with rolling update deployment strategies (\`maxSurge: 25%\`, \`maxUnavailable: 0\`), you can release new code dozens of times a day without dropping a single user transaction.`
    },
    {
      id: "blog-iot-balena",
      title: "Managing Scalable Remote IoT Fleets with Balena Cloud and Containerized Microservices",
      date: "November 10, 2025",
      excerpt: "How containerized Docker Compose architectures and Balena Cloud enable over-the-air firmware updates and secure telemetry aggregation across hundreds of remote energy nodes.",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      author: "Md. Tariqulhasan Fazle Rabbi",
      readTime: "5 min read",
      category: "IoT & Cloud",
      tags: ["Balena", "IoT", "Docker", "Hasura", "AWS"],
      content: `Deploying software to edge devices in the field is fundamentally different from traditional cloud server provisioning. Remote devices might experience spotty cellular networks, intermittent power cycles, or physical environmental challenges.

### The Containerized Edge Approach
Using Balena Cloud and BalenaOS allows us to treat edge hardware exactly like modern microservices:
- **Atomic OTA Updates**: If an update crashes or fails health verification, the device automatically falls back to the previous stable container image.
- **VPN & Remote Tunneling**: Secure remote SSH access to any device anywhere in the world without exposing open public ports.
- **Local Fallback Data Queuing**: Storing sensor readings in local Redis or SQLite buffers during connectivity drops and syncing to Hasura/AWS once network connectivity resumes.`
    }
  ]
};
