export interface IRequetOptions {
  setErrorPhone?: (value: string) => void;
  setErrorEmail?: (value: string) => void;
  setErrorINN?: (value: string) => void;
  clearField?: () => void;
}
