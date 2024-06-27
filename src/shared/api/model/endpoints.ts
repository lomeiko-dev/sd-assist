enum enumEndpoints {
  LOTS = "LOTS",
  USERS = "USERS",
  CITIES = "CITIES",
  REGIONS = "REGIONS",
  CAR_BRAND = "CAR_BRAND",
  CAR_MODEL = "CAR_MODEL",
  CAR_GENERATION = "CAR_GENERATION",
  FILE = "FILE",
}

export const Endpoints: Record<enumEndpoints, string> = {
  [enumEndpoints.LOTS]: "/lots",
  [enumEndpoints.USERS]: "/users",
  [enumEndpoints.REGIONS]: "/regions",
  [enumEndpoints.CITIES]: "/cities",
  [enumEndpoints.CAR_BRAND]: "/car_brand",
  [enumEndpoints.CAR_MODEL]: "/car_model",
  [enumEndpoints.CAR_GENERATION]: "/car_generation",
  [enumEndpoints.FILE]: "/files",
};
