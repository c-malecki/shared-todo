import { defineStore } from "pinia";
import { useListsStore } from "./lists";
import type { User, Error } from "../types/global.types";
import axios from "axios";

interface State {
  initialized: boolean;
  user: User | null;
  error: Error | null;
}

export const useAppStore = defineStore("app", {
  state: (): State => {
    return {
      initialized: false,
      user: null,
      error: null
    };
  },
  actions: {
    async submitLoginCreds(data) {
      await axios
        .post("/login", data)
        .then((res) => {
          this.user = res.data.user;
          this.error = null;
          console.log("user set");
        })
        .catch((err) => {
          this.user = null;
          this.error = err.data;
        });
    },
    async submitLogout() {
      const listsStore = useListsStore();
      await axios
        .delete("/logout")
        .then((res) => {
          this.user = res.data.user;
          listsStore.setListsOnLogout();
          this.error = null;
          console.log("user unset");
        })
        .catch((err) => {
          this.error = err.data;
        });
    }
  }
});
