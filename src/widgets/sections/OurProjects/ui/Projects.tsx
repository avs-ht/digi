import { ProjectItem } from '$/entities/Project'
import styles from './OurProjectsSection.module.scss'

const projects = [
	{ title: 'Lalique бутик', img: '' },
	{ title: 'Строительство домов', img: '' },
	{ title: 'Кофейня', img: '' },
	{ title: 'Уникальные туры', img: '' },
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
