import { SVGProps } from 'react'

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={9}
		height={17}
		fill="none"
		{...props}
	>
		<path
			fill="#fff"
			d="M8.81.352C8.552.314 7.67.238 6.645.238c-2.144 0-3.614 1.31-3.614 3.71v2.067H.612v2.809h2.42v7.2h2.903v-7.2h2.41l.37-2.809h-2.78V4.223c0-.807.218-1.367 1.385-1.367h1.49V.352Z"
		/>
	</svg>
)
