import { SVGProps } from 'react'

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={22}
		height={13}
		fill="none"
		{...props}
	>
		<path
			fill="#2B4074"
			fillRule="evenodd"
			d="m.747 10.44 9.9-9.9 10.571 10.572-1.06 1.06-9.46-9.458-8.838 8.838L.747 10.44Z"
			clipRule="evenodd"
		/>
	</svg>
)
