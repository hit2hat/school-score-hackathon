import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";

import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';

import { subs } from "../utils/api";

const Subjects = ({ id, navigator }) => {
	const subjects = subs;
	return (
		<Panel id={id}>
			<PanelHeader>Предметы</PanelHeader>
			{subjects.filter((x) => x.favourite).length > 0 &&
				<Group title="Избранные" style={{marginTop: 0}}>
					<List>
						{subjects.filter((x) => x.favourite).map((sub, key) => (
							<Cell
								key={key}
								expandable
								children={sub.name}
								before={<Icon24FavoriteOutline/>}
								onClick={() => navigator.showModal("subject", { subject: sub })}
							/>
						))}
					</List>
				</Group>
			}
			<Group title="Все предметы">
				<List>
					{subjects.map((sub, key) => (
						<Cell
							key={key}
							expandable
							children={sub.name}
							before={sub.favourite ? <Icon24FavoriteOutline/> : null}
							onClick={() => navigator.showModal("subject", { subject: sub })}
						/>
					))}
				</List>
			</Group>
		</Panel>
	);
};

export default Subjects;