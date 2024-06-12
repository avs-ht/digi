import styles from './ProjectItem.module.scss'
import { InfoIcon } from '../icons/InfoIcon'
import { SearchIcon } from '../icons/SearchIcon'
import { IProject } from '../model/types'

export const ProjectItem = ({ project }: { project: IProject }) => {
	const showInfo = () => {}
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={project.img} alt={project.title} />
				<div className={styles.buttonsContainer}>
					<button onClick={showInfo}>
						<InfoIcon />
					</button>
					<a target="_blank" href="">
						<SearchIcon />
					</a>
				</div>
			</div>
		</div>
	)
}
