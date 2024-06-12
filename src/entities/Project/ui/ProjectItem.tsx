import { InfoIcon } from '../../../shared/ui/icons/InfoIcon'
import { SearchIcon } from '../icons/SearchIcon'
import { IProject } from '../model/types'

import styles from './ProjectItem.module.scss'

export const ProjectItem = ({ project }: { project: IProject }) => {
	const showInfo = () => {}
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={project.img} alt={project.title} />
				<div className={styles.buttonsContainer}>
					<div className={styles.buttons}>
						<button onClick={showInfo}>
							<InfoIcon />
						</button>
						<a target="_blank" href="">
							<SearchIcon />
						</a>
					</div>
				</div>
			</div>
			<h3 className={styles.title}>{project.title}</h3>
		</div>
	)
}
