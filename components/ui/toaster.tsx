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
    <ToastProvider data-oid="bkbix7c">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="0r0gds.">
            <div className="grid gap-1" data-oid="ejllugk">
              {title && <ToastTitle data-oid="rmije.b">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="ris4f_v">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="l:pgu-h" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="wnc6ogc" />
    </ToastProvider>
  );
}
