import { FacebookIcon } from '../../icons/FacebookIcon'
import { GoogleIcon } from '../../icons/GoogleIcon'
import { PinIcon } from '../../icons/PinIcon'
import { XIcon } from '../../icons/XIcon'

import styles from './Socials.module.scss'

const socials = [
	{
		title: 'Facebook',
		logo: <FacebookIcon />,
		link: 'https://facebook.com',
	},
	{
		title: 'Google',
		logo: <GoogleIcon />,
		link: 'https://google.com',
	},
	{
		title: 'Twitter',
		logo: <XIcon />,
		link: 'https://twitter.com',
	},
	{
		title: 'Pinterest',
		logo: <PinIcon />,
		link: 'https://pinterest.com',
	},
]
export const Socials = () => {
	return (
		<ul className={styles.socials}>
			{socials.map(({ title, logo, link }) => (
				<li key={title} className={styles.socialItem}>
					<a href={link} target="_blank" className={styles.socialLink}>
						{logo}
					</a>
				</li>
			))}
		</ul>
	)
}
