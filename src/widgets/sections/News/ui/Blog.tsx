import news1 from '../images/news-1.jpg'
import news2 from '../images/news-2.jpg'
import news3 from '../images/news-3.jpg'
import news4 from '../images/news-4.jpg'
import news5 from '../images/news-5.jpg'
import news6 from '../images/news-6.jpg'
import news7 from '../images/news-7.jpg'
import news8 from '../images/news-8.jpg'

import { BlogBlock, IBlogBlock } from '$/entities/BlogBlock'
import styles from './NewsSection.module.scss'

const blog: IBlogBlock[] = [
	{
		title: '3Д в брендинге',
		img: news1,
		id: 'a',
	},
	{
		title: 'Контекстная реклама',
		img: news2,
		id: 'b',
	},
	{
		title: 'Графика',
		img: news3,
		id: 'c',
	},
	{
		title: 'Корпоративная культура',
		img: news4,
		id: 'd',
	},
	{
		title: 'Уникальный дизайн',
		img: news5,
		id: 'e',
	},
	{
		title: 'Взгляд со стороны',
		img: news6,
		id: 'f',
	},
	{
		title: 'Соц сети и их польза',
		img: news7,
		id: 'g',
	},
	{
		title: 'Эксклюзивность',
		img: news8,
		id: 'h',
	},
]
export const Blog = () => {
	return (
		<ul className={styles.blog}>
			{blog.map(blogBlock => {
				return (
					<li key={blogBlock.title} style={{ gridArea: blogBlock.id }}>
						<BlogBlock blogBlock={blogBlock} />
					</li>
				)
			})}
		</ul>
	)
}
