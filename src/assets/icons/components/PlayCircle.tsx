import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPlayCircle = (
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
    <g fill="currentColor" clipPath="url(#play-circle_svg__a)">
      <path d="m11.5 14.6 2.81-2.6-2.81-2.6z" />
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4 11.18-3.64 3.37a1.74 1.74 0 0 1-1.16.45c-.238 0-.473-.052-.69-.15a1.6 1.6 0 0 1-1-1.48V8.63a1.6 1.6 0 0 1 1-1.48 1.7 1.7 0 0 1 1.85.3L16 10.82a1.6 1.6 0 0 1 0 2.36" />
    </g>
    <defs>
      <clipPath id="play-circle_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgPlayCircle)
const Memo = memo(ForwardRef)
export default Memo
