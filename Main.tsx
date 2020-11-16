import "react-native-gesture-handler";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { Provider } from "react-redux";
import { store } from "./redux";
import { createConnection, getRepository, Connection } from "typeorm/browser";
import { Customer } from "./typeorm/Entity/Customer";

const MainAppEntry: () => ReactNode = () => {
  const [defaultConnect, setConnection] = useState<Connection | null>(null);

  const setupConnection = useCallback(async () => {
    try {
      const connection = await createConnection({
        type: "react-native",
        database: "numberz",
        location: "~default",
        logging: ["error", "query", "schema"],
        synchronize: true,
        entities: [Customer],
      });

      await setConnection(connection);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!defaultConnect) {
      setupConnection();
    }

    //test
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default MainAppEntry;
