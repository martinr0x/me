export function App() {
  return (
    <div className="flex flex-col antialiased  overflow-y-scroll overflow-x-hidden overflow-hidden">
      <div className="flex flex-row w-screen h-screen relative">
        <div className="flex flex-row text-center justify-center flex-grow ">
          <div className="flex flex-col justify-between">
            <div className="mt-10 flex flex-row justify-left font-inter text-base">
              <a className="mr-8 font-bold">About me</a>
              <a className="mr-8">Background</a>
              <a className="mr-8">Projects</a>
            </div>
            <div>
              <div className="font-bold text-[86px] font-inter text-left mb-12 leading-[106px]">
                Hi there, <br></br>
                I'm Martin.
              </div>
              <div className="text-left text-base leading-6 font-normal font-raleway">
                <article className="font-semibold">
                  I am a software engineer.{' '}
                </article>
                Since I was a kid I was fascinated with all tech things.{' '}
                <br></br>
                Fast forward to today, this fascination turned into a career.
                <br></br>
                If you're curious to learn more about me, scroll further down
                this page.<br></br>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <div className="fixed mt-[0px] -mr-[6px] rounded-full z-50 h-3 w-3 bg-blue -translate-y-72"></div>
              <div className="border-r-2 border-black z-30 h-[30%] w-[2px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            className="w-[40vw] h-[80vh] cursor-pointer object-cover rounded-bl-[120px]"
            src="/me/portrait-martin2.jpg"
          ></img>
          <div className="pl-16 mt-8 flex flex-row  font-inter text-base justify-center">
            <a className="mr-8 pr-8 font-bold border-r-2 border-black">
              Software Engineering
            </a>
            <a className="mr-8 pr-8 marker: border-r-2 border-black">
              Performance
            </a>
            <a className="mr-8">Security</a>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-screen h-screen relative">
        <div className="sticky bottom-0 border-r-2 border-black h-[100vh] left-[30.6%] -mt-72 z-20"></div>
      </div>
    </div>
  );
}

export default App;
