"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="3jw3udg">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="h:metrt">
            <div className="grid gap-1" data-oid="3czixgi">
              {title && <ToastTitle data-oid="tu8:qgg">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="509er91">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="war7qnn" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="v7hu61h" />
    </ToastProvider>
  );
}
