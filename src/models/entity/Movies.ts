import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: string

  @Column({ name: "releaseDate", type: "varchar" })
  releaseDate: Date

  @Column({ name: "resume", type: "text" })
  resume: string

  @Column({ name: "note", type: "int" })
  note: number
}
