import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView, View } from "react-native";

const DatePicker = ({ displayType }) => {
  const today = new Date(Date.now());

  return (
    <DateTimePicker testID="DatePicker" value={today} display={displayType} />
  );
};

export default DatePicker;
