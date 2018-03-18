import React, { Component } from 'react';
import { View } from 'react-native'

import { ButtonGroup } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

const buttons = ['Hello', 'World', 'Buttons'];

export default class ButtonGroupScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedIndex: 2
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        this.refs.toast.show(buttons[selectedIndex])
    }

    render () {
        const { selectedIndex } = this.state;

        return (
            <View>

                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 30}}/>

                <Toast ref={'toast'}/>

            </View>
        )
    }
}