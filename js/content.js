const I18N = {
  en: {
    "brand.name": "Ruofan Jin",
    "hero.name": "Ruofan Jin",
    "hero.photoAlt": "Portrait of Ruofan Jin",
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.papers": "Papers",
    "nav.about": "About",
    "hero.role": "Assistant Professor",
    "hero.affil": "Zhongguancun Academy · Beijing",
    "hero.bio":
      "Assistant Professor at Zhongguancun Academy. Ph.D. in Biophysics, Zhejiang University (2026), advised by Tingjun Hou and Ruhong Zhou. Visiting student at Princeton ECE with Mengdi Wang, and visiting doctoral researcher at Stanford Medicine with Le Cong.",
    "hero.lead":
      "I work on biomolecular design for targeted immune regulation; scientific foundation models and scientific agents; and scientific AI safety.",
    "research.title": "Research",
    "research.sub": "Three directions. Each has its own page.",
    "research.open": "Open page",
    "research.contrib": "My role",
    "research.works": "Papers and links",
    "research.figures": "Figures",
    "research.code": "Code & tools",
    "pub.title": "Papers",
    "pub.sub": "Equal contribution is marked with *. Preprints link to arXiv or bioRxiv. Published papers are ordered by first-author role, then Google Scholar citations.",
    "pub.review": "Preprints",
    "pub.published": "Published",
    "edu.title": "Education",
    "honors.title": "Honors",
    "hobbies.title": "Hobbies",
    "contact.title": "Contact",
    "contact.affil": "Assistant Professor, Zhongguancun Academy, Beijing",
    "about.title": "About",
  },
  zh: {
    "brand.name": "金若凡",
    "hero.name": "金若凡",
    "hero.photoAlt": "金若凡半身照",
    "nav.home": "首页",
    "nav.research": "研究",
    "nav.papers": "论文",
    "nav.about": "关于",
    "hero.role": "助理教授",
    "hero.affil": "北京中关村学院",
    "hero.bio":
      "北京中关村学院助理教授。2026 年于浙江大学获生物物理学博士学位，导师侯廷军教授、周如鸿教授。博士期间在普林斯顿大学 ECE 访问（王梦迪教授），并在斯坦福大学医学院任访问博士研究员（丛乐教授）。",
    "hero.lead":
      "我关注靶向免疫调控的生物大分子设计、科学基础大模型与科学智能体，以及科学智能安全。",
    "research.title": "研究",
    "research.sub": "三个方向，各自独立成页。",
    "research.open": "进入页面",
    "research.contrib": "我的贡献",
    "research.works": "论文与链接",
    "research.figures": "示意图",
    "research.code": "代码与工具",
    "pub.title": "论文",
    "pub.sub": "共同一作以 * 标注。预印本链接至 arXiv 或 bioRxiv。已发表论文按独立一作、共同一作、其他作者排序，同组内按 Google Scholar 引用从高到低。",
    "pub.review": "待发表",
    "pub.published": "已发表",
    "edu.title": "教育经历",
    "honors.title": "获得荣誉",
    "hobbies.title": "兴趣爱好",
    "contact.title": "联系方式",
    "contact.affil": "助理教授，北京中关村学院",
    "about.title": "关于",
  },
};

const DIRECTIONS = [
  {
    id: "immune",
    page: "research/immune.html",
    nav: { en: "Immune regulation", zh: "免疫调控" },
    title: {
      en: "Biomolecular Design for Targeted Immune Regulation",
      zh: "靶向免疫调控的生物大分子设计",
    },
    body: {
      en: "Antibodies, antigen presentation and screening, and RNA aptamers.",
      zh: "抗体、抗原呈递与筛选、RNA 适配体。",
    },
    contrib: {
      en: "Sole first author on AttABseq (sequence-based antigen–antibody affinity) and MultiTAP (TCR–peptide–HLA immunogenicity). RNA aptamer design is part of RNAGenesis, where I am co-first author.",
      zh: "AttABseq 独立一作（基于序列的抗原–抗体亲和力）。MultiTAP 独立一作（TCR–肽–HLA 免疫原性）。RNA 适配体设计见于 RNAGenesis，我为共同一作。",
    },
    story: {
      en: "The current MultiTAP version is not the 2024 bioRxiv figure. It encodes paired TCR CDR3αβ, peptide and full-length HLA sequence with ESM-2 and a TCR masked language model, builds residue-level graphs on Boltz2 pHLA structures, and uses bidirectional sequence and structure cross-attention. On independent tests it ranks first among seven baselines (AUC 0.890, AUPR 0.723).",
      zh: "当前 MultiTAP 不是 2024 年 bioRxiv 预印本中的那张图。它用 ESM-2 与 TCR 掩码语言模型编码配对 CDR3αβ、肽段与 HLA 全长序列，在 Boltz2 预测的 pHLA 结构上做残基级图编码，再用序列与结构的双向交叉注意力。独立测试中在七个基线里全面领先（AUC 0.890，AUPR 0.723）。",
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
        note: { en: "bioRxiv preprint · sole first author; figures below are the updated manuscript", zh: "bioRxiv 预印本 · 独立一作；下方配图为更新后的稿件" },
      },
      {
        name: "RNAGenesis (RNA aptamers)",
        href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630826v3",
        note: { en: "bioRxiv · co-first, second listed", zh: "bioRxiv · 共同一作，排名第二" },
      },
    ],
    figures: [
      {
        src: "photos/research/multitap.jpg",
        caption: {
          en: "MultiTAP framework: ESM-2 and TCR MLM embeddings, graph encoding of Boltz2 pHLA structures, and bidirectional sequence/structure cross-attention.",
          zh: "MultiTAP 框架：ESM-2 与 TCR 掩码语言模型嵌入、Boltz2 预测的 pHLA 结构图编码，以及序列/结构双向交叉注意力。",
        },
      },
      {
        src: "photos/research/multitap-ablation.jpg",
        caption: {
          en: "TPHD construction, Boltz2 pHLA structures, and ablation. Full MultiTAP (sequence + structure) leads on AUC, AUPR, Precision, F1, and MCC.",
          zh: "TPHD 数据集、Boltz2 pHLA 结构，以及消融实验。完整 MultiTAP（序列+结构）在 AUC、AUPR、Precision、F1、MCC 上均为最高。",
        },
      },
      {
        src: "photos/research/rnagenesis.jpg",
        href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630826v3",
        caption: {
          en: "RNAGenesis includes de novo RNA aptamer design alongside other functional RNAs.",
          zh: "RNAGenesis 支持 RNA 适配体等功能性 RNA 的从头设计。",
        },
      },
    ],
    code: [],
  },
  {
    id: "models-agents",
    page: "research/models.html",
    nav: { en: "Models & agents", zh: "大模型与智能体" },
    title: {
      en: "Scientific Foundation Models and Scientific Agents",
      zh: "科学基础大模型与科学智能体",
    },
    body: {
      en: "RNAGenesis, BioLab, and STELLA.",
      zh: "RNAGenesis、BioLab 与 STELLA。",
    },
    contrib: {
      en: "Co-first author on RNAGenesis. Lead co-first author on BioLab. Sole first author on STELLA.",
      zh: "RNAGenesis 共同一作。BioLab 共同一作（排名第一）。STELLA 独立一作。",
    },
    story: {
      en: "RNAGenesis is a generalist RNA foundation model. BioLab is a multi-agent system that calls biological foundation models and tools. STELLA is a self-evolving LLM agent for biomedical research.",
      zh: "RNAGenesis 是通用 RNA 基础模型。BioLab 是调用生物基础模型与工具的多智能体系统。STELLA 是面向生物医学研究的自进化智能体。",
    },
    works: [
      {
        name: "RNAGenesis",
        href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630826v3",
        note: { en: "bioRxiv · co-first, second listed", zh: "bioRxiv · 共同一作，排名第二" },
      },
      {
        name: "BioLab",
        href: "https://www.biorxiv.org/content/10.1101/2025.09.03.674085v1",
        note: { en: "bioRxiv · co-first, first listed", zh: "bioRxiv · 共同一作，排名第一" },
      },
      {
        name: "STELLA",
        href: "https://arxiv.org/abs/2507.02004",
        note: { en: "arXiv:2507.02004 · sole first author", zh: "arXiv:2507.02004 · 独立一作" },
      },
    ],
    figures: [
      {
        src: "photos/research/rnagenesis.jpg",
        href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630826v3",
        caption: {
          en: "RNAGenesis: a generalist RNA foundation model.",
          zh: "RNAGenesis：通用 RNA 基础模型。",
        },
      },
      {
        src: "photos/research/biolab.jpg",
        href: "https://www.biorxiv.org/content/10.1101/2025.09.03.674085v1",
        caption: {
          en: "BioLab: multi-agent system with biological foundation models.",
          zh: "BioLab：融合生物基础模型的多智能体系统。",
        },
      },
      {
        src: "photos/research/stella.jpg",
        href: "https://arxiv.org/abs/2507.02004",
        caption: {
          en: "STELLA: a self-evolving LLM agent for biomedical research.",
          zh: "STELLA：面向生物医学研究的自进化智能体。",
        },
      },
    ],
    code: [
      { label: "RNAGenesis", href: "https://github.com/zaixizhang/rnagenesis" },
      { label: "STELLA", href: "https://github.com/zaixizhang/STELLA" },
      { label: "STELLA demo", href: "https://stella-agent.com/" },
    ],
  },
  {
    id: "safety",
    page: "research/safety.html",
    nav: { en: "Scientific AI safety", zh: "科学智能安全" },
    title: { en: "Scientific AI Safety", zh: "科学智能安全" },
    body: {
      en: "GeneBreaker and FoldMark.",
      zh: "GeneBreaker 与 FoldMark。",
    },
    contrib: {
      en: "Co-first author on GeneBreaker (NeurIPS 2025 BioSafeGenAI Best Paper & Oral). Co-first author on FoldMark, watermarking protein generative models.",
      zh: "GeneBreaker 共同一作（NeurIPS 2025 BioSafeGenAI 最佳论文与口头报告）。FoldMark 共同一作：蛋白质生成模型水印。",
    },
    story: {
      en: "GeneBreaker is a pathogenicity-guided jailbreak evaluation of DNA language models. FoldMark watermarks generated protein structures so they can be traced.",
      zh: "GeneBreaker 是致病性引导的 DNA 语言模型越狱评测。FoldMark 为生成的蛋白质结构嵌入可溯源水印。",
    },
    works: [
      {
        name: "GeneBreaker",
        href: "https://arxiv.org/abs/2505.23839",
        note: { en: "arXiv:2505.23839 · NeurIPS 2025 workshop Best Paper & Oral", zh: "arXiv:2505.23839 · NeurIPS 2025 workshop 最佳论文与口头报告" },
      },
      {
        name: "FoldMark",
        href: "https://arxiv.org/abs/2410.20354",
        note: { en: "arXiv:2410.20354 · co-first, second listed", zh: "arXiv:2410.20354 · 共同一作，排名第二" },
      },
    ],
    figures: [
      {
        src: "photos/research/genebreaker.jpg",
        href: "https://arxiv.org/abs/2505.23839",
        caption: {
          en: "GeneBreaker: pathogenicity-guided jailbreaks of DNA language models.",
          zh: "GeneBreaker：致病性引导的 DNA 语言模型越狱评测。",
        },
      },
      {
        src: "photos/research/foldmark.jpg",
        href: "https://arxiv.org/abs/2410.20354",
        caption: {
          en: "FoldMark: watermarking generated protein structures for tracing.",
          zh: "FoldMark：为生成的蛋白质结构嵌入可溯源水印。",
        },
      },
    ],
    code: [
      { label: "GeneBreaker", href: "https://github.com/zaixizhang/genebreaker" },
      { label: "FoldMark", href: "https://github.com/zaixizhang/FoldMark" },
    ],
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
    note: "2024 · sole first author · 46 citations",
    href: "https://doi.org/10.1093/bib/bbae304",
  },
  {
    title: "Recent advances in antibody optimization based on deep learning methods",
    authors: "<b>Ruofan Jin</b>, Ruhong Zhou*, Dong Zhang*",
    venue: "Journal of Zhejiang University-SCIENCE B",
    note: "cover article · sole first author",
    href: "https://doi.org/10.1631/jzus.B2400387",
  },
  {
    title:
      "GeneBreaker: Jailbreak Attacks against DNA Language Models with Pathogenicity Guidance",
    authors: "<b>Ruofan Jin</b>*, Zhenghong Zhou, Zaixi Zhang, Le Cong, Mengdi Wang",
    venue: "NeurIPS 2025, BioSafeGenAI Workshop",
    note: "Best Paper Award and Oral · co-first · 18 citations",
    badge: "Best Paper",
    href: "https://arxiv.org/abs/2505.23839",
  },
  {
    title:
      "Systematic Biosafety Evaluation of DNA Language Models under Jailbreak Attacks",
    authors: "<b>Ruofan Jin</b>*, Zhenghong Zhou*, Zaixi Zhang, Le Cong, Mengdi Wang",
    venue: "ICLR 2026",
    note: "co-first · 18 citations",
  },
  {
    title: "SafeProtein: Red-Teaming Framework and Benchmark for Protein Foundation Models",
    authors:
      "Jigang Fan*, Zhenghong Zhou*, <b>Ruofan Jin</b>*, Le Cong, Mengdi Wang, Zaixi Zhang",
    venue: "NeurIPS 2025",
    note: "co-first · 10 citations",
  },
  {
    title:
      "Out of the Himalaya-Hengduan Mountains: phylogenomics, biogeography and diversification of Polygonatum Mill. (Asparagaceae) in the Northern Hemisphere",
    authors:
      "Maoqin Xia, Ying Liu, Jingjing Liu, et al., <b>Ruofan Jin</b>, … Jinping Si*, Yingxiong Qiu*",
    venue: "Molecular Phylogenetics and Evolution",
    note: "89 citations",
    href: "https://doi.org/10.1016/j.ympev.2022.107431",
  },
  {
    title:
      "Comprehensive assessment of protein loop modeling programs on large-scale datasets: prediction accuracy and efficiency",
    authors:
      "Tianyue Wang, Langcheng Wang, Xujun Zhang, et al., <b>Ruofan Jin</b>, … Yu Kang*, Tingjun Hou*",
    venue: "Briefings in Bioinformatics",
    note: "20 citations",
    href: "https://doi.org/10.1093/bib/bbad486",
  },
  {
    title: "Molecular generation with reduced labeling through constraint architecture",
    authors:
      "Jike Wang, Yundian Zeng, Huiyong Sun, et al., <b>Ruofan Jin</b>, … Chang-Yu Hsieh*, Tingjun Hou*",
    venue: "Journal of Chemical Information and Modeling",
    note: "10 citations",
    href: "https://doi.org/10.1021/acs.jcim.3c00579",
  },
  {
    title:
      "Highly accurate and efficient deep learning paradigm for full-atom protein loop modeling with KarmaLoop",
    authors:
      "Tianyue Wang, Xunjun Zhang, Odin Zhang, et al., <b>Ruofan Jin</b>, … Chang-yu Hsieh*, Tingjun Hou*",
    venue: "Research",
    note: "7 citations",
    href: "https://doi.org/10.34133/research.0408",
  },
  {
    title: "OpenIO: An open framework for AI-native immunotherapy",
    authors:
      "Yingcheng Wu, Hao Xiao, Nan Jiang, Will Hua, Jiaqiang Ma, Jiacheng Ge, Yong Liu, Zhongyue Zhang, Jack Xiaoyu Chen, <b>Ruofan Jin</b>, Yingrui Wang, Jian Zhou, Jia Fan, Zaixiang Zheng, Lei Bai, Haifeng Ye, Qi Liu, Guoji Guo, Zaixi Zhang, Siqi Sun, Tiannan Guo, Shuangjia Zheng, Qiang Gao",
    venue: "Cancer Cell",
    note: "2026 · 44(7): 1315–1320 · commentary · 1 citation",
    href: "https://doi.org/10.1016/j.ccell.2026.06.002",
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
    "Top Ten Student of the College of Life Sciences, Zhejiang University, 2026",
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
    "2026 年浙江大学生命科学学院十佳大学生",
    "2025 年浙江大学“求是飞鹰计划”",
    "2024 年国家奖学金；浙江大学优秀研究生",
    "2021 年浙江大学优秀本科毕业生",
    "2019 年代表浙江大学获 iGEM 国际金牌（MIT）",
    "2019 年省政府南都一等奖学金；2018–2019 学年浙江大学一等奖学金",
  ],
};

const HOBBIES = {
  en: ["Music", "Hiking", "Reading", "Travel"],
  zh: ["音乐", "徒步", "阅读", "旅行"],
};

