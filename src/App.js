import React from "react";

import { Stack, Tabbar, Page } from "vkui-navigator/dist";

// Pages
import Home from "./panels/Home";
import Subjects from "./panels/Subjects";
import Timetable from "./panels/Timetable";
import Top from "./panels/Top";
import Bonus from "./panels/Bonus";

// Modals
import Admin from "./panels/Admin";
import Profile from "./modals/Profile";
import Subject from "./modals/Subject";

import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24Reorder from '@vkontakte/icons/dist/24/reorder';
import Icon24Poll from '@vkontakte/icons/dist/24/poll';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite_outline';

const App = () => (
	<Stack
		activePage="main"
		modals={[
			<Profile id="profile" title="Профиль"/>,
			<Subject id="subject" title="Предмет"/>
		]}
	>
		<Tabbar id="main" activeStory="home">
			<Page
				id="home"
				activePanel="home"
				title="Главная"
				icon={<Icon24Home/>}
			>
				<Home id="home"/>
				<Admin id="admin"/>
			</Page>
			<Page
				id="subjects"
				activePanel="subjects"
				title="Предметы"
				icon={<Icon24Education/>}
			>
				<Subjects id="subjects"/>
			</Page>
			<Page
				id="timetable"
				activePanel="timetable"
				title="Расписание"
				icon={<Icon24Reorder/>}
			>
				<Timetable id="timetable"/>
			</Page>
			<Page
				id="top"
				activePanel="top"
				title="Топ"
				icon={<Icon24Poll/>}
			>
				<Top id="top"/>
			</Page>
			<Page
				id="bonus"
				activePanel="bonus"
				title="Бонусы"
				icon={<Icon24Favorite/>}
			>
				<Bonus id="bonus"/>
			</Page>
		</Tabbar>
	</Stack>
);

export default App;

