const I18N = {
  en: {
    "brand.name": "Ruofan Jin",
    "hero.name": "Ruofan Jin",
    "hero.photoAlt": "Portrait of Ruofan Jin",
    "nav.research": "Research",
    "nav.publications": "Papers",
    "nav.education": "Education",
    "nav.honors": "Honors",
    "nav.hobbies": "Hobbies",
    "nav.contact": "Contact",
    "hero.role": "Assistant Professor",
    "hero.affil": "Zhongguancun Academy · Beijing",
    "hero.bio":
      "Assistant Professor at Zhongguancun Academy. Ph.D. in Biophysics, Zhejiang University (2026), advised by Tingjun Hou and Ruhong Zhou. Visiting student at Princeton ECE with Mengdi Wang, and visiting doctoral researcher at Stanford Medicine with Le Cong.",
    "hero.lead":
      "I work on biomolecular design for targeted immune regulation, scientific foundation models, scientific agents, and scientific AI safety.",
    "research.title": "Research",
    "research.sub": "Click a direction for representative work, my role, and code.",
    "research.open": "Open",
    "research.contrib": "My role",
    "research.works": "Representative work",
    "research.code": "Code & tools",
    "pub.title": "Papers",
    "pub.sub": "Equal contribution is marked with *. Preprints link to arXiv or bioRxiv.",
    "pub.review": "Preprints",
    "pub.published": "Published",
    "edu.title": "Education",
    "honors.title": "Honors",
    "hobbies.title": "Hobbies",
    "contact.title": "Contact",
    "contact.affil": "Assistant Professor, Zhongguancun Academy, Beijing",
  },
  zh: {
    "brand.name": "金若凡",
    "hero.name": "金若凡",
    "hero.photoAlt": "金若凡半身照",
    "nav.research": "研究",
    "nav.publications": "论文",
    "nav.education": "教育",
    "nav.honors": "荣誉",
    "nav.hobbies": "爱好",
    "nav.contact": "联系",
    "hero.role": "助理教授",
    "hero.affil": "北京中关村学院",
    "hero.bio":
      "北京中关村学院助理教授。2026 年于浙江大学获生物物理学博士学位，导师侯廷军教授、周如鸿教授。博士期间在普林斯顿大学 ECE 访问（王梦迪教授），并在斯坦福大学医学院任访问博士研究员（丛乐教授）。",
    "hero.lead":
      "我关注靶向免疫调控的生物大分子设计、科学基础大模型、科学智能体，以及科学智能安全。",
    "research.title": "研究",
    "research.sub": "点击方向，查看代表工作、我的贡献和代码。",
    "research.open": "查看",
    "research.contrib": "我的贡献",
    "research.works": "代表工作",
    "research.code": "代码与工具",
    "pub.title": "论文",
    "pub.sub": "共同一作以 * 标注。预印本链接至 arXiv 或 bioRxiv。",
    "pub.review": "待发表",
    "pub.published": "已发表",
    "edu.title": "教育经历",
    "honors.title": "获得荣誉",
    "hobbies.title": "兴趣爱好",
    "contact.title": "联系方式",
    "contact.affil": "助理教授，北京中关村学院",
  },
};

const DIRECTIONS = [
  {
    id: "immune",
    title: {
      en: "Biomolecular Design for Targeted Immune Regulation",
      zh: "靶向免疫调控的生物大分子设计",
    },
    body: {
      en: "Antibodies, antigens, and TCR–pHLA recognition, from sequence and structure.",
      zh: "抗体、抗原与 TCR–pHLA 识别，从序列和结构两侧做建模与设计。",
    },
    contrib: {
      en: "Sole first author on AttABseq, a sequence-only model for antigen–antibody affinity changes (Pearson R > 0.7, no 3D structure required), and on MultiTAP, which fuses TCR–pHLA sequence and structure. Also wrote a cover review on deep-learning antibody optimization.",
      zh: "AttABseq 独立一作：不依赖三维结构的抗原–抗体亲和力预测（Pearson R > 0.7）。MultiTAP 独立一作：融合 TCR–pHLA 的序列与结构。另有一篇深度学习抗体优化综述，为浙大学报 B 封面文章。",
    },
    works: [
      {
        name: "AttABseq",
        href: "https://doi.org/10.1093/bib/bbae304",
        note: { en: "Briefings in Bioinformatics · sole first author", zh: "Briefings in Bioinformatics · 独立一作" },
      },
      {
        name: "MultiTAP",
        href: "https://www.biorxiv.org/content/10.1101/2024.11.06.622193v1",
        note: { en: "bioRxiv · sole first author", zh: "bioRxiv · 独立一作" },
      },
      {
        name: "Antibody optimization review",
        href: null,
        note: { en: "J. Zhejiang Univ.-SCIENCE B · cover article", zh: "浙大学报 B · 封面文章" },
      },
    ],
    code: [],
  },
  {
    id: "foundation",
    title: { en: "Scientific Foundation Models", zh: "科学基础大模型" },
    body: {
      en: "Foundation models for proteins and RNA: representation, structure, and de novo design.",
      zh: "面向蛋白质与 RNA 的基础模型，覆盖表征、结构预测与从头设计。",
    },
    contrib: {
      en: "Co-first author (second listed) on RNAGenesis, a generalist RNA foundation model, including architecture and distributed pre-training. Co-first author (second listed) on FoldMark, a watermarking method for protein generative models.",
      zh: "RNAGenesis 共同一作（第二）：通用 RNA 基础模型，参与架构与分布式预训练。FoldMark 共同一作（第二）：蛋白质生成模型的水印与溯源。",
    },
    works: [
      {
        name: "RNAGenesis",
        href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630826v3",
        note: { en: "bioRxiv · co-first, second listed", zh: "bioRxiv · 共同一作，排名第二" },
      },
      {
        name: "FoldMark",
        href: "https://arxiv.org/abs/2410.20354",
        note: { en: "arXiv:2410.20354 · co-first, second listed", zh: "arXiv:2410.20354 · 共同一作，排名第二" },
      },
    ],
    code: [
      { label: "RNAGenesis", href: "https://github.com/zaixizhang/rnagenesis" },
      { label: "FoldMark", href: "https://github.com/zaixizhang/FoldMark" },
    ],
  },
  {
    id: "agents",
    title: { en: "Scientific Agents", zh: "科学智能体" },
    body: {
      en: "Self-evolving and multi-agent systems for tool use, experiment planning, and lab execution.",
      zh: "自进化与多智能体系统：工具编排、实验规划与实验室执行。",
    },
    contrib: {
      en: "Sole first author of STELLA, a self-evolving LLM agent. Lead co-first author of BioLab, a multi-agent system with 200+ tools. Contributed the multi-agent layer of LabOS. Sole first author of Agentic-VLA. Also built BioClaw, a multi-channel bioinformatics assistant in real use.",
      zh: "STELLA 独立一作：自进化生物医学 LLM Agent。BioLab 共同一作（排名第一）：融合 200+ 工具的多智能体系统。参与 LabOS 的多智能体交互层。Agentic-VLA 独立一作。另有多端生信助手 BioClaw 在真实科研场景中使用。",
    },
    works: [
      {
        name: "STELLA",
        href: "https://arxiv.org/abs/2507.02004",
        note: { en: "arXiv:2507.02004 · sole first author", zh: "arXiv:2507.02004 · 独立一作" },
      },
      {
        name: "BioLab",
        href: "https://www.biorxiv.org/content/10.1101/2025.09.03.674085v1",
        note: { en: "bioRxiv · co-first, first listed", zh: "bioRxiv · 共同一作，排名第一" },
      },
      {
        name: "LabOS",
        href: "https://arxiv.org/abs/2510.14861",
        note: { en: "arXiv:2510.14861", zh: "arXiv:2510.14861" },
      },
      {
        name: "Agentic-VLA",
        href: "https://arxiv.org/abs/2605.22896",
        note: { en: "arXiv:2605.22896 · sole first author", zh: "arXiv:2605.22896 · 独立一作" },
      },
    ],
    code: [
      { label: "STELLA", href: "https://github.com/zaixizhang/STELLA" },
      { label: "STELLA demo", href: "https://stella-agent.com/" },
      { label: "LabOS", href: "https://github.com/zaixizhang/LabOS" },
      { label: "BioClaw", href: "https://bioclaw.tech/" },
    ],
  },
  {
    id: "safety",
    title: { en: "Scientific AI Safety", zh: "科学智能安全" },
    body: {
      en: "Red-teaming, evaluation, and alignment for models that can design or generate biology.",
      zh: "对能够设计或生成生物分子的模型做红队测试、评测与对齐。",
    },
    contrib: {
      en: "Co-first author on GeneBreaker (NeurIPS 2025 BioSafeGenAI Best Paper & Oral) and JailbreakDNABench (ICLR 2026), and on SafeProtein. Co-first author on FoldMark for tracing generated protein structures. Leading organizer of the NeurIPS 2025 workshop on biosecurity safeguards for generative AI.",
      zh: "GeneBreaker 共同一作（NeurIPS 2025 BioSafeGenAI 最佳论文与口头报告）、JailbreakDNABench 共同一作（ICLR 2026）、SafeProtein 共同一作。FoldMark 共同一作，用于蛋白质生成结果溯源。牵头组织 NeurIPS 2025 生成式 AI 生物安全研讨会。",
    },
    works: [
      {
        name: "GeneBreaker",
        href: "https://github.com/zaixizhang/genebreaker",
        note: { en: "NeurIPS 2025 workshop · Best Paper & Oral", zh: "NeurIPS 2025 workshop · 最佳论文与口头报告" },
      },
      {
        name: "JailbreakDNABench",
        href: null,
        note: { en: "ICLR 2026 · co-first", zh: "ICLR 2026 · 共同一作" },
      },
      {
        name: "SafeProtein",
        href: null,
        note: { en: "NeurIPS 2025 · co-first", zh: "NeurIPS 2025 · 共同一作" },
      },
      {
        name: "FoldMark",
        href: "https://arxiv.org/abs/2410.20354",
        note: { en: "arXiv:2410.20354 · co-first, second listed", zh: "arXiv:2410.20354 · 共同一作，排名第二" },
      },
    ],
    code: [{ label: "GeneBreaker", href: "https://github.com/zaixizhang/genebreaker" }],
  },
];

const PUBS_REVIEW = [
  {
    title: "STELLA: Self-Evolving LLM Agent for Biomedical Research",
    authors: "<b>Ruofan Jin</b>*, Zaixi Zhang*, Mengdi Wang, Le Cong",
    venue: "arXiv:2507.02004",
    href: "https://arxiv.org/abs/2507.02004",
  },
  {
    title:
      "BioLab: End-to-End Autonomous Life Sciences Research with Multi-Agents System Integrating Biological Foundation Models",
    authors:
      "<b>Ruofan Jin</b>, Yucheng Guo, Yuanhao Qu, Ming Yang, Chun Shang, Qirong Yang, Linlin Chao, Yi Zhou, Ruilai Xu, Ziyao Xu, Ruhong Zhou, Zaixi Zhang, Mengdi Wang, Xiaoming Zhang, Le Cong",
    venue: "bioRxiv 2025.09.03.674085",
    href: "https://www.biorxiv.org/content/10.1101/2025.09.03.674085v1",
  },
  {
    title:
      "A Multi-Modal Deep Learning Framework with Both Sequence and Structure for Tumor Antigens Prediction",
    authors:
      "<b>Ruofan Jin</b>, Jingxuan Ge, Guanqiao Zhang, Ziyan Deng, Kim Hsieh, Tingjun Hou, Ruhong Zhou",
    venue: "bioRxiv 2024.11.06.622193",
    href: "https://www.biorxiv.org/content/10.1101/2024.11.06.622193v1",
  },
  {
    title: "Agentic-VLA: Efficient Online Adaptation for Vision-Language-Action Models",
    authors: "<b>Ruofan Jin</b>, Zaixi Zhang",
    venue: "arXiv:2605.22896",
    href: "https://arxiv.org/abs/2605.22896",
  },
  {
    title: "RNAGenesis: A Generalist Foundation Model for Functional RNA Therapeutics",
    authors:
      "Zaixi Zhang, <b>Ruofan Jin</b>, Linlin Chao, Guangxue Xu, Yikun Zhang, Guowei Zhou, Di Yin, Yingqing Guo, Yaqi Fu, Yukang Yang, Kaixuan Huang, Xiaotong Wang, Junze Zhang, Yujie Yang, Qirong Yang, Ziyao Xu, Weinan E, Ruhong Zhou, Xiaoming Zhang, Mengdi Wang, Le Cong",
    venue: "bioRxiv 2024.12.30.630826",
    href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630826v3",
  },
  {
    title: "FoldMark: Protecting Protein Generative Models with Watermarking",
    authors:
      "Zaixi Zhang, <b>Ruofan Jin</b>, Kaidi Fu, Le Cong, Marinka Žitnik, Mengdi Wang",
    venue: "arXiv:2410.20354",
    href: "https://arxiv.org/abs/2410.20354",
  },
  {
    title: "LabOS: The AI-XR Co-Scientist That Sees and Works With Humans",
    authors:
      "Le Cong**, David Smerkous*, Xiaotong Wang*, Di Yin*, Zaixi Zhang*, <b>Ruofan Jin</b>, Yinkai Wang, Michal Gerasimiuk, Ravi K. Dinesh, Alex Smerkous, Lihan Shi, Joy Zheng, Ian Lam, Xuekun Wu, Shilong Liu, Peishan Li, Yi Zhu, Ning Zhao, Meenal Parakh, Simran Serrao, Imran A. Mohammad, Chao-Yeh Chen, Xiufeng Xie, Tiffany Chen, David Weinstein, Greg Barbone, Belgin Caglar, John B. Sunwoo, Fuxin Li, Jia Deng, Joseph C. Wu, Sanfeng Wu, Mengdi Wang**",
    venue: "arXiv:2510.14861",
    href: "https://arxiv.org/abs/2510.14861",
  },
];

const PUBS_PUBLISHED = [
  {
    title:
      "AttABseq: An Attention-based Deep Learning Prediction Method for Antigen-Antibody Binding Affinity Changes Based on Protein Sequences",
    authors:
      "<b>Ruofan Jin</b>, Qing Ye, Jike Wang, Zheng Cao, Dejun Jiang, Tianyue Wang, Yu Kang, Wanting Xu, Chang-Yu Hsieh*, Tingjun Hou*",
    venue: "Briefings in Bioinformatics",
    note: "2024 · sole first author",
    href: "https://doi.org/10.1093/bib/bbae304",
  },
  {
    title: "Recent advances in antibody optimization based on deep learning methods",
    authors: "<b>Ruofan Jin</b>, Ruhong Zhou*, Dong Zhang*",
    venue: "Journal of Zhejiang University-SCIENCE B",
    note: "cover article · sole first author",
  },
  {
    title:
      "GeneBreaker: Jailbreak Attacks against DNA Language Models with Pathogenicity Guidance",
    authors: "<b>Ruofan Jin</b>*, Zhenghong Zhou, Zaixi Zhang, Le Cong, Mengdi Wang",
    venue: "NeurIPS 2025, BioSafeGenAI Workshop",
    note: "Best Paper Award and Oral · co-first",
    badge: "Best Paper",
  },
  {
    title:
      "Systematic Biosafety Evaluation of DNA Language Models under Jailbreak Attacks",
    authors: "<b>Ruofan Jin</b>*, Zhenghong Zhou*, Zaixi Zhang, Le Cong, Mengdi Wang",
    venue: "ICLR 2026",
    note: "co-first",
  },
  {
    title: "SafeProtein: Red-Teaming Framework and Benchmark for Protein Foundation Models",
    authors:
      "Jigang Fan*, Zhenghong Zhou*, <b>Ruofan Jin</b>*, Le Cong, Mengdi Wang, Zaixi Zhang",
    venue: "NeurIPS 2025",
    note: "co-first",
  },
  {
    title:
      "Highly accurate and efficient deep learning paradigm for full-atom protein loop modeling with KarmaLoop",
    authors:
      "Tianyue Wang, Xunjun Zhang, Odin Zhang, et al., <b>Ruofan Jin</b>, … Chang-yu Hsieh*, Tingjun Hou*",
    venue: "Research",
    href: "https://doi.org/10.34133/research.0408",
  },
  {
    title: "Molecular generation with reduced labeling through constraint architecture",
    authors:
      "Jike Wang, Yundian Zeng, Huiyong Sun, et al., <b>Ruofan Jin</b>, … Chang-Yu Hsieh*, Tingjun Hou*",
    venue: "Journal of Chemical Information and Modeling",
    href: "https://doi.org/10.1021/acs.jcim.3c00579",
  },
  {
    title:
      "Comprehensive assessment of protein loop modeling programs on large-scale datasets: prediction accuracy and efficiency",
    authors:
      "Tianyue Wang, Langcheng Wang, Xujun Zhang, et al., <b>Ruofan Jin</b>, … Yu Kang*, Tingjun Hou*",
    venue: "Briefings in Bioinformatics",
    href: "https://doi.org/10.1093/bib/bbad486",
  },
  {
    title:
      "Out of the Himalaya-Hengduan Mountains: phylogenomics, biogeography and diversification of Polygonatum Mill. (Asparagaceae) in the Northern Hemisphere",
    authors:
      "Maoqin Xia, Ying Liu, Jingjing Liu, et al., <b>Ruofan Jin</b>, … Jinping Si*, Yingxiong Qiu*",
    venue: "Molecular Phylogenetics and Evolution",
    href: "https://doi.org/10.1016/j.ympev.2022.107431",
  },
];

const EDU = {
  en: [
    {
      when: "2021.09 – 2026.06",
      what: "Ph.D. in Biophysics",
      where: "School of Life Sciences, Zhejiang University · Advisors: Tingjun Hou, Ruhong Zhou",
    },
    {
      when: "2025.02 – 2026.06",
      what: "Visiting student",
      where: "ECE, Princeton University · Advisor: Mengdi Wang · Qiushi Flying Eagle Program",
    },
    {
      when: "2025.03 – 2026.01",
      what: "Visiting doctoral researcher",
      where: "Stanford University School of Medicine · Advisor: Le Cong",
    },
    {
      when: "2017.09 – 2021.06",
      what: "B.S. in Biology",
      where: "School of Life Sciences, Zhejiang University · GPA 4.1/5.0, major 4.3/5.0, rank 4/45",
    },
  ],
  zh: [
    {
      when: "2021.09 – 2026.06",
      what: "生物物理学博士",
      where: "浙江大学生命科学学院 · 导师：侯廷军教授、周如鸿教授",
    },
    {
      when: "2025.02 – 2026.06",
      what: "访问学生",
      where: "普林斯顿大学电气与计算机工程系 · 导师：王梦迪教授 · 求是飞鹰计划",
    },
    {
      when: "2025.03 – 2026.01",
      what: "访问博士研究员",
      where: "斯坦福大学医学院 · 导师：丛乐教授",
    },
    {
      when: "2017.09 – 2021.06",
      what: "生物学理学学士",
      where: "浙江大学生命科学学院 · 总绩点 4.1/5.0，专业 4.3/5.0，排名 4/45",
    },
  ],
};

const HONORS = {
  en: [
    "Invited as a young AI talent to the WAIC CCTV AI Gala",
    "Best Paper Award and Oral, NeurIPS 2025 Workshop on Biosecurity Safeguards for Generative AI",
    "Outstanding Graduate of Zhejiang University, 2026",
    "Qiushi Flying Eagle Program, 2025",
    "National Scholarship; Outstanding Graduate Student, Zhejiang University, 2024",
    "Outstanding Undergraduate Graduate, Zhejiang University, 2021",
    "iGEM Gold Medal representing Zhejiang University (MIT), 2019",
    "Nandu Provincial Government First-Class Scholarship; Zhejiang University First-Class Scholarship, 2018–2019",
  ],
  zh: [
    "作为青年 AI 人才受邀参加 WAIC 央视 AI 盛典",
    "NeurIPS 2025 Workshop: Biosecurity Safeguards for Generative AI，最佳论文奖与口头报告",
    "2026 年浙江大学校级优秀毕业生",
    "2025 年浙江大学“求是飞鹰计划”",
    "2024 年国家奖学金；浙江大学优秀研究生",
    "2021 年浙江大学优秀本科毕业生",
    "2019 年代表浙江大学获 iGEM 国际金牌（MIT）",
    "2019 年省政府南都一等奖学金；2018–2019 学年浙江大学一等奖学金",
  ],
};

const HOBBIES = { en: [], zh: [] };

let currentLang = "en";
let openDir = null;

function renderPubs(target, items) {
  target.innerHTML = items
    .map((p) => {
      const title = p.href
        ? `<a class="title" href="${p.href}" target="_blank" rel="noopener">${p.title}</a>`
        : `<span class="title">${p.title}</span>`;
      const venue = p.href
        ? `<a class="venue" href="${p.href}" target="_blank" rel="noopener">${p.venue}</a>`
        : `<span class="venue">${p.venue}</span>`;
      const badge = p.badge ? `<span class="badge">${p.badge}</span>` : "";
      const note = p.note ? ` · ${p.note}` : "";
      return `<li><div>
        ${title}
        <div class="meta">${p.authors}</div>
        <div class="meta">${venue}${note}${badge}</div>
      </div></li>`;
    })
    .join("");
}

function renderTimeline(target, items) {
  target.innerHTML = items
    .map(
      (e) => `<li>
        <span class="when">${e.when}</span>
        <span class="what">${e.what}</span>
        <div class="where">${e.where}</div>
      </li>`
    )
    .join("");
}

function renderPlain(target, items) {
  target.innerHTML = items.map((t) => `<li>${t}</li>`).join("");
}

function renderDirections() {
  const lang = currentLang;
  const dict = I18N[lang];
  const grid = document.getElementById("research-grid");
  grid.innerHTML = DIRECTIONS.map(
    (d) => `<button class="research-card${openDir === d.id ? " is-open" : ""}" type="button" data-id="${d.id}">
      <h3>${d.title[lang]}</h3>
      <p>${d.body[lang]}</p>
      <span class="card-hint">${dict["research.open"]}</span>
    </button>`
  ).join("");
  grid.querySelectorAll(".research-card").forEach((btn) => {
    btn.addEventListener("click", () => toggleDirection(btn.dataset.id));
  });
  renderPanel();
}

function toggleDirection(id) {
  openDir = openDir === id ? null : id;
  renderDirections();
  if (openDir) {
    const panel = document.getElementById("research-panel");
    panel.hidden = false;
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function renderPanel() {
  const panel = document.getElementById("research-panel");
  const dict = I18N[currentLang];
  const d = DIRECTIONS.find((x) => x.id === openDir);
  if (!d) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  const works = d.works
    .map((w) => {
      const name = w.href
        ? `<a href="${w.href}" target="_blank" rel="noopener">${w.name}</a>`
        : w.name;
      return `<li>${name}<span> · ${w.note[currentLang]}</span></li>`;
    })
    .join("");
  const code =
    d.code.length === 0
      ? ""
      : `<h4>${dict["research.code"]}</h4>
         <p class="code-links">${d.code
           .map((c) => `<a href="${c.href}" target="_blank" rel="noopener">${c.label}</a>`)
           .join("")}</p>`;
  panel.hidden = false;
  panel.innerHTML = `
    <h3>${d.title[currentLang]}</h3>
    <h4>${dict["research.contrib"]}</h4>
    <p>${d.contrib[currentLang]}</p>
    <h4>${dict["research.works"]}</h4>
    <ul class="work-list">${works}</ul>
    ${code}`;
}

function renderHobbies(lang) {
  const section = document.getElementById("hobbies");
  const items = HOBBIES[lang] || [];
  const navLink = document.querySelector('.nav a[href="#hobbies"]');
  if (!items.length) {
    section.hidden = true;
    if (navLink) navLink.hidden = true;
    return;
  }
  section.hidden = false;
  if (navLink) navLink.hidden = false;
  renderPlain(document.getElementById("hobby-list"), items);
}

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.getElementById("langToggle").textContent = lang === "zh" ? "EN" : "中文";
  document.title = lang === "zh" ? "金若凡" : "Ruofan Jin";
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
  });
  renderDirections();
  renderTimeline(document.getElementById("edu-list"), EDU[lang]);
  renderPlain(document.getElementById("honor-list"), HONORS[lang]);
  renderHobbies(lang);
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderPubs(document.getElementById("pubs-review"), PUBS_REVIEW);
  renderPubs(document.getElementById("pubs-published"), PUBS_PUBLISHED);

  const lang = localStorage.getItem("lang") || "en";
  applyLang(lang);

  document.getElementById("langToggle").addEventListener("click", () => {
    applyLang(currentLang === "zh" ? "en" : "zh");
  });

  const nav = document.getElementById("nav");
  document.getElementById("menuToggle").addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
});
