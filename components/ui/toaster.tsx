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
    <ToastProvider data-oid="h_0o2z3">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="k2q6q_q">
            <div className="grid gap-1" data-oid=":7kvo_b">
              {title && <ToastTitle data-oid="cf6bk5l">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="1_s81j7">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="huslnf5" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="j3dg7c3" />
    </ToastProvider>
  );
}
