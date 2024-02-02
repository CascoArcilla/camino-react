import { EVENTS } from "./cosnts";

export function navigate(href) {
  window.history.pushState({}, "", href);
  const navigatetionEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigatetionEvent);
}

export default function Link({ to, target, ...props }) {
  const handleAnchor = (event) => {
    const isMainEvent = event.button === 0; //cliec izquierdo o principal
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManagebleEvent = target === undefined || target === "_self";

    if (isMainEvent && isManagebleEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleAnchor} href={to} target={target} {...props} />;
}
