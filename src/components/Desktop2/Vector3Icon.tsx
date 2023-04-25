import { memo, SVGProps } from 'react';

const Vector3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 140 136' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M64.9761 136L0 0H140L64.9761 136Z' fill='#D4B98C' />
  </svg>
);
const Memo = memo(Vector3Icon);
export { Memo as Vector3Icon };
