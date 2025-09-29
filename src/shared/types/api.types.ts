type Paginated<T, K extends string = "data"> = {
  [P in K]: T[];
} & {
  total: number;
  skip: number;
  limit: number;
};

export type { Paginated };
