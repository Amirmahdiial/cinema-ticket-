export interface ISeat {
  status: "available"|"taken"
  id: number;
  price: number;
  row: number;
  column: number;
}
