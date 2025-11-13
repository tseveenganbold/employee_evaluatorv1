const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Load the HTML template
  const htmlPath = path.join(__dirname, 'report-template.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Set content
  await page.setContent(htmlContent, {
    waitUntil: ['networkidle0', 'domcontentloaded']
  });

  // Wait for charts to render
  await page.waitForTimeout(2000);

  // Generate PDF
  const outputPath = path.join(__dirname, 'output', 'employee-evaluation-report.pdf');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(path.join(__dirname, 'output'))) {
    fs.mkdirSync(path.join(__dirname, 'output'));
  }

  await page.pdf({
    path: outputPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    }
  });

  console.log(`✅ PDF generated successfully: ${outputPath}`);

  await browser.close();
}

// Run the generation
generatePDF().catch(error => {
  console.error('❌ Error generating PDF:', error);
  process.exit(1);
});
