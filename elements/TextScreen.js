import React, { Component } from 'react';
import { View } from 'react-native'

import { Text } from 'react-native-elements'

export default class TextScreen extends Component {
    render() {
        return (
            <View>
                <Text h1>Heading 1</Text>
                <Text h2>Heading 2</Text>
                <Text h3>Heading 3</Text>
                <Text h4>Heading 4</Text>
            </View>
        )
    }
}