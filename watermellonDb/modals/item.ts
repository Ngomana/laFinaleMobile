import { Model } from "@nozbe/watermelondb";
import { field, date } from "@nozbe/watermelondb/decorators";

export class Item extends Model {
  static table = "items";

  @field("item_code") itemCode;
  @field("item_description") itemDescription;
  @field("quantity") quantity;
  @field("selling_price") sellingPrice;
  @date("create_at") createdAt;
  @date("updated_at") updatedAt;
}
