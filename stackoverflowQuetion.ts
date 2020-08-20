i'm trying to access the ```code``` and ```name``` value from within my child component which is a flatlist in to the parent component:
My flatList is as follows & it house a child component on which it will render items to. But however i get undefind or maybe i've used the wrong approach' +
```
//Customer View Componet, this will be rendered inside the flatlist
    const CustomerView = ({ code, name, email, balance, buttonPress }: any) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={buttonPress}>
        <Text>Code: {code}</Text>
        <Text>Name: {name}</Text>
        <Text>E-Mail: {email}</Text>
        <Text>Balance: {balance}</Text>
      </TouchableOpacity>
    </View>
  );
};
```

And below is my flatList component which will render the above componet when data gets passed through
```
//FlatList Component
const CustomerFlatList = ({
  customerData,
  onPressSelectCustomer,
}: any) => {
  return (
    <View style={styles.body}>
      <FlatList
        data={customerData}
        keyExtractor={(customerData) => customerData.code.toString()}
        //I need to access code and name in the parent component
        renderItem={({ item: { code, name, email, balance } }) => {
          return (
            <View>
              <CustomerView
                code={code}
                name={name}
                email={email}
                balance={balance}
                buttonPress={onPressSelectCustomer}
              />
            </View>
          );
        }}
      />
    </View>
  );
};
```

And my home component which is supposed to get ```code, name``` passed through in order to trigger an event with there data being passed through
```
//And My Parent component
const SelectCustomerScreen = ({navigation}) => {
  const customers = useSelector((state: RootStateOrAny) => state.customers);

  const getCustomerDetails = (code, name) => {
      //navigation.navigate("orderScreen");
      console.log(code, name)
  }
  return (
    <View style={{ flex: 1 }}>
      <CustomerFlatList
        customerData={customers}
        doc_type={documentType}
        invoiceScreen={invoiceScreen}
        quotationScreen={quotationScreen}
        onPressSelectCustomer={getCustomerDetails}
      />
    </View>
  );
};
```


