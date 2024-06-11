import styles from './MenuButton.module.scss'
export const MenuButton = () => {
	return (
		<button className={styles.button}>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</button>
	)
}
