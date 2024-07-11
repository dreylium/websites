import type { SVGProps } from 'react';
const SvgAccount = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M24 27v-2.667c0-1.414-.478-2.77-1.328-3.77S20.67 19 19.467 19h-7.934c-1.202 0-2.355.562-3.205 1.562S7 22.92 7 24.333V27M16.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
    />
  </svg>
);
export default SvgAccount;
