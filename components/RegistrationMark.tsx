type RegistrationMarkProps = {
  size?: number;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
};

/**
 * Printer's registration mark — crosshair + circle + center dot.
 * Used as the Proofhouse brand bug. Renders inline as SVG so it
 * picks up `currentColor` from its parent when `stroke="currentColor"`.
 */
export default function RegistrationMark({
  size = 14,
  className,
  stroke = "currentColor",
  strokeWidth = 1,
}: RegistrationMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="1" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="23" />
      <line x1="1" y1="12" x2="8" y2="12" />
      <line x1="16" y1="12" x2="23" y2="12" />
      <circle cx="12" cy="12" r="1.2" fill={stroke} stroke="none" />
    </svg>
  );
}
