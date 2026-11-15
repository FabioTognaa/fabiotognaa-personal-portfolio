import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

type RevealOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
  delay?: number;
  children?: ReactNode;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

/**
 * Wrapper per l'animazione "reveal on scroll". Nessun hook: il markup è
 * statico e l'attributo `data-visible` lo aggiunge lo script del layout.
 */
function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delay = 0,
  ...props
}: RevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const style = (delay ? { "--reveal-delay": `${delay}ms` } : undefined) as
    | CSSProperties
    | undefined;

  return (
    <Component
      data-reveal
      className={`reveal-scroll${className ? ` ${className}` : ""}`}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
