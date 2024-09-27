import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { Cart } from './cart.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'customer' })
  role: string;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => Cart, cart => cart.user)
  cart: Cart[];
}
