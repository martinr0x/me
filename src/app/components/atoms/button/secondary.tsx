import { PropsWithChildren } from "react";

export default function SecondaryButton(props: PropsWithChildren) {
  return (
    <button  
      className="w-24 h-8 px-3 py-1 bg-primary hover:bg-primary-500 rounded-lg justify-center items-center inline-flex text-white text-base font-medium uppercase leading-normal tracking-wide"
    >{props.children}</button>
  );
}
