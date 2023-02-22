import { User } from './User';

export interface UserContextI {
  user: User | null;
  setUser: (user: User | null) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
