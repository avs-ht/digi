import styles from './ServiceSection.module.scss'

export const Description = () => {
	return (
		<div className={styles.desc}>
			<h2 className={styles.title}>Сервис</h2>
			<p className={styles.subtitle}>
				От идеи до незабываемого и измеримого результата.
			</p>
			<div className={styles.divider}></div>
			<p className={styles.text}>
				Интеграция безупречного производства, передовых технологий и тщательного
				измерения производительности
			</p>
		</div>
	)
}
