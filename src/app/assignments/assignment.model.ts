export class Assignment {
  constructor(
    public id: number,
    public nom: string,
    public dateDeRendu: Date,
    public rendu: boolean = false
  ) {}

}
