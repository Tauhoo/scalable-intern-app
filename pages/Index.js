import React from "react"
import { StyleSheet, Image, Dimensions } from "react-native"
import ProfileCard from "../components/ProfileCard"
import Button from "../components/Button"
import Link from "../components/Link"
import Container from "../components/Container"
import Card from "../components/Card"
import Text from "../components/Text"
import test from "../assets/test.jpeg"

import { connect } from "react-redux"
import { loginStates } from "../store/actions/user"

const Index = ({ loginState }) => {
  return (
    <Container>
      <ProfileCard />
      <Card style={styles.card}>
        <Text style={styles.topic}>Free 13,000,000$</Text>
        <Image style={styles.image} source={test} resizeMode='contain' />
        {loginState === loginStates.NOT_LOGINED ? (
          <>
            <Link src='login'>
              <Button title='login' containerStyle={styles.push} />
            </Link>
            <Link src='register'>
              <Button title='register' />
            </Link>
          </>
        ) : null}
      </Card>
    </Container>
  )
}

const mapStateToProps = ({ userReducer }) => userReducer
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Index)

const { height, width } = Image.resolveAssetSource(test)
const fullWidth = Dimensions.get("window").width - 60
const ratio = height / width

const styles = StyleSheet.create({
  topic: {
    marginTop: 10,
    marginBottom: 15,
  },
  image: {
    height: fullWidth * ratio,
    width: fullWidth,
    marginBottom: 10,
    borderRadius: 10,
  },
  push: {
    marginBottom: 10,
  },
})
