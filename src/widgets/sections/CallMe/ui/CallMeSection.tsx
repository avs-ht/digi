import { CallMeButton } from '$/features/CallMe'
import { Container } from '$/shared/ui/Container'
import styles from './CallMeSection.module.scss'
import { Title } from './Title'

export const CallMeSection = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<Title />
				<CallMeButton />
			</Container>
		</section>
	)
}
