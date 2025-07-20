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
    <ToastProvider data-oid="flhqn8o">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="u85ecv4">
            <div className="grid gap-1" data-oid="sjz._u.">
              {title && <ToastTitle data-oid="lisxs0e">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="ptv_hhl">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="s:7trtw" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="..-974p" />
    </ToastProvider>
  );
}
