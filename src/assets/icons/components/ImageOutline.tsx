import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgImageOutline = (
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
    <g fill="currentColor" clipPath="url(#image-outline_svg__a)">
      <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1m12 14H6.56l7-5.84a.78.78 0 0 1 .93 0L19 17v1a1 1 0 0 1-1 1" />
      <path d="M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </g>
    <defs>
      <clipPath id="image-outline_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgImageOutline)
const Memo = memo(ForwardRef)
export default Memo
