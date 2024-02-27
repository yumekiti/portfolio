export type Writing = {
  id: number;
  uuid: string;
  date: string;
  title: string;
  views: number;
};

export type WritingTableProps = Writing[];