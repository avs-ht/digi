import { SVGProps } from 'react'

export const ForwardIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={26}
		fill="none"
		{...props}
	>
		<path
			fill="#fff"
			fillRule="evenodd"
			d="M13.171 25.728.443 13 13.171.272 16 3.101 6.1 13l9.9 9.9-2.829 2.828Z"
			clipRule="evenodd"
		/>
	</svg>
)
