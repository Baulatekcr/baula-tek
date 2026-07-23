import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-cta text-abyss shadow-[0_8px_30px_-8px_rgba(31,199,212,0.55)] hover:brightness-110 hover:shadow-[0_10px_36px_-8px_rgba(31,199,212,0.7)]",
        outline:
          "border border-current/40 text-current hover:border-cta hover:text-cta dark:border-foam/25 dark:text-foam dark:hover:border-cta dark:hover:text-cta",
        ghostLight:
          "border border-foam/25 text-foam hover:border-cta hover:text-cta",
      },
      size: {
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
