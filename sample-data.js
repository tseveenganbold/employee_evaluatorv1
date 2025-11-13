// Sample employee evaluation data matching the PDF template
const sampleData = {
  employee: {
    name: "У. Ундармаа",
    position: "Хүний нөөцийн мэргэжилтэн",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23e0e0e0'/%3E%3Ctext x='100' y='110' font-size='50' text-anchor='middle' fill='%23666'%3EУУ%3C/text%3E%3C/svg%3E",
    startDate: "2018.09.27",
    totalYears: "5 жил 3 сар",
    level: "O-2",
    salary: "4'112'500",
    salaryGrowth: "307.98%"
  },

  overallScore: {
    percentage: 52,
    points: 49.54,
    maxPoints: 95
  },

  evaluationCategories: [
    { name: "C-SUITE / ЗАХИРЛУУДЫН ҮНЭЛГЭЭ", percentage: 33, points: 32, total: 8, rating: 8 },
    { name: "M-SUITE / МЕНЕЖЕРҮҮДИЙН ҮНЭЛГЭЭ", percentage: 42, points: 40.7, total: 8.5, rating: 8.5 },
    { name: "S-SUITE / АХЛАХУУДЫН ҮНЭЛГЭЭ", percentage: 49, points: 47, total: 8.5, rating: 8.5 },
    { name: "O-SUITE / АЖИЛТНУУДЫН ҮНЭЛГЭЭ", percentage: 63, points: 60.8, total: 9.4, rating: 9.4 },
    { name: "ШУУД УДИРДЛАГА / МЕНЕЖЕРИЙН ҮНЭЛГЭЭ", percentage: 23, points: 22, total: 7, rating: 7 },
    { name: "ХЭЛТСИЙН АЖИЛТНУУДЫН ҮНЭЛГЭЭ", percentage: 32, points: 30.4, total: 8, rating: 8 },
    { name: "БУСАД ХЭЛТСИЙН АЖИЛТНУУДЫН ҮНЭЛГЭЭ", percentage: 53, points: 50.5, total: 8.3, rating: 8.3 }
  ],

  nps: {
    promoters: 9,
    passives: 4,
    detractors: 0,
    total: 13
  },

  mainCategories: [
    { name: "BUSINESS ACUMEN", selfScore: 4.4, othersScore: 7, percentage: 32, label: "BA" },
    { name: "УДИРДАН МАНЛАЙЛАХ ЧАДВАР", selfScore: 2.8, othersScore: 7, percentage: 55, label: "L" },
    { name: "ХАРИЛЦАА, ХАНДЛАГА", selfScore: 4.7, othersScore: 8, percentage: 59, label: "C" },
    { name: "ТЕХНИКИЙН УР ЧАДВАР", selfScore: 5.0, othersScore: 6, percentage: 50, label: "T" }
  ],

  competencies: [
    { name: "Тасралтгүй сайжруулах чадвар", nameEn: "Continuous improvement", score: 0.31, percentage: 15 },
    { name: "Идэвхтэй суралцах чадвар", nameEn: "Continual learning", score: 0.38, percentage: 19 },
    { name: "Дасан зохицох чадвар", nameEn: "Adaptability, CM", score: 0.46, percentage: 23 },
    { name: "Асуудал шийдвэрлэх чадвар", nameEn: "Problem solving skill", score: 0.54, percentage: 27 },
    { name: "Шинийг санаачлах чадвар", nameEn: "Innovation skill", score: 0.54, percentage: 27 },
    { name: "Том зургаар харах чадвар", nameEn: "Whole picture thinking", score: 0.62, percentage: 31 },
    { name: "Хамтран ажиллах чадвар", nameEn: "Crossfunctional collaboration", score: 0.62, percentage: 31 },
    { name: "Бусдыг манлайлан, чиглүүлэх чадвар", nameEn: "Leadership skill", score: 0.69, percentage: 35 },
    { name: "Эерэг хандлага", nameEn: "Positive approach, optimistic", score: 0.77, percentage: 38 },
    { name: "Програм хангамж ашиглах чадвар", nameEn: "Software skills", score: 0.77, percentage: 38 },
    { name: "Бичгээр илэрхийлэх чадвар", nameEn: "Writing skill", score: 0.54, percentage: 27 },
    { name: "Нээлттэй байдал", nameEn: "Approachable", score: 0.54, percentage: 27 },
    { name: "Дотоод харилцагчийн үйлчилгээ", nameEn: "Internal customer service", score: 0.31, percentage: 15 },
    { name: "Багаар ажиллах чадвар", nameEn: "Team working skill", score: 0.38, percentage: 19 },
    { name: "Компанийн дүрэм журмыг мөрдөх", nameEn: "Policy, procedure", score: 0.46, percentage: 23 }
  ],

  radarData: {
    labels: ["BA 1", "BA 2", "BA 3", "L 1", "L 2", "L 3", "C 1", "C 2", "C 3", "T 1", "T 2"],
    selfScores: [32, 55, 36, 56, 63, 48, 48, 59, 63, 58, 50],
    othersScores: [36, 55, 50, 63, 56, 48, 48, 55, 57, 58, 62]
  },

  performanceTrend: {
    years: ["2021 Ажилтан", "2021 Удирдлага", "2022 Ажилтан", "2022 Удирдлага"],
    selfScores: [0, 0, 0, 0],
    othersScores: [0, 0, 0, 0]
  },

  feedback: [
    "Илүү хурдтай ажиллах, хүний нөөцийн орчин үеийн чиг хандлагын талаар судалгаа хийж, хөгжиж байх, группын хүний нөөцийн ажилтнуудтай ойр ажиллах шаардлагатай",
    "Илүү шинийг санаачлах тал дээр сайжруулах шаардлагатай. Харилцаа даалгавар саналууд дээр нээлттэй эерэгээр хандаж байх. Ерөнхий хандлага маш сайжирсан. Илүү хурдан шаламгай ажиллах тал дээр сайжруулах шаардлагатай.",
    "Ажлын байрны тодорхойлолтод заасан ажлыг сайн гүйцэтгэдэг. Үл суурьтай асуудалд ханддаг. Ачаалал даах чадвар сайн.",
    "Нээлттэй, харилцахад хялбар, мэргэжлийн",
    "Эерэг хандлагатай, бусадтай зөв зохистой найрсаг харьцдаг.",
    "байхгүй ээ. Ойлголцоход амар хүн байна лээ.",
    "Нээлттэй мэдээлэл өгч урам өгч дэмждэгт баярлалаа."
  ],

  topCompetencies: [
    { category: "БИЗНЕС АСУУЛТ", percentage: 69 },
    { category: "УДИРДАН МАНЛАЙЛАХ", percentage: 69 },
    { category: "ХАРИЛЦАА, ХАНДЛАГА", percentage: 65 },
    { category: "ТЕХНИКИЙН УР ЧАДВАР", percentage: 62 }
  ],

  circularChartData: {
    categories: [
      { name: "Бизнесийн ойлголт", value: 6, color: "#2C7A7B" },
      { name: "Асуудал шийдвэрлэх", value: 12, color: "#319795" },
      { name: "MMS-г хөгжүүлэх", value: 8, color: "#4299E1" },
      { name: "Харилцаа, Хандлага", value: 8, color: "#E9B44C" },
      { name: "Харилцагчийн үйлчилгээ", value: 8, color: "#F6AD55" },
      { name: "Үр дүнтэй харилцаа", value: 8, color: "#FC8181" },
      { name: "Өөрийгөө удирдах", value: 8, color: "#B794F4" },
      { name: "Бусдыг удирдах", value: 8, color: "#9F7AEA" },
      { name: "Манлайлах", value: 12, color: "#805AD5" }
    ]
  }
};

module.exports = sampleData;
