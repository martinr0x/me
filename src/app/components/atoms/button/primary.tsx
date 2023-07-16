import { PropsWithChildren } from "react";

interface Props {
  onClick: any;
}

export default function PrimaryButton(props: PropsWithChildren<Props>) {

  return (
    <button onClick={props.onClick}
      className="w-24 h-8 px-3 py-1 bg-blue hover:bg-primary-100 rounded-lg justify-center items-center inline-flex text-white text-base font-medium uppercase leading-normal tracking-wide"
    >{props.children}</button>
  );
}
