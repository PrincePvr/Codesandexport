import { memo, SVGProps } from 'react';

const Vector11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 135 112' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.7} d='M0 57.5604L29.7692 0H107.827L135 57.5604L107.827 112H29.7692L0 57.5604Z' fill='#6F6F6F' />
  </svg>
);
const Memo = memo(Vector11Icon);
export { Memo as Vector11Icon };
