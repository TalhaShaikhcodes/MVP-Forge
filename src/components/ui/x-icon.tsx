import { LucideIcon } from "lucide-react";

export const XIcon: LucideIcon = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4.5 4.5L19.5 19.5" />
    <path d="M19.5 4.5L4.5 19.5" />
  </svg>
);

XIcon.displayName = "XIcon";