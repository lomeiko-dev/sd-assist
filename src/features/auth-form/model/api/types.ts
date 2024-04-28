export interface IAuthRequetOptions {
  setError?: (err: string) => void;
  clearField?: () => void;
}

export interface IRegRequetOptions {
  setErrorPhone?: (value: string) => void;
  setErrorEmail?: (value: string) => void;
  setErrorINN?: (value: string) => void;
  clearField?: () => void;
}
