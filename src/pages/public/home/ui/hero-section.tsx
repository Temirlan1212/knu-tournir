import { Button } from "@/ui/button";
import { GuestHeader } from "@/widgets/guest-header";
import { MainContainer } from "@/widgets/container";
import { iconPaths } from "@/shared/constants/icon-paths";

export default function Page() {
  return (
    <>
      <div className="max-w-[1600px] relative bg-white w-full overflow-hidden">
        <MainContainer>
          <GuestHeader className="relative z-30 bg-transparent" />
        </MainContainer>
        <MainContainer>
          <div className="relative flex mt-[80px] h-[660px]">
            <div className="relative z-20 flex flex-col h-[fit-content]">
              <span className="text-slate-900  text-[35px] md:text-[77px] sm:text-[55px] font-extrabold font-['Open Sans'] uppercase leading-[normal]">
                Легкие <br />
              </span>
              <span className="text-slate-900 text-[35px] md:text-[77px] sm:text-[55px] font-extrabold font-['Open Sans'] uppercase leading-[normal]">
                и безопасные <br />
              </span>
              <span className="text-pink-600 text-[35px] md:text-[69px] sm:text-[55px] font-extrabold font-['Open Sans'] uppercase leading-[normal]">
                онлайн-платежи
              </span>
              <div className="max-w-[500px] w-full text-slate-900 text-base font-bold font-['Open Sans'] leading-[26.88px]">
                Миллионы компаний всех размеров используют Наш сервис онлайн и
                лично для приема платежей, отправки выплат, автоматизации
                финансовых процессов и увеличения доходов.
              </div>

              <div className="mt-[20px]">
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="px-[40px] bg-[#E33A88] hover:bg-[#E33A88]/90 rounded-[16px]"
                >
                  Начать сейчас
                </Button>
              </div>

              <img
                src={iconPaths.illustrations.bolt}
                alt="bolt"
                className="w-[137px] h-[150px] absolute right-[20px] bottom-[-100px] z-[-1]"
              />
            </div>
            <div className="absolute right-[-100px] z-0">
              <img
                src={iconPaths.illustrations.dashboardInterface}
                alt="dashboard-interface"
                className="shadow rounded-[20px]"
              />
              <img
                src={iconPaths.illustrations.mobileInterface}
                alt="mobile-interface"
                className="absolute top-[100px]"
              />
              <img
                src={iconPaths.illustrations.romb}
                alt="mobile-interface"
                className="w-[92px] h-[98px] absolute right-[180px] top-[-40px]"
              />
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
}
