import { SVGProps } from 'react'

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={28}
		height={28}
		fill="none"
		{...props}
	>
		<path
			fill="#2B4074"
			fillRule="evenodd"
			d="M18.96 3.497c3.842 3.842 4.13 9.908.89 14.177l8.347 8.347L26.22 28l-8.327-8.327c-4.277 3.393-10.466 3.155-14.365-.743-4.2-4.201-4.151-11.061.11-15.323C7.9-.655 14.76-.704 18.96 3.497Zm-.791.791c3.77 3.77 3.725 9.927-.1 13.751-3.824 3.825-9.98 3.87-13.75.1-3.77-3.77-3.726-9.927.099-13.752 3.824-3.824 9.98-3.869 13.75-.099Z"
			clipRule="evenodd"
		/>
	</svg>
)
