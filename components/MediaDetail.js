import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Thumbnail
} from "native-base";

import { ItemHeader } from '../components/Header'

function MediaDetail({ props, data }) {

  var item = data.Media;

  if (item && item.bannerImage) {
    return (
      <Content>
      <Card>
      <CardItem>
        <Left>
          <Thumbnail square large source={{uri: item.coverImage.large}} />
          <Body>
            <Text>{item.title.romaji}</Text>
            <Text note>{item.id}</Text>
          </Body>
        </Left>
      </CardItem>
        <CardItem>
          <Body>
            <Text>
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>GeekyAnts</Text>
        </CardItem>
     </Card>
     </Content>
    )
  }

  return <View/>

}
var id = 21717
const MEDIA_DETAILS_QUERY = gql`
query($id: Int!) {
  Media(id: $id) {
    coverImage {
      large
      medium
    }
    bannerImage
		title {
		  romaji
		  english
		  native
		  userPreferred
		}
    description
  }
}
`

// TODO
export default graphql(MEDIA_DETAILS_QUERY, {
  options: ({ id }) => ({ variables: { id } })
},{
props: ({ ownProps, data }) => {
  (
    {'props': ownProps,
    'data': data}
  )

}}
)(MediaDetail);
