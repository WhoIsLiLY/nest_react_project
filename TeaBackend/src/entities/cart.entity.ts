import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { CartItem } from "./cart-item.entity";

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.cart)
  user: User;

  @OneToMany(() => CartItem, cartItem => cartItem.cart)
  cartItems: CartItem[];
}
