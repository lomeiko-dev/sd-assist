export interface IFile {
  name: string;
  data: string;
}

export interface IFileImage extends IFile {
  rotateIndex: number;
}
