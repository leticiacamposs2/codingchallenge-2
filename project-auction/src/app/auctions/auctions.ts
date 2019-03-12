export interface Auctions {
  _id: string;
  name: string;
  photo: string;
  base_price: number;
  bid_type: number;
  bid_step: number;
  status: number;
  owner: string;
  bids: Array<object>;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
