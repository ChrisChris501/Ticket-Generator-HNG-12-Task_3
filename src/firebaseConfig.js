// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDw5BEoVrsVaaKB6QEQY-csgonvQ8Yjud4',
	authDomain: 'ticket-generator-aacdf.firebaseapp.com',
	projectId: 'ticket-generator-aacdf',
	storageBucket: 'ticket-generator-aacdf.firebasestorage.app',
	messagingSenderId: '429517264109',
	appId: '1:429517264109:web:8e89c3cd08f46f8641e8e4',
	measurementId: 'G-RYMVX2GQW2',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
