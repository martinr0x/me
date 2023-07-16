import { PropsWithChildren } from "react";

export default function TertiaryButton(props: PropsWithChildren) {
  return (
    <button
      className="w-24 h-8 px-3 py-1 bg-blue-900 hover:bg-blue-800 rounded-lg justify-center items-center inline-flex text-white text-base font-medium uppercase leading-normal tracking-wide"
    > {props.children}</button>
  );
}
