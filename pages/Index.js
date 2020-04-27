import React from "react"
import { Text, Button } from "react-native"
import setupLink from "../libs/setupLink"
import Container from "../components/Container"

const Butt = setupLink(({ goto, title }) => (
  <Button onPress={() => goto("register")} title={title} />
))

export default () => {
  return (
    <Container>
      <Text>index</Text>
      <Butt title='ice'></Butt>
    </Container>
  )
}
