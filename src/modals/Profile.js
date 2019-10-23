import React from "react";

import ModalPage from "@vkontakte/vkui/dist/components/ModalPage/ModalPage";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

import Icon20PhoneOutline from '@vkontakte/icons/dist/20/phone_outline';

const Profile = ({ id, header, onClose, navigator }) => {
	const user = navigator.params.user || {};
	return (
		<ModalPage
			id={id}
			onClose={onClose}
			header={header}
		>
			<Div style={{ paddingTop: 0 }} align="center">
				<Avatar
					src={user.photo_200}
					size={80}
				/>
				<h3 style={{ margin: 0, marginTop: 10, color: "var(--text_primary)" }}>{user.first_name} {user.last_name}</h3>
				<h5 style={{ margin: 0, color: "var(--text_secondary)" }}>Школа №10</h5>
			</Div>
			<Div>
				<List>
					<Cell
						children="Класс"
						indicator="11А"
					/>
					<Cell
						children="Классный руководитель"
						indicator={
							<Button before={<Icon20PhoneOutline/>}>Позвонить</Button>
						}
					/>
				</List>
			</Div>
			<Div style={{ display: "grid", textAlign: "center", gridTemplateColumns: "1fr 1fr 1fr" }}>
				<span style={{ color: "var(--text_secondary)", margin: 0, fontSize: 14 }}>@hit2hat</span>
				<span style={{ color: "var(--text_secondary)", margin: 0, fontSize: 14 }}>v0.1.2 [proto]</span>
				<span style={{ color: "var(--text_secondary)", margin: 0, fontSize: 14 }}>@reactiveapps</span>
			</Div>
		</ModalPage>
	);
};

export default Profile;