import { SVGProps } from 'react'

export const DotsIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={32}
		height={27}
		fill="none"
		{...props}
	>
		<path
			fill="#2B4074"
			d="M14.571 3.929A3.644 3.644 0 0 0 10.93.286H3.643A3.644 3.644 0 0 0 0 3.929v7.285a3.644 3.644 0 0 0 3.643 3.643h4.25c1.005 0 1.821.816 1.821 1.822v.607a4.867 4.867 0 0 1-4.857 4.857H3.643c-.664 0-1.214.55-1.214 1.214v2.429c0 .664.55 1.214 1.214 1.214h1.214c5.35 0 9.714-4.364 9.714-9.714V3.929Zm17 0A3.644 3.644 0 0 0 27.93.286h-7.286A3.644 3.644 0 0 0 17 3.929v7.285a3.644 3.644 0 0 0 3.643 3.643h4.25c1.005 0 1.821.816 1.821 1.822v.607a4.867 4.867 0 0 1-4.857 4.857h-1.214c-.664 0-1.214.55-1.214 1.214v2.429c0 .664.55 1.214 1.214 1.214h1.214c5.35 0 9.714-4.364 9.714-9.714V3.929Z"
		/>
	</svg>
)