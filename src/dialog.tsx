import React from "react";
import { DialogHTMLAttributes, useLayoutEffect, useRef } from "react";
import "./dialog.css";

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  className?: string;
  animate?:
    | "slideFromTop"
    | "slideFromBottom"
    | "slideFromLeft"
    | "slideFromRight"
    | "zoomInOut";
  backdropColor?: "black" | "white" | "red" | "blue";
  open?: boolean;
  onClose: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  children,
  className,
  animate,
  backdropColor,
  open,
  onClose,
  ...rest
}) => {
  /* animate class */
  const animateClass = animate
    ? `allTransition startOpacity openOpacity endOpacity ${animate}`
    : "";
  const backdropClass = backdropColor
    ? `bkd ${backdropColor + "Backdrop"}`
    : "";
  /* all class with user defined */
  const allClasses = `${animateClass} ${backdropClass} ${className || ""}`;

  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const closeListenerFnc = () => {
      onClose && onClose();
    };

    const dialogRef = ref.current;
    dialogRef?.addEventListener("close", closeListenerFnc);

    return () => {
      dialogRef?.removeEventListener("close", closeListenerFnc);
    };
  }, [onClose]);

  useLayoutEffect(() => {
    if (open && !ref.current?.open) {
      ref.current?.showModal();
    } else if (!open && ref.current?.open) {
      ref.current?.close();
    }
  }, [open]);

  return (
    <dialog
      open
      ref={ref}
      onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          e.currentTarget.close();
        }
      }}
      className={allClasses}
      {...rest}
    >
      {children}
    </dialog>
  );
};
