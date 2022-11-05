import { defineStore } from "pinia";

type User = {
  id: string;
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
      user: {
        id: "1",
        name: "Chris",
        email: "chrismmalecki@gmail.com"
      }
    };
  }
});
