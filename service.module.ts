// services.module.ts

import { Module } from '@nestjs/common';
import { HouseCleaningController } from './house-cleaning.controller';
import { DishWashingController } from './dish-washing.controller';

@Module({
  controllers: [HouseCleaningController, DishWashingController],
})
export class ServicesModule {}
