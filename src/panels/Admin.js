import React, { useState } from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import { rt } from "../utils/api";

const Admin = ({ id }) => {
	const [ changed, setChanged ] = useState(false);

	const addMark = () => {
		rt.ref("marks").push({
			mark: "5",
			sub: "Биология",
			date: "23.01"
		});
	};

	const levelUp = () => {
		rt.ref("xp").set({
			score: 510
		})
	};

	const changeMark = () => {
		rt.ref("marks").child("2").update({
			mark: changed ? "2" : "5"
		});

		setChanged(!changed);
	};

	const reset = () => {
		rt.ref("xp").set({
			score: 417
		})
	};

	return (
		<Panel id={id}>
			<PanelHeader>
				Админка 😋
			</PanelHeader>
			<Div style={{ display: "grid", gridRowGap: 10 }}>
				<Button size="xl" onClick={addMark}>
					Добавить оценку
				</Button>
				<Button size="xl" onClick={levelUp}>
					Повысить уровень
				</Button>
				<Button size="xl" onClick={changeMark}>
					Изменить оценку
				</Button>
				<Button size="xl" onClick={reset}>
					Сбросить
				</Button>
			</Div>
		</Panel>
	);
};

export default Admin;