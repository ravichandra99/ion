import React from 'react';
import { Layout } from '../components/Layout';
import { IonDatetime, IonButton } from '@ionic/react';

export const Home = () => (
	<Layout title="Home">
		<IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
		<IonButton fill="clear">Dont Click me I wont Work</IonButton>
	</Layout>
);
