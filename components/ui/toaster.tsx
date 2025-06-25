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
    <ToastProvider data-oid="-furz6:">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="11ih0pq">
            <div className="grid gap-1" data-oid="rzaurr1">
              {title && <ToastTitle data-oid="ng.7uy9">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="ofro_em">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="la:36m5" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="a8pj5:k" />
    </ToastProvider>
  );
}
