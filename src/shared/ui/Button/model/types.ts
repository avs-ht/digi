import { ComponentProps, ElementType } from 'react'

export const defaultElement = 'button'
export interface IElementProps<E extends ElementType = ElementType> {
	children: React.ReactNode
	className?: string
	as?: E
}

export type ButtonType<E extends ElementType> = IElementProps<E> &
	Omit<ComponentProps<E>, keyof IElementProps>
