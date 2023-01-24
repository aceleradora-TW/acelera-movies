import { getMovies, itsWorks } from "@controllers/movies"
import { getLogin } from "@controllers/user"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/movies", getMovies)
  app.get("/login", getLogin)

  app.post("/movies/:id")
}
