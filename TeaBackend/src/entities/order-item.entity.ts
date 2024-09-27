import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity('order-items')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.orderItems)
  order: Order;

  @ManyToOne(() => Product, product => product.id)
  product: Product;

  @Column('int')
  quantity: number;

  @Column('decimal')
  unit_price: number;

  @Column('decimal')
  total_price: number;
}
