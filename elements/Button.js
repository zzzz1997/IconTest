import React, { Component } from 'react';
import { View } from 'react-native'

import { Button } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

export default class ButtonScreen extends Component {
    render() {
        return (
            <View>
                <Button
                    title='BUTTON'
                    backgroundColor={'violet'}/>

                <Button
                    raised
                    icon={{name: 'cached'}}
                    title='BUTTON WITH ICON'
                    backgroundColor={'aqua'}/>

                <Button
                    large
                    iconRight={{name: 'code'}}
                    title='LARGE WITH RIGHT ICON'
                    backgroundColor={'darkcyan'}/>

                <Button
                    large
                    icon={{name: 'envira', type: 'font-awesome'}}
                    title='LARGE WITH ICON TYPE'
                    backgroundColor={'gold'}/>

                <Button
                    large
                    icon={{name: 'squirrel', type: 'octicon'}}
                    title='OCTICON'
                    backgroundColor={'orangered'}/>

                <Toast ref={'toast'}/>
            </View>
        )
    }
}