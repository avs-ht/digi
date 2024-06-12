import { Container } from '$/shared/ui/Container'
import { Blog } from './Blog'
import styles from './NewsSection.module.scss'
import { Title } from './Title'

export const NewsSection = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Title />
				<Blog />
			</Container>
		</section>
	)
}
