import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 99 190' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.7} d='M99 0L0 190V0H99Z' fill='#C28B2E' />
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
