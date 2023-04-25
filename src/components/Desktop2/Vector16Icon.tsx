import { memo, SVGProps } from 'react';

const Vector16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 958 793' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.69252 407.523L211.694 0.447802H764.959L957.559 407.523L764.959 792.527H211.694L0.69252 407.523Z'
      fill='#C28B2E'
      fillOpacity={0.2}
      stroke='#C28B2E'
      strokeWidth={5}
    />
  </svg>
);
const Memo = memo(Vector16Icon);
export { Memo as Vector16Icon };
