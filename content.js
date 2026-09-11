/* =============================================================================
   content.js — HIMU TECHNOLOGIES INC.
   -----------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE WEBSITE.

   Everything the site displays lives in the SITE_CONTENT object below.
   Change the text between the quotation marks, save the file, and the website
   updates. You never need to touch index.html, styles.css or app.js.

   QUICK INDEX — jump to the section you want by searching for the marker:

     [EDIT-1]  Your name, credentials, headline and photograph
     [EDIT-2]  Contact information (email, phone, LinkedIn, resume file)
     [EDIT-3]  Executive impact indicators (the row beneath the hero)
     [EDIT-4]  Consulting services (add / remove / reword a service card)
     [EDIT-5]  Selected engagements (add a new engagement, update an achievement)
     [EDIT-6]  Full career history — the resume download band
     [EDIT-7]  Client testimonials (add an approved testimonial)
     [EDIT-8]  About / executive biography
     [EDIT-9]  Certifications and education
     [EDIT-10] Footer and privacy statement

   THREE RULES THAT KEEP THE SITE WORKING

     1. Every item in a list is wrapped in { curly braces } and separated from
        the next one by a comma.
     2. Text must sit inside "double quotation marks". If your text contains a
        double quotation mark, write it as \" — for example: "he said \"yes\"".
     3. Never delete a comma or a brace unless you are removing a whole item.

   If the site ever goes blank after an edit, you almost certainly removed a
   comma or a brace. See the "Restoring an earlier version" part of README.md —
   GitHub keeps every previous version and restoring takes about a minute.

   A STANDING RULE FOR THIS SITE
   No client budgets, program values, portfolio figures, resource counts,
   country counts or regional counts appear anywhere on this website, and no
   currency or financial terminology is used to describe scale. Scale is
   expressed qualitatively — "enterprise-scale", "global", "cross-regional".
   Performance is described in words rather than percentages, because a
   percentage attributed to a named client is that client's data to publish,
   not yours. Please keep it that way when you edit.
   ========================================================================== */

const SITE_CONTENT = {

  /* ==========================================================================
     [EDIT-1] IDENTITY — name, credentials, headline, photograph
     --------------------------------------------------------------------------
     TO REPLACE THE PROFESSIONAL PHOTOGRAPH:
       1. Save your photo as a .jpg file, ideally square, at least 600x600px.
       2. Name it exactly:  headshot.jpg
       3. Upload it into the  assets/  folder of your repository, replacing
          the monogram placeholder that ships with the site.
       4. Change "headshotAlt" below to describe the photograph — for example:
          "Professional headshot of Mohammed Kabir, Principal Consultant at
          Himu Technologies Inc." Screen-reader users rely on that line, so it
          should say what the image actually shows.
     If the image file is ever missing or fails to load, the site falls back to
     the "MK" monogram drawn in the browser — it never shows a broken image.
     ====================================================================== */
  identity: {
    firstName: "Mohammed",
    lastName: "Kabir",
    fullName: "Mohammed Kabir",
    credentials: "MMSc, PMP, CISM, CSM, CSPO, ITIL",
    title: "Senior Program Manager and Business Transformation Leader",
    company: "Himu Technologies Inc.",
    companyDescriptor: "Independent consulting practice",
    tagline:
      "Helping organizations deliver secure, data-driven transformation across AI, cloud, cybersecurity, enterprise platforms and capital markets.",
    // Shown under the tagline as three short proof points.
    heroProof: [
      "22+ years leading enterprise programs",
      "Government, financial services, life sciences and manufacturing",
      "Toronto, Ontario — global and cross-regional engagements"
    ],
    headshot: "assets/headshot.jpg",
    headshotAlt:
      "Monogram placeholder reading MK above the words Himu Technologies Inc., shown in place of a photograph of Mohammed Kabir.",
    monogram: "MK"
  },

  /* ==========================================================================
     [EDIT-2] CONTACT — email, phone, LinkedIn, resume download
     --------------------------------------------------------------------------
     TO CHANGE YOUR CONTACT INFORMATION: edit the values below.
     TO UPDATE THE RESUME LINK:
       1. Save your resume as a PDF named:  Mohammed-Kabir-Resume.pdf
       2. Upload it into the  assets/  folder, replacing the old file.
     If you prefer a different filename, change "resumeFile" below to match.
     ====================================================================== */
  contact: {
    email: "mokabir@gmail.com",
    phone: "647-889-2036",
    phoneHref: "+16478892036",
    linkedIn: "https://www.linkedin.com/in/mokabir",
    linkedInLabel: "linkedin.com/in/mokabir",
    location: "Toronto, Ontario, Canada",
    availability: "Available for contract, advisory and fractional program leadership engagements.",
    resumeFile: "assets/Mohammed-Kabir-Resume.pdf",
    resumeLabel: "Download Resume (PDF)",

    // The "Schedule an Introductory Conversation" button opens the visitor's
    // own email program with this subject and message pre-filled. No booking
    // service, no backend, no third party involved.
    meetingSubject: "Introductory conversation — Himu Technologies Inc.",
    meetingBody:
      "Hello Mohammed,\n\nI would like to arrange a short introductory conversation about a program or transformation initiative.\n\nOrganization:\nRole:\nInitiative / challenge:\nApproximate timing:\nPreferred times to speak:\n\nThank you,\n",
    meetingCta: "Schedule an Introductory Conversation",
    meetingNote:
      "Opens your email application with a short brief pre-filled. Replies are typically sent within two business days."
  },

  /* ==========================================================================
     [EDIT-3] EXECUTIVE IMPACT — the indicators below the hero
     --------------------------------------------------------------------------
     TO UPDATE AN INDICATOR: change "value" and "label".
     "context" is the short explanatory line underneath — keep it factual.
     "unit" is the small label above the value. Set it to "" to hide it.

     Scale is stated qualitatively on purpose. No client budget, program value,
     portfolio figure, resource count or regional count belongs here, and no
     currency or financial wording. If you want a number, use one that is yours
     rather than a client's — years of experience is the clearest example.

     ADD OR REMOVE AN INDICATOR by copying or deleting a whole { ... } block.
     The row re-balances automatically for two, three or four indicators.
     ====================================================================== */
  impact: [
    {
      value: "22+",
      unit: "years",
      label: "Enterprise program leadership",
      context:
        "Multi-workstream programs across government, financial services, life sciences, manufacturing and consumer products."
    },
    {
      value: "Enterprise-scale",
      unit: "scope",
      label: "Transformation programs",
      context:
        "Single-program accountability for scope, schedule, risk and benefits realization, under executive and audit scrutiny."
    },
    {
      value: "Global",
      unit: "leadership",
      label: "Multidisciplinary leadership",
      context:
        "Business, product, data, architecture, engineering, security and vendor teams directed across regions and time zones."
    }
  ],

  /* ==========================================================================
     [EDIT-4] CONSULTING SERVICES
     --------------------------------------------------------------------------
     TO ADD A SERVICE: copy one whole { ... } block, paste it below the last
       one, add a comma between them, and edit the text.
     TO REMOVE A SERVICE: delete the whole { ... } block and the comma that
       follows it. The grid re-flows automatically — no layout changes needed.

     "icon" accepts one of these built-in names (no external icon library):
       transformation, ai, data, shield, markets, platform, governance, change
     ====================================================================== */
  services: [
    {
      icon: "transformation",
      title: "Business and Financial Transformation",
      summary:
        "Turn strategic intent into a funded, sequenced program that finance, operations and technology all recognize as theirs.",
      points: [
        "Business case, benefits model and investment sequencing",
        "Treasury, cash-flow forecasting, FX exposure and liquidity process change",
        "Financial controls, SOX and Three Lines of Defense alignment",
        "Target operating model design and transition"
      ]
    },
    {
      icon: "ai",
      title: "AI and Emerging Technology Programs",
      summary:
        "Move AI from experiment to dependable business capability, with the governance executives need before they will scale it.",
      points: [
        "Use-case discovery, prioritization and value-case development",
        "Generative and agentic workflows, including Copilot, ChatGPT, Claude and Model Context Protocol",
        "Responsible-AI controls, human-in-the-loop design and auditability",
        "Model performance monitoring, adoption measurement and value realization"
      ]
    },
    {
      icon: "data",
      title: "Data, Analytics and Cloud Modernization",
      summary:
        "Build the data foundation that makes analytics and AI trustworthy, then migrate the workloads that depend on it.",
      points: [
        "Azure modernization, migration planning and operational readiness",
        "Data quality, lineage, reconciliation and master data management",
        "Integration across mainframe, ERP and modern cloud platforms",
        "Executive reporting and decision-support analytics"
      ]
    },
    {
      icon: "shield",
      title: "Enterprise Cybersecurity and IAM",
      summary:
        "Strengthen security posture in regulated environments without stalling the business programs that depend on it.",
      points: [
        "Security operations enablement, threat hunting and detection workflow",
        "Identity and privileged access management, Zero Trust and access governance",
        "Vulnerability management, database security and remediation prioritization",
        "Security, privacy and regulatory control validation"
      ]
    },
    {
      icon: "markets",
      title: "Capital Markets and Trading Modernization",
      summary:
        "Modernize front-to-back trading and investment operations with the control environment regulators and auditors expect.",
      points: [
        "Trading platform and investment operations modernization",
        "FX, fixed income and derivatives workflow, valuation and settlement",
        "Trade, reference and regulatory data integration and reporting",
        "Risk, compliance, audit and operations alignment"
      ]
    },
    {
      icon: "platform",
      title: "ERP and Enterprise Integration",
      summary:
        "Deliver core platform change — ERP, CRM and integration — so that day-one operations hold and benefits actually land.",
      points: [
        "SAP, JD Edwards, Salesforce, Dynamics and MuleSoft delivery",
        "Data migration, reconciliation and cutover planning",
        "SIT, UAT, release readiness and hypercare",
        "Merger and acquisition integration and operating-model change"
      ]
    },
    {
      icon: "governance",
      title: "Program Governance and Delivery Recovery",
      summary:
        "Restore control and confidence on programs that have lost schedule, scope or executive trust — and keep it once recovered.",
      points: [
        "Independent delivery assessment and recovery roadmap",
        "Integrated plans, budgets, forecasts, RAID and dependency control",
        "Vendor and systems-integrator accountability",
        "Executive reporting, options analysis and decision support"
      ]
    },
    {
      icon: "change",
      title: "Change Management and Adoption",
      summary:
        "Close the distance between a system going live and people actually using it, measured rather than assumed.",
      points: [
        "Stakeholder and change-impact assessment",
        "Communications, training and organizational readiness",
        "Cutover, operational transition and support-model design",
        "Adoption measurement, reinforcement and benefits tracking",
        "Informed by Prosci ADKAR and Kotter change principles"
      ]
    }
  ],

  /* ==========================================================================
     ENGAGEMENT FILTER CATEGORIES
     --------------------------------------------------------------------------
     "id" is used by the engagements below. If you add a category here, use its
     id in the "categories" list of any engagement that belongs to it.
     ====================================================================== */
  engagementFilters: [
    { id: "all",            label: "All Engagements" },
    { id: "public-sector",  label: "Public Sector" },
    { id: "financial",      label: "Financial Services and Capital Markets" },
    { id: "life-sciences",  label: "Life Sciences" },
    { id: "manufacturing",  label: "Manufacturing and Consumer Products" },
    { id: "cyber",          label: "Cybersecurity" },
    { id: "ai-data-cloud",  label: "AI, Data and Cloud" }
  ],

  /* ==========================================================================
     [EDIT-5] SELECTED ENGAGEMENTS
     --------------------------------------------------------------------------
     This is a CURATED portfolio, not a chronological employment history. Each
     entry answers four questions in the same order:

         challenge     What business problem existed
         contribution  What Mohammed personally led
         solution      What was delivered
         outcomes      What measurably changed

     Visitors who want the full chronological record download the resume. That
     is what the band beneath this section is for — see [EDIT-6].

     ADDING A NEW ENGAGEMENT
       Copy an entire { ... } block, paste it at the TOP of the list, add a
       comma between blocks, and replace the text. Nothing else to change.

     REMOVING AN ENGAGEMENT
       Delete the whole { ... } block and the comma after it. Filters and
       counts recalculate on their own.

     FIELD BY FIELD
       organization  Client or employer name, exactly as it should appear.
       sector        Short descriptor shown under the organization name.
       role          Your title on the engagement.
       period        Dates. Shown small and secondary. Set to "" to hide it
                     entirely on an engagement where dates add nothing.
       location      Optional. Set to "" to hide.
       categories    Which filters this appears under. Use the ids above.
       challenge     One or two sentences. The business problem, not the tools.
       contribution  What you led. Write it as leadership, not task list.
       solution      What was actually delivered.
       outcomes      3–5 short, outcome-first bullets. These are the lines a
                     hiring executive actually reads — lead with what changed
                     for the business, described in words rather than figures.
       scale         Optional short descriptors shown as small tags — scope,
                     domain, geography. Never a budget, program value or
                     resource count. Delete the line if there are none.
       stack         Optional platforms and technologies.

     KEEPING CLIENT CONFIDENCE
     Describe what changed, in words. Say that forecast accuracy improved
     materially, not by what percentage; say that costs came down, not by how
     much. Any figure attached to a named client — a budget, a program value,
     a portfolio total, a headcount, a country or region count, a performance
     percentage — is that client's to disclose, not yours. Never publish client
     internal data, named individuals, contract terms or other non-public
     detail. If a figure is genuinely public, cite where it was published.

     A NOTE ON WHAT WAS REMOVED (Sep 2026)
     Six thinner entries — Scotiabank, Export Development Canada, John Hancock
     Financial, Cameco, Saskatoon Health Region, and a grouped RBC / AIG /
     IBM entry — were taken out of this portfolio because they had no dates,
     no scope detail and no measurable outcome on file. They remain in the
     resume PDF, which is where the complete history belongs. If you later
     want any of them back as a full engagement, add a new block above using
     the same four-part structure.
     ====================================================================== */
  engagements: [
    {
      organization: "Ontario Public Service",
      sector: "Ministry of Public and Business Service Delivery and Procurement — Cyber Security Division",
      role: "Senior Project Manager — AI, Cybersecurity, Data and Cloud Transformation",
      period: "Jan 2026 – Present",
      location: "Toronto, Ontario",
      categories: ["public-sector", "cyber", "ai-data-cloud"],
      challenge:
        "An enterprise cybersecurity, data and AI portfolio had to be shaped out of operational problems — fragmented vulnerability visibility, manual investigation effort and rising demand for AI — into prioritized initiatives that executives could fund, govern and measure.",
      contribution:
        "Leads the portfolio end to end, converting operational challenges into prioritized use cases, roadmaps, delivery plans and measurable success criteria. Provides Directors, executive sponsors and the CISO organization with outcome-based reporting, options and recommendations, and holds Microsoft, IBM, Deloitte and ServiceNow to named delivery accountabilities.",
      solution:
        "An AI governance framework covering business value, data access, privacy, cybersecurity, responsible use, human-in-the-loop control, tool evaluation, auditability, adoption and performance measurement; generative and agentic AI use cases built on Microsoft Copilot, ChatGPT, Claude and Model Context Protocol to augment security investigation, threat hunting, evidence synthesis and reporting; and IBM Guardium vulnerability-assessment enablement integrated with ServiceNow workflows, configuration-item validation, recurring scanning and enterprise reporting.",
      scale: ["Enterprise portfolio", "CISO organization", "Multi-vendor"],
      outcomes: [
        "AI adoption placed under explicit governance — value, privacy, responsible use, auditability and adoption measurement — before scale rather than after it",
        "Vulnerability visibility and remediation prioritization improved through expanded database coverage and enterprise reporting",
        "Data integration, control validation and executive insight strengthened across Microsoft Sentinel, Defender XDR, Splunk, ServiceNow and Power BI",
        "Microsoft, IBM, Deloitte and ServiceNow aligned around delivery accountability and sustainable value realization"
      ],
      stack: ["Microsoft Sentinel", "Defender XDR", "Splunk", "IBM Guardium", "ServiceNow", "Power BI", "Microsoft Copilot", "Model Context Protocol"]
    },
    {
      organization: "Becton Dickinson (BD)",
      sector: "Global MedTech",
      role: "Program Manager — AI/ML, Global Trade Systems, Treasury and Data Transformation",
      period: "Oct 2024 – Dec 2025",
      location: "Franklin Lakes, New Jersey",
      categories: ["life-sciences", "ai-data-cloud"],
      challenge:
        "Treasury and Finance needed dependable cash-flow forecasting across global operations, but the data it depended on sat across mainframe, DB2, SAP HANA, JD Edwards and Microsoft SQL Server environments with no common governance over quality or lineage.",
      contribution:
        "Directed the full AI/ML program lifecycle — business case, use-case prioritization, data readiness, model delivery, governance, adoption and performance monitoring — across Global Trade Systems, Supply Chain, Treasury and Finance. Aligned Treasury, Finance, Supply Chain, Data Science, Architecture, Cybersecurity, regional operations and vendors around model performance and business adoption, and led the impact assessment, communications, training, testing and cutover that carried it into use.",
      solution:
        "An AI/ML-enabled forecasting capability delivered on Azure Databricks, SAP HANA and Power BI, resting on trusted data pipelines and governance controls across the source systems, with responsible-AI, identity, segregation-of-duties, auditability and sensitive-data protection embedded in the design to support SOX and Three Lines of Defense requirements.",
      scale: ["Global Trade Systems", "Treasury and Finance", "Global"],
      outcomes: [
        "Cash-flow forecast accuracy improved materially, enabling more timely and better-informed liquidity and FX-hedging decisions",
        "Treasury processes modernized across forecasting, FX exposure, hedging, liquidity and P&L reconciliation, connecting AI insight to financial decision-making",
        "Quality, lineage and reliability improved for the data feeding both AI models and executive reporting",
        "Capability moved from technical implementation into sustained business use rather than stalling at go-live"
      ],
      stack: ["Azure Databricks", "SAP HANA", "JD Edwards", "DB2", "Microsoft SQL Server", "Power BI", "Microsoft Azure"]
    },
    {
      organization: "Mondelēz International",
      sector: "Global Food and Beverage",
      role: "Senior Program Manager — Global Trade Promotion Management and M&A Transformation",
      period: "Nov 2022 – Sep 2024",
      location: "Global — cross-regional delivery",
      categories: ["manufacturing", "ai-data-cloud"],
      challenge:
        "Trade promotion management ran cross-regionally on a mix of Salesforce TPM, MuleSoft, SAP S/4HANA and legacy platforms, while an acquisition had to be absorbed into the same operating model without disrupting planning cycles.",
      contribution:
        "Led the global, cross-regional program, directing Product, Data, Architecture, Engineering, Finance, Sales and Supply Chain teams while holding Accenture, Infosys, SAP, Salesforce and PwC to delivery outcomes, data governance and value realization. Led the Clif Bar acquisition integration and the global operating-model change that came with it, including stakeholder impacts, communications, training, readiness, cutover and adoption.",
      solution:
        "Integrated Sales, Finance and Supply Chain data across pricing, promotions, accruals, deductions, claims, inventory, forecasting and P&L reporting, with AI and advanced-analytics use cases for promotion effectiveness, demand forecasting, trade-spend insight and exception identification.",
      scale: ["Salesforce TPM", "M&A integration", "Cross-regional"],
      outcomes: [
        "Operating efficiency improved and operating costs reduced through workflow automation, process standardization, platform integration and disciplined vendor and scope management",
        "Planning cycles shortened and AI-supported decisions made more reliable through integrated cross-functional data",
        "Clif Bar acquisition integrated across regions and business functions alongside the platform program"
      ],
      stack: ["Salesforce TPM", "MuleSoft", "SAP S/4HANA", "Power BI"]
    },
    {
      organization: "TD Bank",
      sector: "Global Capital Markets and Wealth",
      role: "Senior Program Manager — Global Trading Desk Modernization",
      period: "Apr 2022 – Oct 2022",
      location: "Toronto, Ontario",
      categories: ["financial"],
      challenge:
        "Modernizing the global trading desk required Business, Trading, Technology, Data, Risk, Audit, Compliance, Cybersecurity and Operations to work to a single plan, in an environment where front-to-back workflow errors carry immediate financial and regulatory consequence.",
      contribution:
        "Led the cross-functional modernization across Capital Markets and Wealth through one integrated governance, planning and implementation structure. Led requirements, backlog, data integration, SIT/UAT, release readiness and production implementation, and put executive decisions on a footing of options, risk analysis, recommendations and transparent ownership.",
      solution:
        "Front-to-back trading and investment workflow support involving Murex, SimCorp and downstream platforms, spanning FX, fixed income, trade booking, valuation, settlement, reconciliation and exception management.",
      scale: ["Capital Markets and Wealth", "Front-to-back", "Cross-functional"],
      outcomes: [
        "Every function involved brought under a single integrated governance and implementation structure",
        "Front-to-back workflows supported across FX, fixed income, booking, valuation, settlement and reconciliation",
        "Executive decisions taken on options and risk analysis rather than status reporting, with ownership visible throughout"
      ],
      stack: ["Murex", "SimCorp", "Trading and settlement platforms"]
    },
    {
      organization: "Ontario Securities Commission",
      sector: "Capital Markets Regulator",
      role: "IT Program Manager — Capital Markets Data, MDM, Cybersecurity and Regulatory Transformation",
      period: "May 2018 – Nov 2019",
      location: "Toronto, Ontario",
      categories: ["public-sector", "financial", "cyber"],
      challenge:
        "Regulatory oversight of OTC derivatives depended on trading and reference data scattered across DDR, CME, ICE, LEI, FX and market-data sources, with no consolidated view to support traceability or audit.",
      contribution:
        "Led the program end to end and established PMO governance across scope, schedule, vendors, risks, dependencies, implementation and executive reporting using Clarity, Jira and Confluence. Translated regulatory reporting and oversight requirements into executable data and technology solutions, and partnered with IBM on the security layer protecting the resulting data.",
      solution:
        "An OTC Derivatives Data Warehouse and master data capability consolidating those sources, with data migration, integration, reconciliation, taxonomy and quality controls across platforms, and IBM Guardium monitoring protecting sensitive regulatory data.",
      scale: ["Regulatory reporting", "Multi-source data", "MDM"],
      outcomes: [
        "Regulatory insight, traceability and accessibility improved through a single consolidated derivatives data capability",
        "Monitoring and protection of sensitive regulatory data strengthened while supporting audit, privacy and cybersecurity requirements",
        "Regulatory requirements translated into delivered data and technology solutions rather than documented intentions",
        "Vendors, risks, dependencies and implementation governed under a single PMO with transparent executive reporting"
      ],
      stack: ["IBM Guardium", "Clarity", "Jira", "Confluence", "Data warehouse and MDM platforms"]
    },
    {
      organization: "Canada Pension Plan Investment Board",
      sector: "Global Institutional Investor",
      role: "IT Program Manager — Murex, Trading Data and Investment Operations Modernization",
      period: "Mar 2017 – Apr 2018",
      location: "Toronto, Ontario",
      categories: ["financial"],
      challenge:
        "Trading and investment operations spanned Murex, SimCorp, Bloomberg, Informatica and downstream platforms, leaving FX and derivatives workflows dependent on data that had to stay consistent across all of them.",
      contribution:
        "Led the modernization and coordinated FX and derivatives workflows across options, forwards, futures and commodities, working directly with Portfolio Managers, Traders, Risk and Operations on valuation, settlement, exceptions and reconciliation. Directed trading-data integration, mapping, migration, testing and production readiness, and provided oversight of the identity and access work protecting sensitive investment information.",
      solution:
        "Modernized front-to-back processing with integrated trading data across the platform estate, and strengthened access controls over sensitive investment information.",
      scale: ["Front-to-back", "Investment operations", "FX and derivatives"],
      outcomes: [
        "Front-to-back processing, data integrity and operational visibility improved across investment operations",
        "Valuation, settlement, exception and reconciliation workflows coordinated across Portfolio Management, Trading, Risk and Operations",
        "Access controls over sensitive investment information strengthened alongside the platform work"
      ],
      stack: ["Murex", "SimCorp", "Bloomberg", "Informatica"]
    },
    {
      organization: "Ministry of Children, Community and Social Services",
      sector: "Government of Ontario",
      role: "Senior Project Manager — ERP, Azure Cloud, Data and Organizational Transformation",
      period: "Dec 2019 – Mar 2022",
      location: "Toronto, Ontario",
      categories: ["public-sector", "ai-data-cloud"],
      challenge:
        "Several ERP, Azure cloud, master data and digital modernization initiatives had to advance at once inside Ontario Public Service governance, security, privacy and enterprise architecture standards, where a misstep on accessibility or privacy stops delivery outright.",
      contribution:
        "Led the initiatives across multiple workstreams, developing charters, business cases, integrated schedules, budgets, RAID logs and delivery strategies. Coordinated requirements, architecture, infrastructure readiness, data migration, security and privacy reviews, UAT, implementation and operational transition, and embedded stakeholder engagement, accessibility, communications, training, cutover readiness and support-model planning inside the program rather than after it.",
      solution:
        "Delivery across IBM Cúram, Microsoft Dynamics, Oracle and SAP-related environments and government integrations, aligned throughout to OPS I&IT governance, security, privacy, FIPPA and PHIPA requirements.",
      scale: ["Multiple workstreams", "OPS governance", "FIPPA / PHIPA"],
      outcomes: [
        "Concurrent ERP, cloud, master data and digital initiatives delivered under one integrated planning and governance structure",
        "Operational transition and support model planned as part of the program, so services were supportable on day one",
        "Accessibility, security and privacy requirements met within OPS enterprise architecture standards"
      ],
      stack: ["Microsoft Azure", "IBM Cúram", "Microsoft Dynamics", "Oracle", "SAP"]
    }
  ],

  /* ==========================================================================
     [EDIT-6] FULL CAREER HISTORY — the resume download band
     --------------------------------------------------------------------------
     This band sits directly beneath Selected Engagements. It is the site's
     answer to "where is the rest of it?" — the portfolio above is curated on
     purpose, and the resume carries the complete chronological record.

     Edit the wording here. The button itself points at the resume file set in
     [EDIT-2], so you never need to change the link in two places.
     ====================================================================== */
  resumeCta: {
    eyebrow: "Full career history",
    heading: "The complete chronological record",
    body:
      "The engagements above are a selected portfolio, chosen for relevance rather than completeness. The resume carries the full employment history — every organization, role and date, together with the earlier delivery work behind the programs shown here.",
    note: "PDF · updated regularly"
  },

  /* ==========================================================================
     [EDIT-7] CLIENT TESTIMONIALS
     --------------------------------------------------------------------------
     HOW TO ADD AN APPROVED TESTIMONIAL

     1. Copy the exact wording of the recommendation. Do not shorten, improve,
        correct or paraphrase it. Publish it word for word.
     2. Obtain the person's permission to publish it on this website. A LinkedIn
        recommendation is public, but permission to reuse it as marketing on a
        commercial site is a separate thing — ask, and keep the reply.
     3. Copy the template block below, paste it inside the square brackets,
        fill in every field, and set  permissionConfirmed: true

     >>> A testimonial is displayed ONLY when permissionConfirmed is true. <<<
     Leave it false and the entry stays invisible. Until at least one approved
     testimonial exists, the site shows a professional invitation to view your
     LinkedIn recommendations instead — never invented placeholder quotes.

     TEMPLATE — copy everything between the lines:
     ----------------------------------------------------------------------
     {
       exactQuote: "Paste the recommendation here, word for word.",
       clientName: "Full Name",
       clientTitle: "Their title at the time",
       organization: "Their organization",
       relationship: "e.g. Executive sponsor, Guardium program",
       date: "Month Year",
       linkedInSource: "https://www.linkedin.com/in/their-profile",
       permissionConfirmed: false
     },
     ----------------------------------------------------------------------
     ====================================================================== */
  testimonials: [
    // No approved testimonials on file yet. Add them using the template above.
  ],

  // Shown when no testimonial has permissionConfirmed set to true.
  testimonialFallback: {
    heading: "Recommendations",
    body:
      "Written recommendations from executives, sponsors and delivery colleagues are published on Mohammed's LinkedIn profile, where each one can be read in full and attributed to its author. Testimonials are added to this page only with the author's explicit permission and always in their own words.",
    ctaLabel: "View recommendations on LinkedIn"
  },

  /* ==========================================================================
     [EDIT-8] ABOUT — executive biography
     --------------------------------------------------------------------------
     Each string in "paragraphs" becomes one paragraph. Add or remove
     paragraphs freely. "principles" are the short cards beneath the biography.
     ====================================================================== */
  about: {
    heading: "About Mohammed Kabir",
    lead:
      "A Canadian senior program leader and independent consultant who takes complex, multi-workstream transformation from executive intent to measurable business outcome.",
    paragraphs: [
      "Over more than twenty-two years, Mohammed has led enterprise programs across the Ontario Public Service, financial services and capital markets, life sciences, manufacturing and consumer products. The work spans AI and machine learning, enterprise data, Azure cloud, cybersecurity and identity, ERP, Treasury and trading platforms — but the constant is the same: connecting business strategy, financial controls and technology execution tightly enough that the intended benefit actually arrives.",
      "His delivery approach is deliberately unglamorous. Scope, schedule, budget, risk and dependencies are made explicit early and kept visible. Decisions are brought to executives as options with consequences rather than status updates. Vendors and systems integrators are held to named, dated accountabilities. When a program is in difficulty, the first work is establishing what is actually true, not defending what was previously reported.",
      "Mohammed works comfortably in regulated environments where governance is not optional — Ontario Public Service I&IT governance, FIPPA and PHIPA, SOX and Three Lines of Defense, and capital-markets regulatory reporting. That same discipline now shapes how he governs AI: business value, data access, privacy, responsible use, human oversight, auditability and adoption measurement, established before scale rather than retrofitted after it.",
      "He engages through Himu Technologies Inc., an Ontario corporation, on contract, advisory and fractional program leadership assignments."
    ],
    principles: [
      {
        title: "Outcome before activity",
        body: "Programs are measured by the business result they produce, not by the volume of work completed. Success criteria are agreed before delivery starts."
      },
      {
        title: "Executive decision support",
        body: "Sponsors receive options, risks, costs and a recommendation. Reporting is built to enable a decision, not to describe a status."
      },
      {
        title: "Governance that holds",
        body: "Integrated plans, RAID, dependency control and change control that survive contact with a real program — in regulated and audited environments."
      },
      {
        title: "Adoption is the deliverable",
        body: "A capability that is implemented but not used has delivered nothing. Readiness, training, cutover and reinforcement are planned as part of the program."
      }
    ],
    companyNote:
      "Himu Technologies Inc. is an Ontario corporation and the contracting entity for Mohammed Kabir's consulting engagements."
  },

  /* ==========================================================================
     [EDIT-9] CERTIFICATIONS AND EDUCATION
     --------------------------------------------------------------------------
     Only list qualifications that are held and verifiable. Coursework and
     professional development are listed separately from certifications on
     purpose — keep that distinction.
     ====================================================================== */
  credentials: {
    certifications: [
      { abbr: "PMP",      name: "Project Management Professional",           body: "Project Management Institute" },
      { abbr: "PRINCE2",  name: "PRINCE2 Practitioner",                      body: "PeopleCert / AXELOS" },
      { abbr: "CISM",     name: "Certified Information Security Manager",    body: "ISACA" },
      { abbr: "ITIL",     name: "ITIL",                                      body: "PeopleCert / AXELOS" },
      { abbr: "CSM",      name: "Certified ScrumMaster",                     body: "Scrum Alliance" },
      { abbr: "CSPO",     name: "Certified Scrum Product Owner",             body: "Scrum Alliance" }
    ],
    education: [
      { degree: "Master of Management Science (MMSc)", institution: "University of Waterloo", location: "Ontario, Canada" },
      { degree: "Bachelor of Computer Science",        institution: "New York Institute of Technology", location: "New York, USA" },
      { degree: "Associate of Applied Science",        institution: "City University of New York", location: "New York, USA" }
    ],
    // Deliberately separate from "certifications" — university and vendor
    // courses belong here, never in the certifications list above.
    // CISA was removed from this list on your instruction (Sep 2026). CISM is
    // a held certification and is listed under "certifications" above.
    professionalDevelopment: [
      "AI/ML for Business Growth — MIT",
      "Prompt Engineering — NJIT",
      "Change management training",
      "Working knowledge of Prosci ADKAR and Kotter change principles"
    ],
    capabilityGroups: [
      {
        title: "AI, Data and Analytics",
        items: "Azure Databricks · AI/ML · SAP HANA · DB2 · Microsoft SQL Server · Power BI · Tableau · MDM · ETL and data migration · data quality, lineage and reconciliation · Microsoft Copilot · ChatGPT · Claude · Model Context Protocol · generative and agentic AI"
      },
      {
        title: "Cloud, Cybersecurity and IAM",
        items: "Microsoft Azure · AWS · Microsoft Sentinel · Defender XDR · Splunk · IBM Guardium · ServiceNow · IAM and PAM · SSO, MFA, PKI · RBAC/ABAC · Zero Trust · security and privacy controls"
      },
      {
        title: "Enterprise and Financial Platforms",
        items: "SAP S/4HANA · SAP HANA · JD Edwards · Salesforce TPM · MuleSoft · Murex · SimCorp · Bloomberg · Informatica · Oracle · Microsoft Dynamics · IBM Cúram · mainframe environments"
      },
      {
        title: "Delivery Methods and Tools",
        items: "Azure DevOps · Jira · Confluence · Clarity · MS Project · SharePoint · Agile, Scrum, SAFe, waterfall and hybrid · RAID, RACI, stage gates · SIT, UAT, cutover and hypercare"
      }
    ]
  },

  /* ==========================================================================
     [EDIT-10] FOOTER AND PRIVACY STATEMENT
     ====================================================================== */
  footer: {
    company: "Himu Technologies Inc.",
    companyLine: "Ontario, Canada · Independent program and transformation consulting",
    // The year is generated automatically by app.js — do not hard-code it here.
    privacyHeading: "Privacy",
    privacyStatement:
      "This website collects no personal information. There are no analytics services, advertising trackers, cookies or third-party scripts of any kind. Resume downloads are counted only within your own browser, on your own device, and that count is never transmitted anywhere. Any information you choose to send does so through your own email application, directly to Mohammed Kabir.",
    endorsementDisclaimer:
      "Organizations named on this website are referenced solely to describe Mohammed Kabir's professional engagement history. No client, employer or organization named here endorses, sponsors or is affiliated with Himu Technologies Inc.",
    confidentialityNote:
      "All engagement descriptions are written at a level that protects client confidentiality. No client-internal data, documentation or non-public information is published on this site."
  },

  /* ==========================================================================
     SEO AND SOCIAL SHARING METADATA
     --------------------------------------------------------------------------
     Used for search engines and for link previews in LinkedIn, email and chat.
     After you publish, set "siteUrl" to your live address, for example
     https://mokabir.github.io  — link previews need a full address to work.
     ====================================================================== */
  meta: {
    siteUrl: "https://mokabir.github.io/",
    pageTitle: "Mohammed Kabir — Senior Program and Business Transformation Leader | Himu Technologies Inc.",
    description:
      "Mohammed Kabir, MMSc, PMP, CISM — senior program manager and transformation leader with 22+ years delivering AI, data, cloud, cybersecurity, ERP and capital markets programs for government, financial services, life sciences and manufacturing organizations.",
    ogImage: "assets/headshot.jpg",
    keywords:
      "program manager, transformation consultant, AI governance, cybersecurity program, cloud modernization, capital markets, ERP, Toronto, Ontario, fractional program leadership"
  },

  /* ==========================================================================
     NAVIGATION LABELS — change the wording here if you want different labels.
     "id" must match a section id in index.html. Do not change the ids.
     ====================================================================== */
  navigation: [
    { id: "home",         label: "Home" },
    { id: "services",     label: "Services" },
    { id: "experience",   label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "about",        label: "About" },
    { id: "contact",      label: "Contact" }
  ],

  /* ==========================================================================
     SECTION HEADINGS AND INTRODUCTIONS
     ====================================================================== */
  sections: {
    impact:       { eyebrow: "Executive impact",    heading: "Scale of responsibility",          intro: "Indicators of the size and complexity of programs led, rather than decorative statistics." },
    services:     { eyebrow: "Consulting services", heading: "How Mohammed helps organizations", intro: "Eight areas of practice, engaged individually or combined into a single program of work." },
    experience:   { eyebrow: "Selected engagements",heading: "Where the work has been done",     intro: "A curated portfolio rather than a full employment history. Filter by sector or capability, and select any engagement to read the leadership contribution and solution behind it." },
    testimonials: { eyebrow: "Client testimonials", heading: "In their words",                   intro: "Published only with the author's permission, always in their original wording." },
    about:        { eyebrow: "About",               heading: "Executive profile",                intro: "" },
    credentials:  { eyebrow: "Credentials",         heading: "Certifications and education",     intro: "Verified qualifications. Coursework and professional development are listed separately from certifications." },
    contact:      { eyebrow: "Contact",             heading: "Start a conversation",             intro: "Introductory conversations are usually thirty minutes and cost nothing." }
  }
};

/* Makes SITE_CONTENT available to app.js. Do not remove this line. */
if (typeof window !== "undefined") { window.SITE_CONTENT = SITE_CONTENT; }
