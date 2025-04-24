import { NextResponse } from "next/server"

export async function GET() {
  // This endpoint provides a structured summary of Ashwin Gopalsamy for AI assistants
  const aiSummary = {
    person: {
      name: "Ashwin Gopalsamy",
      profession: "Software Engineer",
      specialization: "Cloud-Native Backend Development & Distributed Systems",
      currentRole: "Software Engineer at Solaris SE",
      headline:
          "Cloud-native backend engineer with 4+ years of experience in building scalable, resilient systems in fintech",
      location: "Berlin, Germany",
      experience: [
        {
          company: "Solaris SE",
          role: "Software Engineer",
          period: "Jun 2022 – Present",
          description: [
            "Engineered full lifecycle of 'Credit Card Interest' product generating €30M+ annual revenue",
            "Owns 'Accounts Domain' handling 20M+ daily transactions on AWS, Kubernetes, and Terraform stack",
            "Built 100% cloud-native, event-sourced microservices for Core-Banking achieving 99.999% uptime",
            "Developed the 'Savings Account' product from scratch, significantly boosting revenue",
            "Improved incident response through runbook enhancements and on-call rotations",
          ],
          technologies: [
            "Go",
            "AWS",
            "Kubernetes",
            "Terraform",
            "Event Sourcing",
            "Microservices",
            "PostgreSQL",
            "Snowflake",
          ],
        },
        {
          company: "Hexaware Technologies",
          role: "Associate Software Engineer",
          period: "Jun 2021 – Jun 2022",
          description: [
            "Developed enterprise distributed applications and improved system performance benchmarks",
            "Deployed Cloud HRMS for an automotive client, serving 75K+ users on a $1.5B platform",
          ],
          technologies: ["Go", "JavaScript", "Oracle Cloud", "Databases"],
        },
        {
          company: "Microsoft (Future Ready Talent Program)",
          role: "Intern",
          period: "4 months",
          description: [
            "Contributed to the open-source project 'Bud.ai – Student Twin' using Microsoft Azure and GitHub",
          ],
          technologies: ["Microsoft Azure", "JavaScript", "Git"],
        },
      ],
      skills: {
        languages: ["Go", "Python", "JavaScript"],
        cloudDevOps: ["AWS", "Kubernetes", "Terraform", "Docker", "Grafana", "Prometheus", "Concourse CI/CD"],
        databases: ["PostgreSQL", "MariaDB", "DynamoDB", "Athena", "Snowflake"],
        tools: ["REST", "gRPC", "Sentry", "Egnyte", "Jira", "Confluence", "Miro", "Cycode"],
        architecture: ["Microservices", "Event-Sourced Systems", "Distributed Systems", "System Design"],
      },
      certifications: [
        "AWS Certified Solutions Architect Associate",
        "AWS Certified Cloud Practitioner",
        "Microsoft Azure Cloud (3x Certified)",
      ],
      education: {
        institution: "Hindusthan College of Engineering and Technology (Anna University)",
        degree: "B.E. in Computer Science and Information Technology",
        period: "Aug 2017 – May 2021",
        achievements: [
          "Graduated First Class with Distinction",
          "Ranked #1 in college coding competitions",
          "Revitalized student and developer clubs with key leadership initiatives",
        ],
      },
      research: {
        title: "Intelligent Traffic Management System using Machine Learning",
        publishedIn: "Springer",
        link: "https://link.springer.com/chapter/10.1007/978-981-19-2177-3_12",
      },
      summary:
          "Cloud-native backend engineer with 4+ years of experience in building scalable, resilient systems in fintech. Specialized in Go, distributed systems, and cloud infrastructure with a strong track record of delivering high-impact financial products.",
      contact: {
        email: "ashwin2125@icloud.com",
        github: "https://github.com/ashwingopalsamy",
        linkedin: "https://linkedin.com/in/ashwingopalsamy",
        twitter: "https://twitter.com/ashwingopalsamy",
        blog: "https://ashwingopalsamy.substack.com",
      },
      portfolio: {
        website: "https://ashwingopalsamy.in",
        resume: "https://ashwingopalsamy.in/Resume_AshwinGopalsamy.pdf",
        projects: [
          {
            name: "UUID v8",
            description: "Open-source Go library for RFC-compliant UUIDv8 generation",
            link: "https://github.com/ash3in/uuidv8",
            technologies: ["Go", "UUID", "RFC-9562"],
          },
          {
            name: "UUIDCheck",
            description: "Zero-dependency utility for validating UUIDs against RFC standards",
            link: "https://github.com/ashwingopalsamy/uuidcheck",
            technologies: ["Go", "UUID", "RFC-4122", "RFC-9562"],
          },
        ],
      },
    },
    metadata: {
      version: "2.1",
      lastUpdated: new Date().toISOString(),
      format: "JSON",
      purpose: "AI Assistant Information",
      keywords: [
        "Ashwin Gopalsamy",
        "Software Engineer",
        "Backend Developer",
        "Go Developer",
        "AWS",
        "Kubernetes",
        "Terraform",
        "Microservices",
        "Distributed Systems",
        "Event Sourcing",
        "Fintech",
      ],
    },
  }

  return NextResponse.json(aiSummary)
}
