import { DotsIcon } from '../images/dots'

import { Container } from '$/shared/ui/Container'
import { SliderInterface } from '$/shared/ui/SliderInterface'
import styles from './TestimonialSection.module.scss'

export const TestimonialSection = () => {
	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<DotsIcon />
				<div className={styles.testimonial}>
					Если нужно создавать либо повышать имидж компании, <br />
					то <span className={styles.highlight}>диджитал-маркетинг</span>{' '}
					является наиболее подходящим
				</div>
				<div className={styles.author}>- Маргарита Акулич</div>
				<SliderInterface
					props={{
						elementsAmount: 3,
						nextSlideFn: () => {},
						prevSlideFn: () => {},
						selectSlideFn: () => {},
						paginationClassName: styles.pagination,
						showButtons: false,
					}}
				/>
			</Container>
		</section>
	)
}
