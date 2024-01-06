import React from "react";
import { DialogHTMLAttributes, useLayoutEffect, useRef } from "react";
import "./dialog.css";

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  className?: string;
  closeOnClickOutside?: boolean;
  animate?:
    | "slideFromTop"
    | "slideFromBottom"
    | "slideFromLeft"
    | "slideFromRight"
    | "zoomInOut";
  animationTime?: 3 | 5 | 7 | 9;
  backdropColor?: "black" | "white" | "red" | "blue" | "transparent";
  open?: boolean;
  onClose: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
  children,
  className,
  closeOnClickOutside = true,
  animate,
  animationTime,
  backdropColor,
  open,
  onClose,
  ...rest
}) => {
  //check firefox
  let animateClass;
  let backdropClass;
  let animationTimeClass;
  /* animate class */
  animateClass = animate ? `${animate}` : "";
  /* animate time class */
  animationTimeClass = animationTime ? `animation-time${animationTime}` : "";
  /* backdrop color class */
  backdropClass = backdropColor ? `bkd ${backdropColor + "Backdrop"}` : "";
  function isFirefoxOrSafari() {
    const userAgent = navigator.userAgent;
    return (
      /Firefox/i.test(userAgent) ||
      /^((?!chrome|android).)*safari/i.test(userAgent)
    );
  }

  if (isFirefoxOrSafari()) {
    animateClass = animate ? `${animate}Moz` : "";
    backdropClass = backdropColor ? `${backdropColor + "Backdrop"}` : "";
  }

  const allClasses = `dOpen ${animateClass} ${animationTimeClass} ${backdropClass} ${
    className || ""
  }`;

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
        if (closeOnClickOutside) {
          const dialogDimensions = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            e.currentTarget.close();
          }
        }
      }}
      className={allClasses}
      {...rest}
    >
      {children}
    </dialog>
  );
};
