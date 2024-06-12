import { SVGProps } from 'react'

export const XIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		height={13}
		fill="none"
		{...props}
	>
		<path
			fill="#fff"
			d="M14.945 2.109a6.145 6.145 0 0 1-1.764.474A3.056 3.056 0 0 0 14.527.894a6.033 6.033 0 0 1-1.945.74 3.057 3.057 0 0 0-2.239-.967A3.063 3.063 0 0 0 7.28 3.73c0 .237.028.474.076.702a8.71 8.71 0 0 1-6.318-3.207A3.041 3.041 0 0 0 .62 2.773c0 1.062.54 2.001 1.366 2.552a3.086 3.086 0 0 1-1.385-.39v.039A3.065 3.065 0 0 0 3.058 7.98a3.24 3.24 0 0 1-.806.104c-.2 0-.39-.019-.579-.047a3.07 3.07 0 0 0 2.865 2.125 6.137 6.137 0 0 1-3.804 1.309c-.256 0-.493-.01-.74-.038A8.659 8.659 0 0 0 4.7 12.81c5.636 0 8.719-4.668 8.719-8.719 0-.132 0-.265-.01-.398a6.587 6.587 0 0 0 1.537-1.584Z"
		/>
	</svg>
)
