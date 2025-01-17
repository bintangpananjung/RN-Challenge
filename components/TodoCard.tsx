import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { Button } from "@rneui/themed";
import { Card, Button, CheckBox, Icon, ListItem } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { limitDetailLength } from "../lib/function";

type Props = {
  val: any;
  done: boolean;
  deletefunction: any;
  doFunction: any;
  time: string;
  // navigation: any;
};

const TodoCard = (props: Props) => {
  // console.log(props.val);

  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        // props.navigation.
        navigation.navigate(
          "Edit Todo" as never,
          { itemValue: props.val } as never
        );
      }}
    >
      <CheckBox
        checked={props.done}
        checkedIcon={
          <Icon name="radio-button-checked" color="green" size={30} />
        }
        uncheckedIcon={
          <MaterialIcons name="radio-button-unchecked" color="grey" size={30} />
        }
        containerStyle={{ ...styles.checkboxContainer, ...styles.clear }}
        wrapperStyle={{ ...styles.checkboxWrapper, ...styles.clear }}
        onPress={e => {
          e.preventDefault();
          e.stopPropagation();
          props.doFunction();
        }}
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.text}>
          {limitDetailLength(props.val.detail, 70)}
        </Text>
        <Text style={styles.caption}>{props.time}</Text>
      </View>

      <View style={styles.buttonView}>
        <Button
          containerStyle={{ ...styles.buttonContainer, ...styles.clear }}
          buttonStyle={{ ...styles.button, ...styles.clear }}
          onPress={e => {
            e.preventDefault();
            e.stopPropagation();
            props.deletefunction();
          }}
        >
          <MaterialCommunityIcons
            name="delete-outline"
            size={20}
            style={{ position: "absolute" }}
            color="white"
          />
        </Button>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    minHeight: 65,
    // borderColor: "#FBFDFF",
    elevation: 4,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FBFDFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.13,
    shadowRadius: 10.62,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  clear: {
    margin: 0,
    padding: 0,
  },
  buttonContainer: {
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    width: "100%",
    borderRadius: 20,
    height: "100%",
    position: "relative",
    backgroundColor: "#D61C4E",
  },
  checkboxContainer: {
    width: 30,
    height: 30,
    // backgroundColor: "#000",

    justifyContent: "center",
    alignItems: "center",
  },
  checkboxWrapper: { width: 30, height: 30 },
  text: {
    fontFamily: "Poppins",
    flexWrap: "wrap",
    marginEnd: 10,
    flex: 1,
  },
  buttonView: { width: 30, height: 30, marginLeft: "auto" },
  caption: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#9c9b9b",
    textTransform: "capitalize",
  },
});

export default TodoCard;
