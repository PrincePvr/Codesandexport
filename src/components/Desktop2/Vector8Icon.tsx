import { memo, SVGProps } from 'react';

const Vector8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 600 500' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 256.966L132.308 0H479.231L600 256.966L479.231 500H132.308L0 256.966Z' fill='#D9D9D9' />
  </svg>
);
const Memo = memo(Vector8Icon);
export { Memo as Vector8Icon };
