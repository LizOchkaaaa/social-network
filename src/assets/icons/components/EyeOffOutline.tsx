import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgEyeOffOutline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <g fill="currentColor" clipPath="url(#eye-off-outline_svg__a)">
      <path d="M4.71 3.29a1.004 1.004 0 1 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095zM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56z" />
      <path d="M12.22 17c-4.3.1-7.12-3.59-8-5 .626-1 1.38-1.914 2.24-2.72L5 7.87a15.9 15.9 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.5 9.5 0 0 0 3.23-.67l-1.58-1.58a7.7 7.7 0 0 1-1.7.25M21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5a9.5 9.5 0 0 0-3.23.67l1.58 1.58a7.7 7.7 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1-2.29 2.72L19 16.13a15.9 15.9 0 0 0 2.91-3.63 1 1 0 0 0-.04-1" />
    </g>
    <defs>
      <clipPath id="eye-off-outline_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgEyeOffOutline)
const Memo = memo(ForwardRef)
export default Memo
