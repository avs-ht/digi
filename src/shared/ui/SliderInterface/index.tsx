import { useState } from 'react'

import { clsx } from '$/shared/helpers/clsx'
import styles from './index.module.scss'

interface Props {
	elementsAmount: number
	nextSlideFn: () => void
	prevSlideFn: () => void
	// eslint-disable-next-line no-unused-vars
	selectSlideFn: (i: number) => void
	paginationClassName?: string
	buttonsClassName?: string
}

export const SliderInterface = ({ props }: { props: Props }) => {
	const {
		elementsAmount,
		nextSlideFn,
		prevSlideFn,
		selectSlideFn,
		...classNames
	} = props
	const { paginationClassName = '', buttonsClassName = '' } = classNames
	const [activeElement, setActiveElement] = useState(0)
	return (
		<>
			<div
				className={clsx(
					styles.buttons,
					{
						[buttonsClassName]: !!buttonsClassName,
					},
					[],
				)}
			>
				<button className={styles.prev} onClick={prevSlideFn}>
					&lt;
				</button>
				<button className={styles.next} onClick={nextSlideFn}>
					&gt;
				</button>
			</div>
			<ul
				className={clsx(
					styles.pagination,
					{
						[paginationClassName]: !!paginationClassName,
					},
					[],
				)}
			>
				{Array.from({ length: elementsAmount }).map((_, i) => {
					return (
						<li key={i}>
							<button
								onClick={() => {
									selectSlideFn(i)
									setActiveElement(i)
								}}
								className={clsx(
									styles.paginationButton,
									{
										[styles.active]: i === activeElement,
									},
									[],
								)}
							></button>
						</li>
					)
				})}
			</ul>
		</>
	)
}
