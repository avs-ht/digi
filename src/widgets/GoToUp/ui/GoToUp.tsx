import { ArrowIcon } from '../icons/ArrowIcon'

import { Container } from '$/shared/ui/Container'
import styles from './GoToUp.module.scss'

export const GoToUp = () => {
	return (
		<div className={styles.block}>
			<Container className={styles.container}>
				<a className={styles.button} href="#up">
					Вверх <ArrowIcon />
				</a>
			</Container>
		</div>
	)
}
