import styles from './TitledBlock.module.scss'

interface Props {
	title: string
	children: React.ReactNode
}
export const TitledBlock = ({ title, children }: Props) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
