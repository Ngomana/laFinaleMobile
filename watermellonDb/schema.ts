import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    //table schema go here
    tableSchema({
      name: "items",
      columns: [
        { name: "item_code", type: "string" },
        { name: "item_description", type: "string" },
        { name: "quantity", type: "string" },
        { name: "selling_price", type: "string" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "string" },
      ],
    }),
  ],
});
