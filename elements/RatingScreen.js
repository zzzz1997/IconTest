import React, { Component } from 'react';
import { View } from 'react-native'

import { Rating } from 'react-native-elements'

export default class RatingScreen extends Component {
    static ratingCompleted(rating) {
        console.log("Rating is: " + rating)
        //this.refs.toast.show("Rating is: " + rating)
    }

    render() {
        return (
            <View>
                <Rating
                    showRating
                    onFinishRating={RatingScreen.ratingCompleted}
                    style={{ paddingVertical: 10 }}/>

                <Rating
                    showRating
                    type="star"
                    fractions={1}
                    startingValue={3.6}
                    readonly
                    imageSize={40}
                    onFinishRating={RatingScreen.ratingCompleted}
                    style={{ paddingVertical: 10 }}/>

                <Rating
                    type="heart"
                    ratingCount={3}
                    fractions={2}
                    startingValue={1.57}
                    imageSize={40}
                    onFinishRating={RatingScreen.ratingCompleted}
                    showRating
                    style={{ paddingVertical: 10 }}/>

                <Rating
                    type='custom'
                    ratingImage={{require: './images/water.png'}}
                    ratingColor='#3498db'
                    ratingBackgroundColor='#c8c7c8'
                    ratingCount={10}
                    imageSize={30}
                    onFinishRating={RatingScreen.ratingCompleted}
                    style={{ paddingVertical: 10 }}/>
            </View>
        )
    }
}