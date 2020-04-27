import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import DatePicker from "react-native-datepicker"
import moment from "moment"
import { gray } from "../config/color"

export default ({ onChange, containerStyle }) => {
  const today = moment(new Date()).format("DD-MM-YYYY")
  const [active, setActive] = useState(false)
  const [currentDate, setDate] = useState(today)

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {active ? <Text style={styles.topic}>birtday</Text> : null}
      <DatePicker
        style={{ width: "100%" }}
        date={currentDate}
        mode='date'
        placeholder='select birthday'
        format='DD-MM-YYYY'
        minDate='01-01-2016'
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
        onDateChange={(date) => setDate(date)}
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
  },
})
