import React, { Component } from 'react';
import { View } from 'react-native'

import { SocialIcon } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class SocialIconScreen extends Component {
    render() {
        return (
            <View>
                <SocialIcon
                    type='twitter'
                    onPress={() => {
                        this.refs.toast.show('twitter')
                    }}/>

                <SocialIcon
                    raised={false}
                    type='gitlab'
                    onPress={() => {
                        this.refs.toast.show('gitlab')
                    }}/>

                <SocialIcon
                    light
                    type='medium'
                    onPress={() => {
                        this.refs.toast.show('medium')
                    }}/>

                <SocialIcon
                    light
                    raised={false}
                    type='medium'
                    onPress={() => {
                        this.refs.toast.show('medium')
                    }}/>

                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    onPress={() => {
                        this.refs.toast.show('Sign In With Facebook')
                    }}/>

                <SocialIcon
                    title='Some Twitter Message'
                    button
                    type='twitter'
                    onPress={() => {
                        this.refs.toast.show('Some Twitter Message')
                    }}/>

                <SocialIcon
                    button
                    type='medium'
                    onPress={() => {
                        this.refs.toast.show('medium')
                    }}/>

                <SocialIcon
                    button
                    light
                    type='instagram'
                    onPress={() => {
                        this.refs.toast.show('instagram')
                    }}/>

                <Toast ref={'toast'}/>
            </View>
        )
    }
}