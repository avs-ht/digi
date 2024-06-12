import { Container } from '$/shared/ui/Container'
import styles from './Footer.module.scss'
import { Logo } from './Logo'
import { OtherInfo } from './blocks/OtherInfo'
import { Socials } from './blocks/Socials'
import { Title } from './blocks/Title'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.container}>
				<Logo />
				<Title />
				<Socials />
				<OtherInfo />
			</Container>
		</footer>
	)
}
