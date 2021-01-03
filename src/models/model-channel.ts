
export class Channel {
  constructor(
    public _id: string,
    public name: string,
    public url: string,
    public success_rate: number | null,
    public logo: string | null,
    public comments: string | null
  ) {}
}