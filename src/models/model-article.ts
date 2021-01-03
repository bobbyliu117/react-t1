
export class Article {
  constructor(
    public _id: string,
    public channel_id: string,
    public uploaded_at: number,
    public url: string,
    public note: string | null,
    public remarks: IRemark[]
  ) {}
}

export interface IRemark {
  ticker: string;
  current_price: number;
  recommend_price: number | null;
  prediction: number;
  span: number;
  note: string | null;
}