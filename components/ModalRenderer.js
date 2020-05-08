import React from "react"
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native"
import closeLogo from "../assets/close.png"
import Text from "./Text"

export default ({ title, detail, index, id, onClose, prefix }) => {
  const style = styles(index)
  return (
    <View style={style.background}>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.titleContainer}>
            {prefix}
            <Text topic>{title}</Text>
          </View>
          <TouchableWithoutFeedback onPress={() => onClose(id)}>
            <Image source={closeLogo} style={style.close} />
          </TouchableWithoutFeedback>
        </View>
        <Text style={style.detail}>{detail}</Text>
      </View>
    </View>
  )
}
const { width } = Dimensions.get("window")
const styles = (index) =>
  StyleSheet.create({
    background: {
      width: "100%",
      height: "100%",
      backgroundColor: "#2d3436",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1000 + index,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    detail: { marginTop: 5 },
    close: {
      width: 15,
      height: 15,
    },
    container: {
      width: width - 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: "white",
    },
    titleContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
  })
