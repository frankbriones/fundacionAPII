import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
}from 'react-native';

function Sugerencia(props){
	return(
		<View style={styles.container}>
			<View style={styles.left}>
				<Image
					source={{
						uri: props.programa.imagen
					}}
					style={styles.imagen}

				/>
				<View style={styles.generoContainer}>
					<Text style={styles.generoTexto}>{props.programa.nombre}</Text>
				</View>

			</View>

			<View style={styles.right}>
				<Text style={styles.titulo}>{props.nombre}</Text>
				<Text style={styles.year}>{props.fecha_programa}</Text>
				<Text style={styles.raiting}> Encargado: {props.encargado.nombres} {props.encargado.apellido_paterno}</Text>


			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#003B46',

	},
	imagen:{
		height: 100,
		width: 100,
		resizeMode: 'contain',
	},
	right: {
		paddingLeft: 20,
		justifyContent: 'space-between',
	},

	titulo: {
		fontSize: 18,
		color: 'white',
	},

	year: {
		backgroundColor: '#70b124',
		color: 'white',
		borderRadius: 5,
		overflow: 'hidden',
		paddingHorizontal: 6,
		alignSelf: 'flex-start'
	},
	raiting: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
	},

	generoContainer: {
		position: 'absolute',
		left: 0,
		top: 0,
		backgroundColor: 'white',
		paddingHorizontal: 7,
		paddingVertical: 5,
		borderRadius: 5,
	},
	generoTexto: {
		color: 'black',
		fontSize: 8,
		fontWeight: 'bold'
	}
})

export default Sugerencia;