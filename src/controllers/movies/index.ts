import { Movies } from "@models/entity/Movies"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovies = (request, response) => {
  const moviesRepository = getRepository(Movies)
  const movies = moviesRepository.find()
  return response.json(movies)
}
