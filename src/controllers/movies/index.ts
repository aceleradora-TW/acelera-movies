import { Login } from "@models/entity/Login"
import { Movies } from "@models/entity/Movies"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovies = (req, res) => {
  const moviesRepository = getRepository(Movies)
  const movies = moviesRepository
    .find()
    .then((response) => {
      return res
        .status(200)
        .json(movies, { message: "Filme encontradas com sucesso." })
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}

export const getMovieId = (req, res) => {
  const moviesIdRepository = getRepository(Movies)
  const moviesId = moviesIdRepository
    .find()
    .then((response) => {
      return res.status(200).json(moviesId)
    })
    .catch((error) => {
      return res.status(401).json({
        message: "Falha ao encontrar Filme.",
      })
    })
}
