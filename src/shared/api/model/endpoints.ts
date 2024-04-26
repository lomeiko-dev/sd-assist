enum enumEndpoints {
  LOTS = "LOTS",
  LOTS_TOTAL = "LOTS_TOTAL",
  USERS = "USERS",
}

export const Endpoints: Record<enumEndpoints, string> = {
  [enumEndpoints.LOTS]: "/lots",
  [enumEndpoints.LOTS_TOTAL]: "/lots-total-count",
  [enumEndpoints.USERS]: "/users",
};
