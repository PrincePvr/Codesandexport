import { memo, SVGProps } from 'react';

const Vector9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 252 208' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 106.898L55.5692 0H201.277L252 106.898L201.277 208H55.5692L0 106.898Z' fill='#E4C288' />
  </svg>
);
const Memo = memo(Vector9Icon);
export { Memo as Vector9Icon };
