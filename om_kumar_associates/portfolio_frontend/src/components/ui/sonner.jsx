import React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] shadow-lg",

          description:
            "text-[hsl(var(--muted-foreground))]",

          actionButton:
            "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]",

          cancelButton:
            "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted)/0.8)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };