type Paginated<T> = {
  data: T[];
  total: number;
  skip: number;
  limit: number;
};

export type { Paginated };
