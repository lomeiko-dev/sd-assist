enum enumLocalStorageKey {
  AUTH = "AUTH",
  LOT_ARCHIVE = "LOT_ARCHIVE",
  FILTER_FORM = "FILTER_FORM",
}

export const localStorageKey: Record<enumLocalStorageKey, string> = {
  [enumLocalStorageKey.AUTH]: "auth",
  [enumLocalStorageKey.LOT_ARCHIVE]: "lot-archive",
  [enumLocalStorageKey.FILTER_FORM]: "filter-form",
};
