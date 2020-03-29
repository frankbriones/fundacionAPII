import React, { Component } from 'react';
import {
	FlatList,
	Text,
	StyleSheet,
} from 'react-native';
import Layout from '../components/evento-list-layout.js';
import Empty from '../components/empty.js';
import Separator from '../components/vertical-separator.js';
import Sugerencia from '../components/sugerencias.js';



class EventoList extends Component {
	keyExtractor = item => item.id.toString()

	renderEmpty = () => <Empty text="No hay Elementos" />

	itemSeparator = () => <Separator color="yellow" />

	renderItem = ({item}) => {
		return (
		<Sugerencia {...item} />
	)
	}


	render () {
		// const list = [
		// 	{
		// 		title: 'Pokemones',
		// 		key: '1',
		// 	},
		// 	{
		// 		title: 'Digimon',
		// 		key: '2',
		// 	}
		// ]
		return (
			// importar el layout para los eventos list
			<Layout
				
				title="Proximos Eventos"
			>
			<FlatList 
			style={styles.flati}
				keyExtractor={this.keyExtractor}
				//data={list}
				data = {this.props.list}
				
				//propiedad o funcion (componente) para devolver componente  que demuestre un mensaje
				// ListEmptyComponent={() => <Text>No ay Eventos en lista...</Text>} 

				ListEmptyComponent ={this.renderEmpty}
				ItemSeparatorComponent = {this.itemSeparator}
				//renderItem={({ item }) => <Text>{item.title}</Text>}
				renderItem = {this.renderItem}
			/>

			</Layout>


		)
	}
}

const styles = StyleSheet.create({
	flati: {
		backgroundColor: '#003B46',
	}
})

export default EventoList;