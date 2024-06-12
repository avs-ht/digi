import styles from './ServiceSection.module.scss'
import { Container } from '$/shared/ui/Container'
import { Cards } from './Cards'
import { Description } from './Desc'

export const ServiceSection = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Description />
				<Cards />
			</Container>
		</section>
	)
}
