import { Entity, Column, PrimaryGeneratedColumn  } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("produtos")
export class Produtos {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    price: number;
    
    @Column()
    description: string;

    construtor() {
        const id = uuid();
        if(!this.id) {
            this.id = id;
        }
        console.log(id);
    }
}