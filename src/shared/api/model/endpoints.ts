enum enumEndpoints {
  LOTS = "LOTS",
  LOTS_TOTAL = "LOTS_TOTAL",
  USERS = "USERS",
  CITIES = "CITIES",
  REGIONS = "REGIONS",
}

export const Endpoints: Record<enumEndpoints, string> = {
  [enumEndpoints.LOTS]: "/lots",
  [enumEndpoints.LOTS_TOTAL]: "/lots-total-count",
  [enumEndpoints.USERS]: "/users",
  [enumEndpoints.REGIONS]: "/regions",
  [enumEndpoints.CITIES]: "/cities",
};
