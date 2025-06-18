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
    <ToastProvider data-oid="r74reqp">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="bjs:ebm">
            <div className="grid gap-1" data-oid="_.kldz5">
              {title && <ToastTitle data-oid="d_twpqk">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="eckpj_g">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="4.pb-zp" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="b4oi8_s" />
    </ToastProvider>
  );
}
