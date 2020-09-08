import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema";
import { Item } from "./modals/item";

//first, create the adapter to the underlying database
// @ts-ignore
const adapter = new SQLiteAdapter({
  schema,
  synchronous: true,
});

const database = new Database({
  adapter,
  modelClasses: [
    //Post, //You'll add Models to Watermelo here
    Item,
  ],
  actionsEnabled: true,
});

export default database;
