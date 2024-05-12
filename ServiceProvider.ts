// service-provider.model.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Import CreateHouseCleaningDto and UpdateHouseCleaningDto
import { CreateHouseCleaningDto } from 'yvonne\project\src\create-house-cleaning.dto.ts';
import { UpdateHouseCleaningDto } from 'yvonne\project\src\update-house-cleaning.dto.ts';

@Injectable()
export class HouseCleaningService {
  constructor(@InjectModel(HouseCleaning.name) private readonly houseCleaningModel: Model<HouseCleaning>) {}

  async findAll(): Promise<HouseCleaning[]> {
    return this.houseCleaningModel.find().exec();
  }

  async findById(id: string): Promise<HouseCleaning | null> {
    return this.houseCleaningModel.findById(id).exec();
  }

  async create(createHouseCleaningDto: CreateHouseCleaningDto): Promise<HouseCleaning> {
    const createdHouseCleaning = new this.houseCleaningModel(createHouseCleaningDto);
    return createdHouseCleaning.save();
  }

  async update(id: string, updateHouseCleaningDto: UpdateHouseCleaningDto): Promise<HouseCleaning | null> {
    return this.houseCleaningModel.findByIdAndUpdate(id, updateHouseCleaningDto, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.houseCleaningModel.findByIdAndDelete(id).exec();
  }
}
