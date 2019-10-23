import React, { useState, useEffect } from "react";
import vkConnect from "@vkontakte/vk-connect";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Progress from "@vkontakte/vkui/dist/components/Progress/Progress";
import HorizontalScroll from "@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll";
import List from "@vkontakte/vkui/dist/components/List/List";
import Snackbar from "@vkontakte/vkui/dist/components/Snackbar/Snackbar";

import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon24Qr from "@vkontakte/icons/dist/24/qr";
import Icon24Favorite from "@vkontakte/icons/dist/24/favorite";

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

const Home = ({ id, navigator }) => {
	const [ user, setUser ] = useState((navigator.params.pageParams && navigator.params.pageParams.user) || {});
	const [ snack, setSnack ] = useState(null);
	const [ xp, setXp ] = useState(0);
	const [ lvl, setLvl ] = useState(-1);
	const [ marks, setMarks ] = useState([]);

	useEffect(() => {
		navigator.showLoader();

		if (!navigator.params.pageParams.user) {
			vkConnect.sendPromise("VKWebAppGetUserInfo", {}).then((result) => {
				setUser(result);
				navigator.goPage("main", { ...navigator.params.pageParams, user: result });
			});
		}

		if (!navigator.params.pageParams.friends) {
			vkConnect.sendPromise("VKWebAppGetAuthToken", {
				app_id: 7180581,
				scope: "friends"
			})
				.then((result) => {
					vkConnect.sendPromise("VKWebAppCallAPIMethod", {
						method: "friends.get",
						params: {
							fields: "name, photo_100",
							count: 10,
							v: "5.102",
							access_token: result.access_token
						}
					})
						.then((result) => {
							navigator.goPage("main", { ...navigator.params.pageParams, friends: result.response.items });
						})
						.catch(() => {

						})
				})
				.catch(() => {

				})
		}

		const marks = rt.ref("marks");
		const getMarks = marks.once("value")
			.then((snap) => {
				const result = [];

				snap.forEach((child) => {
					result.push({ id: child.key, ...child.val() });
				});

				setMarks(result);
			});

		marks.on("child_added", (ref) => setMarks((prevState) => [ ...prevState, { id: ref.key, ...ref.val() } ]));
		marks.on("child_changed", (ref) => setMarks((prevState) => prevState.map((x) => x.id === ref.key ? { id: ref.key, ...ref.val() } : x)));
		marks.on("child_removed", (ref) => setMarks((prevState) => prevState.filter((x) => x.id !== ref.key)));

		const exp = rt.ref("xp");

		exp.on("value", (snap) => {
			if (window.lvl !== -1 && window.lvl < Math.floor(snap.val().score / 100)) {
				setXp(100);

				setTimeout(() => {
					setXp(snap.val().score % 100);
					setLvl(Math.floor(snap.val().score / 100));
				}, 500);

				setSnack(
					<Snackbar
						onClose={() => setSnack(null)}
						before={
							<Avatar size={24} style={{backgroundImage: "linear-gradient(135deg, rgb(255, 183, 61), rgb(255, 160, 0))"}}>
								<Icon24Favorite fill="#fff" width={14} height={14} />
							</Avatar>
						}
					>
						Поздравляем! <br/>Ваш уровень повышен до {Math.floor(snap.val().score / 100)}!
					</Snackbar>
				);
			} else {
				setLvl(Math.floor(snap.val().score / 100));
				setXp(snap.val().score % 100);
			}
		});

		Promise.all([ getMarks ])
			.then(() => navigator.hideLoader());
	}, []);

	window.lvl = lvl;

	return (
		<Panel id={id}>
			<PanelHeader
				left={
					<HeaderButton onClick={() => user.id !== 182625786 ? vkConnect.send("VKWebAppOpenQR", {}) : navigator.go("admin")}>
						<Icon24Qr/>
					</HeaderButton>
				}
			>
				School Score
			</PanelHeader>
			{user &&
				<Div style={{ background: "var(--background_content)", padding: "10px 0" }}>
					<Cell
						expandable
						before={user.photo_200 ? <Avatar src={user.photo_200}/> : null}
						description="Школа №10"
						children={`${user.first_name} ${user.last_name}`}
						onClick={() => navigator.showModal("profile", { user })}
					/>
				</Div>
			}

			{lvl > 0 &&
				<Group title="Уровень">
					<Div style={{ display: "grid", gridTemplateColumns: "25px 1fr 25px", gridColumnGap: "20px" }}>
						<h3 style={{ textAlign: "right", margin: 0 }}>
							{lvl}
						</h3>
						<div style={{ display: "flex", alignItems: "center" }}>
							<div style={{ width: "100%" }}>
								<Progress
									min={0}
									value={xp}
									max={100}
								/>
							</div>
						</div>
						<h3 style={{ textAlign: "left", margin: 0 }}>
							{lvl + 1}
						</h3>
					</Div>
				</Group>
			}

			{marks.length > 0 &&
				<Group title="Недавние оценки">
					<HorizontalScroll>
						<div style={{ display: 'flex' }}>
							{[...marks].reverse().map((obj) => {
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
										{obj.sub}
									</div>
								);
							})}
						</div>
					</HorizontalScroll>
				</Group>
			}
			<Group title="Расписание на сегодня">
				<List>
					<Cell
						before={<Avatar size={48} type="app"/>}
						children="1. Русский язык"
						description="Упр. 12"
					/>
					<Cell
						before={<Avatar size={48} type="app"/>}
						children="2. Алгебра"
						description="№1.92(а,б,в) №1.93(а,в)"
					/>
					<Cell
						before={<Avatar size={48} type="app"/>}
						children="3. Физическая культура"
						description="Нет задания 🎉"
					/>
					<Cell
						before={<Avatar size={48} type="app"/>}
						children="4. Информатика"
						description="Написать обновление для ВКонакте"
					/>
					<Cell
						before={<Avatar size={48} type="app"/>}
						children="5. Геометрия"
						description="Почитать о том, что такое круг"
					/>
				</List>
			</Group>

			{snack}
		</Panel>
	);
};

export default Home;
