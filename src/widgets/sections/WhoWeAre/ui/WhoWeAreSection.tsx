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
				<Button className={styles.button} as="a" target="_blank">
					Подробнее
				</Button>
				<SliderInterface
					props={{
						elementsAmount: 3,
						nextSlideFn: () => {},
						prevSlideFn: () => {},
						selectSlideFn: () => {},
						paginationClassName: styles.pagination,
					}}
				/>
			</Container>
		</section>
	)
}
