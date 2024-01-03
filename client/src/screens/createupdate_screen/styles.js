import { StyleSheet } from "react-native";
import ScreenRatio from "../../components/constants/ScreenRatio";
import colors from "../../components/constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    backgroundColor: colors.bgColor,
    alignItems: "center",
  },
  inputBox: {
    marginTop: ScreenRatio.height / 20,
    padding: 20,
    alignItems: "center",
  },
  inputText: {
    color: colors.black,
    marginTop: 20,
    fontSize: RFValue(20),
    fontWeight: "bold",
  },
  buttonContainer: {
    height: ScreenRatio.height / 20,
    backgroundColor: colors.black,
    marginTop: 20,
    width: ScreenRatio.width / 2,
    borderRadius: 30,
  },
  title: {
    fontSize: RFValue(15),
    color: colors.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: RFValue(14),
    color: colors.black,
    fontWeight: "bold",
  },
  leftMargin: {
    marginLeft: 10,
  },
  errorText: {
    fontSize: RFValue(12),
    color: colors.red,
  },
  input: {
    color: colors.black,
  },
  inputcontainer: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 1.1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default styles;
