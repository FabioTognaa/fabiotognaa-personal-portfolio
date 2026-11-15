import type { ComponentPropsWithoutRef, ReactNode } from "react";

const variants = {
  primary: "btn-primary",
  "primary-dark": "btn-primary-on-dark",
  ghost: "btn-ghost",
  "ghost-dark": "btn-ghost-on-dark",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "className" | "children">;

function Button({
  variant = "primary",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = `${variants[variant]} ${className}`;

  return (
    <a
      href={href}
      className={classes}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

export default Button;
