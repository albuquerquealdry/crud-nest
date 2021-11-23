import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://usuario:usuario@cluster0.gwusa.mongodb.net/deliverydb'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
