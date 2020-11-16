import { iCustomer } from "../redux/reducers/Customer_reducer/customer_types";
import { getRepository } from "typeorm/browser";
import { Customer } from "../typeorm/Entity/Customer";
import { appDispatch } from "../redux/index";
import { createCustomerAction } from "../redux/reducers/Customer_reducer/customer";

export const createCustomer = async ({
  customerId,
  customerCode,
  customerName,
  customerContactNumber,
  customerEmail,
  createdAt,
  updatedAt,
}: Partial<iCustomer>) => {
  //if theres internet connection

  //if theres not internet
  try {
    //Add to redux
    appDispatch(
      createCustomerAction({
        customerId: customerId,
        customerCode: customerCode,
        customerName: customerName,
        customerContactNumber: customerContactNumber,
        customerEmail: customerEmail,
        createdAt: createdAt,
        updatedAt: updatedAt,
      })
    );

    //add to sqlite
    const customerRepository = getRepository(Customer);

    let newCustomer = new Customer();
    newCustomer.customerId = customerId;
    newCustomer.customerCode = customerCode;
    newCustomer.customerName = customerName;
    newCustomer.customerContactNumber = customerContactNumber;
    newCustomer.customerEmail = customerEmail;
    newCustomer.createdAt = createdAt;
    newCustomer.updatedAt = updatedAt;
    await customerRepository.save(newCustomer);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
