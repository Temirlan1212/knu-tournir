import { MainContainer } from "@/widgets/container";
import CodeBlock from "./code-block";

export default function Page() {
  return (
    <>
      <MainContainer>
        <div className="flex flex-wrap lg:flex-nowrap items-center relative z-30 gap-5 justify-between">
          <div className="max-w-[300px] sm:max-w-[438px] w-full flex flex-col gap-4">
            <h3 className="font-bold text-slate-900 text-[25px] sm:text-[48px] text-wrap leading-[normal]">
              Самые мощные и простые в использовании API в мире
            </h3>

            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-3">
                <h4 className="font-[500] text-slate-900 text-[18px] sm:text-[21px]  leading-[normal]">
                  Инструменты для каждого стека
                </h4>
                <p className="text-slate-600 text-[12px] sm:text-[18px] text-wrap ">
                  Мы предлагаем клиентские и серверные библиотеки на всех языках
                  - от React и PHP до .NET и iOS.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-[500]  text-slate-900 text-[18px] sm:text-[21px] leading-[normal]">
                  Готовые интеграции
                </h4>
                <p className="text-slate-600  text-[12px] sm:text-[18px]">
                  Используйте интеграцию с такими системами, как Shopify,
                  WooCommerce, NetSuite и другими.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[290px] sm:max-w-full w-full lg:max-w-[680px] max-h-[608px]">
            <CodeBlock />
          </div>
        </div>
      </MainContainer>
    </>
  );
}
