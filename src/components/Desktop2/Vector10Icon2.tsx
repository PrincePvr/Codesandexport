import { memo, SVGProps } from 'react';

const Vector10Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 597 500' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 256.966L131.646 0H476.835L597 256.966L476.835 500H131.646L0 256.966Z'
      fill='#D4AE6D'
      fillOpacity={0.2}
      stroke='#C28B2E'
      strokeWidth={5}
    />
  </svg>
);
const Memo = memo(Vector10Icon2);
export { Memo as Vector10Icon2 };
