import React, { Component } from 'react';
import { View, Text } from 'react-native'

import { Tile } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class TileScreen extends Component {
    render() {
        return (
            <View>
                <Tile
                    imageSrc={require('../images/tile.jpg')}
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                    featured
                    caption="Some Caption Text"
                    onPress={() => {
                        this.refs.toast.show('onPress')
                    }}/>

                <Tile
                    imageSrc={require('../images/tile.jpg')}
                    title="Lorem ipsum dolor sit amet, consectetur"
                    icon={{name: 'play-circle', type: 'font-awesome'}}  // optional
                    contentContainerStyle={{height: 70}}
                    onPress={() => {
                        this.refs.toast.show('onPress')
                    }}>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>Caption</Text>
                        <Text>Caption</Text>
                    </View>

                </Tile>

                <Toast ref={'toast'}/>
            </View>
        )
    }
}