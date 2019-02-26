export class Leilao {
  id: string;
  owner: string;
  name: string;
  photo_url: string;
  base_price: number;
  bid_type: number;
  bid_step: number;
  status: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
