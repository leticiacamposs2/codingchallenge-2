import { Bids } from './bids';

export class Auction {
  public _id: string;
  public name: string;
  public photo?: string;
  public base_price: number;
  public bid_type: number;
  public bid_step?: number;
  public status?: number;
  public owner?: string;
  public bids?: Array<Bids>;
  public createdAt?: Date;
  public updatedAt?: Date;
  public __v?: number;
}
