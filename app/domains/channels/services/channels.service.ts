import { inject, injectable } from 'tsyringe';
import { ChannelsRepository } from '../repositories/channels.repository';

@injectable()
export class ChannelsService {
  constructor(@inject(ChannelsRepository) private readonly channelsRepository: ChannelsRepository) {}

  CreateChannel() {
    throw new Error('Method not implemented.');
  }

  InviteUser() {
    throw new Error('Method not implemented.');
  }
}
