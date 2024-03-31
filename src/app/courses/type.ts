export interface ICourse {
  courseName: string;
  outline: string;
  agenda: string;
  afterSaleService: string;
  images: string[];
  trainer: Trainer[];
}

interface Trainer {
  name: string;
  image: string;
  experience: string;
}
