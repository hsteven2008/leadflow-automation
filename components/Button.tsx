import Link from "next/link";

type Variant = "primary" | "secondary" | "outline-white";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600",
  secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50",
  "outline-white": "bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-700",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-block font-semibold rounded-lg transition-colors duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
