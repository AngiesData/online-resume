/*
=========================================================
EDIT THIS FILE WHEN YOU COMPLETE A COURSE OR NEED TO
UPDATE YOUR RESUME. Most of the website content lives
inside the resumeData object below.
=========================================================
*/

const resumeData = {
  name: "Angela",
  headline: "Lead FInancial Clearance | Revenue Cycle | IP-Surgucal-Maternity",
  headline: "B.A. Liberal Arts-Business | CIS | MA Lic. | LSSBB | CPC-A | CPMA | CRC | RCMS| CPCO|",

  summary:
    "Adaptable professional with experience in training, customer service, healthcare operations, and technology. Skilled at explaining complex processes, supporting team performance, solving problems, and learning new systems quickly.",

  contact: [
    { label: "Location", value: "Massachusetts, USA" },    
    { label: "Location", value: "Remote: including Evenings/Overnights and Holidays" },
    { label: "Email", value: "insurancewithangela@gmail.com", link: "mailto:insurancewithangela@gmail.com" },
  ],

  skills: [
    "Lead Specialist",
    "Team Leadership",
    "Training & Coaching",
    "Insurance Coverage ELigibility Verification",
    "Securing Prior Authorization",
    "ER Admits",
    "DAta Validation",
    "QA Support",
    "Troubleshooting Technical Skills",
    "Improving Workflows across multiple systems",
    "Prioritizing and Balancing High-Volume Demands",
    "Critical Thinking",
    "Creative Problem Solving",
    "Process Improvement",
    "EMbrace Complexity",
  
  ],

  tools: [
    "EHR:Epic",
    "Waystar"
    "Availity"
    "Online Insurance Payer Portal Platforms"
    "Microsoft Office",
    "Microsoft Access",
    "Microsoft Azure",
    "RDBMS: SQL",
    "MySQL",
    "Jira",
    "GitHub",
    "HTML/CSS",
    "Python",
    "CRM",
    "Tableau",
    "AWS", 
    "Google Cloud"
  ],

  languages: ["English"],

  experience: [
    {
      dates: "2022 – Present",
      title: "Lead Trainer",
      organization: "Company Name · Massachusetts",
      bullets: [
        "Train and support new employees from diverse professional backgrounds.",
        "Explain workflows, policies, and systems using clear step-by-step instruction.",
        "Identify learning gaps and provide individualized coaching and feedback.",
        "Partner with leadership to improve onboarding and employee readiness."
      ]
    },
    {
      dates: "2018 – 2022",
      title: "Lead Financial Clearance Specialist",
      organization: "Healthcare Organization · Massachusetts",
      bullets: [
        "Reviewed patient coverage and financial clearance requirements.",
        "Resolved insurance and authorization issues before scheduled services.",
        "Supported staff members with complex cases and workflow questions.",
        "Maintained accurate documentation while protecting confidential information."
      ]
    }
  ],

  education: [
    {
      dates: "Expected 2027",
      title: "Bachelor of Science in Management",
      organization: "University Name",
      bullets: [
        "Relevant studies: leadership, organizational behavior, communication, and business strategy."
      ]
    },
    {
      dates: "2025",
      title: "Associate of Science in Computer Information Systems",
      organization: "College Name",
      bullets: [
        "Coursework included databases, programming fundamentals, web development, cloud technology, and systems analysis."
      ]
    }
  ],

  certifications: [
    {
      dates: "In Progress",
      title: "Medical Billing and Coding / CPC Preparation",
      organization: "Training Provider",
      bullets: [
        "Studying ICD-10-CM, CPT, HCPCS, healthcare reimbursement, compliance, and medical terminology."
      ]
    },
    {
      dates: "Completed",
      title: "Lean Six Sigma Black Belt Training",
      organization: "Certification Provider",
      bullets: [
        "Studied DMAIC, process mapping, root-cause analysis, statistical tools, waste reduction, and project leadership."
      ]
    }
  ],

  projects: [
    {
      dates: "2025",
      title: "Around My Way Dashboard",
      organization: "Personal Web Application",
      bullets: [
        "Built a customizable dashboard using Node.js, Express, EJS, Supabase, and Bootstrap.",
        "Created authentication, user dashboards, responsive navigation, and configurable widgets."
      ],
      linkText: "View project",
      link: "https://github.com/yourusername/around-my-way"
    },
    {
      dates: "2025 – Present",
      title: "Insurance With Angela",
      organization: "Professional Business Website",
      bullets: [
        "Designed and maintained a responsive informational website hosted through GitHub and Netlify.",
        "Added resource pages, forms, privacy content, and a self-hosted website assistant."
      ],
      linkText: "View website",
      link: "https://insurancewithangela.com"
    }
  ]
};


// ---------- PAGE RENDERING ----------

document.getElementById("name").textContent = resumeData.name;
document.getElementById("headline").textContent = resumeData.headline;
document.getElementById("summary").textContent = resumeData.summary;
document.getElementById("footer-name").textContent = resumeData.name;

function renderContact(items) {
  const container = document.getElementById("contact-list");

  container.innerHTML = items.map(item => {
    const content = item.link
      ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.value}</a>`
      : `<span>${item.value}</span>`;

    return `
      <div class="contact-item">
        <span class="contact-label">${item.label}</span>
        ${content}
      </div>
    `;
  }).join("");
}

function renderTags(elementId, items) {
  document.getElementById(elementId).innerHTML = items
    .map(item => `<span class="tag">${item}</span>`)
    .join("");
}

function renderEntries(elementId, items) {
  document.getElementById(elementId).innerHTML = items.map(item => {
    const bullets = item.bullets?.length
      ? `<ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>`
      : "";

    const projectLink = item.link
      ? `<p><a class="project-link" href="${item.link}" target="_blank" rel="noopener noreferrer">${item.linkText || "View project"} →</a></p>`
      : "";

    return `
      <article class="entry">
        <div class="entry-date">${item.dates}</div>
        <div>
          <h3>${item.title}</h3>
          <p class="entry-subtitle">${item.organization}</p>
          ${bullets}
          ${projectLink}
        </div>
      </article>
    `;
  }).join("");
}

renderContact(resumeData.contact);
renderTags("skills-list", resumeData.skills);
renderTags("tools-list", resumeData.tools);
renderTags("languages-list", resumeData.languages);
renderEntries("experience-list", resumeData.experience);
renderEntries("education-list", resumeData.education);
renderEntries("certifications-list", resumeData.certifications);
renderEntries("projects-list", resumeData.projects);

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("updated-date").textContent = new Date().toLocaleDateString(
  "en-US",
  { month: "long", year: "numeric" }
);

document.getElementById("print-button").addEventListener("click", () => {
  window.print();
});
