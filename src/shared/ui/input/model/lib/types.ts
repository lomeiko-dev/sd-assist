export interface IFieldsManager {
  object: any;
  addLazyProps: (name?: string, isCheckedNull?: boolean, indexForm?: number) => void;
  generateDataFields: () => void
  checkError: (key: string) => any;
  validateProps: (indexForm: number) => boolean;
}
