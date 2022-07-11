export interface TableProps {
  data: IData[];
}

export interface IData {
  id?: string;
  label?: string;
  value?: number;
  type?: string;
  description?: string;
  category?: string;
}
