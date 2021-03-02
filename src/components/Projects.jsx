import React from 'react';
import TopBar from './TopBar';
import ProjectListItem from './ProjectListItem';

export default class Projects extends React.Component {
	componentDidMount() {
		document.title = "Projects";
	}
	render() {
		const posts = [
			{
				name: "CallbackBot (narcov)",
				about: "/projects/narcov",
				repo: "https://github.com/threedliams/CallbackBot",
				image: "/pages/assets/projectThumbnails/narcov.png",
			},
			{
				name: "Particle Filter Localization",
				about: "/projects/localization",
				repo: "https://github.com/EricFalkenberg/particle_filter_localization",
				image: "/pages/assets/projectThumbnails/particleFilter.png",
			},
			{
				name: "Chode.js",
				website: "https://www.chodejs.com",
				repo: "https://github.com/threedliams/chode.js",
				image: "/pages/assets/projectThumbnails/chodejs.png",
			},
			{
				name: "HughBorg",
				about: "/projects/hughborg",
				repo: "https://github.com/threedliams/HughBorg",
				image: "/pages/assets/projectThumbnails/hughborg.png",
			},
			{
				name: "This website",
				about: "/projects/website",
				repo: "https://github.com/threedliams/threedliams.github.io",
				image: "/pages/assets/projectThumbnails/thisWebsite.png",
			},
			{
				name: "Crappy Games",
				about: "/projects/crappyGames",
				repo: "https://github.com/threedliams/CrappyGames",
				play: "/pages/assets/games/CrappyGames/bin/index.html",
				image: "/pages/assets/projectThumbnails/crappyGames.PNG",
			},
			{
				name: "MonkeyProto",
				about: "/projects/monkeyProto",
				repo: "https://github.com/threedliams/MonkeyProto",
				play: "/pages/assets/games/MonkeyProto/bin/index.html",
				playComment: " (only works with 2 controllers)",
				image: "/pages/assets/projectThumbnails/monkeyProto.PNG",
			},
			{
				name: "Old Roguelike",
				about: "/projects/oldRoguelike",
				repo: "https://github.com/threedliams/MutationRoguelike",
				image: "/pages/assets/projectThumbnails/oldRoguelike.png",
			},
		]

		return (
			<div>
				<TopBar />
				<ul className="project-list">
					{
						posts.map((item) => {
							return <ProjectListItem
								name={item.name}
								about={item.about}
								repo={item.repo}
								play={item.play}
								playComment={item.playComment}
								image={item.image}
								website={item.website}
							/>
						})
					}
				</ul>
			</div>
		);
	}
};
