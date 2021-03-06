import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entity';
import { User } from './user.entity';

@Entity('Post')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ default: '' })
  image: string;

  @Column({ nullable: true, type: 'text' })
  body: string;

  @Column({ default: 0 })
  likes: number;

  @Column()
  createdAt: string;

  @OneToMany((_type) => Comment, (comment) => comment.post)
  comments: Array<Comment>;

  @ManyToOne((_type) => User, (user) => user.posts)
  user: User;
}
