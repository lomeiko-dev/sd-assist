export interface IFieldsManager {
  object: any;
  addLazyProps: (name?: string, isCheckedNull?: boolean, indexForm?: number) => void;
  generateDataFields: (ignore_list: string[]) => any;
  checkError: (key: string) => any;
  validateProps: (indexForm: number) => boolean;
}
