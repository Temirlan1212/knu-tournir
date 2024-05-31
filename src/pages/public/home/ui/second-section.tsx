import { iconPaths } from "@/shared/constants/icon-paths";
import { MainContainer } from "@/widgets/container";

export default function Page() {
  return (
    <>
      <div className="flex flex-wrap-reverse md:flex-nowrap items-center relative z-30">
        <div className="max-w-[800px] max-h-[470px] mt-[50px]">
          <img
            src={iconPaths.illustrations.paymentGroup}
            alt=""
            className="w-full h-full"
          />
        </div>
        <MainContainer className="md:px-0">
          <div className="max-w-[438px]">
            <h3 className="font-bold text-slate-900 text-[31px]">
              Полностью интегрированный набор платежных продуктов
            </h3>
            <p className="text-slate-600">
              Мы объединяем все, что требуется для создания веб-сайтов и
              приложений, которые принимают платежи и отправляют выплаты по
              всему миру. Продукты Stripe позволяют осуществлять платежи онлайн
              и лично розничным продавцам, компаниям, занимающимся подпиской,
              программным платформам и маркетплейсам, а также всему, что
              находится между ними.
            </p>
          </div>
        </MainContainer>
      </div>
    </>
  );
}
