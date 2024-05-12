// service-provider-rates.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class ServiceProviderRates extends Document {
  @Prop({ type: Types.ObjectId, ref: 'ServiceProvider' })
  serviceProviderId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Service' })
  serviceId: Types.ObjectId;

  @Prop()
  rate: number;
}

export const ServiceProviderRatesSchema = SchemaFactory.createForClass(ServiceProviderRates);
