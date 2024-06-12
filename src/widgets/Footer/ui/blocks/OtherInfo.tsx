import { TitledBlock } from '../TitledBlock'

import styles from './OtherInfo.module.scss'

export const OtherInfo = () => {
	return (
		<div className={styles.container}>
			<TitledBlock title="КОНТАКТЫ">
				<ul>
					<li>
						<a href="tel:">+80 555 55 66</a>
					</li>
					<li>
						<a href="mailto:">digi@gmail.com</a>
					</li>
				</ul>
			</TitledBlock>
			<TitledBlock title="АДРЕС">
				Пр. Науки 107
				<br />
				Kиев / Украина
			</TitledBlock>
			<TitledBlock title="ПОМОЩЬ">
				<ul>
					<li>
						<a href="" target="_blank">
							Как с нами связаться?
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							Что такое диджитал?
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							Стоимость услуг
						</a>
					</li>
				</ul>
			</TitledBlock>
			<TitledBlock title="МЕНЮ">
				<ul>
					<li>
						<a href="" target="_blank">
							Наши проекты
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							Команда
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							Блог
						</a>
					</li>
				</ul>
			</TitledBlock>
		</div>
	)
}
