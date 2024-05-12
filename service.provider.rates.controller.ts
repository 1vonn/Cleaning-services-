// service-provider-rates.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ServiceProviderRatesService } from './service-provider-rates.service';
import { ServiceProviderRates } from './service-provider-rates.model';

@Controller('service-provider-rates')
export class ServiceProviderRatesController {
  constructor(private readonly serviceProviderRatesService: ServiceProviderRatesService) {}

  @Get()
  findAll(): Promise<ServiceProviderRates[]> {
    return this.serviceProviderRatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ServiceProviderRates> {
    return this.serviceProviderRatesService.findOne(id);
  }

  @Post()
  create(@Body() serviceProviderRates: ServiceProviderRates): Promise<ServiceProviderRates> {
    return this.serviceProviderRatesService.create(serviceProviderRates);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() serviceProviderRates: ServiceProviderRates): Promise<ServiceProviderRates> {
    return this.serviceProviderRatesService.update(id, serviceProviderRates);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ServiceProviderRates> {
    return this.serviceProviderRatesService.remove(id);
  }
}
