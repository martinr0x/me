// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import PrimaryButton from './components/atoms/button/primary';
import TertiaryButton from './components/atoms/button/tertiary';
import SecondaryButton from './components/atoms/button/tertiary';

export function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-md">
        <div className="flex justify-center pt-5 pb-10">
          <div className="w-[284px] h-10 px-6 py-2 bg-white rounded-3xl shadow border border-zinc-100 justify-start items-start gap-8 inline-flex">
            <div className="text-indigo-600 text-base font-medium leading-normal">
              About me
            </div>
            <div className="text-blue-950 text-base font-medium leading-normal">
              Projects
            </div>
            <div className="text-blue-950 text-base font-medium leading-normal">
              Blog
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <div className="flex-initial w-80 h-72">
              <img className=""></img>
            </div>
            <div className="pl-8 flex-1">
              <div className="text-neutral-900 text-4xl font-semibold leading-10">
                Hi there, I’m Martin.
              </div>
              <div className="pt-4 font-normal text-base font-">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="text-neutral-900 text-4xl font-semibold leading-10 pb-10">
            Background
          </div>
        </div>
        <div>
    
        </div>
        <div className="pb-10">
          <div className="w-[574px] text-black text-xl font-semibold leading-7">
            Highschool
          </div>
          <div className="pt-4 font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </div>
        </div>
        <div className="pb-10">
          <div className="w-[574px] text-black text-xl font-semibold leading-7">
            Bachelor
          </div>
          <div className="pt-4 font-normal text-base font-">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </div>
        </div>
        <div className="pb-10">
          <div className="w-[574px] text-black text-xl font-semibold leading-7">
            Master
          </div>
          <div className="pt-4 font-normal text-base font-">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
