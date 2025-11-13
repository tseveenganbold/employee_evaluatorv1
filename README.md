# Employee Evaluation Report Engine

A comprehensive PDF report generator for employee evaluations, matching the MMS Professional evaluation template design.

## 🚀 Features

- **Complete visual replication** of the evaluation report template
- **Interactive charts** using Chart.js:
  - Circular donut chart with center score display
  - Multi-dimensional radar chart for competency comparison
  - Skills bar charts
  - Performance trend line graphs
- **Mongolian language support**
- **PDF generation** using Puppeteer
- **Responsive layout** with pixel-perfect CSS styling

## 📁 Project Structure

```
employee_evaluatorv1/
├── report-template.html    # Main HTML template
├── report-styles.css        # Complete styling (colors, layout, fonts)
├── report-script.js         # Data population and chart generation
├── sample-data.js           # Example employee data structure
├── dev-server.js            # Development preview server
├── generate-report.js       # PDF generation script
├── package.json             # Dependencies
└── output/                  # Generated PDFs (created automatically)
```

## 🛠️ Installation

```bash
# Dependencies are already installed
npm install
```

## 💻 Usage

### Preview in Browser (Recommended First Step)

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser to see the live report preview.

### Generate PDF

```bash
npm run generate
```

The PDF will be saved to `output/employee-evaluation-report.pdf`

## 📊 Report Sections

The report includes all sections from the original template:

1. **Employee Header** - Photo, name, position, career framework
2. **Evaluation Categories** - 7 evaluation types (C-SUITE, M-SUITE, etc.)
3. **NPS Section** - Promoters, Passives, Detractors
4. **Main Score Display** - Percentage and points with circular chart
5. **Competency Radar Chart** - Self vs Others evaluation
6. **Skills Bar Chart** - 15+ competency skills with scores
7. **Competency Comparison Table** - Business, Leadership, Communication, Technical
8. **Performance Trend Graph** - Historical data visualization
9. **Employee Details** - Dates, salary, management level
10. **Feedback Section** - Peer feedback and improvement areas

## 🎨 Customization

Edit `sample-data.js` to modify employee data, or pass data dynamically to the template.

## 📝 Current Status

✅ **Day 1 Complete:**
- Full HTML structure
- Complete CSS styling
- All data sections
- All charts (circular, radar, bar, line)
- Development server
- PDF generation script

🔄 **Next:**
- Fine-tune positioning and sizing
- Exact color matching
- Test with different data

## 🚀 Development Workflow

1. **Edit** data in `sample-data.js` or `report-script.js`
2. **Preview** at http://localhost:3000
3. **Iterate** styling in `report-styles.css`
4. **Generate** PDF with `npm run generate`

---

**Built for precise evaluation reporting**
