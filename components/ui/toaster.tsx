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
    <ToastProvider data-oid="si11jgm">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="l6lxzkq">
            <div className="grid gap-1" data-oid="qbsrfju">
              {title && <ToastTitle data-oid="pq0b9zt">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="m:9lw5g">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="-8_n2rf" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="hdp:_pv" />
    </ToastProvider>
  );
}
