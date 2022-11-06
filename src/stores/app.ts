import { defineStore } from "pinia";

type User = {
  id: number;
  email: string;
  name: string;
};

interface State {
  initialized: boolean;
  user: User | null;
}

export const useAppStore = defineStore("app", {
  state: (): State => {
    return {
      initialized: false,
      user: <User>{
        id: 1,
        name: "Chris",
        email: "chrismmalecki@gmail.com"
      }
    };
  }
});
