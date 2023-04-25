import { memo, SVGProps } from 'react';

const Vector10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 597 500'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <path d='M0 256.966L131.646 0H476.835L597 256.966L476.835 500H131.646L0 256.966Z' fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_44_1550' transform='matrix(0.00134434 0 0 0.00160514 -0.169479 0)' />
      </pattern>
      <image
        id='image0_44_1550'
        width={996}
        height={623}
      />
    </defs>
  </svg>
);
const Memo = memo(Vector10Icon);
export { Memo as Vector10Icon };