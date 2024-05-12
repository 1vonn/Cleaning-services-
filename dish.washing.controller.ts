// dish-washing.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('dish-washing')
export class DishWashingController {
  constructor(private readonly dishWashingService: DishWashingService) {}

  @Get()
  findAll(): string {
    return 'Get all dish washing services';
  }
}
