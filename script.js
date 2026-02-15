const uiText = {
  en: {
    siteTagline: "Enlightenment, Revolution, and Expansion",
    menuTimeline: "TIMELINE",
    heroTitle: "The History of\nEighteenth Century",
    heroDescription:
      "From the Glorious Revolution in 1688 to the Battle of Waterloo in 1815: revisiting this long eighteenth century.",
    backLabel: "← Back to Timeline",
    openLabel: "Open",
    prevChapter: "← Prev Event",
    nextChapter: "Next Event →",
    periodPrefix: "Event",
    regionPrefix: "Region",
    typeLabel: "Type",
    countriesLabel: "Countries",
    figuresLabel: "Key Figures",
    sourceLabel: "Source",
    wikiLabel: "Wikipedia ↗",
    detailLoading: "Loading local Wikipedia snapshot...",
    detailUnavailable: "Wikipedia snapshot not found for this event.",
    scrollHint: "Drag to browse major events →",
    siteInfo: "",
    imageDisclaimer:
      "Image notice: artworks and historical images are used for educational, non-commercial reference; rights remain with their original owners.",
    contactLabel: "Contact for issues: ",
  },
  zh: {
    siteTagline: "启蒙、革命与扩张",
    menuTimeline: "时间线",
    heroTitle: "18世纪史",
    heroDescription: "从1688年光荣革命到1815年滑铁卢战役：回望漫长的18世纪。",
    backLabel: "← 返回时间线",
    openLabel: "打开",
    prevChapter: "← 上一事件",
    nextChapter: "下一事件 →",
    periodPrefix: "事件",
    regionPrefix: "地区",
    typeLabel: "类型",
    countriesLabel: "国家",
    figuresLabel: "主要人物",
    sourceLabel: "资料来源",
    wikiLabel: "维基百科 ↗",
    detailLoading: "正在加载本地维基快照...",
    detailUnavailable: "该事件暂无可显示的中文资料。",
    scrollHint: "拖动查看18世纪重大事件 →",
    siteInfo: "",
    imageDisclaimer: "图片说明：本站图片仅用于历史教育与非商业展示，版权归原作者或原机构所有。",
    contactLabel: "联系邮箱：",
  },
};

const periods = [
  {
    id: "period-1",
    label: "CH.1",
    range: "1700s-1720s",
    rangeZh: "1700年代-1720年代",
    title: { en: "EARLY ENLIGHTENMENT", zh: "启蒙前段" },
    events: [
      {
        year: 1701,
        headline: { en: "War of the Spanish Succession", zh: "西班牙王位继承战争" },
        title: { en: "War of the Spanish Succession begins", zh: "西班牙王位继承战争爆发" },
        body: {
          en: "A dynastic crisis triggers a Europe-wide conflict that redraws strategic alliances and colonial calculations.",
          zh: "王朝继承危机引发欧洲范围冲突，重塑联盟关系与殖民战略。",
        },
        region: { en: "Europe", zh: "欧洲" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #11202a 0%, #0c1218 60%, #0a0a0d 100%)",
      },
      {
        year: 1707,
        headline: { en: "Acts of Union 1707", zh: "1707年联合法案" },
        title: { en: "Kingdom of Great Britain formed", zh: "大不列颠王国成立" },
        body: {
          en: "England and Scotland unite under one parliament, reshaping Atlantic trade and imperial administration.",
          zh: "英格兰与苏格兰合并议会，重塑大西洋贸易与帝国治理框架。",
        },
        region: { en: "Britain", zh: "英国" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #1f2d3f 0%, #111a23 58%, #090d11 100%)",
      },
      {
        year: 1713,
        headline: { en: "Treaty of Utrecht", zh: "乌得勒支和约" },
        title: { en: "War settlement redraws empires", zh: "和约重划欧洲与殖民版图" },
        body: {
          en: "The treaty ends major fronts of war and redistributes strategic colonies and dynastic claims.",
          zh: "和约结束主要战线，并重新分配关键殖民地与王位继承权。",
        },
        region: { en: "Europe", zh: "欧洲" },
        category: { en: "Diplomacy", zh: "外交" },
        tone: "linear-gradient(135deg, #262017 0%, #19140f 60%, #0b0a08 100%)",
      },
      {
        year: 1715,
        headline: { en: "Death of Louis XIV", zh: "路易十四去世" },
        title: { en: "Death of Louis XIV", zh: "路易十四去世" },
        body: {
          en: "The close of a 72-year reign opens a transition in French governance and continental influence.",
          zh: "72年统治落幕，法国政治进入过渡期，也影响欧洲权力均势。",
        },
        region: { en: "France", zh: "法国" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #27180f 0%, #18100d 65%, #0a0908 100%)",
      },
      {
        year: 1716,
        headline: { en: "Ky\u014dho Reforms", zh: "享保改革" },
        title: {
          en: "Tokugawa Yoshimune begins reforms in Edo Japan",
          zh: "德川吉宗在江户幕府推行享保改革",
        },
        body: {
          en: "Fiscal austerity, administrative reorganization, and agricultural measures marked an important phase in Tokugawa governance.",
          zh: "财政紧缩、行政整顿与农业措施成为德川统治中一次关键改革实践。",
        },
        region: { en: "Japan", zh: "日本" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #1d2832 0%, #141d25 58%, #0c1116 100%)",
      },
      {
        year: 1720,
        headline: { en: "South Sea Bubble", zh: "南海泡沫事件" },
        title: { en: "South Sea Bubble crashes", zh: "南海泡沫破裂" },
        body: {
          en: "Speculative mania collapses in London and prompts reforms in state finance and investor confidence.",
          zh: "投机狂潮在伦敦崩盘，推动国家金融制度和投资监管反思。",
        },
        region: { en: "Britain", zh: "英国" },
        category: { en: "Economy", zh: "经济" },
        tone: "linear-gradient(135deg, #342018 0%, #24150f 55%, #100b08 100%)",
      },
      {
        year: 1722,
        headline: { en: "Yongzheng Succession", zh: "雍正即位" },
        title: {
          en: "Death of Kangxi; Yongzheng consolidates rule",
          zh: "康熙去世，雍正即位并巩固统治",
        },
        body: {
          en: "The succession in Qing China reshaped court politics and set the stage for a more centralized imperial administration.",
          zh: "清廷继位带来朝政重组，并为更集中化的帝国治理奠定基础。",
        },
        region: { en: "China", zh: "中国" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #2e2317 0%, #1f180f 58%, #0f0c08 100%)",
      },
      {
        year: 1721,
        headline: { en: "Treaty of Nystad", zh: "尼斯塔德和约" },
        title: { en: "Great Northern War concludes", zh: "大北方战争结束" },
        body: {
          en: "Russia secures Baltic dominance, marking a decisive shift in northern European power.",
          zh: "俄国确立波罗的海主导地位，北欧力量格局发生关键变化。",
        },
        region: { en: "Northern Europe", zh: "北欧" },
        category: { en: "War", zh: "战争" },
        tone: "linear-gradient(135deg, #0f1d26 0%, #10161d 60%, #090b0e 100%)",
      },
    ],
  },
  {
    id: "period-2",
    label: "CH.2",
    range: "1730s-1750s",
    rangeZh: "1730年代-1750年代",
    title: { en: "KNOWLEDGE SYSTEMS", zh: "知识体系" },
    events: [
      {
        year: 1733,
        headline: { en: "Flying Shuttle", zh: "飞梭改良" },
        title: { en: "Kay accelerates textile weaving", zh: "凯伊改良飞梭" },
        body: {
          en: "The flying shuttle speeds weaving production and deepens proto-industrial changes in Europe.",
          zh: "飞梭提高织造效率，推动欧洲早期工业化进程。",
        },
        region: { en: "Britain", zh: "英国" },
        category: { en: "Technology", zh: "技术" },
        tone: "linear-gradient(135deg, #1a2d22 0%, #111f18 55%, #090f0c 100%)",
      },
      {
        year: 1735,
        headline: { en: "Systema Naturae", zh: "《自然系统》" },
        title: { en: "Systema Naturae published", zh: "《自然系统》出版" },
        body: {
          en: "Linnaeus formalizes taxonomy, enabling a shared scientific language.",
          zh: "林奈建立标准分类体系，推动欧洲科学知识的统一交流。",
        },
        region: { en: "Sweden", zh: "瑞典" },
        category: { en: "Science", zh: "科学" },
        tone: "linear-gradient(135deg, #0d3123 0%, #0f231b 55%, #090f0d 100%)",
      },
      {
        year: 1740,
        headline: { en: "War of the Austrian Succession", zh: "奥地利王位继承战争" },
        title: { en: "War of Austrian Succession begins", zh: "奥地利王位继承战争爆发" },
        body: {
          en: "A contested succession ignites conflict and raises Prussia as a major continental actor.",
          zh: "继承争议引发大战，普鲁士由此跃升为欧洲关键力量。",
        },
        region: { en: "Central Europe", zh: "中欧" },
        category: { en: "War", zh: "战争" },
        tone: "linear-gradient(135deg, #231f35 0%, #181524 58%, #0d0b13 100%)",
      },
      {
        year: 1736,
        headline: { en: "Qianlong Emperor's Accession", zh: "乾隆即位" },
        title: { en: "Qianlong Emperor begins his reign", zh: "乾隆皇帝即位" },
        body: {
          en: "The start of the Qianlong reign marked a major chapter of Qing imperial expansion, cultural patronage, and bureaucratic consolidation.",
          zh: "乾隆朝开启了清帝国扩张、文化资助与官僚整合的重要阶段。",
        },
        region: { en: "China", zh: "中国" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #2d1f17 0%, #1f160f 58%, #0f0b08 100%)",
      },
      {
        year: 1748,
        headline: { en: "The Spirit of the Laws", zh: "《论法的精神》" },
        title: { en: "Montesquieu publishes key treatise", zh: "孟德斯鸠出版《论法的精神》" },
        body: {
          en: "Separation of powers becomes a durable framework in constitutional design.",
          zh: "权力分立理论成为近代宪政制度的重要基石。",
        },
        region: { en: "France", zh: "法国" },
        category: { en: "Ideas", zh: "思想" },
        tone: "linear-gradient(135deg, #3b1330 0%, #24101d 58%, #100c0f 100%)",
      },
      {
        year: 1751,
        headline: { en: "Encyclop\u00e9die", zh: "《百科全书》" },
        title: { en: "Encyclopedie expands", zh: "《百科全书》持续扩编" },
        body: {
          en: "Diderot's project assembles technical and philosophical knowledge into a public reference network.",
          zh: "狄德罗团队将技术与哲学知识整合为新的公共知识系统。",
        },
        region: { en: "France", zh: "法国" },
        category: { en: "Ideas", zh: "思想" },
        tone: "linear-gradient(135deg, #4d1737 0%, #301225 58%, #130d12 100%)",
      },
      {
        year: 1756,
        headline: { en: "Seven Years' War", zh: "七年战争" },
        title: { en: "Seven Years' War starts", zh: "七年战争爆发" },
        body: {
          en: "A transcontinental war links European rivalries with colonies in North America and Asia.",
          zh: "跨洲战争将欧洲竞争与北美、亚洲殖民地冲突连成一体。",
        },
        region: { en: "Global", zh: "全球" },
        category: { en: "War", zh: "战争" },
        tone: "linear-gradient(135deg, #3a150f 0%, #27110f 58%, #120d0b 100%)",
      },
      {
        year: 1757,
        headline: { en: "Canton System", zh: "一口通商" },
        title: { en: "Qing court channels foreign trade through Canton", zh: "清廷将对外贸易集中于广州" },
        body: {
          en: "Restrictions on maritime trade tightened foreign commercial access, shaping the next century of Sino-Western economic interaction.",
          zh: "海贸限制强化了外商准入控制，深刻影响此后中西经贸关系的结构。",
        },
        region: { en: "China", zh: "中国" },
        category: { en: "Economy", zh: "经济" },
        tone: "linear-gradient(135deg, #243124 0%, #182219 58%, #0d130d 100%)",
      },
    ],
  },
  {
    id: "period-3",
    label: "CH.3",
    range: "1760s-1780s",
    rangeZh: "1760年代-1780年代",
    title: { en: "REVOLUTIONARY TURN", zh: "革命转折" },
    events: [
      {
        year: 1762,
        headline: { en: "The Social Contract", zh: "《社会契约论》" },
        title: { en: "Rousseau reframes sovereignty", zh: "卢梭重塑主权思想" },
        body: {
          en: "Rousseau's arguments around popular sovereignty influence revolutionary politics across Europe.",
          zh: "卢梭关于人民主权的论述深刻影响后续革命政治。",
        },
        region: { en: "France", zh: "法国" },
        category: { en: "Ideas", zh: "思想" },
        tone: "linear-gradient(135deg, #251634 0%, #1b1327 58%, #0d0a12 100%)",
      },
      {
        year: 1763,
        headline: { en: "Treaty of Paris (1763)", zh: "1763年巴黎和约" },
        title: { en: "Seven Years' War settlement", zh: "七年战争和局形成" },
        body: {
          en: "The peace settlement alters colonial ownership and sets the stage for Atlantic unrest.",
          zh: "和局重划殖民版图，也为大西洋世界的政治动荡埋下伏笔。",
        },
        region: { en: "Atlantic World", zh: "大西洋世界" },
        category: { en: "Diplomacy", zh: "外交" },
        tone: "linear-gradient(135deg, #17253a 0%, #11192a 58%, #0a0d15 100%)",
      },
      {
        year: 1772,
        headline: { en: "Great Meiwa Fire", zh: "明和大火" },
        title: { en: "Great Meiwa Fire devastates Edo", zh: "明和大火重创江户城" },
        body: {
          en: "One of Edo's major urban disasters exposed vulnerabilities in dense wooden city planning and emergency governance.",
          zh: "作为江户时期重大城市灾难之一，明和大火暴露了木构城市治理与防灾体系的脆弱性。",
        },
        region: { en: "Japan", zh: "日本" },
        category: { en: "Society", zh: "社会" },
        tone: "linear-gradient(135deg, #3a2017 0%, #27160f 58%, #120c09 100%)",
      },
      {
        year: 1776,
        headline: { en: "U.S. Declaration of Independence", zh: "《独立宣言》" },
        title: { en: "American Declaration of Independence", zh: "美国《独立宣言》" },
        body: {
          en: "Colonial resistance becomes a constitutional rupture framed in rights, liberty, and consent.",
          zh: "殖民地反抗上升为制度断裂，核心话语转向权利、自由与人民同意。",
        },
        region: { en: "North America", zh: "北美" },
        category: { en: "Revolution", zh: "革命" },
        tone: "linear-gradient(135deg, #111a31 0%, #151627 55%, #0a0b13 100%)",
      },
      {
        year: 1781,
        headline: { en: "Critique of Pure Reason", zh: "《纯粹理性批判》" },
        title: { en: "Kant's Critique of Pure Reason", zh: "康德《纯粹理性批判》" },
        body: {
          en: "Kant reframes reason and the limits of knowledge, reshaping modern philosophy.",
          zh: "康德重构理性与知识边界，奠定现代哲学关键框架。",
        },
        region: { en: "Prussia", zh: "普鲁士" },
        category: { en: "Ideas", zh: "思想" },
        tone: "linear-gradient(135deg, #1b1d36 0%, #161724 58%, #0a0b10 100%)",
      },
      {
        year: 1783,
        headline: { en: "Treaty of Paris (1783)", zh: "1783年巴黎和约" },
        title: { en: "Treaty of Paris recognizes U.S.", zh: "巴黎和约承认美国独立" },
        body: {
          en: "Britain formally recognizes U.S. independence, transforming imperial and republican trajectories.",
          zh: "英国正式承认美国独立，帝国与共和政治进入新阶段。",
        },
        region: { en: "North Atlantic", zh: "北大西洋" },
        category: { en: "Diplomacy", zh: "外交" },
        tone: "linear-gradient(135deg, #14243b 0%, #0f1a2b 58%, #090e16 100%)",
      },
      {
        year: 1787,
        headline: { en: "Kansei Reforms", zh: "宽政改革" },
        title: { en: "Matsudaira Sadanobu launches Kansei reforms", zh: "松平定信推动宽政改革" },
        body: {
          en: "Tokugawa authorities introduced moral regulation and fiscal control in response to social strain after famine and unrest.",
          zh: "在饥荒与社会动荡之后，幕府以道德规训与财政整顿作为治理回应。",
        },
        region: { en: "Japan", zh: "日本" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #1e2630 0%, #151b23 58%, #0b1015 100%)",
      },
      {
        year: 1789,
        headline: { en: "French Revolution", zh: "法国大革命" },
        title: { en: "French Revolution begins", zh: "法国大革命爆发" },
        body: {
          en: "Social and fiscal crisis erupts into revolution, reshaping citizenship, sovereignty, and state power.",
          zh: "财政与社会矛盾引发革命，重塑公民身份、主权与国家权力结构。",
        },
        region: { en: "France", zh: "法国" },
        category: { en: "Revolution", zh: "革命" },
        tone: "linear-gradient(135deg, #3a1625 0%, #27131f 58%, #110c12 100%)",
      },
    ],
  },
  {
    id: "period-4",
    label: "CH.4",
    range: "1790s",
    rangeZh: "1790年代",
    title: { en: "NEW ORDERS", zh: "新秩序" },
    events: [
      {
        year: 1791,
        headline: { en: "Haitian Revolution", zh: "海地革命" },
        title: { en: "Slave uprising in Saint-Domingue", zh: "圣多明各奴隶起义" },
        body: {
          en: "A major anti-slavery uprising begins, reshaping Atlantic ideas of revolution and freedom.",
          zh: "大规模反奴隶制起义爆发，重塑大西洋世界的革命与自由观。",
        },
        region: { en: "Caribbean", zh: "加勒比" },
        category: { en: "Revolution", zh: "革命" },
        tone: "linear-gradient(135deg, #152f2b 0%, #10211e 58%, #090f0e 100%)",
      },
      {
        year: 1792,
        headline: { en: "A Vindication of the Rights of Woman", zh: "《女权辩护》" },
        title: { en: "Wollstonecraft's milestone text", zh: "沃斯通克拉夫特里程碑著作" },
        body: {
          en: "The call for women's education and civic equality extends rights discourse beyond male citizenship.",
          zh: "关于女性教育与公民平等的主张，将启蒙权利讨论推向新阶段。",
        },
        region: { en: "Britain", zh: "英国" },
        category: { en: "Ideas", zh: "思想" },
        tone: "linear-gradient(135deg, #1f273f 0%, #1b1f31 58%, #0b0c12 100%)",
      },
      {
        year: 1793,
        headline: { en: "Reign of Terror", zh: "恐怖统治" },
        title: { en: "Reign of Terror", zh: "恐怖统治时期" },
        body: {
          en: "Emergency governance and mass executions expose the violent edge of revolutionary consolidation.",
          zh: "紧急体制与大规模处决揭示革命巩固阶段的暴力逻辑。",
        },
        region: { en: "France", zh: "法国" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #35131e 0%, #261018 58%, #0d0a0f 100%)",
      },
      {
        year: 1794,
        headline: { en: "Thermidorian Reaction", zh: "热月政变" },
        title: { en: "Thermidorian Reaction", zh: "热月政变" },
        body: {
          en: "Robespierre falls, and revolutionary politics shifts from radical emergency rule to reconfiguration.",
          zh: "罗伯斯庇尔倒台，法国革命从激进紧急统治转向新一轮权力重组。",
        },
        region: { en: "France", zh: "法国" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #2d1a30 0%, #1f1422 58%, #0d0b10 100%)",
      },
      {
        year: 1796,
        headline: { en: "Italian Campaign", zh: "意大利战役" },
        title: { en: "Napoleon gains military fame", zh: "拿破仑在意大利战场崛起" },
        body: {
          en: "French victories elevate Napoleon and foreshadow a new model of mass mobilized warfare.",
          zh: "法国连胜抬升拿破仑声望，也预示大众动员战争的新模式。",
        },
        region: { en: "Italy", zh: "意大利" },
        category: { en: "War", zh: "战争" },
        tone: "linear-gradient(135deg, #1d2734 0%, #15202b 58%, #0a0f14 100%)",
      },
      {
        year: 1799,
        headline: { en: "Coup of 18 Brumaire", zh: "雾月政变" },
        title: { en: "Napoleon seizes power", zh: "拿破仑掌权" },
        body: {
          en: "The Directory collapses, and the Consulate starts a new political order in post-revolutionary Europe.",
          zh: "督政府瓦解，执政府建立，革命后欧洲进入新的权力格局。",
        },
        region: { en: "France", zh: "法国" },
        category: { en: "Politics", zh: "政治" },
        tone: "linear-gradient(135deg, #1b2431 0%, #17202a 58%, #0b0e12 100%)",
      },
    ],
  },
];

const eventEnrichment = {
  1701: {
    wiki: "https://en.wikipedia.org/wiki/War_of_the_Spanish_Succession",
    body: {
      en: "After Charles II of Spain died without an heir, rival Bourbon and Habsburg claims sparked a major European war. Fighting spread from Iberia to the Low Countries, Italy, and overseas colonies.",
      zh: "西班牙国王卡洛斯二世无嗣去世后，波旁与哈布斯堡王朝的继承争夺引发大战，战场扩展到伊比利亚、低地、意大利及海外殖民地。",
    },
    countries: { en: ["Spain", "France", "Britain", "Dutch Republic"], zh: ["西班牙", "法国", "英国", "荷兰共和国"] },
    figures: { en: ["Philip V", "Louis XIV", "Archduke Charles", "Duke of Marlborough"], zh: ["腓力五世", "路易十四", "查理大公", "马尔伯勒公爵"] },
  },
  1707: {
    wiki: "https://en.wikipedia.org/wiki/Acts_of_Union_1707",
    body: {
      en: "The Acts of Union merged the kingdoms of England and Scotland into Great Britain under one parliament at Westminster, reshaping fiscal policy, trade, and imperial governance.",
      zh: "《1707年联合法案》将英格兰与苏格兰合并为大不列颠王国，在威斯敏斯特设统一议会，重塑财政、贸易与帝国治理。",
    },
    countries: { en: ["England", "Scotland"], zh: ["英格兰", "苏格兰"] },
    figures: { en: ["Queen Anne", "Earl of Godolphin", "Duke of Queensberry"], zh: ["安妮女王", "戈多尔芬伯爵", "昆斯伯里公爵"] },
  },
  1713: {
    wiki: "https://en.wikipedia.org/wiki/Peace_of_Utrecht",
    body: {
      en: "The Peace of Utrecht ended major fronts of the succession war. It recognized Philip V as king of Spain under conditions and transferred key European and colonial territories.",
      zh: "《乌得勒支和约》结束了王位继承战争的主要战线，承认腓力五世为西班牙国王，并重新分配欧洲与殖民地关键领地。",
    },
    countries: { en: ["Spain", "France", "Britain", "Dutch Republic"], zh: ["西班牙", "法国", "英国", "荷兰共和国"] },
    figures: { en: ["Philip V", "Louis XIV", "Queen Anne"], zh: ["腓力五世", "路易十四", "安妮女王"] },
  },
  1715: {
    wiki: "https://en.wikipedia.org/wiki/Louis_XIV",
    body: {
      en: "Louis XIV's death ended one of Europe's longest personal reigns. A regency for Louis XV began, and French policy shifted after decades of war and court centralization.",
      zh: "路易十四去世结束了欧洲最长的君主统治之一，路易十五摄政期开始，法国在长期战争与宫廷集权后进入政策调整阶段。",
    },
    countries: { en: ["France"], zh: ["法国"] },
    figures: { en: ["Louis XIV", "Louis XV", "Philippe II, Duke of Orleans"], zh: ["路易十四", "路易十五", "奥尔良公爵菲利普二世"] },
  },
  1716: {
    wiki: "https://en.wikipedia.org/wiki/Ky%C5%8Dh%C5%8D_Reforms",
    body: {
      en: "Tokugawa Yoshimune launched the Kyōhō Reforms to stabilize shogunal finances, improve rice administration, and tighten governance after recurring fiscal strain.",
      zh: "德川吉宗推行享保改革，以整顿幕府财政、米政与行政秩序，应对长期财政压力。",
    },
    countries: { en: ["Japan"], zh: ["日本"] },
    figures: { en: ["Tokugawa Yoshimune"], zh: ["德川吉宗"] },
  },
  1720: {
    wiki: "https://en.wikipedia.org/wiki/South_Sea_Bubble",
    body: {
      en: "South Sea Company shares soared and then collapsed in a speculative bubble. The crash triggered public scandal, political fallout, and reforms in British financial regulation.",
      zh: "南海公司股价在投机中暴涨后崩盘，引发舆论与政坛震动，并推动英国金融监管改革。",
    },
    countries: { en: ["Britain"], zh: ["英国"] },
    figures: { en: ["Robert Walpole", "John Blunt", "Isaac Newton"], zh: ["罗伯特·沃波尔", "约翰·布伦特", "艾萨克·牛顿"] },
  },
  1721: {
    wiki: "https://en.wikipedia.org/wiki/Treaty_of_Nystad",
    body: {
      en: "The Treaty of Nystad ended the Great Northern War between Sweden and Russia. Russia secured Baltic territories and emerged as a major northern European power.",
      zh: "《尼斯塔德和约》结束了瑞典与俄国的大北方战争，俄国获得波罗的海关键地区并跃升为北欧强权。",
    },
    countries: { en: ["Russia", "Sweden"], zh: ["俄国", "瑞典"] },
    figures: { en: ["Peter the Great", "Frederick I of Sweden"], zh: ["彼得大帝", "瑞典国王腓特烈一世"] },
  },
  1722: {
    wiki: "https://en.wikipedia.org/wiki/Yongzheng_Emperor",
    body: {
      en: "After the Kangxi Emperor's death, Yongzheng consolidated authority, strengthened fiscal and bureaucratic controls, and laid foundations for high-Qing state capacity.",
      zh: "康熙去世后，雍正皇帝强化财政与官僚控制，推动清朝高峰时期的治理基础。",
    },
    countries: { en: ["Qing China"], zh: ["清朝中国"] },
    figures: { en: ["Yongzheng Emperor", "Kangxi Emperor"], zh: ["雍正帝", "康熙帝"] },
  },
  1733: {
    wiki: "https://en.wikipedia.org/wiki/Flying_shuttle",
    body: {
      en: "John Kay's flying shuttle allowed one weaver to produce wider cloth faster, increasing pressure on yarn supply and accelerating mechanization in textile production.",
      zh: "约翰·凯伊改良飞梭使单人可更快织造宽幅布，进一步推动纺织业机械化并加剧纱线供给压力。",
    },
    countries: { en: ["Britain"], zh: ["英国"] },
    figures: { en: ["John Kay"], zh: ["约翰·凯伊"] },
  },
  1735: {
    wiki: "https://en.wikipedia.org/wiki/Systema_Naturae",
    body: {
      en: "Linnaeus published the first edition of Systema Naturae, proposing a hierarchical taxonomy that became foundational for modern biological classification.",
      zh: "林奈出版《自然系统》初版，提出层级分类框架，奠定现代生物分类学基础。",
    },
    countries: { en: ["Sweden"], zh: ["瑞典"] },
    figures: { en: ["Carl Linnaeus"], zh: ["卡尔·林奈"] },
  },
  1736: {
    wiki: "https://en.wikipedia.org/wiki/Qianlong_Emperor",
    body: {
      en: "The Qianlong Emperor began his reign and presided over territorial expansion, state patronage of scholarship, and a mature Qing administrative order.",
      zh: "乾隆皇帝开始执政，清朝在其时期实现版图扩展、学术文化资助与成熟官僚治理。",
    },
    countries: { en: ["Qing China"], zh: ["清朝中国"] },
    figures: { en: ["Qianlong Emperor", "Yongzheng Emperor"], zh: ["乾隆帝", "雍正帝"] },
  },
  1740: {
    wiki: "https://en.wikipedia.org/wiki/War_of_the_Austrian_Succession",
    body: {
      en: "Following Emperor Charles VI's death, disputes over Maria Theresa's inheritance ignited continental war. Prussia seized Silesia, reshaping European balance politics.",
      zh: "查理六世去世后，玛丽亚·特蕾莎继承争议引发大战。普鲁士夺取西里西亚，欧洲权力平衡由此改写。",
    },
    countries: { en: ["Austria", "Prussia", "France", "Britain"], zh: ["奥地利", "普鲁士", "法国", "英国"] },
    figures: { en: ["Maria Theresa", "Frederick II", "Charles VII"], zh: ["玛丽亚·特蕾莎", "腓特烈二世", "查理七世"] },
  },
  1748: {
    wiki: "https://en.wikipedia.org/wiki/The_Spirit_of_Law",
    body: {
      en: "Montesquieu's The Spirit of Law compared constitutions and argued for separation of powers, strongly influencing later constitutional design.",
      zh: "孟德斯鸠《论法的精神》比较各类政体并提出权力分立理论，对后世宪政设计影响深远。",
    },
    countries: { en: ["France"], zh: ["法国"] },
    figures: { en: ["Montesquieu"], zh: ["孟德斯鸠"] },
  },
  1751: {
    wiki: "https://en.wikipedia.org/wiki/Encyclop%C3%A9die",
    body: {
      en: "The Encyclopédie project edited by Diderot and d'Alembert systematized crafts, science, and philosophy, spreading Enlightenment knowledge through print networks.",
      zh: "狄德罗与达朗贝尔主编《百科全书》，系统整理工艺、科学与哲学知识，推动启蒙思想在印刷网络中扩散。",
    },
    countries: { en: ["France"], zh: ["法国"] },
    figures: { en: ["Denis Diderot", "Jean le Rond d'Alembert"], zh: ["德尼·狄德罗", "让·勒朗·达朗贝尔"] },
  },
  1756: {
    wiki: "https://en.wikipedia.org/wiki/Seven_Years%27_War",
    body: {
      en: "The Seven Years' War connected European rivalry with colonial theaters in North America, the Caribbean, Africa, and Asia, often described as a first global war.",
      zh: "七年战争把欧洲竞争与北美、加勒比、非洲和亚洲战场连接起来，常被称为近代最早的全球性战争之一。",
    },
    countries: { en: ["Britain", "France", "Prussia", "Austria"], zh: ["英国", "法国", "普鲁士", "奥地利"] },
    figures: { en: ["Frederick II", "William Pitt the Elder", "Maria Theresa"], zh: ["腓特烈二世", "老威廉·皮特", "玛丽亚·特蕾莎"] },
  },
  1757: {
    wiki: "https://en.wikipedia.org/wiki/Canton_System",
    body: {
      en: "Under the Canton System, Qing authorities concentrated Western maritime trade at Guangzhou through licensed merchants, limiting direct foreign access to inland markets.",
      zh: "一口通商体制将西方海贸集中于广州并由行商管理，限制外商深入内地市场。",
    },
    countries: { en: ["Qing China"], zh: ["清朝中国"] },
    figures: { en: ["Qianlong Emperor", "Cohong merchants"], zh: ["乾隆帝", "广州行商"] },
  },
  1762: {
    wiki: "https://en.wikipedia.org/wiki/The_Social_Contract",
    body: {
      en: "Rousseau's The Social Contract argued that sovereignty rests with the people and legitimate law expresses the general will, shaping revolutionary political language.",
      zh: "卢梭《社会契约论》主张主权在民、法律应体现公意，对革命时代政治语言产生关键影响。",
    },
    countries: { en: ["France", "Geneva"], zh: ["法国", "日内瓦"] },
    figures: { en: ["Jean-Jacques Rousseau"], zh: ["让-雅克·卢梭"] },
  },
  1763: {
    wiki: "https://en.wikipedia.org/wiki/Treaty_of_Paris_(1763)",
    body: {
      en: "The 1763 Treaty of Paris ended the Seven Years' War among Britain, France, and Spain. It transferred major colonial territories and altered imperial finance.",
      zh: "1763年《巴黎和约》结束英法西在七年战争中的主要冲突，重新分配关键殖民地并改变帝国财政结构。",
    },
    countries: { en: ["Britain", "France", "Spain"], zh: ["英国", "法国", "西班牙"] },
    figures: { en: ["George III", "Louis XV", "Charles III of Spain"], zh: ["乔治三世", "路易十五", "西班牙国王卡洛斯三世"] },
  },
  1772: {
    wiki: "https://en.wikipedia.org/wiki/Great_Meiwa_fire",
    body: {
      en: "The Great Meiwa Fire devastated Edo and exposed severe fire risks in high-density wooden districts, prompting renewed urban regulation and reconstruction.",
      zh: "明和大火重创江户，暴露木构高密城市的防火脆弱性，促使幕府加强城政管理与重建措施。",
    },
    countries: { en: ["Japan"], zh: ["日本"] },
    figures: { en: ["Tokugawa shogunate"], zh: ["德川幕府"] },
  },
  1776: {
    wiki: "https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence",
    body: {
      en: "Adopted on 4 July 1776, the Declaration announced the colonies' separation from Britain and framed independence through natural rights and popular consent.",
      zh: "1776年7月4日通过的《独立宣言》宣布北美殖民地脱离英国，并以自然权利与人民同意论证独立正当性。",
    },
    countries: { en: ["Thirteen Colonies", "Britain"], zh: ["北美十三州", "英国"] },
    figures: { en: ["Thomas Jefferson", "John Adams", "Benjamin Franklin"], zh: ["托马斯·杰斐逊", "约翰·亚当斯", "本杰明·富兰克林"] },
  },
  1781: {
    wiki: "https://en.wikipedia.org/wiki/Critique_of_Pure_Reason",
    body: {
      en: "Kant's Critique of Pure Reason examined how knowledge is possible, distinguishing phenomena from noumena and redefining modern epistemology.",
      zh: "康德《纯粹理性批判》讨论知识何以可能，区分现象与物自身，重塑近代认识论。",
    },
    countries: { en: ["Prussia"], zh: ["普鲁士"] },
    figures: { en: ["Immanuel Kant"], zh: ["伊曼努尔·康德"] },
  },
  1783: {
    wiki: "https://en.wikipedia.org/wiki/Treaty_of_Paris_(1783)",
    body: {
      en: "The 1783 Treaty of Paris formally ended the American Revolutionary War between Britain and the United States, recognizing U.S. independence and borders.",
      zh: "1783年《巴黎和约》正式结束英美独立战争，英国承认美国独立并确认边界。",
    },
    countries: { en: ["United States", "Britain", "France", "Spain"], zh: ["美国", "英国", "法国", "西班牙"] },
    figures: { en: ["John Jay", "Benjamin Franklin", "David Hartley"], zh: ["约翰·杰伊", "本杰明·富兰克林", "大卫·哈特利"] },
  },
  1787: {
    wiki: "https://en.wikipedia.org/wiki/Kansei_Reforms",
    body: {
      en: "The Kansei Reforms, led by Matsudaira Sadanobu, attempted fiscal restraint, social discipline, and administrative repair within late Tokugawa governance.",
      zh: "松平定信主导的宽政改革通过财政紧缩、社会规训与行政修补，回应晚期幕政危机。",
    },
    countries: { en: ["Japan"], zh: ["日本"] },
    figures: { en: ["Matsudaira Sadanobu", "Tokugawa Ienari"], zh: ["松平定信", "德川家齐"] },
  },
  1789: {
    wiki: "https://en.wikipedia.org/wiki/French_Revolution",
    body: {
      en: "Beginning in 1789, the French Revolution transformed monarchy, law, and citizenship. Events such as the Estates-General and Bastille crisis launched radical change.",
      zh: "1789年起，法国大革命重塑王权、法律与公民身份。三级会议与巴士底狱事件成为激进变革的起点。",
    },
    countries: { en: ["France"], zh: ["法国"] },
    figures: { en: ["Louis XVI", "Maximilien Robespierre", "Georges Danton"], zh: ["路易十六", "马克西米连·罗伯斯庇尔", "乔治·丹东"] },
  },
  1791: {
    wiki: "https://en.wikipedia.org/wiki/Haitian_Revolution",
    body: {
      en: "The Haitian Revolution began as a large enslaved uprising in Saint-Domingue and became the most successful anti-slavery revolution in Atlantic history.",
      zh: "海地革命起于圣多明各大规模奴隶起义，最终成为大西洋历史上最成功的反奴隶制革命。",
    },
    countries: { en: ["Saint-Domingue (Haiti)", "France"], zh: ["圣多明各（海地）", "法国"] },
    figures: { en: ["Toussaint Louverture", "Jean-Jacques Dessalines"], zh: ["杜桑·卢维杜尔", "让-雅克·德萨林"] },
  },
  1792: {
    wiki: "https://en.wikipedia.org/wiki/A_Vindication_of_the_Rights_of_Woman",
    body: {
      en: "Mary Wollstonecraft argued that women are not naturally inferior but made so by poor education, making the text foundational for modern feminist thought.",
      zh: "玛丽·沃斯通克拉夫特在《女权辩护》中指出女性并非天生低劣，而是受教育与制度限制，成为现代女性主义经典文本。",
    },
    countries: { en: ["Britain"], zh: ["英国"] },
    figures: { en: ["Mary Wollstonecraft"], zh: ["玛丽·沃斯通克拉夫特"] },
  },
  1793: {
    wiki: "https://en.wikipedia.org/wiki/Reign_of_Terror",
    body: {
      en: "During the Reign of Terror, the Committee of Public Safety used emergency courts and executions to defend the revolution amid war and internal revolt.",
      zh: "恐怖统治时期，公共安全委员会在内外危机下通过非常法庭与处决手段维持革命政权。",
    },
    countries: { en: ["France"], zh: ["法国"] },
    figures: { en: ["Maximilien Robespierre", "Louis Antoine de Saint-Just"], zh: ["马克西米连·罗伯斯庇尔", "路易-安托万·圣茹斯特"] },
  },
  1794: {
    wiki: "https://en.wikipedia.org/wiki/Thermidorian_Reaction",
    body: {
      en: "The Thermidorian Reaction overthrew Robespierre and rolled back Jacobin emergency rule, opening a new phase that led toward the Directory.",
      zh: "热月政变推翻罗伯斯庇尔并终结雅各宾非常统治，法国革命由此转入通向督政府的新阶段。",
    },
    countries: { en: ["France"], zh: ["法国"] },
    figures: { en: ["Maximilien Robespierre", "Paul Barras"], zh: ["马克西米连·罗伯斯庇尔", "保罗·巴拉斯"] },
  },
  1796: {
    wiki: "https://en.wikipedia.org/wiki/Italian_campaigns_of_the_French_Revolutionary_Wars",
    body: {
      en: "Napoleon's Italian campaigns delivered rapid French victories, undermined Austrian influence in northern Italy, and established his reputation as a transformative commander.",
      zh: "拿破仑在意大利战役中迅速取胜，削弱奥地利在北意大利影响力，并确立其军事声望。",
    },
    countries: { en: ["France", "Austria", "Italian states"], zh: ["法国", "奥地利", "意大利诸邦"] },
    figures: { en: ["Napoleon Bonaparte", "Joseph Alvinczi"], zh: ["拿破仑·波拿巴", "约瑟夫·阿尔文齐"] },
  },
  1799: {
    wiki: "https://en.wikipedia.org/wiki/Coup_of_18_Brumaire",
    body: {
      en: "The coup of 18 Brumaire overthrew the Directory and created the Consulate, placing Napoleon at the center of French executive power.",
      zh: "雾月政变推翻督政府并建立执政府，使拿破仑成为法国行政权核心。",
    },
    countries: { en: ["France"], zh: ["法国"] },
    figures: { en: ["Napoleon Bonaparte", "Emmanuel-Joseph Sieyes"], zh: ["拿破仑·波拿巴", "埃马纽埃尔-约瑟夫·西哀士"] },
  },
};

const eventStructuredDetails = {
  1701: {
    sections: {
      en: [
        { heading: "Succession Crisis", text: "The war began after Charles II of Spain died without an heir. Competing Bourbon and Habsburg claims immediately turned dynastic succession into a continental security issue." },
        { heading: "Military Theaters", text: "Campaigns unfolded in the Low Countries, Italy, the Iberian Peninsula, and overseas colonies. Coalition shifts and financial strain made the conflict one of the era's defining wars." },
        { heading: "Diplomatic Consequences", text: "The settlement process, culminating later in Utrecht and related treaties, sought to prevent the union of French and Spanish crowns and preserve a balance of power." },
      ],
      zh: [
        { heading: "继承危机", text: "战争起于西班牙国王卡洛斯二世无嗣去世。波旁与哈布斯堡两大王朝围绕王位继承展开竞争，使王室问题迅速升级为欧洲安全议题。" },
        { heading: "战争范围", text: "战场覆盖低地、意大利、伊比利亚半岛与海外殖民地，联军与财政承压并行，成为18世纪初最关键的大战之一。" },
        { heading: "外交走向", text: "后续谈判（最终导向乌得勒支体系）核心目标是阻止法西王位合并，并维持欧洲均势结构。" },
      ],
    },
  },
  1707: {
    sections: {
      en: [
        { heading: "Union Design", text: "The Acts of Union dissolved the separate English and Scottish parliaments and created a single Parliament of Great Britain at Westminster." },
        { heading: "Fiscal and Trade Integration", text: "The settlement aligned taxation, debt obligations, and customs policy, while granting Scotland access to imperial and Atlantic commercial networks." },
        { heading: "Political Legacy", text: "The union produced a durable constitutional framework but also left long-running debates over representation, sovereignty, and national identity." },
      ],
      zh: [
        { heading: "联合法案框架", text: "《1707年联合法案》取消英格兰与苏格兰分立议会，在威斯敏斯特建立统一的“大不列颠议会”。" },
        { heading: "财政与贸易整合", text: "法案协调税制、债务与关税安排，同时使苏格兰更深嵌入大西洋与帝国贸易体系。" },
        { heading: "长期影响", text: "联合法案奠定了长期宪制基础，但也持续引发关于主权、代表性与国家认同的争论。" },
      ],
    },
  },
  1713: {
    sections: {
      en: [
        { heading: "Overview", text: "The Peace of Utrecht (1713) was a set of treaties that settled major fronts of the War of the Spanish Succession." },
        { heading: "Negotiation and Signing", text: "Talks involved Britain, France, Spain, and the Dutch Republic, producing bilateral agreements rather than one single unified treaty." },
        { heading: "Main Terms", text: "Philip V remained king of Spain but renounced claims to the French throne; several strategic European and colonial territories shifted hands." },
        { heading: "Aftermath", text: "The settlement reinforced balance-of-power diplomacy and reset imperial competition in Europe and the Atlantic world." },
      ],
      zh: [
        { heading: "简介", text: "1713年的《乌得勒支和约》是一组条约，用于结束西班牙王位继承战争的主要战线。" },
        { heading: "签订过程", text: "英国、法国、西班牙与荷兰共和国等参与谈判，最终形成多份双边协定，而非单一文本。" },
        { heading: "条约内容", text: "腓力五世保留西班牙王位但放弃法国王位继承权，多处欧洲与殖民地战略领地发生转移。" },
        { heading: "后续影响", text: "和约强化了欧洲均势外交框架，也重置了欧洲与大西洋世界的帝国竞争格局。" },
      ],
    },
  },
  1763: {
    sections: {
      en: [
        { heading: "Overview", text: "The Treaty of Paris (1763) ended the Seven Years' War among Britain, France, and Spain." },
        { heading: "Negotiation and Signing", text: "Diplomatic settlements were finalized in Paris after military exhaustion and heavy wartime debt across empires." },
        { heading: "Main Terms", text: "France ceded most North American holdings east of the Mississippi to Britain; Spain ceded Florida to Britain and received Louisiana from France." },
        { heading: "Aftermath", text: "Britain emerged with vast territory but rising fiscal burdens, helping trigger new taxation conflicts in North America." },
      ],
      zh: [
        { heading: "简介", text: "1763年《巴黎和约》结束了英国、法国、西班牙在七年战争中的主要冲突。" },
        { heading: "签订过程", text: "在长期战争消耗与财政压力下，各方于巴黎完成外交谈判并签署和平安排。" },
        { heading: "条约内容", text: "法国将密西西比河以东主要北美领地让与英国；西班牙将佛罗里达让与英国，并从法国获得路易斯安那。" },
        { heading: "后续影响", text: "英国获得广阔领土但财政负担加重，随后对北美殖民地征税，间接推动独立危机升级。" },
      ],
    },
  },
  1783: {
    sections: {
      en: [
        { heading: "Overview", text: "The Treaty of Paris (1783) formally ended the American Revolutionary War between Great Britain and the United States." },
        { heading: "Negotiation and Signing", text: "American commissioners negotiated with Britain in Paris in parallel with broader settlements involving France and Spain." },
        { heading: "Main Terms", text: "Britain recognized U.S. independence, set boundaries to the Mississippi, and granted fishing rights in specified North Atlantic waters." },
        { heading: "Aftermath", text: "The treaty validated the new republic and reshaped Atlantic diplomacy, commerce, and imperial planning." },
      ],
      zh: [
        { heading: "简介", text: "1783年《巴黎和约》正式结束英国与美国之间的独立战争。" },
        { heading: "签订过程", text: "美国代表团在巴黎与英国谈判，并与法西相关和约共同构成战后外交解决方案。" },
        { heading: "条约内容", text: "英国承认美国独立，确认其领土延伸至密西西比河，并在部分北大西洋海域给予捕鱼权安排。" },
        { heading: "后续影响", text: "和约确认了新共和国的国际地位，也重塑了大西洋世界的外交与贸易秩序。" },
      ],
    },
  },
  1715: {
    sections: {
      en: [
        { heading: "End of a Reign", text: "Louis XIV's death in 1715 ended a 72-year personal reign that had centralized French monarchy and sustained prolonged warfare." },
        { heading: "Regency Politics", text: "Because Louis XV was a minor, Philippe II of Orleans governed as regent. Court factions and fiscal pressure drove policy reorientation." },
        { heading: "European Context", text: "France moved from exhaustion toward cautious diplomatic adjustment, while neighboring powers reassessed alliances after decades of Bourbon activism." },
      ],
      zh: [
        { heading: "长期统治终结", text: "1715年路易十四去世，结束了其长达72年的统治。法国在其晚期长期战争与集权治理后进入新阶段。" },
        { heading: "摄政时期", text: "因路易十五尚未成年，奥尔良公爵菲利普二世摄政。财政赤字、宫廷派系与政策纠偏成为核心议题。" },
        { heading: "欧洲格局变化", text: "法国由扩张与对抗转向相对谨慎的外交调整，欧洲各国也据此重新评估联盟关系。" },
      ],
    },
  },
  1716: {
    sections: {
      en: [
        { heading: "Reform Agenda", text: "Tokugawa Yoshimune's Kyōho Reforms targeted recurring shogunal deficits through austerity, administrative tightening, and agricultural output measures." },
        { heading: "Institutional Measures", text: "Policies included fiscal discipline, revisions to rice and tax administration, and selective openings for practical learning to improve governance." },
        { heading: "Historical Significance", text: "The reforms became a reference point for later Tokugawa reform cycles, showing both the flexibility and limits of bakufu governance." },
      ],
      zh: [
        { heading: "改革目标", text: "享保改革由德川吉宗推动，核心是应对幕府财政赤字，通过节用、整顿行政与提升农业产出来稳定政局。" },
        { heading: "制度措施", text: "主要措施包括财政纪律强化、米政与税政调整，以及对实学知识的有限吸收，以提升治理效率。" },
        { heading: "历史意义", text: "享保改革成为后续幕政改革的重要参照，既展现幕府制度的可调适性，也暴露其结构性上限。" },
      ],
    },
  },
  1720: {
    sections: {
      en: [
        { heading: "Speculative Boom", text: "South Sea Company shares rose dramatically amid debt-conversion schemes and speculative enthusiasm tied to expected trade profits." },
        { heading: "Collapse and Scandal", text: "The bubble burst in 1720, wiping out fortunes and exposing corruption links among financiers and political elites." },
        { heading: "Regulatory Response", text: "Parliamentary investigations and policy adjustments followed, while Robert Walpole's management helped stabilize British public credit." },
      ],
      zh: [
        { heading: "投机泡沫形成", text: "南海公司借国家债务转换与贸易预期推动股价飙升，市场投机情绪在短期内急剧扩张。" },
        { heading: "崩盘与丑闻", text: "1720年泡沫破裂导致大量资产蒸发，金融利益与政治权力勾连的问题被集中暴露。" },
        { heading: "治理回应", text: "议会调查与制度修补随之展开，沃波尔的危机处理在一定程度上稳定了英国公共信用体系。" },
      ],
    },
  },
  1721: {
    sections: {
      en: [
        { heading: "War Termination", text: "The Treaty of Nystad ended the Great Northern War between Sweden and Russia after two decades of military exhaustion." },
        { heading: "Territorial Transfer", text: "Russia secured key Baltic territories, while Sweden accepted strategic contraction and the decline of its earlier great-power position." },
        { heading: "Regional Reordering", text: "The treaty marked Russia's rise as a dominant northern and Baltic actor, reshaping diplomacy and commerce in northern Europe." },
      ],
      zh: [
        { heading: "战争终结", text: "《尼斯塔德和约》结束了持续多年的大北方战争，瑞典与俄国在长期消耗后转入外交解决阶段。" },
        { heading: "领土重分配", text: "俄国获得波罗的海关键地区，瑞典则接受战略收缩，传统北欧强权地位明显下滑。" },
        { heading: "地区秩序重塑", text: "和约标志俄国在北欧与波罗的海事务中的主导地位上升，区域外交与贸易格局由此改变。" },
      ],
    },
  },
  1722: {
    sections: {
      en: [
        { heading: "Imperial Transition", text: "After the Kangxi Emperor's death, Yongzheng moved quickly to consolidate authority at court and over provincial administration." },
        { heading: "Administrative Governance", text: "His reign emphasized anti-corruption drives, fiscal regularization, and tighter control of officials, strengthening Qing state capacity." },
        { heading: "Path to High Qing", text: "The institutional discipline of the Yongzheng era provided foundations for the expansive and administratively confident Qianlong period." },
      ],
      zh: [
        { heading: "皇位更替", text: "康熙去世后，雍正迅速巩固中枢权力，强化对地方行政与官僚体系的控制。" },
        { heading: "治理重点", text: "雍正时期突出整饬吏治、清理财政与加强考核，推动清廷行政效率与财政可控性提升。" },
        { heading: "对后世影响", text: "其制度整合为“高峰清朝”提供了治理基础，使乾隆时期的扩张与统合具备更稳固的行政支撑。" },
      ],
    },
  },
  1733: {
    sections: {
      en: [
        { heading: "Technical Innovation", text: "John Kay's flying shuttle increased weaving speed and cloth width capacity, reducing labor bottlenecks at the loom stage." },
        { heading: "Industrial Linkages", text: "Higher weaving productivity intensified demand for spun yarn, stimulating complementary inventions in spinning technology." },
        { heading: "Economic Effect", text: "The innovation became a key step in proto-industrial transformation, especially in Britain's textile-centered growth trajectory." },
      ],
      zh: [
        { heading: "技术突破", text: "飞梭改良显著提升织布速度与幅宽能力，缓解了织造环节的效率瓶颈。" },
        { heading: "产业联动", text: "织造效率上升反向拉动纺纱需求，间接推动后续纺纱机械发明与工艺革新。" },
        { heading: "经济影响", text: "飞梭成为英国纺织业早期工业化的重要节点，强化了技术创新与市场扩张的循环。" },
      ],
    },
  },
  1735: {
    sections: {
      en: [
        { heading: "Publication Context", text: "Systema Naturae introduced a structured taxonomy at a time when natural history collections were expanding across Europe." },
        { heading: "Classification Method", text: "Linnaeus organized species through hierarchical categories and naming conventions that could be shared across languages and institutions." },
        { heading: "Scientific Legacy", text: "The work underpinned modern biological nomenclature and helped standardize communication in botany, zoology, and medicine." },
      ],
      zh: [
        { heading: "出版背景", text: "《自然系统》问世时，欧洲自然史收藏与实地采集迅速扩张，迫切需要统一分类框架。" },
        { heading: "分类方法", text: "林奈通过层级体系与规范命名建立可共享的知识秩序，降低跨机构、跨语言交流成本。" },
        { heading: "学术遗产", text: "该书奠定了现代生物命名法基础，深刻影响植物学、动物学与医学知识组织方式。" },
      ],
    },
  },
  1736: {
    sections: {
      en: [
        { heading: "Accession Setting", text: "Qianlong's accession followed Yongzheng's consolidation, inheriting a relatively disciplined fiscal and bureaucratic apparatus." },
        { heading: "Rule Characteristics", text: "His reign combined territorial expansion, cultural patronage, and active management of multi-ethnic imperial frontiers." },
        { heading: "Long-Term Evaluation", text: "The period is often seen as both a peak of Qing imperial confidence and the beginning of structural strains that surfaced later." },
      ],
      zh: [
        { heading: "即位条件", text: "乾隆即位建立在雍正整饬后的财政与官僚体系之上，初期具备较强行政动员能力。" },
        { heading: "统治特征", text: "其在位时期兼具边疆扩张、文化工程与多民族帝国治理，形成清朝中期的政治高峰。" },
        { heading: "历史评价", text: "乾隆朝既体现帝国自信与秩序能力，也积累了财政、军事与官僚层面的后续压力。" },
      ],
    },
  },
  1740: {
    sections: {
      en: [
        { heading: "Succession Trigger", text: "The death of Charles VI and contested acceptance of the Pragmatic Sanction generated war over Maria Theresa's inheritance." },
        { heading: "Strategic Turning Points", text: "Prussia's seizure of Silesia transformed military and diplomatic calculations, while multiple powers intervened for territorial and dynastic gains." },
        { heading: "Settlement and Balance", text: "Though Maria Theresa preserved core Habsburg lands, the conflict elevated Prussia and intensified Austro-Prussian rivalry." },
      ],
      zh: [
        { heading: "导火索", text: "查理六世去世后，围绕《国事诏书》与玛丽亚·特蕾莎继承权的争议迅速演化为欧洲大战。" },
        { heading: "关键进程", text: "普鲁士夺取西里西亚改变了战局与外交筹码，多国介入使战争兼具王朝、领土与战略竞争属性。" },
        { heading: "和局影响", text: "哈布斯堡核心领地虽得以保全，但普鲁士地位显著上升，奥普对抗成为后续欧洲政治主线。" },
      ],
    },
  },
  1748: {
    sections: {
      en: [
        { heading: "Intellectual Context", text: "Montesquieu synthesized comparative studies of political systems during the Enlightenment's search for lawful government." },
        { heading: "Core Argument", text: "The Spirit of Law linked constitutional forms to social conditions and argued that separated powers were essential to prevent tyranny." },
        { heading: "Constitutional Influence", text: "Its ideas informed later constitutional debates, especially in Atlantic revolutionary and post-revolutionary institutional design." },
      ],
      zh: [
        { heading: "思想背景", text: "启蒙时期对“合法政府”的探索促使孟德斯鸠展开跨政体比较研究，形成系统政治理论。" },
        { heading: "核心论点", text: "《论法的精神》强调法律与社会条件的关联，提出权力分立可抑制专断并维持政治稳定。" },
        { heading: "制度影响", text: "该理论深刻影响后续宪政实践，尤其在大西洋革命时代的国家建构中广泛被吸收。" },
      ],
    },
  },
  1751: {
    sections: {
      en: [
        { heading: "Project Formation", text: "The Encyclopédie gathered scholars, craftsmen, and editors to reorganize practical and philosophical knowledge for a broad reading public." },
        { heading: "Editorial Strategy", text: "Entries combined technical description with conceptual argument, often embedding critiques of authority, privilege, and censorship." },
        { heading: "Public Sphere Impact", text: "Despite bans and controversy, the work expanded Enlightenment communication networks and reshaped how knowledge was curated." },
      ],
      zh: [
        { heading: "编纂工程", text: "《百科全书》集合学者、工匠与编辑者，试图将技术知识与思想知识编织为可传播的公共体系。" },
        { heading: "编辑逻辑", text: "条目既有工艺细节也有理论辨析，常在知识叙述中嵌入对权威、特权与审查的批判。" },
        { heading: "公共领域影响", text: "尽管屡遭禁令，《百科全书》仍扩大了启蒙传播网络，改变了近代知识组织与阅读方式。" },
      ],
    },
  },
  1756: {
    sections: {
      en: [
        { heading: "Global Conflict Pattern", text: "The Seven Years' War linked European dynastic rivalry with colonial warfare in North America, the Caribbean, Africa, and Asia." },
        { heading: "Alliance Realignment", text: "Diplomatic reversals and coalition shifts produced new strategic blocs, while war finance stretched all participating empires." },
        { heading: "Systemic Outcomes", text: "The conflict redrew imperial priorities, altered fiscal regimes, and set conditions for subsequent Atlantic and colonial crises." },
      ],
      zh: [
        { heading: "全球战争格局", text: "七年战争把欧洲王朝竞争与北美、加勒比、非洲、亚洲殖民战场连成整体，呈现跨洲冲突结构。" },
        { heading: "同盟与财政", text: "联盟重组与长期作战并行，各国在军事动员与债务融资中承受巨大制度压力。" },
        { heading: "系统性后果", text: "战争重排帝国优先级并改变财政治理逻辑，为后续殖民危机与革命政治埋下条件。" },
      ],
    },
  },
  1757: {
    sections: {
      en: [
        { heading: "Commercial Framework", text: "The Canton System concentrated Western maritime trade at Guangzhou under tightly supervised merchant and customs arrangements." },
        { heading: "Operational Rules", text: "Foreign merchants were restricted in movement and residence, with licensed Cohong intermediaries mediating transactions and liability." },
        { heading: "Historical Trajectory", text: "The system structured Sino-Western trade for decades and later became a major point of contention in 19th-century treaty-port transformations." },
      ],
      zh: [
        { heading: "制度框架", text: "一口通商将对西方海贸集中于广州，并通过海关与行商体系进行高度管控。" },
        { heading: "运行机制", text: "外商活动范围、居留与交易均受限制，行商在信用、税务与责任承担中扮演关键中介角色。" },
        { heading: "历史走向", text: "该体制长期塑造中西贸易结构，也在19世纪条约港体制转型中成为核心冲突议题。" },
      ],
    },
  },
  1762: {
    sections: {
      en: [
        { heading: "Text and Context", text: "Rousseau's The Social Contract appeared amid debates over legitimacy, citizenship, and authority in Enlightenment Europe." },
        { heading: "Political Theory", text: "Its central claim that sovereignty belongs to the people and law must express the general will challenged inherited hierarchies." },
        { heading: "Revolutionary Reception", text: "Though interpreted differently by later actors, the text became a foundational reference for modern democratic and republican vocabularies." },
      ],
      zh: [
        { heading: "著作背景", text: "《社会契约论》诞生于启蒙时代关于合法性、公民与权威的密集争论之中。" },
        { heading: "理论主张", text: "卢梭提出主权在民与“公意”立法原则，对传统等级秩序与君权正当性构成挑战。" },
        { heading: "历史接受", text: "该书在革命时代被多重解读，但长期成为现代民主与共和政治语言的重要来源。" },
      ],
    },
  },
  1772: {
    sections: {
      en: [
        { heading: "Urban Disaster", text: "The Great Meiwa Fire devastated large sections of Edo, one of the world's largest cities at the time." },
        { heading: "Governance Challenges", text: "Dense wooden construction, seasonal conditions, and urban congestion amplified losses and exposed emergency response limits." },
        { heading: "Administrative Response", text: "Rebuilding efforts and regulatory adjustments reflected recurring Tokugawa attempts to manage urban risk in a growing commercial society." },
      ],
      zh: [
        { heading: "城市灾难", text: "明和大火对江户造成广泛破坏。作为当时世界上人口最密集城市之一，火灾影响极为深远。" },
        { heading: "治理难题", text: "木构建筑密集、风季环境与街区拥挤放大了灾害损失，也暴露应急治理能力不足。" },
        { heading: "政务调整", text: "幕府在重建与监管中尝试修补城市风险治理机制，反映出商业化社会下的城政压力。" },
      ],
    },
  },
  1776: {
    sections: {
      en: [
        { heading: "Declaration Framework", text: "The Declaration of Independence announced the colonies' separation from Britain and justified revolution through rights-based language." },
        { heading: "Drafting and Adoption", text: "Thomas Jefferson drafted the text with committee revisions; the Continental Congress adopted it on 4 July 1776." },
        { heading: "Constitutional Legacy", text: "Its claims about equality and consent became enduring reference points in American and global political discourse, despite immediate contradictions." },
      ],
      zh: [
        { heading: "宣言框架", text: "《独立宣言》宣布北美殖民地脱离英国，以自然权利与人民同意论证革命正当性。" },
        { heading: "起草与通过", text: "杰斐逊主笔、委员会修订，大陆会议于1776年7月4日正式通过文本。" },
        { heading: "制度遗产", text: "宣言中的平等与主权观念长期塑造美国宪政与国际政治话语，尽管其现实实践充满张力。" },
      ],
    },
  },
  1781: {
    sections: {
      en: [
        { heading: "Philosophical Problem", text: "Kant asked how synthetic a priori knowledge is possible, confronting both rationalist certainty and empiricist skepticism." },
        { heading: "Critical Method", text: "By distinguishing phenomena from things-in-themselves, the Critique redefined the limits and authority of human reason." },
        { heading: "Intellectual Impact", text: "The work transformed metaphysics, epistemology, and ethics debates, shaping German idealism and modern philosophy more broadly." },
      ],
      zh: [
        { heading: "问题意识", text: "康德围绕“先天综合判断何以可能”展开论证，回应理性主义与经验主义之间的长期争论。" },
        { heading: "批判方法", text: "《纯粹理性批判》通过区分现象与物自身，重设理性的边界与合法性来源。" },
        { heading: "学术影响", text: "该书深刻改写形而上学与认识论讨论，并推动德国古典哲学及现代思想的发展。" },
      ],
    },
  },
  1787: {
    sections: {
      en: [
        { heading: "Policy Context", text: "The Kansei Reforms responded to fiscal stress and social disorder in late 18th-century Tokugawa Japan." },
        { heading: "Reform Package", text: "Measures under Matsudaira Sadanobu combined austerity, moral regulation, and tighter social controls to restore political stability." },
        { heading: "Limits and Legacy", text: "The reforms improved short-term discipline but revealed persistent structural constraints in bakufu governance and economic management." },
      ],
      zh: [
        { heading: "政策背景", text: "宽政改革针对18世纪后期幕政财政困境与社会不稳而提出，试图恢复统治秩序。" },
        { heading: "改革组合", text: "松平定信通过节用、道德规训与社会控制并行推进，强调“整饬风俗”与财政修补。" },
        { heading: "成效与局限", text: "改革短期内提升纪律与稳定，但也暴露幕府在经济治理与制度更新上的深层约束。" },
      ],
    },
  },
  1789: {
    sections: {
      en: [
        { heading: "Crisis Background", text: "Fiscal breakdown, social inequality, and political deadlock around the Estates-General pushed France into revolutionary rupture." },
        { heading: "Early Revolutionary Moment", text: "Events from the National Assembly's assertion to the Bastille crisis transformed sovereignty claims and mass political participation." },
        { heading: "Long Arc", text: "The revolution reshaped law, citizenship, and state formation in France and became a global reference point for modern politics." },
      ],
      zh: [
        { heading: "危机背景", text: "财政崩压、等级不平等与三级会议僵局共同推动法国进入革命性断裂。" },
        { heading: "革命开端", text: "国民议会的主权主张与巴士底狱事件激活了群众政治，王权合法性被根本挑战。" },
        { heading: "历史长波", text: "法国大革命重塑法律、公民身份与国家形态，也成为近代政治变革的全球参照。" },
      ],
    },
  },
  1791: {
    sections: {
      en: [
        { heading: "Insurrection Origins", text: "The Haitian Revolution began in Saint-Domingue amid plantation brutality, racial hierarchy, and the spread of revolutionary ideas." },
        { heading: "Conflict Dynamics", text: "Enslaved rebels, free people of color, colonial authorities, and European powers fought in shifting alliances over freedom and sovereignty." },
        { heading: "World-Historical Significance", text: "It produced the first durable Black republic and transformed debates on slavery, empire, and universal rights." },
      ],
      zh: [
        { heading: "起义背景", text: "海地革命爆发于圣多明各种植园奴役体系之下，种族等级压迫与革命思想传播相互叠加。" },
        { heading: "冲突结构", text: "奴隶起义者、有色自由人、殖民当局与欧洲列强在不断变化的联盟中争夺自由与主权。" },
        { heading: "世界史意义", text: "革命最终催生了首个稳定的黑人共和国，深刻改写奴隶制、帝国与普遍权利的讨论。" },
      ],
    },
  },
  1792: {
    sections: {
      en: [
        { heading: "Publication Context", text: "Wollstonecraft wrote A Vindication of the Rights of Woman in response to revolutionary-era debates on rights and citizenship." },
        { heading: "Argument Structure", text: "She argued that women's apparent inferiority was socially produced through denied education and limited civic participation." },
        { heading: "Intellectual Legacy", text: "The text became a foundational document in feminist thought and influenced later movements for education and legal reform." },
      ],
      zh: [
        { heading: "写作背景", text: "《女权辩护》回应革命时代“权利与公民资格”讨论，将女性问题置于现代政治议程。" },
        { heading: "核心论证", text: "沃斯通克拉夫特指出女性处境并非天生差异，而是教育缺失与制度排斥的结果。" },
        { heading: "思想遗产", text: "该书成为女性主义思想经典，对后续教育平权与法律改革诉求影响深远。" },
      ],
    },
  },
  1793: {
    sections: {
      en: [
        { heading: "Emergency Regime", text: "The Reign of Terror developed under wartime pressure and internal rebellion, with the Committee of Public Safety centralizing power." },
        { heading: "Mechanisms of Violence", text: "Extraordinary tribunals, surveillance, and executions were justified as revolutionary defense but generated escalating political fear." },
        { heading: "Political Consequences", text: "The period radicalized and fragmented revolutionary politics, setting conditions for Thermidor and subsequent institutional reconfiguration." },
      ],
      zh: [
        { heading: "紧急统治形成", text: "在对外战争与国内叛乱压力下，公共安全委员会推动权力高度集中，恐怖统治由此形成。" },
        { heading: "暴力机制", text: "非常法庭、监控与处决被包装为“保卫革命”的必要手段，但也不断扩大政治恐惧。" },
        { heading: "政治后果", text: "这一时期既强化革命动员，也加剧派系撕裂，最终为热月转向提供了条件。" },
      ],
    },
  },
  1794: {
    sections: {
      en: [
        { heading: "Thermidor Event", text: "Robespierre and allies were overthrown in July 1794 (9 Thermidor), ending Jacobin dominance in the Convention." },
        { heading: "Institutional Shift", text: "Emergency political structures were rolled back, and revolutionary governance moved toward a less radical but unstable configuration." },
        { heading: "Bridge to Directory", text: "The Thermidorian phase set the stage for the Directory, where military influence and executive fragility became defining features." },
      ],
      zh: [
        { heading: "热月事件", text: "1794年热月政变推翻罗伯斯庇尔集团，雅各宾主导地位在国民公会内迅速崩解。" },
        { heading: "制度转向", text: "紧急统治机制被逐步收缩，革命政权由激进动员转向相对温和但不稳定的权力结构。" },
        { heading: "通向督政府", text: "热月阶段为督政府时期铺路，行政脆弱与军事实力上升成为新的政治特征。" },
      ],
    },
  },
  1796: {
    sections: {
      en: [
        { heading: "Campaign Framework", text: "Napoleon's Italian campaign aimed to defeat Austrian forces and allied states while relieving pressure on other French fronts." },
        { heading: "Operational Innovation", text: "Rapid maneuver, concentrated force, and political-military negotiation produced successive victories against numerically larger opponents." },
        { heading: "Strategic Impact", text: "The campaign elevated Napoleon's national profile and transformed French leverage in continental diplomacy." },
      ],
      zh: [
        { heading: "战役目标", text: "意大利战役旨在击败奥地利及其盟友，减轻法国在其他战线承受的压力。" },
        { heading: "作战方式", text: "拿破仑以快速机动与兵力集中取得连续胜利，并将军事成果转化为政治谈判优势。" },
        { heading: "战略影响", text: "战役显著提升拿破仑声望，也重塑法国在欧洲大陆外交中的筹码结构。" },
      ],
    },
  },
  1799: {
    sections: {
      en: [
        { heading: "Coup Mechanics", text: "The coup of 18 Brumaire dismantled the Directory through coordinated political and military pressure." },
        { heading: "Institutional Rebuild", text: "A new Consulate constitution concentrated executive authority, with Napoleon rapidly becoming dominant First Consul." },
        { heading: "Historical Turn", text: "Brumaire closed the revolutionary decade's most unstable phase and opened a new era of centralized post-revolutionary state power." },
      ],
      zh: [
        { heading: "政变过程", text: "雾月政变通过政治操盘与军力威慑协同推进，督政府在短时间内被瓦解。" },
        { heading: "制度重建", text: "执政府宪制确立后，行政权高度集中，拿破仑迅速成为第一执政核心人物。" },
        { heading: "历史转折", text: "雾月政变结束了革命十年中最动荡阶段，开启了高度集中的后革命国家治理时代。" },
      ],
    },
  },
};

periods.forEach((period) => {
  period.events.forEach((event) => {
    const extra = eventEnrichment[event.year];
    if (!extra) {
      return;
    }
    if (extra.body) {
      event.body = extra.body;
    }
    event.countries = extra.countries || { en: [event.region.en], zh: [event.region.zh] };
    event.figures = extra.figures || { en: [], zh: [] };
    event.wiki = extra.wiki || "";
    event.sections = eventStructuredDetails[event.year]?.sections || null;
  });
});

const eventImages = {
  1701: "./assets/images/events/1701.jpg",
  1707: "./assets/images/events/1707.jpg",
  1713: "./assets/images/events/1713.jpg",
  1715: "./assets/images/events/1715.jpg",
  1716: "./assets/images/events/1716.jpg",
  1720: "./assets/images/events/1720.jpg",
  1721: "./assets/images/events/1721.jpg",
  1722: "./assets/images/events/1722.jpg",
  1733: "./assets/images/events/1733.jpg",
  1735: "./assets/images/events/1735.jpg",
  1736: "./assets/images/events/1736.jpg",
  1740: "./assets/images/events/1740.jpg",
  1748: "./assets/images/events/1748.jpg",
  1751: "./assets/images/events/1751.jpg",
  1756: "./assets/images/events/1756.jpg",
  1757: "./assets/images/events/1757.jpg",
  1762: "./assets/images/events/1762.jpg",
  1763: "./assets/images/events/1763.jpg",
  1772: "./assets/images/events/1772.jpg",
  1776: "./assets/images/events/1776.jpg",
  1781: "./assets/images/events/1781.jpg",
  1783: "./assets/images/events/1783.jpg",
  1787: "./assets/images/events/1787.jpg",
  1789: "./assets/images/events/1789.jpg",
  1791: "./assets/images/events/1791.jpg",
  1792: "./assets/images/events/1792.jpg",
  1793: "./assets/images/events/1793.jpg",
  1794: "./assets/images/events/1794.jpg",
  1796: "./assets/images/events/1796.jpg",
  1799: "./assets/images/events/1799.jpg",
};

const majorEvents = periods
  .flatMap((period) =>
    period.events.map((event, index) => ({
      periodId: period.id,
      periodLabel: period.label,
      eventIndex: index,
      image: eventImages[event.year] || "",
      ...event,
    })),
  )
  .sort((a, b) => a.year - b.year);

const state = {
  lang: "en",
  activePeriod: null,
  activeEventIndex: 0,
  activeGlobalIndex: -1,
  overlayVisible: true,
  suppressClick: false,
  detailRequestId: 0,
};

const WIKI_SNAPSHOT_URL = "./assets/data/wiki-details.json";
const APP_STATE_KEY = "enlightenment-site2:state:v1";
let wikiSnapshotCache = null;

const stage = document.querySelector(".stage");
const overviewView = document.getElementById("overviewView");
const chapterGrid = document.getElementById("chapterGrid");
const chapterTemplate = document.getElementById("chapterTemplate");
const scrollHint = document.getElementById("scrollHint");
const siteInfo = document.getElementById("siteInfo");
const imageDisclaimer = document.getElementById("imageDisclaimer");
const contactLabel = document.getElementById("contactLabel");
const timelineRail = document.getElementById("timelineRail");
const backButton = document.getElementById("backButton");
const menuButton = document.getElementById("menuButton");
const langToggle = document.getElementById("langToggle");
const siteTagline = document.getElementById("siteTagline");
const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");
const detailPeriodTag = document.getElementById("detailPeriodTag");
const detailHeadline = document.getElementById("detailHeadline");
const detailEventTitle = document.getElementById("detailEventTitle");
const detailYear = document.getElementById("detailYear");
const detailBody = document.getElementById("detailBody");
const detailSections = document.getElementById("detailSections");
const detailRegion = document.getElementById("detailRegion");
const categoryBadge = document.getElementById("categoryBadge");
const typeLabel = document.getElementById("typeLabel");
const countriesLabel = document.getElementById("countriesLabel");
const figuresLabel = document.getElementById("figuresLabel");
const sourceLabel = document.getElementById("sourceLabel");
const countriesTags = document.getElementById("countriesTags");
const figuresTags = document.getElementById("figuresTags");
const wikiLink = document.getElementById("wikiLink");
const prevChapter = document.getElementById("prevChapter");
const nextChapter = document.getElementById("nextChapter");
const mediaPanel = document.querySelector(".media-panel");
const mediaContent = document.querySelector(".media-content");
const detailView = document.getElementById("detailView");
const infoPanel = document.querySelector(".info-panel");

function t() {
  return uiText[state.lang];
}

function getPeriodById(periodId) {
  return periods.find((period) => period.id === periodId);
}

function getPeriodRange(period) {
  return state.lang === "zh" ? period.rangeZh : period.range;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function formatTwoLineTitle(text, lang) {
  if (!text) {
    return "";
  }

  if (lang === "zh") {
    const raw = text.replace(/\s+/g, "");
    if (raw.length <= 10) {
      return `<span class="title-line">${escapeHtml(raw)}</span>`;
    }
    const mid = Math.ceil(raw.length / 2);
    return `<span class="title-line">${escapeHtml(raw.slice(0, mid))}</span><span class="title-line">${escapeHtml(raw.slice(mid))}</span>`;
  }

  const words = text.trim().split(/\s+/);
  if (words.length <= 2) {
    return `<span class="title-line">${escapeHtml(text)}</span>`;
  }

  const total = words.join(" ").length;
  let split = 1;
  let bestDelta = Number.POSITIVE_INFINITY;
  let running = words[0].length;
  for (let i = 1; i < words.length; i += 1) {
    const delta = Math.abs(total / 2 - running);
    if (delta < bestDelta) {
      bestDelta = delta;
      split = i;
    }
    running += words[i].length + 1;
  }

  return `<span class="title-line">${escapeHtml(words.slice(0, split).join(" "))}</span><span class="title-line">${escapeHtml(words.slice(split).join(" "))}</span>`;
}

function applyStaticText() {
  const copy = t();
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  siteTagline.textContent = copy.siteTagline;
  menuButton.textContent = copy.menuTimeline;
  if (state.lang === "en") {
    const [lineOne, lineTwo] = copy.heroTitle.split("\n");
    heroTitle.innerHTML = `<span class="hero-topline">${lineOne}</span><br /><span class="hero-line-two">${lineTwo}</span>`;
  } else {
    const [lineOne, lineTwo] = copy.heroTitle.split("\n");
    if (lineTwo) {
      heroTitle.innerHTML = `<span class="hero-topline">${lineOne}</span><br /><span class="hero-line-two">${lineTwo}</span>`;
    } else {
      heroTitle.innerHTML = `<span class="hero-line-two hero-zh-one">${lineOne}</span>`;
    }
  }
  heroDescription.textContent = copy.heroDescription;
  backButton.textContent = copy.backLabel;
  prevChapter.textContent = copy.prevChapter;
  nextChapter.textContent = copy.nextChapter;
  langToggle.textContent = state.lang === "en" ? "中文" : "EN";
  scrollHint.textContent = copy.scrollHint;
  siteInfo.textContent = copy.siteInfo;
  imageDisclaimer.textContent = copy.imageDisclaimer;
  contactLabel.textContent = copy.contactLabel;
  typeLabel.textContent = copy.typeLabel;
  countriesLabel.textContent = copy.countriesLabel;
  figuresLabel.textContent = copy.figuresLabel;
  sourceLabel.textContent = copy.sourceLabel;
  wikiLink.textContent = copy.wikiLabel;
}

function renderTags(container, values) {
  container.innerHTML = "";
  values.forEach((value) => {
    const chip = document.createElement("span");
    chip.className = "detail-chip";
    chip.textContent = value;
    container.appendChild(chip);
  });
}

function localizeSectionHeading(heading) {
  if (state.lang !== "zh") {
    return heading;
  }
  const map = {
    Overview: "概述",
    Background: "背景",
    Context: "背景",
    Development: "过程",
    Process: "过程",
    Negotiation: "谈判过程",
    "Negotiation and Signing": "签订过程",
    "Main Terms": "主要条款",
    Terms: "主要条款",
    "Key Terms": "主要条款",
    Aftermath: "后续影响",
    Legacy: "历史影响",
    Significance: "历史意义",
  };
  const normalized = heading?.trim();
  if (!normalized) {
    return "";
  }
  return map[normalized] || normalized;
}

function renderDetailSections(sections) {
  detailSections.innerHTML = "";
  sections.forEach((section) => {
    const block = document.createElement("article");
    block.className = "detail-section";
    const hasHeading = section.heading && section.heading.trim().length > 0;
    if (hasHeading) {
      const title = document.createElement("h3");
      title.className = "detail-section-title";
      title.textContent = localizeSectionHeading(section.heading);
      block.appendChild(title);
    }
    const text = document.createElement("p");
    text.className = "detail-section-text";
    text.textContent = section.text;
    block.appendChild(text);
    detailSections.appendChild(block);
  });
}

function saveAppState() {
  try {
    const payload = {
      lang: state.lang,
      overlayVisible: state.overlayVisible,
      mode: state.activePeriod ? "detail" : "overview",
      periodId: state.activePeriod ? state.activePeriod.id : "",
      eventIndex: state.activePeriod ? state.activeEventIndex : 0,
    };
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(payload));
  } catch (_error) {
    // ignore
  }
}

function readAppState() {
  try {
    const raw = localStorage.getItem(APP_STATE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch (_error) {
    return null;
  }
}

async function ensureWikiSnapshot() {
  if (wikiSnapshotCache) {
    return wikiSnapshotCache;
  }
  if (typeof window !== "undefined" && window.WIKI_DETAILS_DATA) {
    wikiSnapshotCache = window.WIKI_DETAILS_DATA;
    return wikiSnapshotCache;
  }
  const resp = await fetch(WIKI_SNAPSHOT_URL);
  if (!resp.ok) {
    throw new Error(`Failed to load ${WIKI_SNAPSHOT_URL}`);
  }
  wikiSnapshotCache = await resp.json();
  return wikiSnapshotCache;
}

function normalizeWikiSections(rawSections) {
  if (!Array.isArray(rawSections)) {
    return [];
  }
  return rawSections
    .filter((item) => item && typeof item.text === "string" && item.text.trim().length > 0)
    .map((item) => ({
      heading: typeof item.heading === "string" ? item.heading : "",
      text: item.text.trim(),
    }));
}

async function renderDetailContent(event, requestId) {
  const copy = t();
  detailBody.textContent = copy.detailLoading;
  renderDetailSections([]);
  try {
    const snapshot = await ensureWikiSnapshot();
    if (requestId !== state.detailRequestId) {
      return;
    }
    const yearData = snapshot?.[String(event.year)] || {};
    const primaryLang = state.lang;
    const fallbackLang = primaryLang === "zh" ? "en" : "zh";

    const primaryEntry = yearData[primaryLang] || {};
    const fallbackEntry = yearData[fallbackLang] || {};
    const primarySections = normalizeWikiSections(primaryEntry.sections);
    const fallbackSections = normalizeWikiSections(fallbackEntry.sections);

    const primaryLead = primaryEntry.lead?.trim() || "";
    const fallbackLead = fallbackEntry.lead?.trim() || "";

    const lead =
      primaryLead ||
      primarySections[0]?.text ||
      fallbackLead ||
      fallbackSections[0]?.text ||
      event.body?.[primaryLang] ||
      event.body?.[fallbackLang] ||
      copy.detailUnavailable;

    const sections =
      primarySections.length > 0
        ? primarySections
        : fallbackSections.length > 0
          ? fallbackSections
          : event.sections?.[primaryLang] || event.sections?.[fallbackLang] || [];

    detailBody.textContent = lead;
    renderDetailSections(sections);

    const sourceByLang = yearData?.sources?.[primaryLang] || yearData?.sources?.[fallbackLang];
    if (sourceByLang) {
      wikiLink.href = sourceByLang;
    }
  } catch (_error) {
    if (requestId !== state.detailRequestId) {
      return;
    }
    detailBody.textContent = event.body?.[state.lang] || copy.detailUnavailable;
    renderDetailSections(event.sections?.[state.lang] || []);
  }
}

function openEvent(periodId, eventIndex, direction = "left") {
  const nextPeriod = getPeriodById(periodId);
  if (!nextPeriod || !nextPeriod.events[eventIndex]) {
    return;
  }

  state.activePeriod = nextPeriod;
  state.activeEventIndex = eventIndex;
  state.activeGlobalIndex = majorEvents.findIndex(
    (item) => item.periodId === periodId && item.eventIndex === eventIndex,
  );

  stage.classList.remove("mode-overview");
  stage.classList.add("mode-detail");

  renderDetail();
  renderTimeline();
  saveAppState();
}

function renderEventStrip() {
  chapterGrid.innerHTML = "";
  majorEvents.forEach((event) => {
    const fragment = chapterTemplate.content.cloneNode(true);
    fragment.querySelector(".chapter-index").textContent = event.category[state.lang];
    fragment.querySelector(".chapter-range").textContent = String(event.year);
    fragment.querySelector(".chapter-title").textContent = event.headline[state.lang];
    fragment.querySelector(".chapter-meta").textContent = event.region[state.lang];
    const card = fragment.querySelector(".chapter-card");
    if (event.image) {
      card.style.setProperty("--card-image", `url("${event.image}")`);
    }

    const button = fragment.querySelector(".chapter-button");
    button.textContent = t().openLabel;
    button.addEventListener("click", () => {
      if (state.suppressClick) {
        return;
      }
      openEvent(event.periodId, event.eventIndex, "left");
    });

    card.addEventListener("click", () => {
      if (state.suppressClick) {
        return;
      }
      openEvent(event.periodId, event.eventIndex, "left");
    });

    chapterGrid.appendChild(fragment);
  });
}

function renderTimeline() {
  if (state.activeGlobalIndex < 0) {
    timelineRail.innerHTML = "";
    return;
  }

  timelineRail.innerHTML = "";
  majorEvents.forEach((event, index) => {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "year-pin";
    pin.textContent = String(event.year);
    if (index === state.activeGlobalIndex) {
      pin.classList.add("active");
    }
    pin.addEventListener("click", () => {
      openEvent(event.periodId, event.eventIndex, index > state.activeGlobalIndex ? "left" : "right");
    });
    timelineRail.appendChild(pin);
  });
}

function renderDetail() {
  if (!state.activePeriod) {
    return;
  }

  const copy = t();
  const event = state.activePeriod.events[state.activeEventIndex];
  const image = eventImages[event.year];
  const primary = event.headline[state.lang];
  const secondary = event.title[state.lang];
  const isZh = state.lang === "zh";
  const tooLong = isZh ? primary.length > 16 : primary.length > 44;

  detailPeriodTag.textContent = `${copy.periodPrefix} • ${event.year} • ${event.category[state.lang]}`;
  detailHeadline.innerHTML = formatTwoLineTitle(primary, state.lang);
  detailHeadline.setAttribute("aria-label", primary);
  detailEventTitle.textContent = secondary && secondary !== primary ? secondary : "";
  mediaContent.classList.toggle("long-title", tooLong);
  detailYear.textContent = String(event.year);
  state.detailRequestId += 1;
  renderDetailContent(event, state.detailRequestId);
  if (infoPanel) {
    infoPanel.scrollTop = 0;
  }
  detailRegion.textContent = `${copy.regionPrefix}: ${event.region[state.lang]}`;
  categoryBadge.textContent = event.category[state.lang];
  renderTags(countriesTags, event.countries?.[state.lang] || [event.region[state.lang]]);
  renderTags(figuresTags, event.figures?.[state.lang] || []);
  if (event.wiki) {
    wikiLink.href = event.wiki;
    wikiLink.style.display = "inline";
  } else {
    wikiLink.href = "#";
    wikiLink.style.display = "none";
  }
  mediaPanel.style.setProperty("--media-image", image ? `url("${image}")` : event.tone);
  mediaPanel.classList.toggle("focus-off", !state.overlayVisible);

  prevChapter.disabled = state.activeGlobalIndex <= 0;
  nextChapter.disabled = state.activeGlobalIndex >= majorEvents.length - 1;
}

function closeDetail() {
  state.activePeriod = null;
  state.activeEventIndex = 0;
  state.activeGlobalIndex = -1;
  stage.classList.remove("mode-detail");
  stage.classList.add("mode-overview");
  renderTimeline();
  saveAppState();
}

function switchEvent(step) {
  if (state.activeGlobalIndex < 0) {
    return;
  }
  const nextIndex = state.activeGlobalIndex + step;
  if (nextIndex < 0 || nextIndex >= majorEvents.length) {
    return;
  }
  const target = majorEvents[nextIndex];
  openEvent(target.periodId, target.eventIndex, step > 0 ? "left" : "right");
}

function bindEventStripScroll() {
  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;

  chapterGrid.addEventListener("mousedown", (event) => {
    isDown = true;
    startX = event.pageX;
    startScrollLeft = chapterGrid.scrollLeft;
    state.suppressClick = false;
  });

  window.addEventListener("mousemove", (event) => {
    if (!isDown) {
      return;
    }
    const delta = event.pageX - startX;
    if (Math.abs(delta) > 6) {
      state.suppressClick = true;
    }
    chapterGrid.scrollLeft = startScrollLeft - delta;
  });

  window.addEventListener("mouseup", () => {
    if (!isDown) {
      return;
    }
    isDown = false;
    setTimeout(() => {
      state.suppressClick = false;
    }, 0);
  });

  chapterGrid.addEventListener(
    "wheel",
    (event) => {
      const mostlyVertical = Math.abs(event.deltaY) > Math.abs(event.deltaX);
      if (mostlyVertical || event.shiftKey) {
        event.preventDefault();
        chapterGrid.scrollLeft += mostlyVertical ? event.deltaY : event.deltaX;
      }
    },
    { passive: false },
  );

  chapterGrid.addEventListener("scroll", () => {
    scrollHint.style.opacity = chapterGrid.scrollLeft > 12 ? "0.35" : "1";
  });
}

function bindOverviewParallax() {
  overviewView.style.setProperty("--hero-shift", "0px");
  overviewView.style.setProperty("--cards-shift", "0px");
}

function bindGlobalInteractions() {
  backButton.addEventListener("click", closeDetail);

  menuButton.addEventListener("click", () => {
    if (state.activePeriod) {
      closeDetail();
    } else {
      openEvent(majorEvents[0].periodId, majorEvents[0].eventIndex, "left");
    }
  });

  langToggle.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "zh" : "en";
    applyStaticText();
    renderEventStrip();
    if (state.activePeriod) {
      renderDetail();
      renderTimeline();
    }
    saveAppState();
  });

  prevChapter.addEventListener("click", () => switchEvent(-1));
  nextChapter.addEventListener("click", () => switchEvent(1));

  mediaPanel.addEventListener("click", () => {
    if (!state.activePeriod) {
      return;
    }
    state.overlayVisible = !state.overlayVisible;
    mediaPanel.classList.toggle("focus-off", !state.overlayVisible);
    saveAppState();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDetail();
    }
    if (event.key === "ArrowRight") {
      switchEvent(1);
    }
    if (event.key === "ArrowLeft") {
      switchEvent(-1);
    }
    if (event.key.toLowerCase() === "a") {
      switchEvent(-1);
    }
    if (event.key.toLowerCase() === "d") {
      switchEvent(1);
    }
  });

}

const restoredState = readAppState();
if (restoredState?.lang === "zh" || restoredState?.lang === "en") {
  state.lang = restoredState.lang;
}
if (typeof restoredState?.overlayVisible === "boolean") {
  state.overlayVisible = restoredState.overlayVisible;
}

applyStaticText();
renderEventStrip();
bindEventStripScroll();
bindOverviewParallax();
bindGlobalInteractions();

if (restoredState?.mode === "detail" && restoredState?.periodId) {
  openEvent(restoredState.periodId, Number(restoredState.eventIndex) || 0, "left");
} else {
  mediaPanel.classList.toggle("focus-off", !state.overlayVisible);
}
