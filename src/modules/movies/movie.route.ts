import express from "express";
import { MovieControllers } from "./movie.controller";
import { ReviewControllers } from "../reviews/review.controller";

const router = express.Router();

// define movie routes

// create movie route
router.post("/", MovieControllers.createMovie);

// get all movies route
router.get("/", MovieControllers.getAllMovies);

// get movie by id route
// router.get("/:movieId", MovieControllers.getMovieById);

// get movie by slug route
router.get("/:slug", MovieControllers.getMovieBySlug);

// add review
router.post("/:slug/review", ReviewControllers.addReview);

// // get all reviews
// router.get("/:slug/reviews", ReviewControllers.getAllReviews);

// router.put("/:slug/review", ReviewControllers.getReviewById);

// // delete review
// router.delete("/:slug/review", ReviewControllers.deleteReview);

export const MovieRoutes = router;
