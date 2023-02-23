import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JobDocument = HydratedDocument<Job>;

@Schema({ timestamps: true })
export class Job {
  @Prop({ required: true })
  name: string;

  @Prop()
  job_id: string;

  @Prop()
  short_description: string;

  @Prop()
  long_description: string;

  @Prop()
  company: string;

  @Prop()
  minExperience: number;

  @Prop()
  maxExperience: number;

  @Prop()
  unique_link: string;

  @Prop()
  job_apply_link: string;

  @Prop()
  status: number;

  @Prop()
  keywords: string[];

  @Prop()
  lastEditedBy: string;

  @Prop()
  contactPersonEmail: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
