import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";
const app = express();
// const port = 3000

app.use(express.json());

app.use("/api/movies", MovieRoutes);

//
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level!");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

export default app;
