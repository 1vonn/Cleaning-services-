import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HouseCleaning } from './house-cleaning.model'; 

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


export const HouseCleaningSchema = SchemaFactory.createForClass(HouseCleaning);