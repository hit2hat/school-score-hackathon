import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

import FireEvent from "../utils/fire-event";

const Top = ({ id, navigator }) => {
	const friends = navigator.params.pageParams.friends || [];

	return (
		<Panel id={id}>
			<PanelHeader>
				Топ
			</PanelHeader>
			{friends.length > 0 &&
				<div>
					<Group title="Топ города" style={{ marginTop: 0 }}>
						<List>
							{friends.slice(0, 3).map((user, key) => (
								<Cell
									key={key}
									expandable
									before={<Avatar src={user.photo_100} size={48}/>}
									children={user.first_name + " " + user.last_name}
									onClick={() => FireEvent("https://vk.com/id" + user.id)}
									description={"Школа №" + Math.floor(Math.random() * 100)}
								/>
							))}
						</List>
					</Group>
					<Group title="Топ друзей" style={{ marginTop: 0 }}>
						<List>
							{friends.slice(3, 100).map((user, key) => (
								<Cell
									key={key}
									expandable
									before={<Avatar src={user.photo_100} size={48}/>}
									children={user.first_name + " " + user.last_name}
									onClick={() => FireEvent("https://vk.com/id" + user.id)}
									description={"Школа №" + Math.floor(Math.random() * 1000)}
								/>
							))}
						</List>
					</Group>
				</div>
			}
		</Panel>
	);
};

export default Top;