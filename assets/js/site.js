/* Single source of truth for all three languages.
   Add content here once; every page renders from it. */

const NAV = [
  ["index.html", "nav_intro"],
  ["research.html", "nav_research"],
  ["publications.html", "nav_pubs"],
  ["experience.html", "nav_exp"],
  ["connect.html", "nav_connect"],
];

/* Paper titles and venues stay in English across all languages (academic norm).
   fig: DOI slug -> auto-mounts assets/figures/<slug>.png when present. */
const PUBS = [
  { t: "Decision-Calibrated Neural Operator Forecasting for Post-Splashdown Recovery under Partial Observability and Physics Mismatch", v: "Engineering Applications of AI", y: "under review", d: "", a: "Dapeng Zhang, Yi Zhang, Sixing Guo, Yuting Li, Kexin Xie, Yuxin Jiang", closed: true },
  { t: "Probabilistic Identification of Transient Thermal Loads on Offshore Rocket Launch Decks Using Physics-Informed Neural Networks and Conditional Flow Matching", v: "Int. Communications in Heat and Mass Transfer", y: "under review", d: "", a: "Dapeng Zhang, Yi Zhang, Sixing Guo, Yuting Li, Kexin Xie, Yuxin Jiang", closed: true },
  { t: "Research on Intelligent Monitoring of Offshore Structure Damage Through the Integration of Multimodal Sensing and Edge Computing", v: "Engineering Proceedings, 12th Int. Electronic Conference on Sensors and Applications", y: "Nov 2025", d: "10.3390/ECSA-12-26605", a: "Keqi Yang, Kefan Yang, Shengqing Zeng, Yi Zhang, Dapeng Zhang*", n: "Scopus-indexed conference" },
  { t: "From Multi-Field Coupling Behaviors to Self-Powered Monitoring: Triboelectric Nanogenerator Arrays for Deep-Sea Large-Scale Cages", v: "J. Marine Science and Engineering 13(11), 2042", y: "Oct 2025", d: "10.3390/jmse13112042", a: "Kefan Yang, Shengqing Zeng, Keqi Yang, Dapeng Zhang*, Yi Zhang", } ,
  { t: "Research on Improving the Efficiency of Aquaculture Using Self-Powered Triboelectric Nanogenerators and Microfluidic Technology", v: "5th International Online Conference on Nanomaterials (poster)", y: "Sep 2025", d: "", a: "Kefan Yang, Yi Zhang, Keqi Yang, Shengqing Zeng, Dapeng Zhang*", n: "poster presentation" },
  { t: "Challenges in Tidal Energy Commercialization and Technological Advancements for Sustainable Solutions", v: "iScience 28, 112348", y: "May 2025", d: "10.1016/j.isci.2025.112348", a: "Dapeng Zhang, Keqi Yang, Huiling Zhang, Kefan Yang, Shengqing Zeng, Kaixi Si, Yi Zhang", n: "19 citations", closed: true },
  { t: "Optimizing Deployment Processes and Control Strategies for Marine Submerged Buoy System: A Computational Approach", v: "Ocean Engineering 329, 121158", y: "Apr 2025", d: "10.1016/j.oceaneng.2025.121158", a: "Yi Zhang, Bowen Zhao, Dapeng Zhang*, Yining Zhang, Zhengjie Liang, Yifan Xie, Keqiang Zhu", closed: true },
  { t: "Dynamic Configuration Simulation of Multi-branches Towed Array System", v: "Marine Structures 103, 103819", y: "Apr 2025", d: "10.1016/j.marstruc.2025.103819", a: "Yi Zhang, Dapeng Zhang*, Yifan Xie, Yining Zhang, Zhengjie Liang, Keqiang Zhu, Shutian Zhang", closed: true },
  { t: "Study on Dynamic Characteristics and Fracture Failure of Rigid Truss Trawl System During Towing Process", v: "J. Marine Science and Engineering 13(3), 586", y: "Mar 2025", d: "10.3390/jmse13030586", a: "Dapeng Zhang, Bowen Zhao*, Yi Zhang, Keqiang Zhu, Jin Yan", } ,
  { t: "Advances in Dynamic Positioning Offshore Platform-Riser Rigid-Flexible Multi-Body Systems", v: "Chinese Journal of Applied Mechanics", y: "Nov 2024", d: "10.1176/j.issn.1000-4939.2025.02.001", a: "Dapeng Zhang, Yong Bai*, Yi Zhang, Jin Yan, Yining Zhang, Zongduo Wu", n: "In Chinese · corresponding author is an Academician of the Norwegian Academy of Technical Sciences", closed: true },
  { t: "Exploring Subsea Dynamics: A Comprehensive Review of Underwater Pipelines and Cables", v: "Physics of Fluids 36, 101301", y: "Oct 2024", d: "10.1063/5.0231898", a: "Dapeng Zhang (Supervisor), Yi Zhang, Bowen Zhao*, Yunsheng Ma, Kaixi Si", n: "47 citations · supervisor listed first; author is first student author", closed: true },
  { t: "A Comprehensive Review of an Underwater Towing Cable Array: Dynamic Characteristics During the Outspread Process", v: "J. Marine Science and Engineering 12(10), 1880", y: "Oct 2024", d: "10.3390/jmse12101880", a: "Dapeng Zhang, Yangyang Luo*, Yi Zhang, Yunsheng Ma, Keqiang Zhu, Shengqin Zeng", } ,
  { t: "Marine Equipment Siting Using Machine-Learning-Based Ocean Remote Sensing Data: Current Status and Future Prospects", v: "Sustainability 16(20), 8889", y: "Oct 2024", d: "10.3390/su16208889", a: "Dapeng Zhang, Yunsheng Ma, Huilin Zhang*, Yi Zhang", } ,
  { t: "Numerical Simulation of Hydrodynamics of Ocean-Observation-Used Remotely Operated Vehicle", v: "Frontiers in Marine Science 11, 1357144", y: "Apr 2024", d: "10.3389/fmars.2024.1357144", a: "Dapeng Zhang, Bowen Zhao*, Yi Zhang, Nan Zhou", } ,
  { t: "A Review of Artificial Intelligence-Based Optimization Applications in Traditional Active Maritime Collision Avoidance", v: "Sustainability 15(18), 13384", y: "Sep 2023", d: "10.3390/su151813384", a: "Yi Zhang, Dapeng Zhang*, Haoyu Jiang", n: "28 citations" },
  { t: "Review of Challenges and Opportunities in Turbulence Modeling: A Comparative Analysis of Data-Driven Machine Learning Approaches", v: "J. Marine Science and Engineering 11(7), 1440", y: "Jul 2023", d: "10.3390/jmse11071440", a: "Yi Zhang, Dapeng Zhang*, Haoyu Jiang", n: "96 citations" },
  { t: "A Review of Offshore Wind and Wave Installations in Some Areas with an Eye towards Generating Economic Benefits and Offering Commercial Inspiration", v: "Sustainability 15(10), 8429", y: "May 2023", d: "10.3390/su15108429", a: "Yi Zhang, Dapeng Zhang*, Haoyu Jiang", n: "22 citations" },
  { t: "Influence of Different Static Equilibrium Calculation Methods on the Dynamic Response of Marine Cables during the Releasing Process: Review and a Case Study", v: "J. Marine Science and Engineering 11(4), 764", y: "Mar 2023", d: "10.3390/jmse11040764", a: "Dapeng Zhang, Bowen Zhao*, Jiyuan Sun, Yi Zhang, Keqiang Zhu, Haoyu Jiang", } ,
];

const I18N = {
  en: {
    nav_intro: "Intro", nav_research: "Research", nav_pubs: "Publications", nav_exp: "Experience", nav_connect: "Contact",
    h1: "Yi Zhang",
    affil: "MSc in Smart Manufacturing, HKUST(GZ) · <a href='https://pairslab.github.io/'>PAIRS Lab</a>, Prof. Fangqiang Ding · Shenzhen, China",
    about_h: "About",
    about_p1: "<p class='lead'>I work on how faithfully simulated scenes transfer to real robots: visual fidelity, geometric consistency, and <b>physical fidelity</b> of contact-rich manipulation — and which of them a robot policy actually depends on.</p>",
    about_p2: "<p>Before robotics I spent four years in computational ocean engineering at Guangdong Ocean University (<a href='https://pairslab.github.io/'>PAIRS Lab</a> is my present group; POE Lab, Prof. Dapeng Zhang, 2022–2026 was my previous one): CFD, FEM, lumped-mass cable dynamics, neural operators, and PINNs — the toolkit most real2sim pipelines are missing.</p>",
    edu_h: "Education",
    e1_t: "The Hong Kong University of Science and Technology (Guangzhou)",
    e1_m: "MSc in Smart Manufacturing · Aug 2026 – present",
    e1_p: "<a href='https://pairslab.github.io/'>PAIRS Lab</a> (Prof. Fangqiang Ding). Real2Sim for robot learning.",
    e2_t: "Guangdong Ocean University",
    e2_m: "BEng in Naval Architecture and Ocean Engineering · Sep 2022 – Jun 2026",
    e2_p: "GPA 82.53/100. POE Lab (Prof. Dapeng Zhang).",
    awards_h: "Awards",
    awards: [
      "First-Prize University Scholarship, Guangdong Ocean University (2023)",
      "Second-Prize University Scholarship, Guangdong Ocean University (2025)",
      "National Second Prize, 13th China Marine Vehicle Design and Manufacturing Contest (2024)",
      "First Prize (South China Region), 13th China Marine Vehicle Design and Manufacturing Contest (2024)",
      "Third Prize, APMCM Asia and Pacific Mathematical Contest in Modeling (2025)",
      "Model Student of Excellence (三好学生标兵), Guangdong Ocean University (2023)",
      "Best Student in Scientific Research, Ship and Maritime College (2024, 2026)",
    ],
    intro_cta: "<p>My current work is on the <a href='research.html'>Research</a> page; the full publication list is <a href='publications.html'>here</a>.</p>",

    research_title: "Research",
    research_sub: "Real2Sim for robot learning",
    r_lead: "<p class='lead'>Robot policies are increasingly trained and evaluated in simulation. The open question I work on is not how to make simulation look better, but <b>which kinds of fidelity actually change a policy's behaviour</b>, and how to measure that difference rather than assert it.</p>",
    r1_t: "1 · Real2Sim scene fidelity for robot training and evaluation",
    r1_role: "Current focus · <a href='https://pairslab.github.io/'>PAIRS Lab</a>, HKUST(GZ) · 2025–",
    r1_b1: "<p>High-fidelity simulated scenes are expensive to build, yet there is little evidence about what a policy actually consumes from them. Reconstruction pipelines optimise photometric and geometric quality; downstream robot learning is assumed to benefit. That assumption is rarely tested by ablating the axes independently.</p>",
    r1_b2: "<p>I separate three axes — <b>visual fidelity</b>, <b>geometric consistency</b>, and <b>physics consistency</b> — and study how each affects policy training and evaluation outcomes. Treating them as independent variables is what makes the question answerable: if visual and physical fidelity are near-orthogonal, then a large part of the current real2sim effort is aimed at the wrong axis.</p>",
    r1_b3: "<p>My contribution is on the physics side. Most real2sim work stops at a mesh in a scene; I can specify contact parameters, read a solver's assumptions, and tell whether a simulated force response is physically credible or merely plausible-looking. Defining fidelity metrics that are grounded in mechanics rather than in image similarity is where I expect to add value.</p>",
    r1_fig: "Figure placeholder — fidelity-axis diagram or side-by-side rollout comparison",
    r1_fig_hint: "Drop an image at <code>assets/figures/real2sim-fidelity.png</code> and it will replace this box automatically.",
    r2_t: "2 · Tactile Real2Sim",
    r2_role: "<a href='https://pairslab.github.io/'>PAIRS Lab</a>, HKUST(GZ)",
    r2_b1: "<p>Contact-rich manipulation is exactly where visual fidelity stops being sufficient. A policy that grasps, inserts, or pushes is regulated by contact forces that a camera either does not see or sees late.</p>",
    r2_b2: "<p>The direction is to reconstruct real visual–tactile interaction into simulatable environments (Tactile SimFoundry), so that recorded contact behaviour becomes something a policy can be trained and evaluated against rather than a log of one-off episodes.</p>",
    r2_b3: "<p>This is also where my previous work transfers most directly: fluid–structure interaction and multiphysics coupling are, mathematically, the same family of problems as deformable contact — and far less crowded with people who have actually solved them.</p>",
    r2_fig: "Figure placeholder — real-to-sim tactile reconstruction pipeline",
    r2_fig_hint: "Drop an image at <code>assets/figures/tactile-real2sim.png</code>.",
    r3_t: "3 · Foundation: physics-informed learning for marine systems",
    r3_role: "POE Lab, Guangdong Ocean University · 2022–2026",
    r3_b1: "<p>Four years of forward and inverse problems in ocean engineering: cable and riser dynamics by lumped-mass methods, hydrodynamic loading by CFD, structural response by FEM, and — most relevant now — surrogate models for systems too expensive to simulate repeatedly.</p>",
    r3_b2: "<p>Concretely: neural-operator forecasting of splashdown wave fields under partial observability and physics mismatch, and probabilistic inversion of transient thermal loads from sparse sensor data using a physics-informed surrogate with conditional flow matching. Both are, in shape, the real2sim problem: <b>given incomplete and mismatched observations, how much can you trust the simulation?</b></p>",
    r3_b3: "<p>The publication record for this period is on the <a href='publications.html'>Publications</a> page.</p>",
    r3_fig: "Figure placeholder — neural operator / surrogate forecasting result",
    r3_fig_hint: "Drop an image at <code>assets/figures/neural-operator.png</code>.",

    pubs_title: "Publications",
    pubs_sub: "18 entries · 16 published (incl. 1 conference poster) · 2 under review · 303 citations, h-index 9 (Google Scholar)",
    pubs_note: "<p>Titles and venues are kept in English in all language versions, following academic convention. Figures are shown only where the published version is open access (CC BY) or where I supply the original artwork; closed-access Elsevier and AIP papers are listed without figures.</p>",
    fig_missing: "Figure not available",
    fig_license: "Figure reproduced from the published article (CC BY 4.0).",
    fig_own: "Figure supplied by the author.",
    doi_label: "DOI",

    exp_title: "Experience",
    exp_sub: "Research groups and industry placement",
    x1_t: "PAIRS Lab · The Hong Kong University of Science and Technology (Guangzhou)",
    x1_role: "Research assistant, Prof. Fangqiang Ding · Sep 2025 – present",
    x1_b: [
      "<b>Real2Sim scene fidelity evaluation.</b> What do robot training and evaluation pipelines actually require from high-fidelity simulated scenes? Separating visual fidelity, geometric consistency and physics consistency, and testing how each affects policy performance.",
      "<b>Tactile Real2Sim / Tactile SimFoundry.</b> Reconstructing real visual–tactile interaction data into simulatable environments for contact-rich robot manipulation, used for both policy training and evaluation.",
    ],
    x2_t: "POE Lab (Poetic Ocean Engineering Team) · Guangdong Ocean University",
    x2_role: "Undergraduate researcher, Prof. Dapeng Zhang · Oct 2022 – Jun 2026",
    x2_b: [
      "Dynamic response of offshore structures: hydrodynamic analysis of subsea pipelines and cables by lumped-mass method, CFD and FEM, plus data-driven and machine-learning inversion of marine-engineering forward problems and parameter identification.",
      "Digital twin architecture for surface unmanned systems: joint development of the dynamics and hydrodynamic modelling framework for an unmanned surface vessel.",
      "Marine clean energy: dynamic response and economic modelling of offshore wind and wave farms; ocean-current energy harvesting with flexible triboelectric nanogenerators (TENG) for self-powered marine systems.",
      "Smart marine aquaculture: hydrodynamic analysis of aquaculture facilities and trawl systems, and TENG-based self-powered monitoring for smart farms.",
      "Offshore rocket launch and recovery: neural networks and neural operators for complex marine system modelling, including deck thermal-effect inversion and splashdown wave-field prediction.",
    ],
    x3_t: "Shanghai Naai Laboratory Instrument Co., Ltd.",
    x3_role: "Assistant R&D Engineer · Jan 2026 – Mar 2026",
    x3_b: [
      "Hardware assembly, commissioning and baseline performance testing of new laboratory instruments, supporting engineers through build-up and functional verification.",
      "Organised R&D documentation and drafted technical documents, test records and experiment reports, standardising how development artefacts are archived.",
      "Collected and screened test data, checking accuracy and completeness of the records.",
    ],
    svc_h: "Academic service",
    svc: [
      "Peer reviewer, <i>Journal of Operational Oceanography</i> — since Apr. 2025",
      "Peer reviewer, <i>International Journal of Digital Earth</i> — since Oct. 2025",
    ],

    connect_title: "Contact",
    connect_sub: "Email is the fastest way to reach me.",
    c_email_h: "Email & phone",
    c_email_p: "<p><b>HKUST(GZ):</b> yzhang996@connect.hkust-gz.edu.cn<br><b>Secondary:</b> zhangyi19492004@163.com<br><b>Phone:</b> +86 150 1349 1906</p>",
    c_ids_h: "Identifiers & profiles",
    c_ids_p: "<p><a href='https://scholar.google.com/citations?user=YPHhw8gAAAAJ&hl=zh-CN'>Google Scholar</a><br><a href='https://orcid.org/0009-0003-0639-8082'>ORCID</a><br><a href='https://github.com/zhangyiCristino'>GitHub</a><br><a href='https://www.linkedin.com/in/yi-zhang-9376a4316/'>LinkedIn</a><br><a href='https://x.com/Marine_Yi_Zhang'>X · @Marine_Yi_Zhang</a><br><a href='https://www.researchgate.net/profile/Yi-Zhang-950'>ResearchGate</a></p>",
    c_aff_h: "Affiliation",
    c_aff_p: "<p><a href='https://pairslab.github.io/'>PAIRS Lab</a><br>The Hong Kong University of Science and Technology (Guangzhou)<br>E3(C9) 508 · Nansha, Guangzhou, China</p>",
    footer: "© 2026 Yi Zhang · 张仡",
  },

  zh: {
    nav_intro: "简介", nav_research: "研究", nav_pubs: "论文", nav_exp: "经历", nav_connect: "联系",
    h1: "Yi Zhang · 张仡",
    affil: "香港科技大学（广州）智能制造理学硕士 · <a href='https://pairslab.github.io/'>PAIRS Lab</a>，丁方强教授 · 广东深圳",
    about_h: "简介",
    about_p1: "<p class='lead'>我研究仿真场景以多大保真度迁移到真实机器人：视觉保真度、几何一致性与接触丰富操作的<b>物理保真度</b>，以及机器人策略真正依赖的到底是哪一项。</p>",
    about_p2: "<p>进入机器人领域之前，我在广东海洋大学做了四年计算海洋工程（POE Lab，张大朋教授，2022–2026）：CFD、有限元、集中质量法缆索动力学、神经算子与 PINN。这些正是大多数 real2sim 管线缺失的工具箱。</p>",
    edu_h: "教育经历",
    e1_t: "香港科技大学（广州）",
    e1_m: "智能制造理学硕士 · 2026.08 – 至今",
    e1_p: "<a href='https://pairslab.github.io/'>PAIRS Lab</a>（丁方强教授）。方向：面向机器人学习的 Real2Sim。",
    e2_t: "广东海洋大学",
    e2_m: "船舶与海洋工程工学学士 · 2022.09 – 2026.06",
    e2_p: "GPA 82.53/100。POE Lab（张大朋教授）。",
    awards_h: "获奖",
    awards: [
      "广东海洋大学一等奖学金（2023）",
      "广东海洋大学二等奖学金（2025）",
      "第13届全国海洋航行器设计与制作大赛 全国二等奖（2024）",
      "第13届全国海洋航行器设计与制作大赛 华南赛区一等奖（2024）",
      "APMCM 亚太地区大学生数学建模竞赛 三等奖（2025）",
      "广东海洋大学三好学生标兵（2023）",
      "船舶与海运学院科创之星（2024、2026）",
    ],
    intro_cta: "<p>当前的工作见<a href='research.html'>研究</a>页；完整论文列表在<a href='publications.html'>这里</a>。</p>",

    research_title: "研究",
    research_sub: "面向机器人学习的 Real2Sim",
    r_lead: "<p class='lead'>机器人策略越来越多地在仿真中训练与评测。我关心的开放问题不是怎样让仿真看起来更好，而是<b>哪一类保真度真正改变了策略的行为</b>，以及如何度量这种差别而不是宣称它。</p>",
    r1_t: "一 · 面向机器人训练与评测的 Real2Sim 场景保真度",
    r1_role: "当前主攻 · <a href='https://pairslab.github.io/'>PAIRS Lab</a>，港科大（广州）· 2025–",
    r1_b1: "<p>高保真仿真场景造价高昂，但策略究竟从中消费了什么，几乎没有证据。重建管线优化的是光度与几何质量，下游机器人学习会因此受益只是被默认假设，很少被独立消融验证。</p>",
    r1_b2: "<p>我把三条轴拆开：<b>视觉保真度</b>、<b>几何一致性</b>、<b>物理一致性</b>，分别研究它们对策略训练与评测结果的影响。把它们当独立变量，问题才变得可回答：如果视觉保真与物理保真近乎正交，那么当前大量 real2sim 努力投向的是错的轴。</p>",
    r1_b3: "<p>我的贡献在物理这一侧。多数 real2sim 工作止步于把一个网格放进场景；我能指定接触参数、读懂求解器的假设、判断仿真的力响应是物理可信还是仅仅看起来合理。定义以力学为基础、而非以图像相似度为基础的保真度指标，是我最可能创造价值的地方。</p>",
    r1_fig: "配图占位 · 保真度三轴示意 / 并排 rollout 对比",
    r1_fig_hint: "把图片放到 <code>assets/figures/real2sim-fidelity.png</code>，此框会自动被替换。",
    r2_t: "二 · 触觉 Real2Sim",
    r2_role: "<a href='https://pairslab.github.io/'>PAIRS Lab</a>，港科大（广州）",
    r2_b1: "<p>接触丰富操作正是视觉保真度不再够用的地方。抓取、插入、推动的策略由接触力调节，而相机要么看不见，要么看见得太晚。</p>",
    r2_b2: "<p>该方向是把真实的视觉–触觉交互重建为可仿真的环境（Tactile SimFoundry），使记录下来的接触行为成为策略可训练、可评测的对象，而不是一次次 episode 的日志。</p>",
    r2_b3: "<p>这也是我过去的工作迁移最直接之处：流固耦合与多物理场耦合，在数学上与可变形接触是同一族问题——而真正解过这族问题的人，在这个领域里远没那么拥挤。</p>",
    r2_fig: "配图占位 · 触觉真实到仿真重建流程",
    r2_fig_hint: "把图片放到 <code>assets/figures/tactile-real2sim.png</code>。",
    r3_t: "三 · 根基：面向海洋系统的物理信息化学习",
    r3_role: "POE Lab，广东海洋大学 · 2022–2026",
    r3_b1: "<p>四年海洋工程的正问题与反问题：集中质量法的缆索与立管动力学、CFD 水动力载荷、FEM 结构响应，以及与现在最相关的那一项——为反复仿真代价过高的系统构建代理模型。</p>",
    r3_b2: "<p>具体包括：部分可观测与物理失配条件下的溅落波场神经算子预报，以及用物理信息代理模型加条件流匹配、从稀疏传感数据反演瞬态热载荷。两者在形态上就是 real2sim 问题：<b>给定不完整且失配的观测，你在多大程度上能相信这个仿真？</b></p>",
    r3_b3: "<p>这一时期的论文成果见<a href='publications.html'>论文</a>页。</p>",
    r3_fig: "配图占位 · 神经算子 / 代理模型预报结果",
    r3_fig_hint: "把图片放到 <code>assets/figures/neural-operator.png</code>。",

    pubs_title: "论文",
    pubs_sub: "共 18 条 · 已发表 16 篇（含 1 篇会议海报）· 在投 2 篇 · Google Scholar 总被引 303，h-index 9",
    pubs_note: "<p>论文标题与期刊在三种语言版本中统一保留英文，遵循学术惯例。仅在正式版为开放获取（CC BY）或由我提供原图时配图；Elsevier 与 AIP 的闭源论文不配图。</p>",
    fig_missing: "暂无配图",
    fig_license: "图片引自已发表论文（CC BY 4.0）。",
    fig_own: "图片由作者提供。",
    doi_label: "DOI",

    exp_title: "经历",
    exp_sub: "科研团队与产业实习",
    x1_t: "PAIRS Lab · 香港科技大学（广州）",
    x1_role: "科研助理，丁方强教授 · 2025.09 – 至今",
    x1_b: [
      "<b>Real2Sim 场景保真度评估。</b>机器人训练与评测过程对高保真仿真场景的实际需求是什么？把视觉保真度、几何一致性与物理一致性拆开，分别检验它们对策略性能的影响。",
      "<b>触觉 Real2Sim / Tactile SimFoundry。</b>将真实世界视觉–触觉交互数据重建为可仿真的交互环境，用于接触丰富型机器人操作的策略训练与评测。",
    ],
    x2_t: "诗画海洋工程实验室（POE Lab） · 广东海洋大学",
    x2_role: "本科生科研，张大朋教授 · 2022.10 – 2026.06",
    x2_b: [
      "海洋结构物动力响应分析：开展海底管道与海缆水动力分析，综合采用集中质量法、计算流体力学（CFD）与有限元方法（FEM），并探索基于数据驱动与机器学习方法的海洋工程正问题反演与参数识别。",
      "水面无人系统数字孪生架构与仿真信息研究：协同开展无人艇动力学与水动力建模，参与构建面向数字孪生的动力学与仿真模型框架。",
      "海洋清洁能源技术：开展海上风电与波浪能场动力响应及经济性建模，研究基于柔性摩擦纳米发电机（TENG）的海流能采集与海洋自供能系统。",
      "智慧海洋养殖系统：开展海洋养殖设施及拖网系统水动力分析，探索利用振动能与 TENG 构建自供能智慧养殖系统。",
      "海上火箭发射与回收相关研究：探索神经网络与神经算子在复杂海洋工程系统建模中的应用，开展甲板热效应反演与火箭溅落波场预测等关键模型研究。",
    ],
    x3_t: "上海那艾实验仪器有限公司",
    x3_role: "研发工程师助理 · 2026.01 – 2026.03",
    x3_b: [
      "参与新型实验仪器的硬件装配、调试及基础性能测试，协助工程师完成设备搭建与功能验证。",
      "参与研发相关材料整理与归档，协助撰写技术文档、测试记录及实验报告，规范研发过程中的技术资料管理。",
      "负责测试过程中的实验数据采集、记录与初步整理，对测试数据进行基础核查，保障数据记录的准确性与完整性。",
    ],
    svc_h: "学术服务",
    svc: [
      "《Journal of Operational Oceanography》审稿人，2025 年 4 月起",
      "《International Journal of Digital Earth》审稿人，2025 年 10 月起",
    ],

    connect_title: "联系",
    connect_sub: "邮件是最快的联系方式。",
    c_email_h: "邮箱与电话",
    c_email_p: "<p><b>港科大（广州）：</b>yzhang996@connect.hkust-gz.edu.cn<br><b>备用：</b>zhangyi19492004@163.com<br><b>电话：</b>+86 150 1349 1906</p>",
    c_ids_h: "学术账号与主页",
    c_ids_p: "<p><a href='https://scholar.google.com/citations?user=YPHhw8gAAAAJ&hl=zh-CN'>Google Scholar</a><br><a href='https://orcid.org/0009-0003-0639-8082'>ORCID</a><br><a href='https://github.com/zhangyiCristino'>GitHub</a><br><a href='https://www.linkedin.com/in/yi-zhang-9376a4316/'>LinkedIn</a><br><a href='https://x.com/Marine_Yi_Zhang'>X · @Marine_Yi_Zhang</a><br><a href='https://www.researchgate.net/profile/Yi-Zhang-950'>ResearchGate</a></p>",
    c_aff_h: "所属机构",
    c_aff_p: "<p><a href='https://pairslab.github.io/'>PAIRS Lab</a><br>香港科技大学（广州）<br>E3(C9) 508 · 广东广州南沙</p>",
    footer: "© 2026 张仡",
  },

  "zh-tw": {
    nav_intro: "簡介", nav_research: "研究", nav_pubs: "論文", nav_exp: "經歷", nav_connect: "聯絡",
    h1: "Yi Zhang · 張仡",
    affil: "香港科技大學（廣州）智慧製造理學碩士 · <a href='https://pairslab.github.io/'>PAIRS Lab</a>，丁方強教授 · 廣東深圳",
    about_h: "簡介",
    about_p1: "<p class='lead'>我研究模擬場景以多大保真度遷移到真實機器人：視覺保真度、幾何一致性與接觸豐富操作的<b>物理保真度</b>，以及機器人策略真正依賴的到底是哪一項。</p>",
    about_p2: "<p>進入機器人領域之前，我在廣東海洋大學做了四年計算海洋工程（POE Lab，張大朋教授，2022–2026）：CFD、有限元素法、集中質量法纜索動力學、神經算子與 PINN。這些正是大多數 real2sim 管線缺失的工具箱。</p>",
    edu_h: "教育經歷",
    e1_t: "香港科技大學（廣州）",
    e1_m: "智慧製造理學碩士 · 2026.08 – 至今",
    e1_p: "<a href='https://pairslab.github.io/'>PAIRS Lab</a>（丁方強教授）。方向：面向機器人學習的 Real2Sim。",
    e2_t: "廣東海洋大學",
    e2_m: "船舶與海洋工程工學學士 · 2022.09 – 2026.06",
    e2_p: "GPA 82.53/100。POE Lab（張大朋教授）。",
    awards_h: "獲獎",
    awards: [
      "廣東海洋大學一等獎學金（2023）",
      "廣東海洋大學二等獎學金（2025）",
      "第13屆全國海洋航行器設計與製作大賽 全國二等獎（2024）",
      "第13屆全國海洋航行器設計與製作大賽 華南賽區一等獎（2024）",
      "APMCM 亞太地區大學生數學建模競賽 三等獎（2025）",
      "廣東海洋大學三好學生標兵（2023）",
      "船舶與海運學院科創之星（2024、2026）",
    ],
    intro_cta: "<p>当前的工作見<a href='research.html'>研究</a>頁；完整論文清單在<a href='publications.html'>這裡</a>。</p>",

    research_title: "研究",
    research_sub: "面向機器人學習的 Real2Sim",
    r_lead: "<p class='lead'>機器人策略越來越多地在模擬中訓練與評測。我關心的開放問題不是怎樣讓模擬看起來更好，而是<b>哪一類保真度真正改變了策略的行為</b>，以及如何度量這種差別而不是宣稱它。</p>",
    r1_t: "一 · 面向機器人訓練與評測的 Real2Sim 場景保真度",
    r1_role: "當前主攻 · <a href='https://pairslab.github.io/'>PAIRS Lab</a>，港科大（廣州）· 2025–",
    r1_b1: "<p>高保真模擬場景造價高昂，但策略究竟從中消費了什麼，幾乎沒有證據。重建管線最佳化的是光度與幾何品質，下游機器人學習會因此受益只是被預設假設，很少被獨立消融驗證。</p>",
    r1_b2: "<p>我把三條軸拆開：<b>視覺保真度</b>、<b>幾何一致性</b>、<b>物理一致性</b>，分別研究它們對策略訓練與評測結果的影響。把它們當獨立變數，問題才變得可回答：如果視覺保真與物理保真近乎正交，那麼當前大量 real2sim 努力投向的是錯的軸。</p>",
    r1_b3: "<p>我的貢獻在物理這一側。多數 real2sim 工作止步於把一個網格放進場景；我能指定接觸參數、讀懂求解器的假設、判斷模擬的力響應是物理可信還是僅是看起來合理。定義以力學為基礎、而非以影像相似度為基礎的保真度指標，是我最可能創造價值的地方。</p>",
    r1_fig: "配圖佔位 · 保真度三軸示意 / 並排 rollout 對比",
    r1_fig_hint: "把圖片放到 <code>assets/figures/real2sim-fidelity.png</code>，此框會自動被取代。",
    r2_t: "二 · 觸覺 Real2Sim",
    r2_role: "<a href='https://pairslab.github.io/'>PAIRS Lab</a>，港科大（廣州）",
    r2_b1: "<p>接觸豐富操作正是視覺保真度不再夠用的地方。抓取、插入、推動的策略由接觸力調節，而相機要么看不見，要么看見得太晚。</p>",
    r2_b2: "<p>該方向是把真實的視覺–觸覺互動重建為可模擬的環境（Tactile SimFoundry），使記錄下來的接觸行為成為策略可訓練、可評測的對象，而不是一次次 episode 的日誌。</p>",
    r2_b3: "<p>這也是我過去的工作遷移最直接之處：流固耦合與多物理場耦合，在數學上與可變形接觸是同一族問題——而真正解過這族問題的人，在這個領域裡遠沒那麼擁擠。</p>",
    r2_fig: "配圖佔位 · 觸覺真實到模擬重建流程",
    r2_fig_hint: "把圖片放到 <code>assets/figures/tactile-real2sim.png</code>。",
    r3_t: "三 · 根基：面向海洋系統的物理信息化學習",
    r3_role: "POE Lab，廣東海洋大學 · 2022–2026",
    r3_b1: "<p>四年海洋工程的正問題與反問題：集中質量法的纜索與立管動力學、CFD 水動力載荷、FEM 結構響應，以及與現在最相關的那一項——為反覆模擬代價過高的系統建構代理模型。</p>",
    r3_b2: "<p>具體包括：部分可觀測與物理失配條件下的濺落波場神經算子預報，以及用物理資訊代理模型加條件流匹配、從稀疏感測資料反演瞬態熱載荷。兩者在外形上就是 real2sim 問題：<b>給定不完整且失配的觀測，你在多大程度上能相信這個模擬？</b></p>",
    r3_b3: "<p>這一時期的論文成果見<a href='publications.html'>論文</a>頁。</p>",
    r3_fig: "配圖佔位 · 神經算子 / 代理模型預報結果",
    r3_fig_hint: "把圖片放到 <code>assets/figures/neural-operator.png</code>。",

    pubs_title: "論文",
    pubs_sub: "共 18 條 · 已發表 16 篇（含 1 篇會議海報）· 在投 2 篇 · Google Scholar 總被引 303，h-index 9",
    pubs_note: "<p>論文標題與期刊在三種語言版本中統一保留英文，遵循學術慣例。僅在正式版為開放獲取（CC BY）或由我提供原圖時配圖；Elsevier 與 AIP 的封閉式論文不配圖。</p>",
    fig_missing: "暫無配圖",
    fig_license: "圖片引自已發表論文（CC BY 4.0）。",
    fig_own: "圖片由作者提供。",
    doi_label: "DOI",

    exp_title: "經歷",
    exp_sub: "科研團隊與產業實習",
    x1_t: "PAIRS Lab · 香港科技大學（廣州）",
    x1_role: "科研助理，丁方強教授 · 2025.09 – 至今",
    x1_b: [
      "<b>Real2Sim 場景保真度評估。</b>機器人訓練與評測過程對高保真模擬場景的實際需求是什麼？把視覺保真度、幾何一致性與物理一致性拆開，分別檢驗它們對策略性能的影響。",
      "<b>觸覺 Real2Sim / Tactile SimFoundry。</b>將真實世界視覺–觸覺互動資料重建為可模擬的互動環境，用於接觸豐富型機器人操作的策略訓練與評測。",
    ],
    x2_t: "詩畫海洋工程實驗室（POE Lab） · 廣東海洋大學",
    x2_role: "本科生科研，張大朋教授 · 2022.10 – 2026.06",
    x2_b: [
      "海洋結構物動力響應分析：開展海底管道與海纜水動力分析，綜合採用集中質量法、計算流體力學（CFD）與有限元素法，並探索基於資料驅動與機器學習方法的海洋工程正問題反演與參數辨識。",
      "水面無人系統數位孿生架構與模擬資訊研究：協同開展無人艇動力學與水動力建模，參與建構面向數位孿生的動力學與模擬模型框架。",
      "海洋清潔能源技術：開展海上風電與波浪能場動力響應及經濟性建模，研究基於柔性摩擦奈米發電機（TENG）的海流能蒐集與海洋自供能系統。",
      "智慧海洋養殖系統：開展海洋養殖設施及拖網系統水動力分析，探索利用振動能與 TENG 建構自供能智慧養殖系統。",
      "海上火箭發射與回收相關研究：探索神經網路與神經算子在複雜海洋工程系統建模中的應用，開展甲板熱效應反演與火箭濺落波場預測等關鍵模型研究。",
    ],
    x3_t: "上海那艾實驗儀器有限公司",
    x3_role: "研發工程師助理 · 2026.01 – 2026.03",
    x3_b: [
      "參與新型實驗儀器的硬體裝配、調試及基礎性能測試，協助工程師完成設備搭建與功能驗證。",
      "參與研發相關材料整理與歸檔，協助撰寫技術文件、測試記錄及實驗報告，規範研發過程中的技術資料管理。",
      "負責測試過程中的實驗資料蒐集、記錄與初步整理，對測試資料進行基礎核查，保障資料記錄的準確性與完整性。",
    ],
    svc_h: "學術服務",
    svc: [
      "《Journal of Operational Oceanography》審稿人，2025 年 4 月起",
      "《International Journal of Digital Earth》審稿人，2025 年 10 月起",
    ],

    connect_title: "聯絡",
    connect_sub: "郵件是最快的聯絡方式。",
    c_email_h: "信箱與電話",
    c_email_p: "<p><b>港科大（廣州）：</b>yzhang996@connect.hkust-gz.edu.cn<br><b>備用：</b>zhangyi19492004@163.com<br><b>電話：</b>+86 150 1349 1906</p>",
    c_ids_h: "學術帳號與主頁",
    c_ids_p: "<p><a href='https://scholar.google.com/citations?user=YPHhw8gAAAAJ&hl=zh-CN'>Google Scholar</a><br><a href='https://orcid.org/0009-0003-0639-8082'>ORCID</a><br><a href='https://github.com/zhangyiCristino'>GitHub</a><br><a href='https://www.linkedin.com/in/yi-zhang-9376a4316/'>LinkedIn</a><br><a href='https://x.com/Marine_Yi_Zhang'>X · @Marine_Yi_Zhang</a><br><a href='https://www.researchgate.net/profile/Yi-Zhang-950'>ResearchGate</a></p>",
    c_aff_h: "所屬機構",
    c_aff_p: "<p><a href='https://pairslab.github.io/'>PAIRS Lab</a><br>香港科技大學（廣州）<br>E3(C9) 508 · 廣東廣州南沙</p>",
    footer: "© 2026 張仡",
  },
};

/* ---------- shared rendering ---------- */

function slug(doi) { return doi ? doi.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "") : ""; }

function buildNav(page) {
  const d = I18N[page_lang] || I18N.en;
  return `<div class="nav-inner">
    <a class="brand" href="index.html" data-i18n="h1"></a>
    <ul>${NAV.map(([href, key]) =>
      `<li><a href="${href}" data-i18n="${key}" class="${href === page ? "current" : ""}"></a></li>`).join("")}</ul>
    <div class="lang-switch" id="langSwitch">
      <button data-lang="en">EN</button><button data-lang="zh">简</button><button data-lang="zh-tw">繁</button>
    </div></div>`;
}

let page_lang = "en";

function render(page) {
  const nav = document.getElementById("topnav");
  if (nav) nav.innerHTML = buildNav(page);
  page_lang = localStorage.getItem("lang") ||
    (navigator.language.startsWith("zh")
      ? (/(TW|Hant|HK)/i.test(navigator.language) ? "zh-tw" : "zh") : "en");
  applyLang(page);
  document.querySelectorAll("#langSwitch button").forEach(b =>
    b.addEventListener("click", () => { localStorage.setItem("lang", b.dataset.lang); applyLang(page); }));
}

function applyLang(page) {
  const lang = page_lang;
  const d = I18N[lang] || I18N.en;
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "zh-tw" ? "zh-TW" : lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
  document.querySelectorAll("#langSwitch button").forEach(b =>
    b.classList.toggle("on", b.dataset.lang === lang));

  if (typeof renderPubs === "function" && document.getElementById("pubGroups")) renderPubs(d);
  if (typeof renderAwards === "function" && document.getElementById("awardList")) renderAwards(d);
  if (typeof renderExperience === "function" && document.getElementById("expList")) renderExperience(d);
  wireFigures(d);
  wireLogos();
}

/* Experience page: research groups, industry placement, academic service. */
function renderExperience(d) {
  const job = (title, role, bullets) => `
    <div class="research-block">
      <h3>${title}</h3>
      <p class="role">${role}</p>
      <ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    </div>`;
  document.getElementById("expList").innerHTML =
    job(d.x1_t, d.x1_role, d.x1_b) +
    job(d.x2_t, d.x2_role, d.x2_b) +
    job(d.x3_t, d.x3_role, d.x3_b);
  document.getElementById("svcList").innerHTML = d.svc.map(s => `<li>${s}</li>`).join("");
}

/* Each optional image is probed once per page load. Language switches reuse the
   verdict instead of re-requesting a file that may not exist. */
const imgProbe = new Map();

function probeImage(src) {
  if (!imgProbe.has(src)) {
    imgProbe.set(src, new Promise(resolve => {
      const p = new Image();
      p.onload = () => resolve(true);
      p.onerror = () => resolve(false);
      p.src = src;
    }));
  }
  return imgProbe.get(src);
}

/* Institution logos auto-mount from assets/logos/<key>.png when supplied. */
function wireLogos() {
  document.querySelectorAll("img[data-logo]").forEach(img => {
    const src = `assets/logos/${img.dataset.logo}.png`;
    probeImage(src).then(ok => {
      if (ok) { img.src = src; img.style.display = "block"; }
    });
  });
}

/* Publications: titles/venues stay English; only grouping labels localize. */
function pubEntry(d, p) {
  const s = slug(p.d);
  const authors = p.a.replace(/Yi Zhang/g, "<em>Yi Zhang</em>");
  const doi = p.d
    ? `<div class="note"><a href="https://doi.org/${p.d}">${d.doi_label}: ${p.d}</a></div>` : "";
  const fig = (!p.closed && s)
    ? `<div class="figure pub-fig" data-fig="${s}">
         <img class="fig-img" alt="">
         <div class="fig-ph"><b>${d.fig_missing}</b><span><code>${s}.png</code></span></div>
       </div>` : "";
  return `<div class="pub">${fig}
    <div class="title">${p.t}</div>
    <div class="venue">${p.v} · ${p.y}</div>
    <div class="authors">${authors}</div>
    ${p.n ? `<div class="note">${p.n}</div>` : ""}
    ${doi}</div>`;
}

function renderPubs(d) {
  document.getElementById("pubGroups").innerHTML = PUBS.map(p => pubEntry(d, p)).join("");
}

function renderAwards(d) {
  document.getElementById("awardList").innerHTML = d.awards.map(a => `<li>${a}</li>`).join("");
}

/* Auto-mount assets/figures/<key>.png; fall back to the placeholder box. */
function wireFigures(d) {
  document.querySelectorAll(".figure[data-fig]").forEach(box => {
    const src = `assets/figures/${box.dataset.fig}.png`;
    probeImage(src).then(ok => {
      if (!ok) { box.classList.remove("has-img"); return; }
      box.classList.add("has-img");
      let img = box.querySelector("img.fig-img");
      if (!img) {
        img = document.createElement("img");
        img.className = "fig-img"; img.alt = "";
        box.prepend(img);
      }
      if (img.getAttribute("src") !== src) img.src = src;
    });
  });
}
