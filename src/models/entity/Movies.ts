import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: string

  @Column({ name: "subtitle", type: "varchar" })
  subtitle: string

  @Column({ name: "resume", type: "text" })
  resume: string

  @Column({ name: "releaseDate", type: "varchar" })
  releaseDate: Date

  @Column({ name: "image", type: "bytea" })
  image: string

  @Column({ name: "director", type: "varchar" })
  director: string

  @Column({ name: "writer", type: "varchar" })
  writer: string

  @Column({ name: "classification", type: "varchar" })
  classification: string

  @Column({ name: "studio", type: "varchar" })
  studio: string

  @Column({ name: "stars", type: "varchar" })
  stars: string
}
