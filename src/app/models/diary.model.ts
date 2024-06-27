export interface Diary {
  items: Item[];
}

interface Item {
  type: string;
  date: string;
  diary_meal: string;
  nutritional_contents: Nutritionalcontents;
}

interface Nutritionalcontents {
  energy: Energy;
  fat: number;
  protein: number;
  sugar: number;
  cholesterol?: number;
  fiber?: number;
  vitamin_a?: number;
  vitamin_c?: number;
}

interface Energy {
  unit: string;
  value: number;
}
