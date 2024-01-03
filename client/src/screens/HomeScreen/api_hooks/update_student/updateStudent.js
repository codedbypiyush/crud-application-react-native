import axios from "axios";
import { BaseUrl } from "../../../../../staging";
import Toast from "react-native-simple-toast";

const updateStudent = async (id, data) => {
  console.log("data", id, data);
  let response = false;
  try {
    let res = await axios.put(`${BaseUrl}/update/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = res?.data;
  } catch (err) {
    console.log("err", err);
    response = false;
    Toast.show("Network Requist Failed", Toast.LONG);
  }
  return response;
};

export default updateStudent;
