import styles from './CallMeSection.module.scss'

export const Title = () => {
	return (
		<div className={styles.titleContainer}>
			<h2 className={styles.title}>Вы полюбите нас с первой встречи!</h2>
			<p className={styles.subtitle}>
				Мы предоставляем комплексный подход к продвижению компании, продуктов и
				услуг в цифровой сфере.
			</p>
		</div>
	)
}
