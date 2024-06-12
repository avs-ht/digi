import { LogoIcon } from '$/shared/ui/LogoIcon'
import styles from './Footer.module.scss'

export const Logo = () => {
	return (
		<div className={styles.logoContainer}>
			<LogoIcon />
		</div>
	)
}
