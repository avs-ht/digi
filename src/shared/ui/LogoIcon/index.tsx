import styles from './index.module.scss'

export const LogoIcon = () => {
	return (
		<div className={styles.logo}>
			<div className={styles.upperPart}>
				<span>Di</span>
				<span>Gi</span>
			</div>
			<span className={styles.lowerPart}>Digital Agency</span>
		</div>
	)
}
