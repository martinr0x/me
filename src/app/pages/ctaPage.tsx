import Contacts from '../contacts';

export default function CtaPage() {
  return (
    <div
      id="call-to-action"
      className="w-screen h-screen flex flex-row justify-center"
    >
      <div className="max-w-screen-lg flex flex-col justify-center">
        <div className="font-bold text-[46px] sm:text-[86px] font-inter text-center sm:text-left mb-20 smleading-[106px] ">
          Let's work together.
        </div>

        <Contacts />
      </div>
    </div>
  );
}
