import { SVGProps } from 'react'

export const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={23}
		height={15}
		fill="none"
		{...props}
	>
		<path
			fill="#fff"
			d="M14.332 7.9a5.9 5.9 0 0 0-.114-1.158H7.653v2.39h3.946c-.16 1.016-1.195 2.998-3.946 2.998-2.372 0-4.307-1.963-4.307-4.392 0-2.428 1.935-4.392 4.307-4.392 1.356 0 2.258.579 2.77 1.072l1.888-1.812C11.097 1.467 9.53.784 7.653.784A6.952 6.952 0 0 0 .699 7.738a6.952 6.952 0 0 0 6.954 6.954c4.013 0 6.679-2.818 6.679-6.793Zm8.224-1.158h-1.982V4.76H18.58v1.983H16.6v1.992h1.982v1.983h1.993V8.734h1.982V6.742Z"
		/>
	</svg>
)
