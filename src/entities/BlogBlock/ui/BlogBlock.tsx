import { IBlogBlock } from '../model/types'

import { InfoIcon } from '$/shared/ui/icons/InfoIcon'
import styles from './BlogBlock.module.scss'

export const BlogBlock = ({ blogBlock }: { blogBlock: IBlogBlock }) => {
	const { title, img } = blogBlock
	const showInfo = () => {} // show info logic

	return (
		<div className={styles.container}>
			<img src={img} alt={title} />
			<h3 className={styles.title}>{title}</h3>
			<button onClick={showInfo} className={styles.button}>
				<InfoIcon fill="white" />
			</button>
		</div>
	)
}
