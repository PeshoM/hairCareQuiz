enum STATUSES {
  Success = -1,
  Error = 1
}

type StatusesType = STATUSES.Success | STATUSES.Error;

export { STATUSES };
export type { StatusesType };
