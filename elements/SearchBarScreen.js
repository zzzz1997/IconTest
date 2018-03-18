import React, { Component } from 'react';
import { View } from 'react-native'

import { SearchBar } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class SearchBarScreen extends Component {
    render() {
        return (
            <View>
                <SearchBar
                    showLoadingIcon
                    onChangeText={() => {
                        this.refs.toast.show('onChangeText')
                    }}
                    onClearText={() => {
                        this.refs.toast.show('onClearText')
                    }}
                    clearIcon={{name: 'clear'}}
                    placeholder='Type Here...' />

                <SearchBar
                    noIcon
                    onChangeText={() => {
                        this.refs.toast.show('onChangeText')
                    }}
                    onClearText={() => {
                        this.refs.toast.show('onClearText')
                    }}
                    placeholder='Type Here...' />

                <SearchBar
                    round
                    onChangeText={() => {
                        this.refs.toast.show('onChangeText')
                    }}
                    onClearText={() => {
                        this.refs.toast.show('onClearText')
                    }}
                    placeholder='Type Here...' />

                <SearchBar
                    lightTheme
                    onChangeText={() => {
                        this.refs.toast.show('onChangeText')
                    }}
                    onClearText={() => {
                        this.refs.toast.show('onClearText')
                    }}
                    placeholder='Type Here...' />

                <SearchBar
                    lightTheme
                    onChangeText={() => {
                        this.refs.toast.show('onChangeText')
                    }}
                    onClearText={() => {
                        this.refs.toast.show('onClearText')
                    }}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Type Here...' />

                <Toast ref={'toast'}/>
            </View>
        )
    }
}