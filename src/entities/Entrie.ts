import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm"
import { User} from "./User"

@Entity()
export class Entrie  extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    catagorie: string
    
    @Column()
    userId: number


    @Column()
    amount: number

    @ManyToOne(() => User, user => user.entries)
    user: User;

}