import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={"currentColor"}
    height={'36'}
    ref={ref}
    viewBox={'0 0 36 36'}
    width={'36'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath="url(#clip0_3663_9513)">
      <path
        d="M7.8993 14.6468C9.29818 10.4079 13.2817 7.36364 18 7.36364C20.5364 7.36364 22.8273 8.26364 24.6273 9.73636L29.8636 4.5C26.6727 1.71818 22.5818 0 18 0C10.9051 0 4.79662 4.04745 1.85999 9.97504L7.8993 14.6468Z"
        fill="#EA4335" />
      <path
        d="M24.0611 27.0189C22.4264 28.0744 20.3491 28.6364 18 28.6364C13.2997 28.6364 9.32869 25.6153 7.91548 21.4018L1.8562 26.0025C4.78919 31.9404 10.8975 36 18 36C22.3993 36 26.603 34.4361 29.7513 31.4994L24.0611 27.0189Z"
        fill="#34A853" />
      <path
        d="M29.7513 31.4994C33.0438 28.4282 35.1818 23.8555 35.1818 18C35.1818 16.9364 35.0182 15.7909 34.7727 14.7273H18V21.6818H27.6545C27.1782 24.0204 25.8995 25.8318 24.0611 27.0189L29.7513 31.4994Z"
        fill="#4A90E2" />
      <path
        d="M7.91547 21.4018C7.55749 20.3345 7.36364 19.1906 7.36364 18C7.36364 16.8274 7.55165 15.7002 7.8993 14.6468L1.85999 9.97504C0.654881 12.3906 0 15.1131 0 18C0 20.8793 0.667171 23.5953 1.85619 26.0025L7.91547 21.4018Z"
        fill="#FBBC05" />
    </g>
    <defs>
      <clipPath id="clip0_3663_9513">
        <rect width="36" height="36" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const GoogleIcon = memo(ForwardRef)
