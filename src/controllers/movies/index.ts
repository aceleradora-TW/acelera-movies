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
      return res.status(200).json(movies)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}
