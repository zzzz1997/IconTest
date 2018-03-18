import React, { Component } from 'react';
import { View, ListView, Image, Text, StyleSheet } from 'react-native'

import { Avatar, List, ListItem } from 'react-native-elements'

const list1 = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
];

const list2 = [
    {
        title: 'Appointments',
        icon: 'av-timer'
    },
    {
        title: 'Trips',
        icon: 'flight-takeoff'
    },
];

const list3 = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
];

const list4 = [
    {
        name: 'Amy Farha',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
];

export default class ListsScreen extends Component {
    constructor(props){
        super(props);
        let dataSource = new ListView.DataSource({
            rowHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            dataSource1: dataSource.cloneWithRows(list3),
            dataSource2: dataSource.cloneWithRows(list4)
        }
    }
    static renderRow1 (rowData, sectionID) {
        return (
            <ListItem
                roundAvatar
                key={sectionID}
                title={rowData.name}
                subtitle={rowData.subtitle}
                avatar={{uri:rowData.avatar_url}}
            />
        )
    }

    static renderRow2 (rowData, sectionID) {
        return (
            <ListItem
                avatar={<Avatar
                    rounded
                    source={rowData.avatar_url && {uri: rowData.avatar_url}}
                    title={rowData.name[0]}
                />}
                key={sectionID}
                title={rowData.name}
                subtitle={rowData.subtitle}
            />
        )
    }

    render() {
        return (
            <View>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list1.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatar={{uri:l.avatar_url}}
                                key={i}
                                title={l.name}/>
                        ))
                    }
                </List>

                <List>
                    {
                        list2.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}/>
                        ))
                    }
                </List>

                <List>
                    <ListView
                        renderRow={ListsScreen.renderRow1}
                        dataSource={this.state.dataSource1}/>
                </List>

                <List>
                    <ListView
                        renderRow={ListsScreen.renderRow2}
                        dataSource={this.state.dataSource2}
                    />
                </List>

                <List>
                    <ListItem
                        roundAvatar
                        title='Limited supply! Its like digital gold!'
                        subtitle={
                            <View style={styles.subtitleView}>
                                <Image source={require('../images/rating.png')} style={styles.ratingImage}/>
                                <Text style={styles.ratingText}>5 months ago</Text>
                            </View>
                        }
                        avatar={require('../images/avatar1.jpg')}
                    />
                </List>

                <List>
                    <ListItem
                        title='Badge'
                        badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -5 } }}/>
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    }
});