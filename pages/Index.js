import React from "react"
import { StyleSheet, Image, Dimensions } from "react-native"
import Button from "../components/Button"
import Link from "../components/Link"
import Container from "../components/Container"
import Card from "../components/Card"
import Text from "../components/Text"
import test from "../assets/test.jpeg"

export default () => (
  <Container>
    <Card>
      <Text style={styles.topic}>Free 13,000,000$</Text>
      <Image style={styles.image} source={test} resizeMode='contain' />
      <Link src='register'>
        <Button title='register' />
      </Link>
    </Card>
  </Container>
)

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
})
