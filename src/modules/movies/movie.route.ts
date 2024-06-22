import express, { Request, Response } from "express";
import { Movie } from "./movie.model";
import { movieController } from "./movie.controller";
const router = express.Router();

router.post("/", movieController.createMovie);

export const MovieRoutes = router;
