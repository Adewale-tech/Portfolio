import { Project, SkillCategory, Experience, Education, Certificate } from './types';

export const personalInfo = {
  name: "Waliyullah Osman Adewale",
  tagline: "Backend Developer building scalable systems with purpose.",
  email: "waliyullahadewale30@gmail.com",
  linkedin: "https://www.linkedin.com/in/waliyullah-osman-7b84b0311",
  github: "https://github.com/Adewale-tech", // Placeholder, replace with actual GitHub URL
};

export const aboutMe = {
  p1: "I’m a backend developer with a focus on designing efficient systems and secure APIs. My passion lies in transforming logic into scalable products that solve real problems. I thrive in collaborative environments and am always eager to learn and apply new technologies to enhance application performance and reliability.",
  p2: "Currently honing my skills through hands-on projects and continuous learning, I am motivated to contribute to remote engineering teams and tackle real-world software development challenges. When I'm not coding, I enjoy exploring distant lands, getting lost in a good book, or capturing moments through photography.",
  p3: "As an entry-level developer, I bring a fresh perspective and an unwavering drive to excel. I am confident in my ability to quickly adapt, tackle complex problems with courage, and contribute meaningfully from day one. My goal is to invest my energy into building robust, scalable solutions that align with the company's vision and drive its success, whether in a fast-paced startup or an established finance firm."
};

export const projects: Project[] = [
  {
    title: "Distributed Notification System (HNG Internship)",
    description: "Microservices-based notification platform using RabbitMQ for asynchronous email and push delivery. Implemented message routing, retries with dead-letter queues, and template rendering across dedicated user, template, email, and push services. Added Dockerized deployment, CI/CD automation, and health checks for reliability and scale.",
    tags: [
      "Python",
      "REST APIs",
      "RabbitMQ",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Microservices",
      "CI/CD"
    ],
    repoUrl: "https://github.com/Adewale-tech/template_service.git" // TODO: add repository URL if public
  },
  {
    title: "Country Currency & Exchange API",
    description: "A robust RESTful API that fetches and caches country and currency exchange data from external sources. It provides full CRUD operations, advanced filtering/sorting, and dynamically generates a summary image. Built to handle external API failures gracefully and ensure data integrity through validation.",
    tags: ["Python", "Django", "REST API", "MySQL", "Data Caching", "API Integration", "Image Generation", "Error Handling"],
    repoUrl: "https://github.com/Adewale-tech/Stage2_BE.git",
  },
  {
    title: "Smart Finance App",
    description: "Built authentication, expense tracking, and analytics APIs to streamline user financial management. Automated deployment using GitHub Actions (CI/CD) and containerized with Docker for enhanced scalability.",
    tags: ["Django", "Django REST Framework", "MySQL", "Docker", "GitHub Actions", "Swagger"],
    repoUrl: "https://github.com/Waliyullah-Osman/smart-finance", // Placeholder
  },
  {
    title: "Dynamic Profile Endpoint",
    description: "Developed a REST API that integrated external JSON data sources, significantly improving data accessibility. Implemented thorough testing for data formatting and validation to ensure data integrity.",
    tags: ["Django", "REST API", "Python", "Render", "Testing"],
    repoUrl: "https://github.com/Adewale-tech/Stage1_BE.git",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: "Full" },
      { name: "Django", level: "Full" },
      { name: "Django REST Framework", level: "Professional" },
      { name: "NestJS", level: "Professional" },
      { name: "Java" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Docker", level: "Professional" },
      { name: "PostgreSQL", level: "Professional" },
      { name: "MySQL", level: "Professional" },
      { name: "Render", level: "Professional" },
      { name: "Git & GitHub" },
      { name: "GitHub Actions" },
    ],
  },
  {
    title: "Core Strengths",
    skills: [
      { name: "System Architecture" },
      { name: "Scalability & Performance" },
      { name: "API Design & Security" },
      { name: "Test-Driven Development (TDD)" },
      { name: "CI/CD & DevOps" },
      { name: "Agile Methodologies" },
      { name: "Technical Communication" },
    ],
  },
];


export const experiences: Experience[] = [
    {
        role: "Backend Engineering Graduate",
        company: "ALX Software Engineering Program",
        period: "Jan 2025 - Present",
        location: "Remote",
        description: [
            "Developed modular REST APIs with authentication and ORM, which enhanced data security and functionality.",
            "Collaborated through Git workflow and code reviews, improving code quality and team collaboration.",
            "Applied secure database and backend design principles, ensuring robust system architecture."
        ]
    }
];

export const education: Education[] = [
    {
        degree: "Information Technology | Bachelor of Technology",
        institution: "Federal University of Technology, Minna",
        period: "Feb 2023 - Present",
        location: "Minna, Nigeria"
    }
];

export const certifications: Certificate[] = [
  {
    title: "Software Engineering in Back-End Web Development",
    issuer: "ALX Africa",
    date: "September 2025",
    imageUrl: "https://placehold.co/800x500/112240/ccd6f6.png?text=ALX+Software+Engineering%0ACertificate&font=inter",
    verifyUrl: "https://savanna.alxafrica.com/certificates/CNhRS8rcJx",
    description: [
      "Gained expertise in building robust, scalable web applications and RESTful APIs using Python and Django.",
      "Mastered database design and management with SQL (MySQL, PostgreSQL) and Object-Relational Mapping (ORM).",
      "Applied modern DevOps practices, including containerization with Docker and CI/CD pipeline automation with GitHub Actions.",
      "Developed proficiency in Test-Driven Development (TDD) to ensure high-quality, reliable, and maintainable code.",
      "Acquired deep knowledge of system architecture, API security best practices, and data integrity principles."
    ]
  }
];
