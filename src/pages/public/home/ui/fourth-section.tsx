import { MainContainer } from "@/widgets/container";

export default function Page() {
  return (
    <MainContainer>
      <div className="flex flex-col relative z-30 justify-between">
        <div className="flex flex-col gap-3 items-center w-full">
          <h3 className="font-bold text-slate-900 text-[48px] text-center leading-[normal]">
            Как это работает?
          </h3>
          <p className="text-slate-600 max-w-[468px] w-full text-center">
            С нашей интуитивно понятной системой вы можете легко интегрировать
            онлайн-платежи на ваш сайт всего в три простых шага.
          </p>
        </div>
        <div className="mt-[30px]">
          <StepsSection />
        </div>
      </div>
    </MainContainer>
  );
}

const StepsSection = () => {
  return (
    <div className="w-full relative mx-auto sm:mt-8 flex flex-wrap xl:flex-nowrap gap-x-[120px] gap-y-[20px] justify-center h-full max-w-[1000px] w-full">
      {/* Step 1 */}
      <div className="border-dashed border-2 absolute top-0 w-full top-[40px] z-[-1] max-w-[800px] hidden"></div>

      <div className="w-[253px] h-[252px] flex flex-col justify-center items-center">
        <div className="w-[73px] h-[73px]">
          <div className="w-[73px] h-[73px] bg-red-500 rounded-full text-white text-4xl font-bold leading-[48px] flex justify-center items-center">
            1
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="w-full text-center text-gray-900 text-[21px] font-bold leading-loose">
            Зарегистрируйтесь
          </div>
          <div className="w-full opacity-70 text-center text-gray-900 text-[17px] font-normal leading-[29px]">
            Пройдите быструю и простую регистрацию на нашей платформе.
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="w-[253px] h-[252px] flex flex-col justify-center items-center">
        <div className="w-[73px] h-[73px]">
          <div className="w-[73px] h-[73px] bg-green-400 rounded-full text-white text-4xl font-bold leading-[48px] flex justify-center items-center">
            2
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="w-full text-center text-gray-900 text-[21px] font-bold leading-loose">
            Настройте параметры
          </div>
          <div className="w-full opacity-70 text-center text-gray-900 text-[17px] font-normal leading-[29px]">
            Настройте платежные параметры в соответствии с потребностями.
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="w-[253px] h-[252px] flex flex-col justify-center items-center">
        <div className="w-[73px] h-[73px]">
          <div className="w-[73px] h-[73px] bg-indigo-600 rounded-full text-white text-4xl font-bold leading-[48px] flex justify-center items-center">
            3
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="w-full text-center text-gray-900 text-[21px] font-bold leading-loose">
            Начните пользоваться!
          </div>
          <div className="w-full opacity-70 text-center text-gray-900 text-[17px] font-normal leading-[29px]">
            Запустите ваш сайт и начните принимать платежи от клиентов.
          </div>
        </div>
      </div>
    </div>
  );
};
