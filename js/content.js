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
    "research.open": "Open page",
    "research.all": "All papers",
    "research.code": "Code & tools",
    "research.refs": "References",
    "research.more": "Keep reading",
    "pub.title": "Papers",
    "pub.sub": "Equal contribution is marked with *. Preprints link to arXiv or bioRxiv. Published papers are ordered by first-author role, then Google Scholar citations.",
    "pub.review": "Preprints",
    "pub.published": "Published",
    "pub.scholar": "Google Scholar",
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
    "research.open": "进入页面",
    "research.all": "全部论文",
    "research.code": "代码与工具",
    "research.refs": "参考文献",
    "research.more": "继续浏览",
    "pub.title": "论文",
    "pub.sub": "共同一作以 * 标注。预印本链接至 arXiv 或 bioRxiv。已发表论文按独立一作、共同一作、其他作者排序，同组内按 Google Scholar 引用从高到低。",
    "pub.review": "待发表",
    "pub.published": "已发表",
    "pub.scholar": "Google Scholar",
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
      zh: "靶向免疫调控生物大分子设计",
    },
    body: {
      en: "Antibodies, antigen presentation and screening, and RNA aptamers.",
      zh: "抗体、抗原呈递与筛选、RNA 适配体。",
    },
    sections: [
      {
        h: { en: "Background", zh: "背景" },
        figures: [
          {
            src: "photos/research/crops/immune-tcell.jpg",
            side: "right",
            caption: {
              en: "The recognition event that decides immunogenicity: a T cell receptor reading a peptide presented by an HLA molecule.",
              zh: "决定免疫原性的那一次识别：T 细胞受体读取 HLA 呈递的肽段。",
            },
          },
        ],
        paras: [
          {
            en: "Whether an immunotherapy works often comes down to a single molecular recognition event. Can a T cell receptor read the short peptide an HLA molecule presents? Does an antibody bind its epitope tightly enough? For two decades the honest way to answer such questions was experimental selection — SELEX for nucleic acid ligands{{tuerk}}{{ellington}}, phage and yeast display for antibodies. Selection is reliable, but a round takes months and covers a vanishingly small corner of sequence space.",
            zh: "免疫治疗的成败，常常取决于一次分子层面的识别：T 细胞受体能否认出 HLA 呈递的那一小段肽，抗体能否以足够高的亲和力结合表位。过去二十年，回答这类问题最可靠的方式是实验筛选——核酸配体靠 SELEX{{tuerk}}{{ellington}}，抗体靠噬菌体与酵母展示。筛选可信，但一轮动辄数月，而且只能覆盖序列空间中极小的一角。",
          },
          {
            en: "Structure prediction{{af2}} and protein language models{{esm2}} changed the priors available to this field, and peptide–HLA binding prediction has become routine{{netmhcpan}}. The step that actually determines immunogenicity — TCR recognition of the peptide–HLA complex — remains hard. Paired α/β chain data are scarce{{nettcr}}, the same peptide is recognised by receptors with little sequence similarity{{tcrdist}}, and solved TCR–pHLA complexes are rarer still. Most of my work in this direction is an attempt to work around those two constraints: too little data, and almost no structure.",
            zh: "结构预测{{af2}}与蛋白质语言模型{{esm2}}改变了这个领域可用的先验，肽–HLA 结合预测也已相当成熟{{netmhcpan}}。但真正决定免疫原性的一步——TCR 对肽–HLA 复合物的识别——依然困难：配对的 α/β 链数据稀少{{nettcr}}，同一段肽可以被序列相差很远的受体识别{{tcrdist}}，而解析出的 TCR–pHLA 复合物结构更少。我在这个方向上的工作，多半是在绕开这两个约束：数据太少，结构几乎没有。",
          },
        ],
      },
      {
        h: { en: "MultiTAP: putting structure back into TCR recognition", zh: "MultiTAP：把结构先验补回 TCR 识别" },
        figures: [
          {
            src: "photos/research/crops/immune-boltz.jpg",
            side: "left",
            caption: {
              en: "Every peptide–HLA pair in the dataset is folded with Boltz-2, turning a data problem into a structure-augmented one.",
              zh: "数据集中的每一对肽–HLA 都用 Boltz-2 折叠，把数据问题转成有结构可用的问题。",
            },
          },
          {
            src: "photos/research/crops/immune-ablation.jpg",
            side: "wide",
            caption: {
              en: "Ablation across five metrics. Adding the α chain, the full HLA sequence and the predicted structure each contributes; the structural view gives the last and most consistent gain.",
              zh: "五项指标上的消融。补上 α 链、HLA 全长与预测结构各有贡献，其中结构视角带来最后也最稳定的一段增益。",
            },
          },
        ],
        paras: [
          {
            en: "MultiTAP{{multitap}} starts from a simple move: if experimental TCR–pHLA complexes are too few, predict them. Every peptide–HLA pair in the training set is folded with Boltz-2{{boltz2}} and encoded as a residue-level graph, while ESM-2 and a TCR masked language model embed the paired CDR3αβ, the peptide and the full-length HLA sequence. Sequence and structure representations then attend to each other in both directions, and a gate decides how much each view is worth for a given example.",
            zh: "MultiTAP{{multitap}} 的出发点很直接：既然实验解析的 TCR–pHLA 复合物太少，那就把它预测出来。训练集中每一对肽–HLA 都用 Boltz-2{{boltz2}} 折叠并编码成残基级的图，同时用 ESM-2 与一个 TCR 掩码语言模型编码配对的 CDR3αβ、肽段与 HLA 全长序列。序列表征与结构表征之间做双向交叉注意力，再由一个门控单元决定：对当前这条样本，两种视角各值多少。",
          },
          {
            en: "On held-out tests MultiTAP leads seven baselines across the board (AUC 0.890, AUPR 0.723). The ablation matters more to me than the headline number: with only CDR3β and the peptide the model sits near AUC 0.84, and each added view — the α chain, the full HLA sequence, the predicted structure — moves it up. Predicted structures are not as good as crystal structures, but they are good enough to carry real signal about which contacts a receptor can actually make.",
            zh: "在独立测试集上，MultiTAP 相对七个基线方法全面领先（AUC 0.890，AUPR 0.723）。比这个数字更值得说的是消融：只用 CDR3β 与肽段时，模型停在 AUC 0.84 附近；每补上一个视角——α 链、HLA 全长、预测结构——都会往上走一段。预测结构当然比不上晶体结构，但已经足够携带真实的信息：受体到底能形成哪些接触。",
          },
        ],
      },
      {
        h: { en: "AttABseq: affinity changes without a structure", zh: "AttABseq：没有结构时的亲和力预测" },
        paras: [
          {
            en: "Antibody engineering asks the same question thousands of times: will this mutation help or hurt? Structure-based free energy methods answer it well when a complex structure exists, which for most engineering candidates it does not. AttABseq{{attabseq}} takes only sequences — an end-to-end attention network over the antigen–antibody pair — and regresses the change in binding free energy directly. Across antigen–antibody mutation benchmarks it correlates better with experiment than contemporary sequence-based methods, which makes large virtual screens possible before any structure is available. I also surveyed how deep learning is reshaping antibody optimisation more broadly{{abreview}}.",
            zh: "抗体工程反复面对同一个问题：这个突变会让亲和力变好还是变差。基于结构的自由能方法回答得不错，前提是有复合物结构——而工程中的绝大多数候选并没有。AttABseq{{attabseq}} 只用序列：以端到端的注意力网络编码抗原–抗体序列对，直接回归结合自由能的变化。在多个抗原–抗体突变基准上，它与实验值的相关性优于同期的序列方法，使得在拿到结构之前就能做大规模虚拟筛选。围绕深度学习如何改变抗体优化，我也写过一篇综述{{abreview}}。",
          },
        ],
      },
      {
        h: { en: "RNA aptamers: from selection to generation", zh: "RNA 适配体：从筛选到生成" },
        figures: [
          {
            src: "photos/research/crops/immune-aptamer.jpg",
            side: "right",
            w: 230,
            caption: {
              en: "Aptamer and gRNA scaffold design as generation tasks inside RNAGenesis.",
              zh: "在 RNAGenesis 中，适配体与 gRNA 支架设计被当作生成任务。",
            },
          },
        ],
        paras: [
          {
            en: "Aptamers are short nucleic acids that fold into a shape and bind a target — chemical antibodies, in the usual phrase. Classical SELEX enriches them from a random library, so the outcome is bounded by what the library happened to contain. In RNAGenesis{{rnagenesis}} we treat it as a generation problem instead: learn the distribution of natural RNA with a foundation model, run diffusion in its latent space, and steer sampling with a reward model toward aptamers and functional RNA scaffolds that the library never had. Selection then becomes verification rather than search.",
            zh: "适配体是能折叠成特定形状并结合靶点的短核酸，常被称作化学抗体。经典 SELEX 从随机文库中富集，结果因此被文库里恰好有什么所限定。在 RNAGenesis{{rnagenesis}} 中，我们把它换成生成问题：先用基础模型学习自然 RNA 的分布，再在其潜空间做扩散，并用奖励模型把采样引向文库里原本不存在的适配体与功能性 RNA 支架。这样一来，筛选的角色从搜索变成了验证。",
          },
        ],
      },
    ],
    code: [],
    refs: [
      {
        key: "tuerk",
        text: "C. Tuerk, L. Gold. Systematic evolution of ligands by exponential enrichment: RNA ligands to bacteriophage T4 DNA polymerase. <i>Science</i>, 1990.",
        href: "https://doi.org/10.1126/science.2200121",
      },
      {
        key: "ellington",
        text: "A. D. Ellington, J. W. Szostak. In vitro selection of RNA molecules that bind specific ligands. <i>Nature</i>, 1990.",
        href: "https://doi.org/10.1038/346818a0",
      },
      {
        key: "af2",
        text: "J. Jumper, R. Evans, A. Pritzel, et al. Highly accurate protein structure prediction with AlphaFold. <i>Nature</i>, 2021.",
        href: "https://doi.org/10.1038/s41586-021-03819-2",
      },
      {
        key: "esm2",
        text: "Z. Lin, H. Akin, R. Rao, et al. Evolutionary-scale prediction of atomic-level protein structure with a language model. <i>Science</i>, 2023.",
        href: "https://doi.org/10.1126/science.ade2574",
      },
      {
        key: "netmhcpan",
        text: "B. Reynisson, B. Alvarez, S. Paul, et al. NetMHCpan-4.1 and NetMHCIIpan-4.0: improved predictions of MHC antigen presentation. <i>Nucleic Acids Research</i>, 2020.",
        href: "https://doi.org/10.1093/nar/gkaa379",
      },
      {
        key: "nettcr",
        text: "A. Montemurro, V. Schuster, H. R. Povlsen, et al. NetTCR-2.0 enables accurate prediction of TCR–peptide binding by using paired TCRα and β sequence data. <i>Communications Biology</i>, 2021.",
        href: "https://doi.org/10.1038/s42003-021-02610-3",
      },
      {
        key: "tcrdist",
        text: "P. Dash, A. J. Fiore-Gartland, T. Hertz, et al. Quantifiable predictive features define epitope-specific T cell receptor repertoires. <i>Nature</i>, 2017.",
        href: "https://doi.org/10.1038/nature22383",
      },
      {
        key: "multitap",
        mine: true,
        text: "<b>R. Jin</b>, J. Ge, G. Zhang, Z. Deng, K. Hsieh, T. Hou, R. Zhou. A multi-modal deep learning framework with both sequence and structure for tumor antigen prediction. <i>bioRxiv</i>, 2024.",
        href: "https://www.biorxiv.org/content/10.1101/2024.11.06.622193v1",
      },
      {
        key: "boltz2",
        text: "S. Passaro, G. Corso, J. Wohlwend, et al. Boltz-2: towards accurate and efficient binding affinity prediction. <i>bioRxiv</i>, 2025.",
        href: "https://doi.org/10.1101/2025.06.14.659707",
      },
      {
        key: "attabseq",
        mine: true,
        text: "<b>R. Jin</b>, Q. Ye, J. Wang, et al., C.-Y. Hsieh, T. Hou. AttABseq: an attention-based deep learning prediction method for antigen–antibody binding affinity changes based on protein sequences. <i>Briefings in Bioinformatics</i>, 2024.",
        href: "https://doi.org/10.1093/bib/bbae304",
      },
      {
        key: "abreview",
        mine: true,
        text: "<b>R. Jin</b>, R. Zhou, D. Zhang. Recent advances in antibody optimization based on deep learning methods. <i>Journal of Zhejiang University-SCIENCE B</i>, 2025.",
        href: "https://doi.org/10.1631/jzus.B2400387",
      },
      {
        key: "rnagenesis",
        mine: true,
        text: "Z. Zhang, <b>R. Jin</b>, L. Chao, et al. RNAGenesis: a generalist foundation model for functional RNA therapeutics. <i>bioRxiv</i>, 2024.",
        href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630826v3",
      },
    ],
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
    sections: [
      {
        h: { en: "Background", zh: "背景" },
        paras: [
          {
            en: "Biology is layered — DNA, RNA, protein, cell, literature — and each layer now has its own foundation model: ESM-2 for proteins{{esm2}}, Evo at genome scale{{evo}}, RNA-FM and its successors for RNA{{rnafm}}. Representation keeps improving. But a real project is never one representation: you read papers, find data, pick a model, write code, look at the result, and decide what to do next.",
            zh: "生命科学的数据是分层的——DNA、RNA、蛋白质、细胞、文献——如今每一层都有了自己的基础模型：蛋白质有 ESM-2{{esm2}}，基因组尺度有 Evo{{evo}}，RNA 也有 RNA-FM 及其后继{{rnafm}}。表征这一步在稳步变好。但真实的课题从来不只需要一次表征：要读文献、找数据、选模型、写代码、看结果，再决定下一步做什么。",
          },
          {
            en: "That gap is what agents are for. Coscientist runs autonomous chemistry{{coscientist}}, ChemCrow wires chemistry tools into a language model{{chemcrow}}, and the AI Scientist tries to close the loop all the way to a manuscript{{aiscientist}}. My interest sits where the two lines cross. An agent that can only call generic tools never reaches the part of biology that is actually hard; it becomes useful when it can call biological foundation models, so that prediction is a step inside its reasoning rather than an attachment to it.",
            zh: "智能体要补的正是这段落差。Coscientist 能自主完成化学实验{{coscientist}}，ChemCrow 把化学工具接入语言模型{{chemcrow}}，AI Scientist 则试图一路闭环到论文{{aiscientist}}。我关心的是这两条线索的交点：只会调用通用工具的智能体，永远碰不到生物学真正困难的那部分；只有当它能调用生物基础模型，预测才会成为推理链条中的一步，而不是挂在外面的附件。",
          },
        ],
      },
      {
        h: { en: "RNAGenesis: understanding and generating RNA", zh: "RNAGenesis：理解 RNA，也生成 RNA" },
        figures: [
          {
            src: "photos/research/crops/models-radar.jpg",
            side: "right",
            caption: {
              en: "Downstream performance across RNA structure, function and engineering tasks.",
              zh: "在 RNA 结构、功能与工程三类下游任务上的表现。",
            },
          },
          {
            src: "photos/research/crops/models-wetlab.jpg",
            side: "wide",
            caption: {
              en: "From 25K generated sequences to 24 novel scaffolds tested in CRISPR-Cas9, prime editing and base editing.",
              zh: "从 2.5 万条生成序列筛到 24 条全新支架，并在 CRISPR-Cas9、先导编辑与碱基编辑中实测。",
            },
          },
        ],
        paras: [
          {
            en: "RNA is both message and machine, yet its representation learning lagged behind proteins for years. RNAGenesis{{rnagenesis}} pre-trains on RNAcentral-scale data with a hybrid design: nucleotide-level encoding, then a query transformer that compresses a sequence into a small set of latent tokens, so the same model can understand and generate. Across more than a dozen downstream tasks spanning structure, function and engineering it is state of the art or comparable on most.",
            zh: "RNA 既是信息载体，也是功能分子，可它的表征学习长期落后于蛋白质。RNAGenesis{{rnagenesis}} 在 RNAcentral 量级的数据上做预训练，用的是混合架构：先做核苷酸级编码，再用 Query Transformer 把序列压成一小组潜表示，于是同一个模型既能理解也能生成。在涵盖结构、功能与工程的十余项下游任务上，它在多数任务上达到或接近当前最好水平。",
          },
          {
            en: "Generation happens in that latent space: diffusion, steered by a reward model through gradient guidance and beam search. Candidates pass through sequence and secondary-structure filters, a cleavage classifier and AlphaFold3 co-folding{{af3}} before anything is ordered. The survivors were tested in the lab, where generated gRNA scaffolds — sequences with no natural counterpart — worked in CRISPR-Cas9, prime editing and base editing, several of them on par with scaffolds that nature and years of engineering had already optimised.",
            zh: "生成发生在这组潜表示上：做扩散，并用奖励模型以梯度引导与束搜索的方式调控采样。候选序列要依次通过序列与二级结构相似性过滤、切割效率分类器，以及 AlphaFold3 共折叠{{af3}}，才会被真正合成。留下来的进了湿实验：生成的全新 gRNA 支架在 CRISPR-Cas9、先导编辑与碱基编辑中都能工作，其中若干条与经过自然演化和多年工程优化的支架相当。",
          },
        ],
      },
      {
        h: { en: "BioLab: agents that can call biological models", zh: "BioLab：能调用生物模型的智能体" },
        figures: [
          {
            src: "photos/research/crops/models-agents.jpg",
            side: "left",
            w: 300,
            caption: {
              en: "Planner, Code, Reasoner, Critic and Report agents, with a memory agent that carries experience between tasks.",
              zh: "规划、代码、推理、评审与报告智能体，由记忆智能体在任务之间搬运经验。",
            },
          },
        ],
        paras: [
          {
            en: "BioLab{{biolab}} takes a request in the form a biologist would actually phrase it — find me a new antibody target in liver cancer — and decomposes it into planning, reasoning, execution, criticism and reporting, each handled by a dedicated agent, with a memory agent accumulating experience across tasks. What separates it from a general-purpose research agent is the tool layer: xBio-Tools exposes cross-modal biological foundation models for DNA, RNA, protein, cell and molecules alongside ordinary bioinformatics utilities. The critic agent matters as much as the planner — without something that argues back, an agent will happily report a confident, wrong conclusion.",
            zh: "BioLab{{biolab}} 接受的是生物学家真正会说出口的请求——帮我在肝癌里找一个新的抗体靶点——再把它拆成规划、推理、执行、评审与报告，由各自的智能体承担，并让记忆智能体在任务之间累积经验。它与通用科研智能体的区别在工具层：xBio-Tools 把覆盖 DNA、RNA、蛋白质、细胞与小分子的跨模态生物基础模型，与常规生物信息学工具一起暴露出来。评审智能体和规划智能体同样重要——没有一个会反驳的角色，智能体会非常自信地给出一个错误结论。",
          },
        ],
      },
      {
        h: { en: "STELLA: an agent that improves itself", zh: "STELLA：会自我进化的智能体" },
        figures: [
          {
            src: "photos/research/crops/models-stella.jpg",
            side: "wide",
            caption: {
              en: "Three closed loops where the agent's experience accumulates: NK target discovery in AML, enzyme optimisation, and training VLA models for robotic experiments.",
              zh: "三条让经验得以累积的闭环：AML 中的 NK 靶点发现、酶的计算优化与定向进化、机器人实验的 VLA 模型训练。",
            },
          },
        ],
        paras: [
          {
            en: "Most agents are as capable on their last day as on their first: templates and tools are fixed at deployment. STELLA{{stella}} is built to move that ceiling. It maintains a template library of reasoning patterns that grows as it solves problems, and a tool-creation agent that writes and tests new tools, adding them to a tool ocean it can later draw on. On biomedical benchmarks its accuracy keeps climbing as it accumulates experience. That result is why I think the interesting metric for a research agent is not accuracy on one benchmark but whether failure leaves anything reusable behind.",
            zh: "多数智能体在上线那天能力就封顶了：模板与工具是写死的。STELLA{{stella}} 想把这个上限推上去。它维护一个推理模板库，随着解题不断扩充；再由工具创建智能体编写并测试新工具，加入日后可以随时取用的工具海。在生物医学基准上，它的准确率随经验累积持续上升。正是这个结果让我认为，衡量科研智能体的关键指标不是某个基准上的一次正确率，而是失败之后有没有留下可复用的东西。",
          },
        ],
      },
    ],
    code: [
      { label: "RNAGenesis", href: "https://github.com/zaixizhang/rnagenesis" },
      { label: "STELLA", href: "https://github.com/zaixizhang/STELLA" },
      { label: "STELLA demo", href: "https://stella-agent.com/" },
    ],
    refs: [
      {
        key: "esm2",
        text: "Z. Lin, H. Akin, R. Rao, et al. Evolutionary-scale prediction of atomic-level protein structure with a language model. <i>Science</i>, 2023.",
        href: "https://doi.org/10.1126/science.ade2574",
      },
      {
        key: "evo",
        text: "E. Nguyen, M. Poli, M. G. Durrant, et al. Sequence modeling and design from molecular to genome scale with Evo. <i>Science</i>, 2024.",
        href: "https://doi.org/10.1126/science.ado9336",
      },
      {
        key: "rnafm",
        text: "J. Chen, Z. Hu, S. Sun, et al. Interpretable RNA foundation model from unannotated data for highly accurate RNA structure and function predictions. <i>arXiv:2204.00300</i>, 2022.",
        href: "https://arxiv.org/abs/2204.00300",
      },
      {
        key: "coscientist",
        text: "D. A. Boiko, R. MacKnight, B. Kline, G. Gomes. Autonomous chemical research with large language models. <i>Nature</i>, 2023.",
        href: "https://doi.org/10.1038/s41586-023-06792-0",
      },
      {
        key: "chemcrow",
        text: "A. M. Bran, S. Cox, O. Schilter, et al. Augmenting large language models with chemistry tools. <i>Nature Machine Intelligence</i>, 2024.",
        href: "https://doi.org/10.1038/s42256-024-00832-8",
      },
      {
        key: "aiscientist",
        text: "C. Lu, C. Lu, R. T. Lange, et al. The AI Scientist: towards fully automated open-ended scientific discovery. <i>arXiv:2408.06292</i>, 2024.",
        href: "https://arxiv.org/abs/2408.06292",
      },
      {
        key: "rnagenesis",
        mine: true,
        text: "Z. Zhang, <b>R. Jin</b>, L. Chao, et al. RNAGenesis: a generalist foundation model for functional RNA therapeutics. <i>bioRxiv</i>, 2024.",
        href: "https://www.biorxiv.org/content/10.1101/2024.12.30.630826v3",
      },
      {
        key: "af3",
        text: "J. Abramson, J. Adler, J. Dunger, et al. Accurate structure prediction of biomolecular interactions with AlphaFold 3. <i>Nature</i>, 2024.",
        href: "https://doi.org/10.1038/s41586-024-07487-w",
      },
      {
        key: "biolab",
        mine: true,
        text: "<b>R. Jin</b>, Y. Guo, Y. Qu, et al. BioLab: end-to-end autonomous life sciences research with a multi-agent system integrating biological foundation models. <i>bioRxiv</i>, 2025.",
        href: "https://www.biorxiv.org/content/10.1101/2025.09.03.674085v1",
      },
      {
        key: "stella",
        mine: true,
        text: "<b>R. Jin</b>, Z. Zhang, M. Wang, L. Cong. STELLA: self-evolving LLM agent for biomedical research. <i>arXiv:2507.02004</i>, 2025.",
        href: "https://arxiv.org/abs/2507.02004",
      },
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
    sections: [
      {
        h: { en: "Background", zh: "背景" },
        paras: [
          {
            en: "The same model that accelerates drug design can be run backwards. That was demonstrated plainly in 2022: invert the objective of a toxicity predictor and it proposes forty thousand candidate toxic molecules in six hours{{urbina}}. With genome-scale DNA language models such as Evo{{evo}}, the concern moves from molecules to sequences — a model that can generate functional genomic elements can generate harmful ones.",
            zh: "同一个能加速药物设计的模型，也可以被反过来用。2022 年有人直接演示过：把毒性预测模型的目标函数取反，六小时内它就提出了四万余个候选毒剂分子{{urbina}}。当 Evo{{evo}} 这类基因组尺度的 DNA 语言模型出现后，问题从分子扩展到序列——能生成功能性基因组元件的模型，同样能生成有害的元件。",
          },
          {
            en: "Policy is converging: screen and log every synthesised DNA sequence{{bakerchurch}}, and build governance for biological models before they outrun it{{governance}}. Two technical questions are still open underneath that consensus. Can we red-team biological models as systematically as we now red-team language models{{jailbroken}}{{gcg}}, and put a number on the risk? And once a design leaves the lab, can anyone tell which model produced it?",
            zh: "政策侧的共识正在形成：对所有合成 DNA 序列做筛查与留痕{{bakerchurch}}，并在生物模型跑得更远之前建立治理框架{{governance}}。但共识之下，两个技术问题仍然空着。其一，我们能不能像现在红队测试语言模型那样{{jailbroken}}{{gcg}}，系统地测试生物模型，并给风险一个可比较的数字？其二，一个设计一旦流出实验室，还有没有办法判断它出自哪个模型？",
          },
        ],
      },
      {
        h: { en: "GeneBreaker: measuring the risk", zh: "GeneBreaker：把风险量出来" },
        figures: [
          {
            src: "photos/research/crops/safety-beam.jpg",
            side: "right",
            caption: {
              en: "Generation steered by a pathogenicity predictor and sequence likelihood, then judged by alignment against human pathogen databases.",
              zh: "以致病性预测与序列似然引导生成，再用与人类致病数据库的比对来判定。",
            },
          },
        ],
        paras: [
          {
            en: "GeneBreaker{{genebreaker}} answers the first question. It formalises jailbreaking a DNA language model as a guided search: a language model drafts prompts carrying homology cues, beam search steers generation with a pathogenicity predictor and sequence likelihood as reward, and success is judged by nucleotide- and protein-level alignment against human pathogen databases rather than by anyone's impression. Run against current DNA language models across several human pathogenic virus families, the pipeline reaches sequences with high homology to known pathogenic elements — which is to say these models today carry almost no internal safety boundary. The work received the Best Paper Award and an oral at the NeurIPS 2025 BioSafeGenAI workshop, and we extended it into a systematic benchmark{{safebench}}.",
            zh: "GeneBreaker{{genebreaker}} 回答第一个问题。它把 DNA 语言模型的越狱形式化为一次有引导的搜索：先由语言模型设计带同源线索的提示，再以致病性预测器与序列似然为奖励做束搜索，最后用核酸与蛋白两个层面对人类致病数据库的比对来判定是否成功——判据是比对结果，而不是谁的主观印象。在多个人类致病病毒家族上运行这套流程，当前的 DNA 语言模型都能被引导输出与已知致病元件高度同源的序列，也就是说，它们今天几乎没有内建的安全边界。该工作获 NeurIPS 2025 BioSafeGenAI Workshop 最佳论文与口头报告，我们随后把它扩展成了更系统的评测基准{{safebench}}。",
          },
        ],
      },
      {
        h: { en: "FoldMark: tracing a design back to its model", zh: "FoldMark：让设计能被追溯" },
        figures: [
          {
            src: "photos/research/crops/safety-foldmark.jpg",
            side: "wide",
            caption: {
              en: "Two scenarios: a watermark encoded into the generative model is recovered from the structure it produces, to detect a stolen model or identify which user generated a structure.",
              zh: "两种场景：水印被编码进生成模型，再从它产出的结构中还原——既可判断模型是否被盗用，也可识别结构由哪位用户生成。",
            },
          },
        ],
        paras: [
          {
            en: "FoldMark{{foldmark}} answers the second. Watermarking text is by now well understood{{watermark}}, but a protein structure is unforgiving: perturb it and it may simply stop folding. FoldMark works in two stages — adapters encode a watermark into the latent space of a protein generative model, and an extractor recovers it from the generated structure. Designability and novelty stay essentially unchanged, and the mark survives a reasonable amount of post-processing and fine-tuning, which is what makes provenance claims possible at all.",
            zh: "FoldMark{{foldmark}} 回答第二个。文本水印如今已相当成熟{{watermark}}，但蛋白质结构不留情面：稍加扰动，它可能就折不起来了。FoldMark 分两步——用适配器把水印编码进蛋白质生成模型的隐空间，再用提取器从生成的结构中还原它。可设计性与新颖性基本不受影响，水印也能扛住一定程度的后处理与微调，这才让溯源这件事在原则上成立。",
          },
        ],
      },
      {
        h: { en: "Why work on this", zh: "为什么做这件事" },
        paras: [
          {
            en: "Publishing an attack always invites the question of whether it hands someone a manual. My view is that the capability described here already exists in open-weight models that anyone can download; what did not exist was a reproducible way to measure it. A field cannot make its models safer against a risk it has never quantified, and it cannot ask for governance while unable to say how large the problem is. Both projects are attempts to give the safety conversation numbers instead of adjectives.",
            zh: "公开一个攻击，总会被问是不是在给人递说明书。我的看法是：这里描述的能力本来就存在于任何人都能下载的开源权重里，原本不存在的，是一种可复现的度量方式。一个领域无法针对从未被量化的风险去加固模型，也无法在说不清问题有多大的时候去要求治理。这两项工作，都是想让安全讨论用上数字，而不是形容词。",
          },
        ],
      },
    ],
    code: [
      { label: "GeneBreaker", href: "https://github.com/zaixizhang/genebreaker" },
      { label: "FoldMark", href: "https://github.com/zaixizhang/FoldMark" },
    ],
    refs: [
      {
        key: "urbina",
        text: "F. Urbina, F. Lentzos, C. Invernizzi, S. Ekins. Dual use of artificial-intelligence-powered drug discovery. <i>Nature Machine Intelligence</i>, 2022.",
        href: "https://doi.org/10.1038/s42256-022-00465-9",
      },
      {
        key: "evo",
        text: "E. Nguyen, M. Poli, M. G. Durrant, et al. Sequence modeling and design from molecular to genome scale with Evo. <i>Science</i>, 2024.",
        href: "https://doi.org/10.1126/science.ado9336",
      },
      {
        key: "bakerchurch",
        text: "D. Baker, G. Church. Protein design meets biosecurity. <i>Science</i>, 2024.",
        href: "https://doi.org/10.1126/science.ado1671",
      },
      {
        key: "governance",
        text: "D. Bloomfield, J. Pannu, A. W. Zhu, et al. AI and biosecurity: the need for governance. <i>Science</i>, 2024.",
        href: "https://doi.org/10.1126/science.adq1977",
      },
      {
        key: "jailbroken",
        text: "A. Wei, N. Haghtalab, J. Steinhardt. Jailbroken: how does LLM safety training fail? <i>NeurIPS</i>, 2023.",
        href: "https://arxiv.org/abs/2307.02483",
      },
      {
        key: "gcg",
        text: "A. Zou, Z. Wang, N. Carlini, et al. Universal and transferable adversarial attacks on aligned language models. <i>arXiv:2307.15043</i>, 2023.",
        href: "https://arxiv.org/abs/2307.15043",
      },
      {
        key: "genebreaker",
        mine: true,
        text: "<b>R. Jin</b>, Z. Zhou, Z. Zhang, L. Cong, M. Wang. GeneBreaker: jailbreak attacks against DNA language models with pathogenicity guidance. <i>NeurIPS 2025 BioSafeGenAI Workshop</i> (Best Paper, Oral).",
        href: "https://arxiv.org/abs/2505.23839",
      },
      {
        key: "safebench",
        mine: true,
        text: "<b>R. Jin</b>, Z. Zhou, Z. Zhang, L. Cong, M. Wang. Systematic biosafety evaluation of DNA language models under jailbreak attacks. <i>ICLR</i>, 2026.",
      },
      {
        key: "foldmark",
        mine: true,
        text: "Z. Zhang, <b>R. Jin</b>, K. Fu, L. Cong, M. Zitnik, M. Wang. FoldMark: protecting protein generative models with watermarking. <i>arXiv:2410.20354</i>, 2024.",
        href: "https://arxiv.org/abs/2410.20354",
      },
      {
        key: "watermark",
        text: "J. Kirchenbauer, J. Geiping, Y. Wen, J. Katz, I. Miers, T. Goldstein. A watermark for large language models. <i>ICML</i>, 2023.",
        href: "https://arxiv.org/abs/2301.10226",
      },
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

