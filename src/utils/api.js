import Firebase from "firebase/app";
import "firebase/database";

const firebase = Firebase.initializeApp({
	apiKey: "AIzaSyCxIZ7zAF4aQW5Tiuda626_4m1g6M0UFvE",
	authDomain: "school-score-28118.firebaseapp.com",
	databaseURL: "https://school-score-28118.firebaseio.com",
	projectId: "school-score-28118",
	storageBucket: "school-score-28118.appspot.com",
	messagingSenderId: "419698548186",
	appId: "1:419698548186:web:9e6270d34e0b22befe34e3",
	measurementId: "G-0W3FSYKSWX"
});

export const rt = firebase.database();

export const subs = [
	{
		name: "Русский язык",
		teacher: "Кононова И.Д.",
		favourite: false
	},
	{
		name: "Литература",
		teacher: "Кононова И.Д.",
		favourite: false
	},
	{
		name: "Алгебра",
		teacher: "Макаренко Г.И.",
		favourite: false
	},
	{
		name: "Геометрия",
		teacher: "Макаренко Г.И.",
		favourite: false
	},
	{
		name: "История",
		teacher: "Спиридонова Т.В.",
		favourite: false
	},
	{
		name: "Химия",
		teacher: "Тарабухина О.Н.",
		favourite: false
	},
	{
		name: "Биология",
		teacher: "Тихомирова В.В.",
		favourite: false
	},
	{
		name: "Физика",
		teacher: "Смирнова О.В.",
		favourite: false
	},
	{
		name: "Английский язык",
		teacher: "Смаева Г.Ю.",
		favourite: false
	},
	{
		name: "Информатика",
		teacher: "Смирнова В.В.",
		favourite: true
	},
	{
		name: "Физическая культура",
		teacher: "Лапшин Г.Н.",
		favourite: false
	}
];