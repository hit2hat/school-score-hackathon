import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";

const timetable = [
	[
		"Русский язык",
		"Алгебра",
		"Геометрия",
		"Английский язык",
		"Химия"
	],
	[
		"Русский язык",
		"Алгебра",
		"Геометрия",
		"Английский язык",
		"Химия"
	],
	[
		"Русский язык",
		"Алгебра",
		"Геометрия",
		"Английский язык",
		"Химия"
	],
	[
		"Русский язык",
		"Алгебра",
		"Геометрия",
		"Английский язык",
		"Химия"
	],
	[
		"Русский язык",
		"Алгебра",
		"Геометрия",
		"Английский язык",
		"Химия"
	]
];

const resolveDay = (id) => {
	switch (id) {
		case 1: return "Понедельник";
		case 2: return "Вторник";
		case 3: return "Среда";
		case 4: return "Четверг";
		case 5: return "Пятница";
		case 6: return "Суббота";
		case 7: return "Воскресенье";
		default: return "";
	}
};

const resolveTime = (id) => {
	switch (id) {
		case 1: return "8:00-8:40";
		case 2: return "8:50-9:30";
		case 3: return "9:40-10:20";
		case 4: return "10:35-11:15";
		case 5: return "11:30-12:10";
		case 6: return "12:20-13:00";
		case 7: return "13:20-14:00";
		default: return "";
	}
};

const Timetable = ({ id }) => {
	return (
		<Panel id={id}>
			<PanelHeader>
				Расписание
			</PanelHeader>
			{timetable.map((subs, key) => (
				<Group
					key={key}
					title={resolveDay(key + 1)}
					style={key === 0 ? { marginTop: 0 } : {}}
					children={
						<List>
							{subs.map((sub, key) => <Cell key={key} children={sub} indicator={resolveTime(key + 1)}/>)}
						</List>
					}
				/>
			))}
		</Panel>
	);
};

export default Timetable;