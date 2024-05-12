// src/service-provider/service-provider.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProvider } from './service-provider.model';

@Controller('service-providers')
export class ServiceProviderController {
  constructor(private readonly serviceProviderService: ServiceProviderService) {}

  @Get()
  findAll(): Promise<ServiceProvider[]> {
    return this.serviceProviderService.findAll();
  }

  @Post()
  create(@Body() serviceProvider: ServiceProvider): Promise<ServiceProvider> {
    return this.serviceProviderService.create(serviceProvider);
  }
}
