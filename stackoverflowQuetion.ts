I created a customer type
```
export interface ICustomer {
  customer_code: string;
  name: string;
}
```

And imported it to my reducer and configured my intial state within this file
```
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICustomer,
} from "../types/createInvoice_types";

const InvoiceCustomerState: ICustomer[] = [];

export const createInvoiceCustomerSlice = createSlice({
  name: "CustomerToInvoice",
  initialState: invoiceDetailsState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<ICustomer>) => {
        state.push(payload);
      },
      prepare: (customer: Partial<ICustomer>) => ({
        payload: customer,
      }),
    },
    remove: (state) => {
      return InvoiceCustomerState;
    },
  },
});

export const {
  create: addCustomerToInvoice,
  remove: deleteCustomerToInvoice,
} = createInvoiceCustomerSlice.actions;
```

and in the component where i want to use it
```
import {
  useSelector,
  RootStateOrAny,

} from "react-redux";

  const customer = useSelector(
    (state: RootStateOrAny) => state.customerToInvoice
  );
  
```
when i ```console.log(customer)``` i get ```  [{"code": "123", "name": "Cash Customer"}] ```

but when i try ```console.log(customer.name)``` i get ```undefined```

I also tried this and i still get undefined
```
interface IRootState {
  customer_code: string;
  name: string;
}

 const customer3 = useSelector((state: IRootState) => {
    state.customerToInvoice.name;
  });
```

Could someone please point out to what i've done wrong

