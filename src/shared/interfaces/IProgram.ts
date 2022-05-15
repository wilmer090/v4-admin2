import { ICommonResponsePayload } from './ICommon';

export interface IProgram {
  _id: string;
  program_cost: number;
  program_description: string;
  program_name: string;
  program_rate: number;
  channel_id: string;
}

// REQUEST
export interface IProgramRequestPayload {
  _id?: string;
  program_name?: string;
  channel_id?: string;
}

// RESPONSE
export interface IProgramResponsePayload extends ICommonResponsePayload {
  data: IProgram[];
}
