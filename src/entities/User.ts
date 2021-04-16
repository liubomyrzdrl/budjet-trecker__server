import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm";
import { Entrie } from './Entrie'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    @Unique(['email'])
    email: string;

    @Column()
    @Unique(['password'])
    password: string;

    @OneToMany(() => Entrie, entrie => entrie.user)
    entries: Entrie[];

}