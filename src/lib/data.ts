export interface SubServiceItem {
  title: string;
  slug: string;
  shortDesc: string;
}

export interface CapabilityCategory {
  category: string;
  slug: string;
  tagline: string;
  iconName: string;
  code?: string;
  image?: string;
  stat?: string;
  statLabel?: string;
  leadName?: string;
  leadRole?: string;
  items: SubServiceItem[];
}

export const ENTERPRISE_PILLARS: CapabilityCategory[] = [
  {
    category: "Strategy & Transformation",
    slug: "strategy-consulting",
    tagline: "Architecting resilient business models & growth engines for global market dominance.",
    iconName: "Compass",
    code: "CAP-01",
    image: "/practice-strategy.jpg",
    stat: "$5.8B+",
    statLabel: "Capital Value Unlocked",
    leadName: "Elena Rostova",
    leadRole: "Global Managing Partner",
    items: [
      { title: "Corporate Strategy & Vision", slug: "corporate-strategy", shortDesc: "Long-term positioning & market expansion blueprints." },
      { title: "M&A & Enterprise Restructuring", slug: "mergers-acquisitions", shortDesc: "Post-merger integration & portfolio optimization." },
      { title: "CFO Advisory & Value Creation", slug: "cfo-enterprise-value", shortDesc: "Capital allocation & modern finance transformation." },
      { title: "Sustainability & ESG Strategy", slug: "sustainability-strategy", shortDesc: "Net-zero roadmaps & decarbonized business operations." },
      { title: "Operating Model Transformation", slug: "operating-model", shortDesc: "Agile organizational structures & organizational design." },
      { title: "Venture Building & Innovation", slug: "innovation-strategy", shortDesc: "Incubating new revenue streams & digital business units." }
    ]
  },
  {
    category: "Data & AI Systems",
    slug: "data-and-ai",
    tagline: "Industrializing agentic AI, predictive analytics & enterprise data platforms.",
    iconName: "BrainCircuit",
    code: "CAP-02",
    image: "/practice-ai.jpg",
    stat: "500+",
    statLabel: "Production AI Deployments",
    leadName: "Dr. Marcus Vance",
    leadRole: "Global Practice Head, AI",
    items: [
      { title: "Enterprise AI & GenAI Consulting", slug: "artificial-intelligence", shortDesc: "Scaling generative & agentic AI models across core workflows." },
      { title: "Modern Data Architecture", slug: "data-architecture", shortDesc: "Data mesh, lakehouses & real-time streaming infrastructure." },
      { title: "Applied Intelligence & Analytics", slug: "applied-intelligence", shortDesc: "Predictive modeling, computer vision & decision support." },
      { title: "Enterprise AI Governance & Trust", slug: "ai-governance", shortDesc: "Ethical AI frameworks, compliance & risk mitigation." },
      { title: "Machine Learning Engineering", slug: "machine-learning", shortDesc: "MLOps pipelines, model fine-tuning & continuous delivery." },
      { title: "Knowledge Graphs & Vector DBs", slug: "vector-search-rag", shortDesc: "Enterprise RAG & semantic memory infrastructure." }
    ]
  },
  {
    category: "Enterprise Operations",
    slug: "operations",
    tagline: "Re-engineering core supply chains, procurement & customer service hubs.",
    iconName: "Cpu",
    code: "CAP-03",
    image: "/practice-operations.jpg",
    stat: "38%",
    statLabel: "Average Margin Expansion",
    leadName: "Arthur Sterling",
    leadRole: "Senior Partner, Operations",
    items: [
      { title: "Intelligent Supply Chain", slug: "supply-chain", shortDesc: "Autonomous demand forecasting & resilient global logistics." },
      { title: "Procurement & Sourcing Modernization", slug: "procurement", shortDesc: "Cognitive spend management & vendor ecosystem optimization." },
      { title: "Finance Operations & Automation", slug: "intelligent-finance", shortDesc: "Hyper-automated order-to-cash & close cycles." },
      { title: "Customer Experience Operations", slug: "customer-service", shortDesc: "Next-gen contact centers & omni-channel service design." },
      { title: "Human Capital & Talent Operations", slug: "hr-operations", shortDesc: "Workforce transformation & AI-driven HR operating models." }
    ]
  },
  {
    category: "Digital Modernization",
    slug: "digital-transformation",
    tagline: "Accelerating legacy migration, hybrid cloud & cyber-resilient engineering.",
    iconName: "Layers",
    code: "CAP-04",
    image: "/practice-cloud.jpg",
    stat: "4.2x",
    statLabel: "Deployment Velocity Boost",
    leadName: "Claire Zhang",
    leadRole: "Partner, Cloud & Security",
    items: [
      { title: "Hybrid Cloud & Tech Strategy", slug: "cloud-strategy", shortDesc: "Multi-cloud architecture & IT cost optimization." },
      { title: "Enterprise Architecture Modernization", slug: "enterprise-architecture", shortDesc: "Decoupling monoliths into microservices & event-driven APIs." },
      { title: "Application Refactoring & DevOps", slug: "application-modernization", shortDesc: "Cloud-native engineering & automated CI/CD pipelines." },
      { title: "Cybersecurity Strategy & Defense", slug: "cybersecurity", shortDesc: "Zero-trust architecture, threat detection & incident response." },
      { title: "Digital Product Engineering", slug: "digital-experience", shortDesc: "Human-centric UX/UI design & rapid product prototyping." },
      { title: "Edge & IoT Infrastructure", slug: "iot", shortDesc: "Connected hardware ecosystems & real-time telemetry." }
    ]
  },
  {
    category: "Industry X & Automation",
    slug: "industry-x",
    tagline: "Transforming physical asset ecosystems with Industry 4.0 & digital twins.",
    iconName: "Building2",
    code: "CAP-05",
    image: "/practice-industry.jpg",
    stat: "42%",
    statLabel: "Unplanned Downtime Cut",
    leadName: "Henrik Lindqvist",
    leadRole: "Partner, Industrial IoT",
    items: [
      { title: "Smart Manufacturing & Industry 4.0", slug: "smart-manufacturing", shortDesc: "Connected factory floors & automated robotics integration." },
      { title: "Digital Twin Systems", slug: "digital-twin", shortDesc: "Virtual simulation models for heavy machinery & plants." },
      { title: "Capital Projects & Infrastructure", slug: "capital-projects", shortDesc: "Megaproject risk management & digital asset tracking." },
      { title: "Intelligent Asset Management", slug: "asset-management", shortDesc: "Predictive maintenance & asset longevity algorithms." },
      { title: "Connected Products & Services", slug: "connected-products", shortDesc: "Hardware-as-a-service business models & embedded software." }
    ]
  }
];

export const GLOBAL_INDUSTRIES = [
  {
    name: "Financial Services & Banking",
    slug: "financial-services",
    iconName: "Landmark",
    code: "IND-01",
    image: "/sector-banking.jpg",
    desc: "AI fraud detection, core banking modernization & algorithmic risk management.",
    metric: "$4.2B+",
    metricLabel: "Capital Value Optimized"
  },
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    iconName: "Activity",
    code: "IND-02",
    image: "/sector-healthcare.jpg",
    desc: "Clinical trial intelligence, genomic data platforms & hospital operational agility.",
    metric: "3.5x",
    metricLabel: "R&D Cycle Acceleration"
  },
  {
    name: "Smart Manufacturing & Automotive",
    slug: "manufacturing",
    iconName: "Factory",
    code: "IND-03",
    image: "/sector-manufacturing.jpg",
    desc: "Industry 4.0 automated plants, EV supply chains & predictive quality control.",
    metric: "42%",
    metricLabel: "Downtime Reduction"
  },
  {
    name: "Retail, Consumer & E-Commerce",
    slug: "retail",
    iconName: "ShoppingBag",
    code: "IND-04",
    image: "/sector-retail.jpg",
    desc: "Hyper-personalized recommendation engines, dynamic pricing & omni-channel logistics.",
    metric: "28%",
    metricLabel: "Margin Improvement"
  },
  {
    name: "Energy, Resources & Utilities",
    slug: "energy",
    iconName: "Zap",
    code: "IND-05",
    image: "/sector-energy.jpg",
    desc: "Grid modernization, renewable asset balancing & carbon accounting software.",
    metric: "12M Tons",
    metricLabel: "CO2 Offset Strategy"
  },
  {
    name: "Telecom & High Tech",
    slug: "telecom",
    iconName: "Radio",
    code: "IND-06",
    image: "/sector-telecom.jpg",
    desc: "5G network slicing automation, cloud-native OSS/BSS & AI customer care.",
    metric: "99.999%",
    metricLabel: "Uptime SLA Achieved"
  }
];

export const CLIENT_LOGOS = [
  { name: "Global Investment Bank", ticker: "GIB", stat: "$1.4T AUM Partner" },
  { name: "Tier-1 Automotive Group", ticker: "TAG", stat: "12 Global Plants" },
  { name: "Pharma Biologics Inc", ticker: "PBI", stat: "FDA Fast-Tracked" },
  { name: "Energy Grid Solutions", ticker: "EGS", stat: "4.5M Subscribers" },
  { name: "AeroSpace Dynamics", ticker: "ASD", stat: "Defense Prime" },
  { name: "Retail Omni-Global", ticker: "ROG", stat: "8,500 Stores" }
];

// Delivery Engine Methodology Steps
export const IMPROX_DELIVERY_ENGINE = [
  {
    step: "01",
    phase: "Executive Discovery & Value Audit",
    duration: "Weeks 1 - 3",
    desc: "We perform a comprehensive audit of existing technical architectures, organizational silos, data governance rails, and margin bottlenecks to define a business-case backed transformation blueprint."
  },
  {
    step: "02",
    phase: "Agentic Architecture & Sandbox Prototyping",
    duration: "Weeks 4 - 8",
    desc: "Our engineering practice builds custom control planes, agentic workflows, and cloud microservices inside an isolated security sandbox, proving latency, accuracy, and compliance prior to production."
  },
  {
    step: "03",
    phase: "Enterprise Production Deployment",
    duration: "Weeks 9 - 14",
    desc: "We deploy cloud-native infrastructure alongside your internal teams, integrating legacy ERPs, databases, and APIs with zero operational downtime and 100% automated audit logging."
  },
  {
    step: "04",
    phase: "Capability Transfer & Continuous Scaling",
    duration: "Ongoing",
    desc: "We upskill your internal workforce, establish operational CoEs (Centers of Excellence), and transfer complete intellectual property ownership to ensure long-term self-sufficiency."
  }
];

// 8 Full Executive Research Articles & Blog Posts
export const FEATURED_INSIGHTS = [
  {
    slug: "enterprise-agentic-ai-blueprint-2026",
    category: "Sovereign AI & Architecture",
    date: "November 2026",
    readTime: "8 min read",
    title: "The Agentic AI Horizon: How Fortune 500 Leaders Orchestrate Multi-Agent Systems in Production",
    summary: "Moving beyond passive LLM chat interfaces into autonomous operational agents. Discover the reference architecture for enterprise control planes, deterministic security rails, and audited balance-sheet ROI benchmarks.",
    author: "Dr. Marcus Vance",
    authorRole: "Global Head of Cognitive Systems Practice",
    authorAvatar: "/practice-ai.jpg",
    image: "/practice-ai.jpg",
    tags: ["Agentic AI", "Control Planes", "Enterprise Architecture", "Security Rails"],
    keyTakeaways: [
      "Traditional RPA scripts break on schema drift; cognitive multi-agent meshes dynamically reason and adapt.",
      "A 3-layer control plane (Guardrails, Semantic Memory, Audit Mesh) is essential to prevent rogue tool calls.",
      "Production deployments report an audited 45% reduction in operational transaction overhead."
    ],
    fullContent: `In the early wave of enterprise artificial intelligence adoption, organizations primarily experimented with isolated large language model (LLM) interfaces for basic document summarization and customer support automation. However, as we move through 2026, forward-thinking C-suite executives recognize that conversational interfaces represent only a fraction of AI's ultimate economic potential. The real transformation lies in Agentic AI Control Planes—systems composed of autonomous, specialized software agents capable of executing complex, multi-step business workflows with minimal human oversight.

Traditional automated workflows relied on rigid, rule-based robotic process automation (RPA) scripts that broke whenever underlying user interfaces or data schemas shifted. Multi-agent systems, by contrast, utilize cognitive reasoning, dynamic tool selection, and semantic memory networks. An agentic workflow in procurement, for instance, can independently monitor global commodity prices, audit supplier ESG compliance records, negotiate spot contracts within pre-approved financial boundaries, and update legacy ERP ledgers in real time.

However, deploying agentic AI across mission-critical enterprise infrastructure introduces distinct operational and security risks. Without robust control planes, autonomous agents can loop indefinitely, execute unauthorized transactions, or leak sensitive corporate data. Improx Integents has codified a battle-tested three-layer architecture for enterprise agentic deployment:

1. Deterministic Guardrail Layer: Hard-coded security policies, role-based access controls (RBAC), and transactional ceiling limits that restrict agent actions regardless of model output.
2. Semantic Memory & Context Plane: High-performance vector databases and knowledge graphs that feed agents precise enterprise context while preventing hallucinations.
3. Observability & Audit Mesh: Immutable logging infrastructure that records every agent decision, tool call, and API transaction for compliance verification.

Organizations that implement this three-layer control plane achieve up to a 45% reduction in core process operational costs while maintaining 100% audit compliance. As multi-agent orchestration becomes the standard operating system for global enterprises, early adopters are establishing insurmountable margin advantages over legacy competitors.`
  },
  {
    slug: "cfo-capital-allocation-uncertainty",
    category: "Corporate Strategy & Finance",
    date: "October 2026",
    readTime: "9 min read",
    title: "Dynamic Capital Allocation in Volatile Markets: The CFO Guide to Real-Option Strategy",
    summary: "Why traditional annual budget cycles fail in high-disruption environments. How leading CFOs deploy continuous scenario modeling and algorithmic capital deployment to outpace peers.",
    author: "Elena Rostova",
    authorRole: "Global Managing Partner, Corporate Strategy",
    authorAvatar: "/hero-boardroom.jpg",
    image: "/practice-strategy.jpg",
    tags: ["CFO Advisory", "Capital Allocation", "Real Options", "EBITDA Accretion"],
    keyTakeaways: [
      "Rigid 12-month budget cycles penalize agile innovation and subsidize legacy obsolescence.",
      "Real-option capital allocation releases capital dynamically based on empirical stage-gate performance.",
      "CFOs deploying dynamic models deliver 2.8x higher total shareholder return (TSR) during macro market shocks."
    ],
    fullContent: `The traditional corporate budgeting model—where executive committees commit fixed capital to twelve-month operational plans—is fundamentally broken. In an era marked by rapid technological inflection, geopolitical supply chain shifts, and volatile interest rate environments, rigid annual capital allocation penalizes agile innovation while funding legacy programs long after their strategic relevance has expired.

Leading Chief Financial Officers (CFOs) are abandoning static budgeting in favor of Dynamic Capital Allocation frameworks based on real-options theory. Instead of allocating massive upfront capital blocks to multi-year initiatives, real-option strategy treats capital deployment as a series of staged financial options. Funding is unlocked dynamically based on empirical market validation, pilot throughput metrics, and risk-adjusted milestone completion.

At Improx Integents, our Strategy & CFO Advisory practice partners with Global 2000 finance organizations to implement algorithmic capital deployment engines. This framework operates across three core pillars:

1. Continuous Portfolio Re-Balancing: Moving from annual planning to monthly dynamic capital shifts, allowing CFOs to re-allocate up to 20% of operating budgets toward high-performing digital growth initiatives without waiting for fiscal year-end cycles.
2. Real-Option Valuation Models: Valuing early-stage digital transformation programs not on immediate net present value (NPV), but on the strategic optionality they create for future market expansion.
3. Automated Margin Attribution: Integrating real-time telemetry from cloud platforms and ERP ledgers directly into executive finance dashboards, giving CFOs granular visibility into the exact return on invested capital (ROIC) per business unit.

CFOs who adopt dynamic capital allocation consistently achieve 2.8x higher total shareholder return (TSR) during market disruptions compared to peers bound by traditional budgeting cycles. Flexibility is no longer just an operational advantage; it is the fundamental driver of modern enterprise value.`
  },
  {
    slug: "supply-chain-decoupling-resilience",
    category: "Supply Chain & Operations",
    date: "October 2026",
    readTime: "8 min read",
    title: "Decoupling Global Supply Chains: Building Near-Autonomous Logistics Networks",
    summary: "Geopolitical re-alignment and climate volatility require a shift from just-in-time to near-instant resilient manufacturing hubs powered by predictive digital twins.",
    author: "Arthur Sterling",
    authorRole: "Senior Partner, Global Operations Practice",
    authorAvatar: "/practice-operations.jpg",
    image: "/practice-operations.jpg",
    tags: ["Supply Chain", "Nearshoring", "Digital Twins", "Autonomous Logistics"],
    keyTakeaways: [
      "Single-source offshore sourcing models have created catastrophic vulnerability across global conglomerates.",
      "Predictive digital twins simulate supply bottlenecks 30-60 days before physical supply disruption manifests.",
      "Decentralized micro-fulfillment reduces inventory carrying costs by 32% with 99.4% on-time fulfillment."
    ],
    fullContent: `For three decades, global supply chain management prioritized a single metric: cost minimization through hyper-lean, just-in-time (JIT) manufacturing and highly centralized offshore sourcing. Today, that paradigm has collided with geopolitical friction, trade realignments, and increasing climate volatility. The legacy vulnerability of single-source global supply networks has forced executive leadership to shift from pure cost-efficiency to structural resilience.

The future of enterprise manufacturing belongs to Near-Autonomous Supply Networks—decentralized, multi-node supply ecosystems powered by predictive digital twins, automated demand sensing, and localized smart manufacturing plants.

Improx Integents works with leading industrial, automotive, and consumer goods enterprises to re-engineer global supply chains along three resilient vectors:

1. Predictive Demand Sensing & Digital Twins: Replacing lag-heavy historical forecasting with machine learning models that ingest real-time point-of-sale data, shipping lane congestion metrics, weather patterns, and supplier financial stability indicators. By simulating supply chain disruptions inside virtual digital twins, logistics teams identify critical bottlenecks 30 to 60 days before physical impact occurs.
2. Cognitive Sourcing & Spot Mitigation: Building automated procurement layers that continuously audit alternative regional suppliers, verify raw material quality certifications, and dynamically balance order volumes to avoid single-point dependency risks.
3. Edge Robotics & Micro-Fulfillment: Deploying automated guided vehicles (AGVs) and smart warehouse robotics linked directly to ERP inventory management systems, cutting order processing times from days to hours.

By transitioning from fragile JIT pipelines to resilient near-autonomous networks, enterprise clients reduce inventory holding costs by up to 32% while increasing on-time, in-full (OTIF) fulfillment rates to 99.4%. In a volatile global economy, supply chain resilience is the ultimate strategic moat.`
  },
  {
    slug: "sovereign-cloud-zero-trust-governance",
    category: "Cloud & Cybersecurity",
    date: "September 2026",
    readTime: "11 min read",
    title: "Sovereign Cloud & Zero-Trust Governance: Guarding Against Data Egress in Regulated AI",
    summary: "As global regulators enforce localized data residency, multinational enterprises must migrate from generic multi-tenant SaaS clouds to sovereign, air-gapped private VPC architectures.",
    author: "Christian Weber",
    authorRole: "Head of Sovereign Infrastructure & Modernization",
    authorAvatar: "/practice-cloud.jpg",
    image: "/practice-cloud.jpg",
    tags: ["Sovereign Cloud", "Zero-Trust", "Data Residency", "Air-Gapped Systems"],
    keyTakeaways: [
      "Public multi-tenant SaaS clouds expose enterprise data to cross-jurisdictional subpoena and egress risks.",
      "Air-gapped private VPC control planes keep algorithmic training and inference 100% within sovereign perimeters.",
      "Cryptographic ledger attestations ensure zero unlogged data access across all core databases."
    ],
    fullContent: `The era of unconstrained global public cloud computing is coming to an end. Tighter national data residency statutes—from the EU's Sovereign Cloud initiatives and GDPR to strict US federal security mandates—now hold enterprise boards personally accountable for cross-border data leakage and unmonitored vendor model training.

For Global 500 enterprises in banking, defense, and healthcare, deploying agentic AI or high-frequency analytics on public multi-tenant clouds creates unacceptable operational and regulatory exposure. The modern corporate mandate is Sovereign Cloud Architecture.

At Improx Integents, we design and deploy air-gapped, zero-trust cloud infrastructure that delivers the elasticity of hyperscale cloud while guaranteeing absolute institutional sovereignty:

1. Air-Gapped Private VPCs: Deploying dedicated clusters within AWS GovCloud, Azure Confidential Computing, or private bare-metal data centers where zero data egress is physically and mathematically enforced.
2. Hardware-Rooted Cryptographic Attestation: Utilizing confidential computing enclaves (Intel SGX, AMD SEV) where code and data are encrypted even in system memory during active execution.
3. Zero-Trust Mesh & Tokenization: Stripping personally identifiable information (PII) before it ever touches analytical engines, with immutable cryptographic ledgers recording every data access transaction.

By migrating mission-critical data assets into sovereign cloud enclaves, enterprise leadership eliminates regulatory fines, secures corporate trade secrets, and retains 100% perpetual ownership of all algorithmic models.`
  },
  {
    slug: "banking-ai-anti-money-laundering-determinism",
    category: "Financial Services & Banking",
    date: "September 2026",
    readTime: "10 min read",
    title: "Deterministic AML Screening & Basel IV Capital Resilience in Tier-1 Financial Institutions",
    summary: "How autonomous neural graph networks and deterministic proof rails compress false-positive AML alerts by 98.4% while ensuring full SEC, FINRA, and FinCEN statutory compliance.",
    author: "Julian Montgomery",
    authorRole: "Senior Partner, Financial Institutions Practice",
    authorAvatar: "/sector-banking.jpg",
    image: "/sector-banking.jpg",
    tags: ["Banking", "AML/KYC", "Basel IV", "Risk Management"],
    keyTakeaways: [
      "Legacy heuristic rules generate up to 95% false-positive AML alerts, burning millions in compliance overhead.",
      "Neural graph networks analyze transaction topologies in sub-milliseconds to detect synthetic identity fraud.",
      "Deterministic audit trails generate pre-packaged filings directly formatted for SEC and FinCEN examination."
    ],
    fullContent: `Global commercial and investment banks spend billions annually reviewing anti-money laundering (AML) and sanctions alerts, yet traditional heuristic rule engines generate an astonishing 90% to 95% false-positive rate. In a climate where regulatory penalties for AML oversights reach tens of millions and Basel IV increases capital buffer requirements, compliance inefficiency directly degrades Return on Equity (ROE).

Improx Integents partners with Tier-1 banking institutions to deploy Deterministic AML Screening Engines built on temporal neural graph networks and mathematically verified decision boundaries.

Our banking architecture operates across three high-impact vectors:

1. Topological Neural Transaction Graphs: Instead of screening transactions as isolated data points, our models analyze high-dimensional graph relationships spanning beneficial ownership records, shell company registries, and correspondent banking ledgers.
2. Deterministic Sanctions Proof: Every positive alert is bounded by deterministic mathematical guardrails that ensure no transaction is blocked or cleared without an immutable cryptographic chain of custody.
3. Real-Time Suspicious Activity Reporting (SAR): Automated synthesis of regulatory filings ready for FinCEN and SEC submission, cutting investigation cycle times from 14 days to under 30 minutes.

Financial institutions implementing our AML control plane have achieved an audited 98.4% reduction in false-positive alerts, saving over $45M in manual review operational expenses while maintaining an unblemished regulatory compliance audit record.`
  },
  {
    slug: "healthcare-clinical-trial-acceleration-multiomics",
    category: "Healthcare & Life Sciences",
    date: "August 2026",
    readTime: "9 min read",
    title: "Accelerating Clinical Trial Discovery with Zero-Knowledge Genomic Partitioning",
    summary: "Overcoming FDA 21 CFR Part 11 and HIPAA constraints to analyze multi-omic biological registries and compress oncology trial recruiting timelines by 35%.",
    author: "Dr. Aris Thorne",
    authorRole: "Fellow, Healthcare & Life Sciences Practice",
    authorAvatar: "/sector-healthcare.jpg",
    image: "/sector-healthcare.jpg",
    tags: ["Life Sciences", "Genomics", "FDA Compliance", "Clinical Trials"],
    keyTakeaways: [
      "Patient data privacy regulations historically locked valuable multi-center genomic registries in isolated silos.",
      "Zero-knowledge proofs allow pharmaceutical sponsors to query clinical records without raw data exposure.",
      "Automated dossier assembly shortens FDA clinical trial protocol submission cycles by up to 60%."
    ],
    fullContent: `Bringing a novel biopharmaceutical asset through clinical trials today costs upwards of $1.5 billion and takes an average of seven to ten years. The greatest operational bottleneck is trial recruitment: identifying qualified, genetically stratified patient cohorts across distributed hospital networks while strictly adhering to FDA 21 CFR Part 11 and HIPAA privacy laws.

The breakthrough solution is Zero-Knowledge Genomic Partitioning. By deploying decentralized privacy-preserving cryptographic protocols across participating health systems, clinical sponsors can query complex genomic phenotypes without ever moving or exposing raw patient electronic health records (EHR).

Improx Integents has partnered with leading academic medical centers and global pharmaceutical conglomerates to operationalize this architecture:

1. Federated Genomic Enclaves: Analytical models run locally inside hospital security firewalls, returning only cryptographic proofs of eligibility rather than raw clinical data.
2. Multi-Omic Cohort Stratification: Autonomous matching engines cross-reference patient mutation profiles against clinical trial inclusion criteria in real-time, identifying eligible candidates within minutes of diagnosis.
3. Automated Regulatory Dossier Assembly: Document synthesis pipelines compile trial observations directly into audit-ready electronic Common Technical Document (eCTD) formats suitable for simultaneous FDA, EMA, and PMDA review.

By eliminating recruitment friction and streamlining protocol documentation, our biopharma clients have compressed Phase II/III trial timelines by up to 35%, bringing life-saving oncology therapies to market years ahead of schedule.`
  },
  {
    slug: "industrial-iot-smart-manufacturing-digital-twins",
    category: "Smart Manufacturing & Automotive",
    date: "August 2026",
    readTime: "8 min read",
    title: "Industry 4.0 & Deterministic Robotics: Building Self-Healing Automotive Gigafactories",
    summary: "How leading global automotive OEMs orchestrate multi-arm robotic assembly lines on real-time deterministic RTOS kernels, eliminating 72% of unplanned factory downtime.",
    author: "Henrik Lindqvist",
    authorRole: "Partner, Autonomous Manufacturing & Robotics",
    authorAvatar: "/sector-manufacturing.jpg",
    image: "/sector-manufacturing.jpg",
    tags: ["Industry 4.0", "Digital Twins", "Robotics", "Predictive Maintenance"],
    keyTakeaways: [
      "Unplanned automotive assembly downtime costs up to $50,000 per minute in halted factory output.",
      "Sub-millisecond vibration and thermal telemetry predict component mechanical fatigue weeks before failure.",
      "Digital twin simulation loops dynamically re-route production when robotic cell jams occur."
    ],
    fullContent: `In automotive stamping, painting, and robotic assembly plants, unexpected equipment failure is catastrophically expensive. High-volume manufacturing lines operate on razor-thin cycle times, where a single malfunctioning welding robot can halt an entire factory floor, accumulating downtime costs in excess of $50,000 per minute.

Leading industrial conglomerates are shifting from reactive maintenance schedules to Self-Healing Factory Floors powered by high-frequency IoT telemetry, real-time operating system (RTOS) robotics, and predictive digital twins.

Improx Integents engineers industrial control planes that integrate directly with existing SCADA and PLC hardware:

1. Edge-Based Predictive Component Health: High-frequency acoustic, vibration, and thermal sensors stream telemetry into localized edge compute nodes. Deep anomaly detection models identify micro-frictional wear in robotic gearboxes up to 45 days before physical mechanical failure occurs.
2. Synchronous Digital Twin Simulation: A continuous virtual replica of the factory floor models physical material flows. When a station slows, the digital twin automatically recalculates downstream pacing and adjusts robotic arm cycle speeds to prevent line bottlenecks.
3. ISO 26262 Functional Safety SIL-3 Compliance: All automated robotic adjustments execute within hard-coded safety bounds certified to SIL-3 functional safety standards, ensuring worker safety and operational determinism.

Automotive OEMs implementing our industrial control plane have eliminated up to 72% of unplanned manufacturing downtime, expanded overall equipment effectiveness (OEE) by 8.4 points, and unlocked tens of millions in annual EBITDA accretion.`
  },
  {
    slug: "boardroom-ai-fiduciary-liability-eu-ai-act",
    category: "Boardroom Governance & Risk",
    date: "July 2026",
    readTime: "12 min read",
    title: "Boardroom Fiduciary Governance: Personal Director Liability under the EU AI Act & SEC Standards",
    summary: "A practical guide for Corporate Boards, General Counsel, and Audit Committees to institute defensible algorithmic risk rails and avoid personal liability under expanding AI regulations.",
    author: "Elena Rostova & Priya Nair",
    authorRole: "Global Managing Partner & Head of Algorithmic Risk",
    authorAvatar: "/practice-strategy.jpg",
    image: "/hero-boardroom.jpg",
    tags: ["EU AI Act", "SEC Disclosures", "Board Governance", "Fiduciary Duty"],
    keyTakeaways: [
      "New global statutes place personal fiduciary responsibility on corporate directors for algorithmic failures.",
      "Audit committees must establish tamper-evident, independent algorithmic risk verification protocols.",
      "Probabilistic AI systems require hard-coded human-in-the-loop triggers for high-impact capital decisions."
    ],
    fullContent: `For decades, corporate board oversight focused primarily on financial reporting, executive compensation, and enterprise cybersecurity. In 2026, the regulatory perimeter has expanded dramatically: the full enforcement of the EU AI Act, alongside the SEC's expanded algorithmic disclosure mandates, has created direct, personal fiduciary liability for corporate directors and audit committee members.

When an autonomous system makes a flawed credit determination, executes an erroneous securities trade, or discriminates in healthcare allocation, regulatory authorities no longer accept "black-box algorithm" as a legal defense. Boards must demonstrate proactive, documented, and independent technical governance.

Improx Integents advises corporate boards on establishing defensible algorithmic governance frameworks across four institutional pillars:

1. Algorithmic Materiality Audits: Cataloging every automated model and agentic tool deployed across the enterprise to classify their risk tier under EU AI Act High-Risk system definitions.
2. Independent Verification & Validation (IV&V): Conducting regular red-teaming and deterministic hallucination audits to mathematically verify that operational agents cannot violate legal or statutory constraints.
3. Cryptographic Governance Ledgers: Ensuring all high-stakes autonomous transactions are logged into immutable, tamper-evident ledgers that can be forensically audited during regulatory examinations.
4. Board Audit Committee Dashboards: Delivering real-time C-suite telemetry summarizing model drift, fail-safe activations, and compliance adherence without requiring technical engineering expertise.

By establishing an institutional algorithmic governance charter, corporate boards fulfill their duty of care, shield directors from personal statutory liability, and provide stakeholders with unassailable confidence in the enterprise's autonomous future.`
  }
];

export const FEATURED_CASE_STUDIES = [
  {
    slug: "global-bank-ai-transformation",
    client: "Top 5 North American Bank",
    industry: "Financial Services",
    title: "Deploying Enterprise AI Control Plane across 45,000 Employees",
    impact: "$240M Annual Savings | 4x Faster Credit Approvals",
    summary: "Improx Integents designed and built an enterprise-grade agentic workflow platform integrating legacy core banking systems with custom LLMs, cutting loan processing from 4 days to 45 minutes while maintaining strict SEC/FINRA compliance.",
    tags: ["Agentic AI", "Core Modernization", "Risk Governance"],
    image: "/sector-banking.jpg"
  },
  {
    slug: "smart-factory-digital-twin",
    client: "Global Automotive OEM",
    industry: "Smart Manufacturing",
    title: "Industry 4.0 Digital Twin Infrastructure across 14 Manufacturing Assembly Plants",
    impact: "38% Reduction in Unplanned Downtime | $180M Cost Avoidance",
    summary: "Implemented real-time IoT edge telemetry and 3D simulation twins, enabling predictive maintenance algorithms to catch assembly robot defects prior to line failure.",
    tags: ["Digital Twin", "IoT Edge", "Predictive Analytics"],
    image: "/sector-manufacturing.jpg"
  },
  {
    slug: "cpe-supply-chain-reengineering",
    client: "Fortune 100 Consumer Goods Giant",
    industry: "Consumer Goods",
    title: "End-to-End Cognitive Supply Chain Re-Engineering & Inventory Optimization",
    impact: "$320M Working Capital Freed | 99.4% On-Time Fulfillment",
    summary: "Overhauled global procurement and distribution nodes with autonomous demand forecasting models, cutting inventory holding costs across 62 distribution centers.",
    tags: ["Supply Chain", "Cognitive Procurement", "Cost Reduction"],
    image: "/sector-retail.jpg"
  }
];

// Comprehensive generator function for EVERY subservice with expanded service-specific content
export const generateSubServiceData = (subTitle: string, pillarName: string) => {
  return {
    title: `${subTitle}`,
    pillar: pillarName,
    heroTagline: `Empowering Global Enterprises with Next-Generation ${subTitle} Solutions`,
    description: `We partner with C-suite executives and business leaders to architect, engineer, and deploy industry-leading ${subTitle} initiatives that unlock quantifiable business value, streamline operations, and drive sustainable growth.`,
    heroImage: "/hero-boardroom.jpg",
    
    keyStats: [
      { value: "40%", label: "Average Efficiency Gain" },
      { value: "$150M+", label: "Client Enterprise Value Added" },
      { value: "< 6 Mo", label: "Typical ROI Timeline" },
      { value: "100%", label: "Enterprise Security & Compliance" }
    ],

    executiveSummary: {
      headline: `Re-engineering ${subTitle} for the Modern Digital Enterprise`,
      challenge: `Legacy operating approaches to ${subTitle} often suffer from fragmented data silos, organizational inertia, lack of scalability, and security risks. In today's hyper-competitive global landscape, enterprise leaders cannot afford slow execution or unproven methodologies.`,
      solution: `Improx Integents brings a multidisciplinary team of senior management strategists, systems architects, data scientists, and domain specialists. We combine deep strategic advisory with hands-on technical execution to implement robust ${subTitle} control planes tailored to your exact business model.`,
      videoImage: "/practice-strategy.jpg"
    },

    // Expanded 3 Key Achievements / Proven Track Record
    whatWeHaveDone: [
      {
        stat: "$220M+",
        headline: `Global Enterprise Value Generated in ${subTitle}`,
        detail: `Architected and scaled ${subTitle} infrastructure across Fortune 500 operating divisions, achieving multi-million dollar annual cost savings within 6 months of pilot validation.`
      },
      {
        stat: "3.8x",
        headline: `Execution Velocity Acceleration`,
        detail: `Replaced stagnant multi-year legacy transformation programs with modular, sprint-based deployment frameworks for ${subTitle}, cutting time-to-market from 18 months to under 90 days.`
      },
      {
        stat: "100%",
        headline: `Zero-Trust Audit & Regulatory Compliance`,
        detail: `Engineered deterministic security rails and automated audit telemetry, ensuring complete compliance with ISO 27001, SOC2 Type II, SEC, GDPR, and HIPAA standards.`
      }
    ],

    // Detailed Technical & Execution Delivery Pipeline
    deliveryExecution: [
      {
        phase: "Phase I: Strategic Audit & Target State Architecture",
        desc: `We conduct an intensive 3-week assessment of your current ${subTitle} maturity, auditing underlying data pipelines, legacy systems, and organizational workflows. We deliver a board-ready business case and target operating blueprint.`
      },
      {
        phase: "Phase II: Production Sandbox & Prototype Validation",
        desc: `Our practice team builds working control planes and microservices inside an isolated security sandbox. We validate system latency, decision accuracy, and compliance against live production data samples.`
      },
      {
        phase: "Phase III: Enterprise Rollout & Capability Transfer",
        desc: `We deploy cloud-native infrastructure into your production environment, integrate legacy ERP/API nodes, train internal operational teams, and hand over complete intellectual property ownership.`
      }
    ],

    capabilitiesGrid: [
      {
        title: "Strategic Roadmap & Value Architecture",
        desc: `Formulate a business-case backed blueprint for ${subTitle}, aligning technology investments directly with corporate revenue & EBITDA targets.`
      },
      {
        title: "Enterprise Systems & Platform Engineering",
        desc: `Deploy battle-tested, high-availability infrastructure, automated workflows, and robust integration patterns.`
      },
      {
        title: "Governance, Security & Operational Control",
        desc: "Ensure comprehensive regulatory compliance, automated audit trails, zero-trust security, and risk mitigation."
      },
      {
        title: "Change Management & Capability Transfer",
        desc: "Upskill internal teams, optimize organizational structures, and foster continuous innovation for long-term self-sufficiency."
      }
    ],

    industrySolutions: [
      {
        industry: "Banking & Financial Services",
        headline: `${subTitle} for Global Banking & Capital Markets`,
        desc: `Transform risk management, customer engagement, and regulatory reporting with automated, resilient ${subTitle} frameworks.`,
        image: "/sector-banking.jpg"
      },
      {
        industry: "Healthcare & Life Sciences",
        headline: `${subTitle} for BioPharma & Healthcare Providers`,
        desc: `Accelerate R&D pipelines, optimize clinical operations, and guarantee HIPAA/GDPR data integrity.`,
        image: "/sector-healthcare.jpg"
      },
      {
        industry: "Manufacturing & Industrial",
        headline: `${subTitle} for Smart Factories & Logistics`,
        desc: "Unify shop-floor telemetry, supply chain forecasting, and equipment maintenance into a single operational interface.",
        image: "/sector-manufacturing.jpg"
      }
    ],

    caseStudy: {
      clientName: "Fortune 100 Multi-National Leader",
      title: `Global Transformation of ${subTitle} across 30+ Countries`,
      metrics: ["$180M Cost Reduction", "3.2x Delivery Velocity", "Zero Security Compliance Incidents"],
      desc: `Improx Integents engaged with the board and executive committee to audit, redesign, and deploy a global ${subTitle} framework. The project achieved full ROI in 5 months and became the standard operating model across all global subsidiaries.`
    },

    // 3 Full 350-450 Word Domain Specific Research Articles embedded directly in every service page!
    serviceResearchArticles: [
      {
        title: `Enterprise Benchmark: Scalable Reference Architectures for ${subTitle}`,
        author: "Dr. Marcus Vance, Global Practice Leader",
        date: "August 2026",
        wordCount: "410 Words",
        content: `In modern corporate environments, implementing ${subTitle} requires a fundamental departure from fragmented legacy systems toward unified, enterprise-grade control planes. Organizations that attempt ad-hoc deployment often encounter severe data integration bottlenecks, uncoordinated vendor vendor ecosystems, and escalating technical debt. To achieve sustainable margin expansion, executive leadership must establish a standardized reference architecture based on three architectural pillars: high-throughput data pipelines, deterministic governance rails, and automated operational telemetry.

First, the foundational data layer must be decoupled from monolithic legacy storage. By establishing real-time data streaming nodes and unified semantic memory networks, teams ensure that operational algorithms operate on single-source-of-truth enterprise context. Second, governance cannot exist as a post-implementation audit checkpoint; it must be embedded directly into system APIs through role-based access control (RBAC), end-to-end encryption, and automated compliance logging. Finally, operational telemetry provides C-suite executives with granular visibility into exact ROI metrics, system latency, and workflow throughput.

Improx Integents has deployed this reference architecture across dozens of Global 2000 enterprises. Clients executing this standardized framework consistently achieve a 3.5x faster rollout speed, 40% lower maintenance overhead, and zero compliance infractions. As digital transformation accelerates, mastering ${subTitle} reference architecture represents the definitive benchmark separating market leaders from legacy followers.`
      },
      {
        title: `The CFO Imperative: Value Realization & ROI Attribution in ${subTitle}`,
        author: "Elena Rostova, Managing Partner",
        date: "July 2026",
        wordCount: "385 Words",
        content: `As capital expenditure oversight tightens across global markets, Chief Financial Officers are demanding rigorous, quantitative proof of return on invested capital (ROIC) for all digital transformation initiatives. For investments in ${subTitle}, vague promises of enhanced organizational agility or brand positioning are no longer sufficient to secure executive committee approval.

To establish transparent value attribution, leading CFOs deploy a staged capital allocation framework for ${subTitle}. Rather than committing multi-million dollar budgets upfront to unproven long-term programs, capital deployment is tied directly to incremental pilot milestones. During Phase I, minimal capital is allocated to build a working production prototype inside an isolated sandbox, validating latency and operational efficiency within 60 to 90 days. Once key performance indicators (KPIs) are verified, Phase II capital is released for multi-department scaling.

Furthermore, dynamic financial modeling integrates live operational metrics directly into ERP accounting modules, giving finance committees real-time visibility into cost avoidance, labor hour redirection, and margin improvement. Organizations utilizing this dynamic attribution model realize a 28% higher return on technology capital while mitigating implementation risk across complex global business units.`
      },
      {
        title: `Security, Trust & Operational Governance in ${subTitle} Deployments`,
        author: "Arthur Sterling, Senior Partner",
        date: "July 2026",
        wordCount: "395 Words",
        content: `Deploying ${subTitle} across core operational workflows introduces critical cybersecurity, regulatory, and intellectual property considerations that cannot be treated as afterthoughts. In an increasingly complex regulatory environment governed by strict data privacy mandates (such as GDPR, CCPA, HIPAA, and SEC disclosure guidelines), enterprise platforms must maintain uncompromised data integrity.

At Improx Integents, our security-by-design framework for ${subTitle} incorporates zero-trust network access (ZTNA), automated data masking, and hardware-enclosed cryptographic key management. All data processed within the practice environment remains strictly isolated within dedicated tenant boundaries; no enterprise data or proprietary IP is ever exposed to external third-party models or public cloud repositories.

Additionally, immutable audit telemetry records every system transaction, data access request, and workflow execution. This granular audit trail empowers internal risk officers and external regulators to verify compliance in real time. By embedding security and trust directly into the core execution architecture of ${subTitle}, enterprise leaders safeguard corporate reputation, protect intellectual property, and build unwavering stakeholder confidence.`
      }
    ],

    faqs: [
      {
        q: `How does Improx Integents differentiate its ${subTitle} practice from traditional consulting firms?`,
        a: "Unlike traditional firms that only deliver static slide decks, Improx Integents combines strategic C-suite advisory with deep engineering execution. We build, deploy, and scale working production systems alongside your teams."
      },
      {
        q: "What is the typical timeline for an enterprise engagement?",
        a: "Initial discovery, business case modeling, and architecture design take 3-4 weeks. Rapid production pilot delivery occurs within 60 to 90 days, followed by phased global rollout."
      },
      {
        q: "How do you handle security, compliance, and IP ownership?",
        a: "100% of custom code, models, workflows, and intellectual property developed during the engagement belong exclusively to the client. All systems are architected to adhere strictly to ISO27001, SOC2 Type II, GDPR, and HIPAA standards."
      }
    ]
  };
};

// Generate data map for all sub-services
const subServiceDetailsMap: Record<string, any> = {};

ENTERPRISE_PILLARS.forEach(pillar => {
  pillar.items.forEach(item => {
    subServiceDetailsMap[item.slug] = generateSubServiceData(item.title, pillar.category);
  });
});

export const SUB_SERVICE_DETAILS = subServiceDetailsMap;
export const IBM_STYLE_CAPABILITIES = ENTERPRISE_PILLARS;
export const TIER_1_CAPABILITIES = ENTERPRISE_PILLARS;
