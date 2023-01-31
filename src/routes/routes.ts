import { getMovieId, getMovies, itsWorks, postMovie } from "@controllers/movies"
import { getLogin } from "@controllers/user"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/movies", getMovies)
  app.get("/movies/:id", getMovieId)
  app.get("/login", getLogin)
  app.post("/movies", postMovie)
}
