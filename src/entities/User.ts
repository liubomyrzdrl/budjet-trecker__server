import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique, BaseEntity } from "typeorm";
import { Entrie } from './Entrie'

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    @Unique(['email'])
    email: string

    @Column()
    @Unique(['password'])
    password: string
   
    @OneToMany(() => Entrie, entrie => entrie.user)
    entries: Entrie[]

}