import { find } from "lodash";

export const convertFormValue = (arr: any, value: string) => {
  const singleObj = find(arr, (a) => a.value === value);
  if (singleObj) {
    return singleObj.label;
  } else {
    return "";
  }
};
