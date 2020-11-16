import SQLite from "react-native-sqlite-storage";

export const useSqlite = SQLite.openDatabase(
  {
    name: "SQLite",
    location: "default",
    createFromLocation: "~numberz.db",
  },
  () => {
    console.log("Connected to Database");
  },
  (e) => {
    console.log("Error: " + e);
  }
);
