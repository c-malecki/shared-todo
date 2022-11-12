import { defineStore } from "pinia";
import type { Error, List } from "../types/global.types";
import axios from "axios";

interface State {
  lists: List[];
  error: Error | null;
}

export const useListsStore = defineStore("lists", {
  state: (): State => {
    return {
      lists: [],
      error: null
    };
  },
  actions: {
    setListsOnLogout() {
      this.lists = [];
    },
    async getUserLists(id) {
      await axios
        .get(`/user/${id}/lists`)
        .then((res) => {
          this.lists = res.data.userLists;
          this.error = null;
          console.log("lists set");
        })
        .catch((err) => {
          this.lists = [];
          this.error = err.data;
        });
    }
  }
});
