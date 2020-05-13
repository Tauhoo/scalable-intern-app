import React from "react"
import { StyleSheet } from "react-native"
import Card from "./Card"
import Text from "./Text"

import { connect } from "react-redux"
import { loginStates } from "../store/actions/user"

const ProfileCard = ({ loginState, profile }) => {
  if (loginState === loginStates.LOGINED) {
    const { firstname, lastname, age } = profile
    return (
      <Card style={styles.container}>
        <Text topic>Profile</Text>
        <Text>
          Mr. {firstname} {lastname}
        </Text>
        <Text>{age} years old</Text>
      </Card>
    )
  } else if (loginState === loginStates.LOGING_IN) {
    return (
      <Card style={styles.container}>
        <Text topic>Loging in ...</Text>
      </Card>
    )
  } else {
    return null
  }
}

const mapStateToProps = ({ userReducer }) => userReducer

export default connect(mapStateToProps, null)(ProfileCard)

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
})
