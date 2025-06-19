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
    <ToastProvider data-oid="e:-c7da">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="9w8:fu0">
            <div className="grid gap-1" data-oid="clrvjzj">
              {title && <ToastTitle data-oid="vpp6nw6">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="niigj4s">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="3b9v18l" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="iufi76f" />
    </ToastProvider>
  );
}
