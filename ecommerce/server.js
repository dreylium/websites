import express from 'express';
const app = express();
const port = 3000;

// Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// Send index.html for any requests to the root URL
app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
