import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

import { Card, ListItem, Button } from 'react-native-elements'
import Toast from 'react-native-easy-toast'

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
];

export default class CardScreen extends Component {
    render() {
        return (
            <View>
                <Card title="CARD WITH DIVIDER">
                    {
                        users.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }}
                                    />
                                    <Text style={styles.name}>{u.name}</Text>
                                </View>
                            );
                        })
                    }
                </Card>

                <Card containerStyle={{padding: 0}} >
                    {
                        users.map((u, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    roundAvatar
                                    title={u.name}
                                    avatar={{uri:u.avatar}}
                                />
                            );
                        })
                    }
                </Card>

                <Card
                    title='HELLO WORLD'
                    image={require('../images/pic2.jpg')}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={{name: 'code'}}
                        backgroundColor='#03A9F4'
                        fontFamily='Lato'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card>

                <Toast ref={'toast'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    user: {
        backgroundColor: 'blue'
    },

    image: {
        backgroundColor: 'blue'
    },

    name: {
        backgroundColor: 'blue'
    },
});