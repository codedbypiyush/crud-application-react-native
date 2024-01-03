import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useLayoutEffect, useRef } from "react";
import ScreenRatio from "../../components/constants/ScreenRatio";
import colors from "../../components/constants/colors";
import Buttons from "../../components/Buttons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { SimpleRecycler } from "react-native-simple-recyclerlistview";
import getAllStudents from "./api_hooks/get_all_students/get_all_students";
import deleteStudent from "./api_hooks/delete_student/deleteStudent";
import Toast from "react-native-simple-toast";
import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  const createUser = async () => {
    navigation.navigate("CreateUpdateScreen", { type: "Create" });
  };
  const recyclerRef = useRef(null);
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (isFocused) {
      loadData();
    }
  }, [isFocused]);

  const loadData = async () => {
    let students = await getAllStudents();

    if (students) {
      recyclerRef.current.loadDataFromApi(students);
    } else {
      recyclerRef.current.loadDataFromApi([]);
    }
  };

  const deleteStudentFn = useCallback(async (id, index) => {
    let response = await deleteStudent(id);
    if (response) {
      recyclerRef.current?.SpliceData(index);
      Toast.show("Delete Successuflly", Toast.LONG);
    } else {
      Toast.show("Delete Failed", Toast.LONG);
    }
  }, []);

  const updateStudent = useCallback(
    (selectedItem) => {
      navigation.navigate("CreateUpdateScreen", {
        type: "Update",
        item: selectedItem,
      });
    },
    [navigation]
  );

  // render item
  const rowRenderer = (type, data, index) => {
    const { item } = data;
    // console.log(item);
    return (
      <View style={styles.rowRendercontainer}>
        <View style={styles.flexRow}>
          <View style={[styles.sl, styles.rightBox]}>
            <Text style={styles.title}>{item.id}</Text>
          </View>
          <View style={[styles.name, styles.rightBox]}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={[[styles.age, styles.rightBox]]}>
            <Text style={styles.title}>{item.age}</Text>
          </View>
          <View style={[styles.flex]}>
            <Text style={styles.title}>{item.gender}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={[styles.RenderRightActioncontainer]}>
            <Buttons
              type="vector Icon"
              fontFamily="FontAwesome5"
              iconName="trash"
              iconSize={13}
              iconcolor={colors.white}
              containerStyles={styles.rightActionbuttonContainer}
              onPress={() => deleteStudentFn(item.id, index)}
            />
            <Buttons
              type="vector Icon"
              fontFamily="FontAwesome5"
              iconName="edit"
              iconcolor={colors.white}
              containerStyles={styles.rightActionbuttonContainer}
              onPress={() => updateStudent(item)}
              iconSize={13}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* crreate and update students buttons */}
      <View style={styles.button}>
        <View style={styles.row}>
          <Buttons
            type="vector Icon"
            fontFamily="FontAwesome5"
            iconName="user-plus"
            iconcolor={colors.white}
            containerStyles={styles.buttonContainer}
            onPress={() => createUser()}
          />
        </View>
      </View>
      {/* students List */}
      <View style={styles.StudentsListcontainer}>
        {/* students list titles name,age,grade */}
        <View style={styles.listTitleContainer}>
          <View style={[styles.sl, styles.rightLineBox]}>
            <Text style={styles.studentstitle}>ID</Text>
          </View>
          <View style={[styles.name, styles.rightLineBox]}>
            <Text style={styles.studentstitle}>Name</Text>
          </View>
          <View style={[[styles.age, styles.rightLineBox]]}>
            <Text style={styles.studentstitle}>Age</Text>
          </View>
          <View style={[styles.flex]}>
            <Text style={styles.studentstitle}>Gender</Text>
          </View>
        </View>
        <SimpleRecycler
          emptyText="No Students Found Add One "
          height={ScreenRatio.height / 10}
          width={ScreenRatio.width}
          activityColor={colors.black}
          activitySize={"large"}
          rowRenderer={rowRenderer}
          emptyTextStyle={styles.emptyText}
          ref={recyclerRef}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
