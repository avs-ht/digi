import Button from '$/shared/ui/Button'
import { Container } from '$/shared/ui/Container'
import { SliderInterface } from '$/shared/ui/SliderInterface'
import { MainTitle } from './Title'
import styles from './WhoWeAreSection.module.scss'

export const WhoWeAreSection = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<MainTitle />
				<Button className={styles.button}>Подробнее</Button>
				<SliderInterface
					props={{
						elementsAmount: 3,
						nextSlideFn: () => {},
						prevSlideFn: () => {},
						selectSlideFn: () => {},
					}}
				/>
			</Container>
		</section>
	)
}
