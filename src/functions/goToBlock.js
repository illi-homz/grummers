import { elementScrollIntoView } from "seamless-scroll-polyfill";

export default function goToBlock(id) {
  const el = document.getElementById(id)

  elementScrollIntoView(el, { behavior: "smooth", block: "start"})
}
