import Button from '$/shared/ui/Button'
import styles from './Text.module.scss'

export const Text = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Команда</h2>
			<p className={styles.text}>
				Наша команда - это наша самая большая ценность. <br />
				Мы трудились, чтобы собрать группу экспертов, <br />
				чьи навыки дополняют друг друга. <br />У членов нашей команды разные
				истории, но мы разделяем общую страсть к идеалу. Мы верим, чтобы
				оставаться профессионалом, нужно развиваться, <br />
				поэтому мы постоянно ищем способы, как стать лучше в том, что мы делаем.
			</p>
			<Button className={styles.button}>СМОТРЕТЬ ВИДЕО</Button>
		</div>
	)
}
