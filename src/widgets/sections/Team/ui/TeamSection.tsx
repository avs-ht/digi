import video from '../images/video.jpg'

import { Container } from '$/shared/ui/Container'
import styles from './TeamSection.module.scss'
import { Text } from './Text'

export const TeamSection = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<div className={styles.imageContainer}>
					<img src={video} alt="" />
				</div>
				<Text />
			</Container>
		</section>
	)
}
