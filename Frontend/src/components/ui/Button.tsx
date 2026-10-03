import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

const variants = {
  primary: "btn-primary",
  "primary-dark": "btn-primary-on-dark",
  ghost: "btn-ghost",
  "ghost-dark": "btn-ghost-on-dark",
} as const;

type Variant = keyof typeof variants;

type ButtonBase = {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
};

type ButtonLinkProps = ButtonBase &
  Omit<LinkProps, "className" | "children" | "to"> & {
    to: LinkProps["to"];
    href?: undefined;
    download?: undefined;
  };

type ButtonAnchorProps = ButtonBase &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
    href?: string;
    to?: undefined;
    download?: string | boolean;
  };

type ButtonProps = ButtonLinkProps | ButtonAnchorProps;

function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${variants[variant]} ${className}`;

  if ("to" in props && props.to) {
    const { to, ...linkProps } = props;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const href = "href" in props ? props.href : undefined;

  return (
    <a
      href={href}
      className={classes}
      download={"download" in props ? props.download : undefined}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

export default Button;
