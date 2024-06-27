export const Separator = () => (
  <svg
    className="mb-3"
    width="4"
    height="16"
    viewBox="0 0 4 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="2" cy="2" r="2" fill="#E07575" />
    <circle cx="2" cy="14" r="2" fill="#E07575" />
  </svg>
);
export const RedBar = () => (
  <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="40" rx="4" fill="#DB4444" />
  </svg>
);

export const Star = ({ count }: { count: number }) => (
  <div className="flex gap-x-1 px-0.5">
    {Array.from({ length: count }).map((_, index) => {
      return (
        <svg
          key={index}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
            fill="#FFAD33"
          />
        </svg>
      );
    })}
  </div>
);
export const BtnLeft = () => (
  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
    <path
      d="M22 16L15 23L22 30M15 23H31"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const BtnRight = () => (
  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
    <path
      d="M14.5 23H31M31 23L24 16M31 23L24 30"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
    <g stroke="currentColor" clipPath="url(#a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M38.938 6.125H17.062a2.734 2.734 0 0 0-2.734 2.734v38.282a2.734 2.734 0 0 0 2.735 2.734h21.875a2.734 2.734 0 0 0 2.734-2.734V8.859a2.734 2.734 0 0 0-2.734-2.734"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M25.667 7h5.468" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M28 44.005v.026" />
      <path strokeWidth="2" d="M15.167 39.833h25.666" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const IconComputer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
    <g stroke="currentColor" strokeLinecap="round" strokeWidth="2" clipPath="url(#a)">
      <path
        strokeLinejoin="round"
        d="M46.667 9.333H9.333A2.333 2.333 0 0 0 7 11.667V35a2.333 2.333 0 0 0 2.333 2.333h37.334A2.333 2.333 0 0 0 49 35V11.667a2.333 2.333 0 0 0-2.333-2.334M16.333 46.667h23.334M21 37.333v9.334M35 37.333v9.334"
      />
      <path d="M8 32h40" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const IconSmartWatch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
    <g stroke="currentColor" strokeLinecap="round" strokeWidth="2" clipPath="url(#a)">
      <path
        strokeLinejoin="round"
        d="M35 14H21a7 7 0 0 0-7 7v14a7 7 0 0 0 7 7h14a7 7 0 0 0 7-7V21a7 7 0 0 0-7-7M21 42v7h14v-7M21 14V7h14v7"
      />
      <path d="M24 23v11M28 28v6M32 26v8" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const IconCamera = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#a)"
    >
      <path d="M11.667 16.333H14a4.666 4.666 0 0 0 4.667-4.666A2.333 2.333 0 0 1 21 9.333h14a2.333 2.333 0 0 1 2.333 2.334A4.666 4.666 0 0 0 42 16.333h2.333A4.667 4.667 0 0 1 49 21v21a4.667 4.667 0 0 1-4.667 4.667H11.667A4.667 4.667 0 0 1 7 42V21a4.667 4.667 0 0 1 4.667-4.667" />
      <path d="M28 37.333a7 7 0 1 0 0-14 7 7 0 0 0 0 14" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const IconHeadPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#a)"
    >
      <path d="M16.333 30.333H14A4.667 4.667 0 0 0 9.333 35v7A4.667 4.667 0 0 0 14 46.667h2.333A4.667 4.667 0 0 0 21 42v-7a4.667 4.667 0 0 0-4.667-4.667M42 30.333h-2.333A4.667 4.667 0 0 0 35 35v7a4.667 4.667 0 0 0 4.667 4.667H42A4.667 4.667 0 0 0 46.667 42v-7A4.667 4.667 0 0 0 42 30.333" />
      <path d="M9.333 35v-7a18.667 18.667 0 0 1 37.334 0v7" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
export const IconGaming = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
      <path
        strokeWidth="2"
        d="M46.667 14H9.333a4.667 4.667 0 0 0-4.666 4.667v18.666A4.667 4.667 0 0 0 9.333 42h37.334a4.667 4.667 0 0 0 4.666-4.667V18.667A4.667 4.667 0 0 0 46.667 14M14 28h9.333m-4.666-4.667v9.334"
      />
      <path strokeWidth="3" d="M35 25.667v.024M42 30.333v.024" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
