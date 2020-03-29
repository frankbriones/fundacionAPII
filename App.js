/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Home from './src/screens/containers/home.js';
import Header from './src/sections/components/header.js';
import EventoList from './src/eventos/containers/evento_list.js';
import API from './utils/api.js';


type Props = {};
export default class App extends Component<Props>{
  state = {
    eventoList : []
  }
  async componentDidMount(){
    const eventos = await API.getEvento();
    const talleres = await API.getTaller();
    //console.log(talleres)
    //console.log(eventos)
    this.setState({
      eventoList: eventos,
    })

  }



  render (){
    return (
      <Home>
      <Header/>
      <Text>Buscador</Text>
      <Text>secciones</Text>
      <EventoList 
       list={this.state.eventoList}
      />
        

      </Home>
      );
  }
}

