import React, { Component } from 'react';
import { View } from 'react-native'

import { Avatar } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class AvatarScreen extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                <Avatar
                    small
                    rounded
                    icon={{name: 'user', type: 'font-awesome'}}
                    onPress={() => this.refs.toast.show('user')}
                    activeOpacity={0.7}
                    containerStyle={{marginTop: 115}}/>

                <Avatar
                    medium
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                    onPress={() => this.refs.toast.show("https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg")}
                    activeOpacity={0.7}
                    containerStyle={{marginTop: 100}}/>

                <Avatar
                    large
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                    onPress={() => this.refs.toast.show("https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg")}
                    activeOpacity={0.7}
                    containerStyle={{marginTop: 75}}/>

                <Avatar
                    xlarge
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                    onPress={() => this.refs.toast.show("https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg")}
                    activeOpacity={0.7}/>

                <Toast ref="toast"/>

            </View>
        );
    }
}