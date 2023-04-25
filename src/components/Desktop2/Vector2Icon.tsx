import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1972 1168' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.8}>
      <path d='M69.3099 187.98L0 102.587V299.164L69.3099 187.98Z' fill='#D9D9D9' />
      <path d='M1367.54 299.164L1203.59 36.106L1173.6 0H1972V1168L1367.54 299.164Z' fill='#D9D9D9' />
    </g>
  </svg>
);
const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
