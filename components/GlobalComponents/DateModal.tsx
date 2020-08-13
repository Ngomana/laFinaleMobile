import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

const DateModal = (
  showDateModal: boolean,
  { setDateInputHandler, cancelDateInputHandler }: any
) => {
  return (
    <View>
      <Modal visible={showDateModal}>
        <View style={styles.modal_body}>
          <Text>Date Picker</Text>

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
