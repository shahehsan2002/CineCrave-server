import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";
import notFound from "./middleware/NotFound";

const app = express();

// Parser
app.use(express.json());

// Routes
app.use("/api/movies", MovieRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Middleware notfound
app.use(notFound)

// Error handler
app.use()

export default app;
