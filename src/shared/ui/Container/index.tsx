import { memo } from 'react'

import { clsx } from '$/shared/helpers/clsx'

interface Props {
	children: React.ReactNode
	className?: string
}

export const Container = memo(({ children, className = '' }: Props) => {
	return (
		<div className={clsx('__container', { [className]: !!className }, [])}>
			{children}
		</div>
	)
})
