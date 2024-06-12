import { StrategyIcon } from '../icons/StrategyIcon'

import { ServiceCard } from '$/entities/ServiceCard'
import styles from './ServiceSection.module.scss'

const cards = [
	{
		title: 'Стратегия',
		desc: 'Создадим уникальный и удобный дизайн.',
		icon: <StrategyIcon />,
	},
	{
		title: 'Стратегия',
		desc: 'Создадим уникальный и удобный дизайн.',
		icon: <StrategyIcon />,
	},
	{
		title: 'Стратегия',
		desc: 'Создадим уникальный и удобный дизайн.',
		icon: <StrategyIcon />,
	},
	{
		title: 'Стратегия',
		desc: 'Создадим уникальный и удобный дизайн.',
		icon: <StrategyIcon />,
	},
	{
		title: 'Стратегия',
		desc: 'Создадим уникальный и удобный дизайн.',
		icon: <StrategyIcon />,
	},

	{
		title: 'Стратегия',
		desc: 'Создадим уникальный и удобный дизайн.',
		icon: <StrategyIcon />,
	},
	{
		title: 'Стратегия',
		desc: 'Создадим уникальный и удобный дизайн.',
		icon: <StrategyIcon />,
	},
	{
		title: 'Стратегия',
		desc: 'Создадим уникальный и удобный дизайн.',
		icon: <StrategyIcon />,
	},
]
export const Cards = () => {
	return (
		<ul className={styles.cards}>
			{cards.map(card => (
				<li key={card.title}>
					<ServiceCard card={card} />
				</li>
			))}
		</ul>
	)
}
