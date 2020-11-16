import { RootStateOrAny } from "react-redux";
import { appSelector } from "redux";

interface iSearchFunction {
  searchItemText: string;
  stateData: any;
}
export const searchFunction = ({
  searchItemText,
  stateData,
}: iSearchFunction) => {
  const itemData = appSelector((state: RootStateOrAny) => {
    if (searchItemText.length === 0) {
      return state.stateData;
    }
  });
};
