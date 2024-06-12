import { SVGProps } from 'react'

export const BackIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={26}
		fill="none"
		{...props}
	>
		<path
			fill="#929292"
			fillRule="evenodd"
			d="M2.829.272 15.557 13 2.829 25.728 0 22.899 9.9 13 0 3.1 2.83.273Z"
			clipRule="evenodd"
		/>
	</svg>
)
