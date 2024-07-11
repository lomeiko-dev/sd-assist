export interface IFieldsManager {
  object: any;
  addLazyProps: (name?: string, isCheckedNull?: boolean, indexForm?: number) => void;
  generateDataFields: (ignore_list?: string[]) => any;
  generateQueryString: (ignore_list?: string[]) => string;
  checkError: (key: string) => any;
  validateProps: (indexForm: number) => boolean;
}
