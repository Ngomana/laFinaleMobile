import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateModal = (
  showDateModal: boolean,
  { setDateInputHandler, cancelDateInputHandler }: any,
  dateValue: any,
  dateOnChangeHandler: any
) => {
  return (
    <View>
      <Modal visible={true}>
        <View style={styles.modal_body}>
          <Text>Date Picker</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={dateValue}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={dateOnChangeHandler}
          />
          <View>
            <Button title={"Set"} onPress={setDateInputHandler} />
            <Button title={"Cancel"} onPress={cancelDateInputHandler} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal_body: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default DateModal;
