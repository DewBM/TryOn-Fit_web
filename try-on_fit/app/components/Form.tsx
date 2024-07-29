import React from "react";

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  action: (data: any) => void;
  children: React.ReactNode;
  className?: string;
  noValidate?: boolean;
}

export default function Form({
  onSubmit,
  action,
  children,
  className,
  noValidate,
}: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      action={action}
      className={className}
      noValidate={noValidate}
    >
      {children}
    </form>
  );
}
