import { ElementType } from 'react'

import { ButtonType, defaultElement } from '../model/types'

import { clsx } from '$/shared/helpers/clsx'
import styles from './Button.module.scss'

export const Button = <E extends ElementType>({
	children,
	as,
	className = '',
	...props
}: ButtonType<E>) => {
	const Element = as || defaultElement
	return (
		<Element
			className={clsx(styles.element, { [className]: !!className }, [])}
			{...props}
		>
			{children}
		</Element>
	)
}
