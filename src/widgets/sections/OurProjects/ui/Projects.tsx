import project1 from '../images/project1.jpg';



import { ProjectItem } from '$/entities/Project';
import styles from './OurProjectsSection.module.scss';


const projects = [
	{ title: 'Lalique бутик', img: project1 },
	{ title: 'Строительство домов', img: project1 },
	{ title: 'Кофейня', img: project1 },
	{ title: 'Уникальные туры', img: project1 },
]
export const Projects = () => {
	return (
		<ul className={styles.projects}>
			{projects.map(project => (
				<li>
					<ProjectItem project={project} />
				</li>
			))}
		</ul>
	)
}