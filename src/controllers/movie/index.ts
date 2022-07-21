import { Movie } from "@models/entity/Movie"
import { getRepository } from "typeorm"

export const getAllMovie = async (request, response) => {
  try {
    const movieRepository = getRepository(Movie)
    const movie = await movieRepository.find()
    return response.status(200).json(movie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
