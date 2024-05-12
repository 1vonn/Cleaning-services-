import { Injectable } from '@nestjs/common';

@Injectable()
export class DishWashingService {
  // Example method to wash dishes
  washDishes(): string {
    return 'Dishes are washed!';
  }
}
