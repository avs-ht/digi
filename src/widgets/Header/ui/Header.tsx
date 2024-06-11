import { Container } from '$/shared/ui/Container'
import { LogoIcon } from '$/shared/ui/LogoIcon'
import styles from './Header.module.scss'
import { MenuButton } from './MenuButton'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Container className={styles.container}>
				<LogoIcon />
				<MenuButton />
			</Container>
		</header>
	)
}
