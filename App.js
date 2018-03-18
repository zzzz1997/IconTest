import React, { Component } from 'react';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

import AvatarScreen from './elements/Avatar'
import BadgeScreen from "./elements/Badge";
import ButtonScreen from "./elements/Button";
import ButtonGroupScreen from "./elements/ButtonGroup";
import CardScreen from "./elements/CardScreen";
import CheckBoxScreen from "./elements/CheckBoxScreen";
import DividerScreen from "./elements/DividerScreen";
import FormsScreen from "./elements/FormsScreen";
import HeaderScreen from "./elements/HeaderScreen";
import IconScreen from "./elements/IconScreen";
import ListsScreen from "./elements/ListsScreen";
import PricingScreen from "./elements/PricingScreen";
import RatingScreen from "./elements/RatingScreen";
import SearchBarScreen from "./elements/SearchBarScreen";
import SliderScreen from "./elements/SliderScreen";
import SocialIconScreen from "./elements/SocialIconScreen";
import TextScreen from "./elements/TextScreen";
import TileScreen from "./elements/TileScreen";

export default class App extends Component {
    render() {
        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar/>}>
                <AvatarScreen tabLabel={'Avatar'}/>
                <BadgeScreen tabLabel={'Badge'}/>
                <ButtonScreen tabLabel={'Button'}/>
                <ButtonGroupScreen tabLabel={'ButtonGroup'}/>
                <CardScreen tabLabel={'Card'}/>
                <CheckBoxScreen tabLabel={'Checkbox'}/>
                <DividerScreen tabLabel={'Divier'}/>
                <FormsScreen tabLabel={'Form Elements'}/>
                <HeaderScreen tabLabel={'HTML style headings'}/>
                <IconScreen tabLabel={'Icon'}/>
                <ListsScreen tabLabel={'List and ListItem'}/>
                <PricingScreen tabLabel={'Pricing'}/>
                <RatingScreen tabLabel={'Rating'}/>
                <SearchBarScreen tabLabel={'Search Bar'}/>
                <SliderScreen tabLabel={'Slider'}/>
                <SocialIconScreen tabLabel={'Social Icons / Social Icon Buttons'}/>
                <TextScreen tabLabel={'Text'}/>
                <TileScreen tabLabel={'Tile'}/>
            </ScrollableTabView>
        );
    }
}
