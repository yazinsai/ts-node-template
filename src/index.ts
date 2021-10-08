import express, { Request, Response } from 'express';
const PORT = process.env.PORT || 3000
const app = express()

// Setup express
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})