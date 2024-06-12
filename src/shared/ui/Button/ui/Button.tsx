import { ElementType } from 'react'

import { ButtonType, defaultElement } from '../model/types'

import { clsx } from '$/shared/helpers/clsx'
import styles from './Button.module.scss'

export const Button = <E extends ElementType>({
	children,
	as,
	className = '',
	inverted = false,
	...props
}: ButtonType<E>) => {
	const Element = as || defaultElement
	return (
		<Element
			className={clsx(
				styles.element,
				{
					[styles.inverted]: inverted,
					[className]: !!className,
				},
				[],
			)}
			{...props}
		>
			{children}
		</Element>
	)
}
