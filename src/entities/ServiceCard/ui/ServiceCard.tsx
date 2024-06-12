import { ICard } from '../model/types'

import styles from './ServiceCard.module.scss'

export const ServiceCard = ({ card }: { card: ICard }) => {
	return (
		<div className={styles.card}>
			<div className={styles.icon}>{card.icon}</div>
			<h3 className={styles.title}>{card.title}</h3>
			<p className={styles.desc}>{card.desc}</p>
			<button className={styles.moreButton}>Подробнее →</button>
		</div>
	)
}
