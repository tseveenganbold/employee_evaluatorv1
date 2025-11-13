// This script will be populated with sample data in the browser
// For now, we'll use inline data similar to sample-data.js

const data = {
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
    { name: "Эерэг хандлага", nameEn: "Positive approach", score: 0.77, percentage: 38 },
    { name: "Програм хангамж ашиглах чадвар", nameEn: "Software skills", score: 0.77, percentage: 38 }
  ],

  radarData: {
    labels: ["BA 1", "BA 2", "BA 3", "L 1", "L 2", "L 3", "C 1", "C 2", "C 3", "T 1", "T 2"],
    selfScores: [32, 55, 36, 56, 63, 48, 48, 59, 63, 58, 50],
    othersScores: [36, 55, 50, 63, 56, 48, 48, 55, 57, 58, 62]
  },

  feedback: [
    "Илүү хурдтай ажиллах, хүний нөөцийн орчин үеийн чиг хандлагын талаар судалгаа хийж, хөгжиж байх, группын хүний нөөцийн ажилтнуудтай ойр ажиллах шаардлагатай",
    "Илүү шинийг санаачлах тал дээр сайжруулах шаардлагатай. Харилцаа даалгавар саналууд дээр нээлттэй эерэгээр хандаж байх.",
    "Ажлын байрны тодорхойлолтод заасан ажлыг сайн гүйцэтгэдэг. Үл суурьтай асуудалд ханддаг. Ачаалал даах чадвар сайн.",
    "Нээлттэй, харилцахад хялбар, мэргэжлийн",
    "Эерэг хандлагатай, бусадтай зөв зохистой найрсаг харьцдаг."
  ]
};

// Populate employee info
function populateEmployeeInfo() {
  document.getElementById('employeePhoto').src = data.employee.photo;
  document.getElementById('employeeName').textContent = data.employee.name;
  document.getElementById('employeePosition').textContent = data.employee.position;
  document.getElementById('startDate').textContent = data.employee.startDate;
  document.getElementById('totalYears').textContent = data.employee.totalYears;
  document.getElementById('level').textContent = data.employee.level;
  document.getElementById('salary').textContent = data.employee.salary;
  document.getElementById('salaryGrowth').textContent = `▲ ${data.employee.salaryGrowth}`;
}

// Populate evaluation categories
function populateEvaluationCategories() {
  data.evaluationCategories.forEach((cat, index) => {
    const i = index + 1;
    const labelEl = document.getElementById(`evalLabel${i}`);
    const percEl = document.getElementById(`evalPerc${i}`);
    const pointsEl = document.getElementById(`evalPoints${i}`);
    const ratingEl = document.getElementById(`evalRating${i}`);

    if (labelEl) labelEl.textContent = cat.name;
    if (percEl) percEl.textContent = `${cat.percentage}%`;
    if (pointsEl) pointsEl.textContent = `${cat.points}pts`;
    if (ratingEl) ratingEl.textContent = cat.rating;
  });
}

// Populate NPS
function populateNPS() {
  document.getElementById('npsTotal').textContent = data.nps.total;
  document.getElementById('npsPromoters').textContent = data.nps.promoters;
  document.getElementById('npsPassives').textContent = data.nps.passives;
  document.getElementById('npsDetractors').textContent = data.nps.detractors;
}

// Populate main categories
function populateMainCategories() {
  data.mainCategories.forEach((cat, index) => {
    const prefix = cat.label.toLowerCase();
    document.getElementById(`${prefix}Self`).textContent = cat.selfScore;
    document.getElementById(`${prefix}Others`).textContent = cat.othersScore;
    document.getElementById(`${prefix}Perc`).textContent = `${cat.percentage}%`;
  });
}

// Generate skills bars
function generateSkillsBars() {
  const container = document.getElementById('skillsBars');
  container.innerHTML = '';

  data.competencies.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';

    skillItem.innerHTML = `
      <div class="skill-score">${skill.score.toFixed(2)}</div>
      <div class="skill-info">
        <div class="skill-name">${skill.name}</div>
        <div class="skill-name-en">/${skill.nameEn}/</div>
        <div class="skill-bar-container">
          <div class="skill-bar" style="width: ${skill.percentage}%"></div>
        </div>
      </div>
      <div class="skill-percentage">${skill.percentage}%</div>
    `;

    container.appendChild(skillItem);
  });
}

// Generate feedback
function generateFeedback() {
  const container = document.getElementById('feedbackContent');
  container.innerHTML = '';

  data.feedback.forEach(text => {
    const item = document.createElement('div');
    item.className = 'feedback-item';
    item.textContent = text;
    container.appendChild(item);
  });
}

// Create circular donut chart
function createCircularChart() {
  const ctx = document.getElementById('circularChart').getContext('2d');

  // Define the segments matching the PDF
  const segments = [
    { label: 'Бизнесийн ойлголт', value: 6, color: '#2C7A7B' },
    { label: 'Асуудал шийдвэрлэх', value: 12, color: '#38B2AC' },
    { label: 'MMS-г хөгжүүлэх', value: 8, color: '#4FD1C5' },
    { label: 'Харилцаа, Хандлага', value: 8, color: '#E9B44C' },
    { label: 'Харилцагчийн үйлчилгээ', value: 8, color: '#F6AD55' },
    { label: 'Үр дүнтэй харилцаа', value: 8, color: '#FC8181' },
    { label: 'Өөрийгөө удирдах', value: 8, color: '#805AD5' },
    { label: 'Бусдыг удирдах', value: 8, color: '#9F7AEA' },
    { label: 'Манлайлах', value: 12, color: '#B794F4' }
  ];

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: segments.map(s => s.label),
      datasets: [{
        data: segments.map(s => s.value),
        backgroundColor: segments.map(s => s.color),
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '35%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true
        }
      }
    },
    plugins: [{
      id: 'centerText',
      afterDraw: (chart) => {
        const ctx = chart.ctx;
        const centerX = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
        const centerY = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;

        ctx.save();
        ctx.font = 'bold 48px Roboto';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('52%', centerX, centerY - 10);

        ctx.font = '16px Roboto';
        ctx.fillStyle = '#666';
        ctx.fillText(`${data.overallScore.points} / ${data.overallScore.maxPoints}pts`, centerX, centerY + 20);
        ctx.restore();
      }
    }]
  });
}

// Create radar chart
function createRadarChart() {
  const ctx = document.getElementById('radarChart').getContext('2d');

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data.radarData.labels,
      datasets: [
        {
          label: 'Өөрийн үнэлгээ',
          data: data.radarData.selfScores,
          fill: true,
          backgroundColor: 'rgba(255, 107, 107, 0.2)',
          borderColor: 'rgb(255, 107, 107)',
          pointBackgroundColor: 'rgb(255, 107, 107)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 107, 107)',
          borderWidth: 2
        },
        {
          label: 'Бусдын үнэлгээ',
          data: data.radarData.othersScores,
          fill: true,
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderColor: 'rgb(76, 175, 80)',
          pointBackgroundColor: 'rgb(76, 175, 80)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(76, 175, 80)',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          angleLines: {
            display: true,
            color: '#e0e0e0'
          },
          grid: {
            color: '#e0e0e0'
          },
          pointLabels: {
            font: {
              size: 9
            },
            color: '#666'
          },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            stepSize: 20,
            font: {
              size: 8
            },
            color: '#999'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// Create line graph
function createLineGraph() {
  const ctx = document.getElementById('lineGraph').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [
        {
          label: 'Бусдын үнэлгээ',
          data: [null, null, null, null, null, 49.54, null, null, null, null, null],
          borderColor: 'rgb(76, 175, 80)',
          backgroundColor: 'rgb(76, 175, 80)',
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 2,
          tension: 0.1
        },
        {
          label: 'Өөрийн үнэлгээ',
          data: [null, null, null, null, null, null, null, null, null, 77, null],
          borderColor: 'rgb(255, 107, 107)',
          backgroundColor: 'rgb(255, 107, 107)',
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 2,
          tension: 0.1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 8
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// Populate competency table
function populateCompetencyTable() {
  // For the detailed table - using sample radar data
  const tableData = {
    others: [4.4, 2.8, 2.5, 4.5, 5.0, 3.8, 3.8, 4.7, 5.0, 6.0, 6.9],
    self: [7, 7, 4, 7, 7, 7, 6, 8, 6, 6, 12]
  };

  tableData.others.forEach((val, i) => {
    const cell = document.getElementById(`othersBA${i + 1}`) ||
                 document.getElementById(`othersL${i - 2}`) ||
                 document.getElementById(`othersC${i - 5}`) ||
                 document.getElementById(`othersT${i - 8}`);
    if (cell) cell.textContent = val;
  });

  tableData.self.forEach((val, i) => {
    const cell = document.getElementById(`selfBA${i + 1}`) ||
                 document.getElementById(`selfL${i - 2}`) ||
                 document.getElementById(`selfC${i - 5}`) ||
                 document.getElementById(`selfT${i - 8}`);
    if (cell) cell.textContent = val;
  });

  const othersTotal = document.getElementById('othersTotal');
  const selfTotal = document.getElementById('selfTotal');
  if (othersTotal) othersTotal.textContent = '49.54 / 52%';
  if (selfTotal) selfTotal.textContent = '77 / 80%';
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  populateEmployeeInfo();
  populateEvaluationCategories();
  populateNPS();
  populateMainCategories();
  generateSkillsBars();
  generateFeedback();
  populateCompetencyTable();

  // Wait a bit for fonts to load before creating charts
  setTimeout(() => {
    createCircularChart();
    createRadarChart();
    createLineGraph();
  }, 100);
});
