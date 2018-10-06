export class TrainingProgram {
  _id: {
    $oid: string;
  };
  name = 'Programa de treinamento';
  date_start: Date;
  date_end: Date;
  active = true;
  userId: string;
}
