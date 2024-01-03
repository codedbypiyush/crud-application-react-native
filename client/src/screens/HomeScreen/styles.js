import { StyleSheet } from "react-native";
import ScreenRatio from "../../components/constants/ScreenRatio";
import colors from "../../components/constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    backgroundColor: colors.bgColor,
  },
  button: {
    alignItems: "flex-end",
    width: "99%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.black,
    margin: 10,
  },
  StudentsListcontainer: {
    marginVertical: ScreenRatio.height / 30,
    padding: 20,
    flex: 1,
  },
  emptyText: {
    fontSize: RFValue(14),
    color: colors.gray,
  },
  emptyContainer: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 1.1,
  },
  rowRendercontainer: {
    alignItems: "center",
    height: ScreenRatio.height / 8,
    width: ScreenRatio.width / 1.1,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    marginVertical: 10,
  },
  rightBox: {
    height: ScreenRatio.height / 20,
    alignItems: "center",
    justifyContent: "center",
  },
  sl: {
    flex: 0.5,
  },
  age: {
    flex: 1,
  },
  name: {
    flex: 2,
  },
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: RFValue(10),
    color: colors.black,
  },
  flexRow: {
    flexDirection: "row",
  },
  rightContainer: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 1.1,
    alignItems: "flex-end",
  },
  listTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.black,
    height: ScreenRatio.height / 20,
    borderRadius: 8,
    width: ScreenRatio.width / 1.1,
  },
  rightLineBox: {
    height: ScreenRatio.height / 20,
    borderRightWidth: 1,
    borderRightColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  studentstitle: {
    fontSize: RFValue(10),
    color: colors.white,
  },
  RenderRightActioncontainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "25%",
  },
  rightActionbuttonContainer: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: colors.black,
    marginRight: 20,
  },
});

export default styles;
