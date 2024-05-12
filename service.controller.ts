// service.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ServiceService } from './service.service';
import { Service } from './service.model';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  findAll(): Promise<Service[]> {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Service> {
    return this.serviceService.findOne(id);
  }

  @Post()
  create(@Body() service: Service): Promise<Service> {
    return this.serviceService.create(service);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() service: Service): Promise<Service> {
    return this.serviceService.update(id, service);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Service> {
    return this.serviceService.remove(id);
  }
}
