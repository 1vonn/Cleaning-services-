// house-cleaning.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('house-cleaning')
export class HouseCleaningController {
  constructor(private readonly houseCleaningService: HouseCleaningService) {}

  @Get()
  findAll(): string {
    return 'Get all house cleaning services';
  }
}
