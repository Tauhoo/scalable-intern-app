import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import DatePicker from "react-native-datepicker"
import moment from "moment"
import { gray } from "../config/color"

export default ({ onChange, containerStyle, value }) => {
  const today = moment(new Date()).format("DD-MM-YYYY")
  const [active, setActive] = useState(false)

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {active ? <Text style={styles.topic}>birtday</Text> : null}
      <DatePicker
        style={{ width: "100%" }}
        date={value}
        mode='date'
        placeholder='select birthday'
        format='DD-MM-YYYY'
        maxDate={today}
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        customStyles={{
          dateIcon: {
            display: "none",
          },
          dateInput: {
            borderWidth: 0,
          },
        }}
        onDateChange={onChange}
        onOpenModal={() => setActive(true)}
        onCloseModal={() => setActive(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: gray,
    borderRadius: 10,
    overflow: "hidden",
  },
  topic: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 12,
    color: "#2c3e50",
  },
})
