import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 634 780' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.5} d='M0 398.741L204.646 0H634V147.931L329.038 780H204.646L0 398.741Z' fill='#FAF9F9' />
  </svg>
);
const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
