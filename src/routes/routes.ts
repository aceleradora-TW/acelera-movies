import { getMovies, itsWorks } from "@controllers/movies"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/movies", getMovies)
  app.get("/movies/:id")

  app.post("/movies/:id")
}
