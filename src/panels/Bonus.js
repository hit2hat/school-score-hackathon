import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";

import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const BBB = ({ title, description, icon, action }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "var(--background_content)",
				flexDirection: "column",
				padding: "25px 5px"
			}}
		>
			<Avatar src={icon} type="app" size={80} />
			<h4 style={{ margin: 0, marginTop: 10, color: "var(--text_primary)" }}>{title}</h4>
			<h5 style={{ margin: 0, marginBottom: 10, color: "var(--text_secondary)" }}>{description}</h5>
			<Button onClick={action}>Получить</Button>
		</div>
	);
};

const Bonus = ({ id, navigator }) => {
	return (
		<Panel id={id}>
			<PanelHeader>
				Бонусы
			</PanelHeader>
			<Placeholder
				icon={<Icon56FavoriteOutline/>}
				title="Бонусы"
				children="Повышайте уровень и получайте бонусы. Они будут появляться здесь."
			/>
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: 10, gridRowGap: 10, margin: "10px 0" }}>
				<BBB
					title="Подписка на Boom"
					description="3 месяца"
					icon="https://lh3.googleusercontent.com/icYiKPY8W0eaPPDhZHsALhQyeucLGzQGyxQYM6eqMVOSjqtAaBloaWgrzXsa-BvcTw"
					action={() => navigator.showDialog({
						title: "Упс..",
						description: "Это действие временно недоступно",
						buttonText: "Закрыть",
						action: () => navigator.showPopout(null)
					})}
				/>
				<BBB
					title="Подписка на IVI"
					description="1 месяц"
					icon="https://ask.ivi.ru/s/attachments/15170/0/0/project_logo_sAUdHFU.png"
					action={() => navigator.showDialog({
						title: "Упс..",
						description: "Это действие временно недоступно",
						buttonText: "Закрыть",
						action: () => navigator.showPopout(null)
					})}
				/>
				<BBB
					title="Скидка Litres"
					description="80%"
					icon="https://www.mirf.ru/wp-content/uploads/2015/10/litres_logo_square.png"
					action={() => navigator.showDialog({
						title: "Упс..",
						description: "Это действие временно недоступно",
						buttonText: "Закрыть",
						action: () => navigator.showPopout(null)
					})}
				/>
				<BBB
					title="Подписка на Boom"
					description="1 месяц"
					icon="https://lh3.googleusercontent.com/icYiKPY8W0eaPPDhZHsALhQyeucLGzQGyxQYM6eqMVOSjqtAaBloaWgrzXsa-BvcTw"
					action={() => navigator.showDialog({
						title: "Упс..",
						description: "Это действие временно недоступно",
						buttonText: "Закрыть",
						action: () => navigator.showPopout(null)
					})}
				/>
			</div>
		</Panel>
	);
};

export default Bonus;