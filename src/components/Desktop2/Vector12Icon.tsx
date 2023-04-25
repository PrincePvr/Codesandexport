import { memo, SVGProps } from 'react';

const Vector12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 615 510' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 262.105L135.615 0H491.212L615 262.105L491.212 510H135.615L0 262.105Z'
      fill='#C28B2E'
      fillOpacity={0.2}
      stroke='#C28B2E'
      strokeOpacity={0.7}
      strokeWidth={5}
    />
  </svg>
);
const Memo = memo(Vector12Icon);
export { Memo as Vector12Icon };
