import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { hashSync } from 'bcrypt';
import {BeforeInsert} from 'typeorm'
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email : string;

  @Prop()
  name : string;

  @Prop({ type: String, required: true, bcrypt:true })
  password : string;
}

export const UserSchema = SchemaFactory.createForClass(User);