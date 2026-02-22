export type CategoryType = 'Social' | 'Environmental' | 'Economic';

export interface Effect {
  id: string;
  text: string;
  category: CategoryType;
  icon: string;
  explanation: string;
}
