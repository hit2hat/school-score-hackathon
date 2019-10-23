import React, { useState, useEffect } from "react";

import ModalPage from "@vkontakte/vkui/dist/components/ModalPage/ModalPage";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";
import HorizontalScroll from "@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll";

import { rt } from "../utils/api";

const itemStyle = {
	flexShrink: 0,
	width: 80,
	height: 94,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontSize: 12
};

const Subject = ({ id, header, onClose, navigator }) => {
	const subject = navigator.params.subject || {};
	const [ marks, setMarks ] = useState([{ sub: subject.name }]);

	useEffect(() => {
		rt.ref("marks").once("value")
			.then((snap) => {
				const result = [];

				snap.forEach((child) => {
					result.push({ id: child.key, ...child.val() });
				});

				setMarks(result);
			});
	}, []);

	return (
		<ModalPage
			id={id}
			onClose={onClose}
			header={header}
		>
			<Div style={{ paddingTop: 0 }} align="center">
				<Avatar
					size={80}
					type="app"
				/>
				<h3 style={{ margin: 0, marginTop: 10, color: "var(--text_primary)" }}>{subject.name}</h3>
			</Div>
			<div>
				<HorizontalScroll>
					<div style={{ display: 'flex' }}>
						{[...marks].reverse().filter((x) => x.sub === subject.name).map((obj) => {
							return (
								<div key={obj.id} style={{ ...itemStyle, paddingLeft: 4 }}>
									<Avatar
										size={64}
										style={{
											marginBottom: 8,
											background: obj.mark > 2 ? "var(--accent)" : "var(--destructive)"
										}}
									>
										<span style={{ color: "white", fontSize: 24 }}>{obj.mark}</span>
									</Avatar>
									{obj.date}
								</div>
							);
						})}
					</div>
				</HorizontalScroll>
			</div>
			<Div style={{ paddingTop: 0 }}>
				<List>
					<Cell
						children="Учитель"
						indicator={subject.teacher}
					/>
				</List>
			</Div>
		</ModalPage>
	);
};

export default Subject;