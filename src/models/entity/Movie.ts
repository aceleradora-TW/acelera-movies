import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm"

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String

  @Column({ name: "subtitle", type: "varchar" })
  subtitle: String

  @Column({ name: "resume", type: "varchar" })
  resume: String

  @Column({ name: "director", type: "varchar" })
  director: String

  @Column({ name: "writer", type: "varchar" })
  writer: String

  @Column({ name: "classification", type: "varchar" })
  classification: String

  @Column({ name: "studio", type: "varchar" })
  studio: String

  @Column({ name: "image", type: "varchar" })
  image: String

  @Column({ name: "note", type: "int" })
  note: number

  @Column({ name: "actors", type: "varchar" })
  actors: String

  @Column({ name: "awards", type: "varchar" })
  awards: String

  @Column({ name: "release_date", type: "timestamptz" })
  releaseDate: Date
}
