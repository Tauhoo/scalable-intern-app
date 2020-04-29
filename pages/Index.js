import React from "react"
import { StyleSheet } from "react-native"
import Button from "../components/Button"
import Link from "../components/Link"
import Container from "../components/Container"
import Card from "../components/Card"
import Text from "../components/Text"

export default () => {
  return (
    <Container>
      <Card>
        <Text topic style={styles.topic}>
          We will never walk alone.
        </Text>
        <Link src='register'>
          <Button title='register' />
        </Link>
      </Card>
    </Container>
  )
}

const styles = StyleSheet.create({
  topic: {
    marginVertical: 10,
  },
})
