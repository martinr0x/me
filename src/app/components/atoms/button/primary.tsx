import { PropsWithChildren } from "react";

interface Props {
  onClick?: any;
}

export default function PrimaryButton(props: PropsWithChildren<Props>) {

  return (
    <button onClick={props.onClick}
      className="m-[2px] px-2 first:ml-0 py-1 bg-blue hover:bg-primary-100 rounded-lg justify-center items-center inline-flex text-white text-[11px] font-medium uppercase leading-normal tracking-wide"
    >{props.children}</button>
  );
}
