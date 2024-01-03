import { Text, SafeAreaView, View, TextInput } from "react-native";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles";
import Buttons from "../../components/Buttons";
import { RadioButton } from "react-native-paper";
import colors from "../../components/constants/colors";
import createStudent from "../HomeScreen/api_hooks/create_student/createStudent";
import Toast from "react-native-simple-toast";
import {
  NavigationProp,
  ParamListBase,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import updateStudent from "../HomeScreen/api_hooks/update_student/updateStudent";

const CreateUpdateScreen = ({ route }) => {
  const data = route?.params;
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [gender, setGender] = useState("male");
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [errorName, setErrorName] = useState(false);

  const [errorAge, setErrorAge] = useState(false);

  const [loading, setLoading] = useState(false);

  const loadData = useCallback(() => {
    setGender(data.item.gender);
    setName(data?.item?.name);
    setAge(data?.item?.age);
  }, [data.item]);

  useEffect(() => {
    if (isFocused && data.type === "Update") {
      loadData();
    }
  }, [data.type, isFocused, loadData]);

  const changeGender = (value) => {
    setGender(value);
  };

  const changeName = useCallback((e) => {
    setName(e);
  }, []);

  const changeAge = useCallback((e) => {
    let value = parseInt(e, 10);
    setAge(value);
  }, []);

  const validate = () => {
    let status = true;

    // Validate Name
    if (!name) {
      status = false;
      setErrorName("Name is Empty");
    } else {
      const isValidName = /^[a-zA-Z ]+$/.test(name);
      if (!isValidName) {
        setErrorName("Name cannot be integer");
        status = false;
      } else {
        setErrorName(false);
      }
    }

    // Validate Age
    if (!age) {
      status = false;
      setErrorAge("Age is Empty");
    } else {
      setErrorAge(false);
    }

    return status;
  };

  const addStudents = async () => {
    let status = validate();
    if (status) {
      setLoading(true);
      let student = {
        age: age,
        name: name,
        gender: gender,
      };
      let response = await createStudent(student);
      if (response) {
        setLoading(false);
        Toast.show("Created Sucessfully", Toast.LONG);
        navigation.goBack();
      } else {
        Toast.show("Create Failed", 1);
        setLoading(false);
      }
    }
  };

  const updateStudents = async () => {
    let status = validate();
    if (status) {
      setLoading(true);
      let student = {
        age: age,
        name: name,
        gender: gender,
      };
      let response = await updateStudent(data?.item?.id, student);
      if (response) {
        setLoading(false);
        Toast.show("Updated Sucessfully", Toast.LONG);
        navigation.goBack();
      } else {
        Toast.show("Update Failed", 1);
        setLoading(false);
      }
    }
  };

  const hideNamerror = () => {
    setErrorName(false);
  };

  const hideAgeError = () => {
    setErrorAge(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.inputText}>{data?.type} Students</Text>
      <View style={styles.inputBox}>
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="Name"
            onChangeText={changeName}
            onFocus={() => hideNamerror()}
            style={styles.input}
            value={name}
          />
        </View>
        {errorName && <Text style={styles.errorText}>{errorName}</Text>}
        <View style={styles.inputcontainer}>
          <TextInput
            placeholder="Age"
            onChangeText={changeAge}
            value={age ? age.toString() : ""}
            onFocus={() => hideAgeError()}
            style={styles.input}
            keyboardType="number-pad"
          />
        </View>
        {errorAge && <Text style={styles.errorText}>{errorAge}</Text>}
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.buttonTitle}>Male</Text>
            <RadioButton.Android
              value="male"
              status={gender === "male" ? "checked" : "unchecked"}
              onPress={() => changeGender("male")}
              uncheckedColor={colors.gray}
              color={colors.black}
            />
          </View>
          <View style={styles.row}>
            <Text style={[styles.buttonTitle, styles.leftMargin]}>Female</Text>
            <RadioButton.Android
              value="second"
              status={gender === "female" ? "checked" : "unchecked"}
              onPress={() => changeGender("female")}
              uncheckedColor={colors.gray}
              color={colors.black}
            />
          </View>
        </View>

        <Buttons
          type="Text"
          title={data?.type}
          containerStyles={styles.buttonContainer}
          textStyle={styles.title}
          onPress={() =>
            data?.type === "Create" ? addStudents() : updateStudents()
          }
          isLoading={loading}
          loadercolor={colors.white}
          loaderSize={"large"}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateUpdateScreen;
