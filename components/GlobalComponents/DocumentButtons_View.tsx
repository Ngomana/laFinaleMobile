import React from "react";
import { View } from "react-native";
import DeleteButton from "./DeleteButton";
import MainButton from "./MainButton";

const DocumentButtonView = ({
  onPressDelete,
  onPressEmail,
  onPressShare,
  onPressEdit,
  onPressToInvoice,
}: any) => {
  return (
    <View>
      <MainButton buttonCaption={"E-Mail"} onPressHabdler={onPressEmail} />
      <MainButton buttonCaption={"Share"} onPressHabdler={onPressShare} />
      <MainButton buttonCaption={"Edit"} onPressHabdler={onPressEdit} />
      <MainButton
        buttonCaption={"To Invoice"}
        onPressHabdler={onPressToInvoice}
      />
      <DeleteButton
        buttonCaption={"Delete"}
        onPressButtonHandler={onPressDelete}
      />
    </View>
  );
};

export default DocumentButtonView;
