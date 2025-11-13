const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve the report template
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'report-template.html'));
});

app.listen(PORT, () => {
  console.log(`\n✅ Development server running at http://localhost:${PORT}`);
  console.log(`📄 Open your browser to see the report preview\n`);
});
