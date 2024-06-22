import { Request, Response } from "express";
import { movieService } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  // console.log(req.body);

  try {
    const Moviebody = req.body;
    const result = await movieService.createMovie(Moviebody);

    res.json({
      success: true,
      message: "movie is create successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const movieController = {
  createMovie,
};
