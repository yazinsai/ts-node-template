import express, { Request, Response } from 'express';
const port = process.env.PORT || "3000"
const app = express()

// Setup express
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})