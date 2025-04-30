export default function Pulse() {
  return (
    <svg
      className="back-pulse"
      viewBox="0 0 1440 951"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="back-pulse" opacity="0.51" filter="url(#filter0_d_287_279)">
        <path
          d="M-247 930H234.014L370.811 631.435L469.362 930L551.725 29L650.453 930H769.461L871.036 417.971L937.211 930H1078.46L1149.08 706.536L1210.81 930H1449"
          stroke="url(#paint0_linear_287_279)"
          stroke-opacity="0.03"
          stroke-width="14"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_287_279"
          x="-268"
          y="0.237549"
          width="1738"
          height="950.762"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-7" />
          <feGaussianBlur stdDeviation="10.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.501961 0 0 0 0 0.647059 0 0 0 0 0.839216 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_287_279"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_287_279"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_287_279"
          x1="598.468"
          y1="930"
          x2="605.132"
          y2="29.0118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F7F9FC" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}
