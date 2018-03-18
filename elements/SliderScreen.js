import React, { Component } from 'react';
import { View, Text } from 'react-native'

import { Slider } from 'react-native-elements'

export default class SliderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0.2
        }
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                <Slider
                    value={this.state.value}
                    onValueChange={(value) => this.setState({value})} />
                <Text>Value: {this.state.value}</Text>
            </View>
        )
    }
}