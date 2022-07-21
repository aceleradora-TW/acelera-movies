import { getTODO, itsWorks } from "@controllers/todo"
import { getAllMovie } from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)

  app.get("/movie", getAllMovie)
}
