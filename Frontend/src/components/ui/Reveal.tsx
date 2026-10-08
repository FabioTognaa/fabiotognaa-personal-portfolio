import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { observeReveal } from "../../lib/revealObserver";
import { prefersReducedMotion } from "../../lib/prefersReducedMotion";

type RevealOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
  delay?: number;
  children?: ReactNode;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delay = 0,
  ...props
}: RevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    let unobserve = () => {};
    unobserve = observeReveal(node, (isIntersecting) => {
      if (isIntersecting) {
        setVisible(true);
        unobserve();
      }
    });
    return unobserve;
  }, []);

  const style = (delay ? { "--reveal-delay": `${delay}ms` } : undefined) as
    | CSSProperties
    | undefined;

  return (
    <Component
      ref={ref}
      className={`reveal-scroll${visible ? "is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
