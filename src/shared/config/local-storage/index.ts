enum enumLocalStorageKey {
  AUTH = "AUTH",
  LOT_ARCHIVE = "LOT_ARCHIVE",
}

export const localStorageKey: Record<enumLocalStorageKey, string> = {
  [enumLocalStorageKey.AUTH]: "auth",
  LOT_ARCHIVE: "lot-archive",
};
