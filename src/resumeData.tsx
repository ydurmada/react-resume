export const resumeData = {
  "contact info": {
    name: "Adam Rudy",
    title: "frontend and fullstack software engineer",
    linkedin: '<a href="https://www.linkedin.com/in/adam-rudy-85570917/">LinkedIn Profile</a>'
  },
  "highlights of qualifications": [
    "20+ years’ experience in Information Technology engineering & support.",
    "Languages/runtimes: JavaScript/TypeScript/JSX, Node.JS, Swift, SwiftUI, Python, SQL, shell scripting, C, PowerShell",
    "Web frameworks: React, NextJS, RedwoodJS",
    "Web: HTML, CSS, Markdown, REST APIs, GraphQL",
    "Learning about: Remix.js, SolidJS, Bun.sh, D3, Cytoscape.js",
    "Data serialization formats: XML, JSON, YAML, TOML",
    "Libraries: GraphQL, Prisma, PostCSS, Tailwind, Bootstrap, GraphViz(dot), MermaidJS",
    "Databases: MySQL, PostgreSQL, SQLite",
    "Cloud: AWS, Netlify, Render, Linode, railway.app",
    "Linux/servers: server administration, bash, zsh, vim, nginx",
    "Tooling: Visual Studio Code, Xcode, Sublime Text, git, GitHub, curl, cron, npm, npx, Yarn, Jest, Storybook, Postman, Chrome DevTools, LightHouse, websitetest.org, RegEx, flems.io, CodeSandbox, JSFiddle",
    "ServiceNow: Incident, Request, Change Management and Knowledge (KB articles).",
    "Strong documentation skills including creation of KBs and code comments.",
    "Security minded: code should be secure by default and scanned for security vulnerabilities as part of the build pipeline.",
    "Previously held (2001-2011) federal Secret security clearance.",
    "Personal strengths include maturity, dependability, resourcefulness, and articulate writing abilities.",
  ],
  portfolio: [
    '<a href="https://github.com/ydurmada/react-resume">This resume</a> built in React',
    '<a href="https://lppqtf.csb.app/">React tic tac toe</a> with all challenges completed.',
    "Configured OpenBlocks (like Retool, Appsmith) on VM and used to build Low-code apps for CHOC Network Engineers.",
  ],
  "experience history": [
    {
      employer: "CHOC",
      "time period": "2012-FEB to Present",
      title: "Network Engineer II, Network Architect (2018–2021)",
      "experience and accomplishments": [
        {
          type: "parent",
          value: "Code",
          children: [
            {
              type: "child",
              value: "Redesigned Wi-Fi guest network HTML captive portal page.",
            },
            {
              type: "child",
              value:
                "Used Python + cron to periodically connect to firewall XML API and extract a performance metric unavailable to standard reporting.",
            },
            {
              type: "child",
              value:
                "Wrote JavaScript to import a csv file containing network documentation into a documentation server via REST API.",
            },
            {
              type: "child",
              value:
                "Wrote JavaScript to create a procedurally generated network diagram rendered with https://draw.io",
            },
            {
              type: "child",
              value:
                "Created many PowerShell scripts to extract data from our Solarwinds Orion network monitoring platform.",
            },
            {
              type: "child",
              value:
                "Created PowerShell script to automate speed tests and append results to csv.",
            },
            {
              type: "child",
              value:
                "Used Python, Pandoc, bash, regex, JavaScript, and Excel to convert (101) .docx status reports to a single csv file.",
            },
            {
              type: "child",
              value:
                "Modified Chrome Extension to render Markdown-formatted code blocks in text fields as HTML code blocks in Microsoft Planner.",
            },
            {
              type: "child",
              value: "Automated creation of Kronos-edit form text using Excel.",
            },
            {
              type: "child",
              value:
                "Automated creation of punch-in/out reminders using Apple Shortcuts",
            },
            {
              type: "child",
              value:
                "Wrote various JavaScript utilities to perform text output for text expansion and PKM (personal knowledge management) software (in example, generate UUID, get next and previous weekday date, get quote of the day, etc.)",
            },
            {
              type: "child",
              value:
                "Wrote daily notes and KBs in Markdown using PKM software Obsidian.md.",
            },
            {
              type: "parent",
              value: "used MS Power Automate to",
              children: [
                {
                    type: "child",
                    value: "Activate Outlook out of office message when PTO calendar event is created."
                },
                {
                    type: "child",
                    value: "Acquire deep link to any MS Teams message."
                },
                {
                    type: "child",
                    value: "Save any Teams message to OneNote with deep link."
                },
              ],
            },
          ],
        },
        {
          type: "parent",
          value: "Networking",
          children: [
            {
              type: "child",
              value:
                "Managed environment consisting of 200 network devices (switches, routers, firewalls, Wi-Fi controllers and authentication servers) and 600 access points across 2 hospital building, 4 medical office buildings and 35+ off-campus clinic locations.",
            },
            {
              type: "child",
              value:
                "Updated config of 200+ network devices using a Solarwinds Orion NCM script.",
            },
            {
              type: "child",
              value:
                "Built CHOC’s BYOD (Bring Your Own Device) system using ClearPass Onboard and integrated with the MobileIron MDM (Mobile Device Management).",
            },
            {
              type: "child",
              value:
                "Designed certificate issuance system with ClearPass Onboard for enterprise-owned devices.",
            },
            {
              type: "child",
              value:
                "Architected and created Bill of Materials for 2017 datacenter network hardware refresh with a MSRP of $1,000,000+",
            },
            {
              type: "child",
              value:
                "Migrated all CHOC’s wireless network authentication off aging servers to a new set of Aruba ClearPass servers in uptime.",
            },
            {
              type: "child",
              value: "Upgraded CHOC’s Internet-edge routers in uptime.",
            },
            {
              type: "child",
              value:
                "Upgraded CHOC’s Internet bandwidth from 100Mbps to 400Mbps for no additional monthly cost.",
            },
            {
              type: "child",
              value:
                "Added Palo Alto Networks firewall Virtual-Wire to dark fiber between St. Joe and CHOC in uptime.",
            },
            {
              type: "child",
              value:
                "Saved $100,000+ by switching from 1yr to 3yr Cisco SmartNet contracts.",
            },
            {
              type: "child",
              value: "Added redundancy to Internet-edge switches in uptime.",
            },
            {
              type: "child",
              value: "Built and maintained 30+ B2B IPSEC VPN tunnels.",
            },
            {
              type: "child",
              value:
                "Built remote connectivity for CHOC’s Radiology NightHawk service using Aruba Remote APs.",
            },
            {
              type: "child",
              value:
                "Performed coordination and interviewed for the hiring of Network Engineers and Network Architects.",
            },
            {
              type: "child",
              value:
                "Streamlined CHOC’s clinic network stack by eliminating the router with layer 3 switches.",
            },
            {
              type: "child",
              value:
                "Designed new clinic network stack based on the PA-220 firewall for off-campus clinics with Internet-only back-haul.",
            },
            {
              type: "child",
              value:
                "Assisted in the design and implementation of network connectivity for first VDI-based off-campus clinic.",
            },
          ],
        },
        {
          type: "parent",
          value: "Other",
          children: [
            {
              type: "child",
              value:
                "Involved in the engineer and architect interview process of 30+ candidates and wrote executive summaries including a weighted score-card for management.",
            },
            {
              type: "child",
              value:
                "Created Network Engineering cloud wiki using OneNote hosted on Office 365 Sharepoint.",
            },
            {
              type: "child",
              value:
                "Member of Architectural Review Committee and Security Operations Center committee.",
            },
            {
              type: "child",
              value:
                "Experience with PKI infrastructure including general architecture, certificate authorities, certificate fields, certificate file formats and asymmetric encryption.",
            },
            {
              type: "child",
              value: "Have kept a daily time-log since Feb 6, 2012.",
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      organization: "freeCodeCamp.org",
      dates: "2022-JUN",
      training:
        "JavaScript Algorithms and Data Structures (<a href='https://www.freecodecamp.org/certification/fcc63742c06-c990-41ed-bac1-cdcd9aa30b0c/javascript-algorithms-and-data-structures'>view cert</a>)",
    },
    {
      organization: "Metropolitan State College of Denver",
      dates: "2005-AUG to 2010-DEC",
      training:
        "Bachelor of Science in Computer Information Systems (summa cum laude)",
    },
    {
      organization: "U.S. Marine Corps",
      dates: "2002-JAN to 2002-JUN, 2004-FEB",
      training:
        "Specialized Training: Small Computer Systems Specialist, Network Administration, MS Exchange Server, Leadership",
    },
    {
      organization:
        "Lancaster County Career and Technology Center (LCCTC)",
      dates: "2000-AUG to 2001-JUN",
      training: "Micro Computer Technology/Network Engineering Course",
    },
  ],
};
