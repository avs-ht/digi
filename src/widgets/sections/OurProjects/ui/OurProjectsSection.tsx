import styles from './OurProjectsSection.module.scss'
import { Container } from '$/shared/ui/Container'
import { Projects } from './Projects'
import { Title } from './Title'

export const OurProjectsSection = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Title />
				<Projects />
			</Container>
		</section>
	)
}
