import { MainContainer } from "@/widgets/container";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import { Button } from "@/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/shared/lib/classnames";

export default function Page() {
  return (
    <>
      <div className="relative bg-gradient-to-bl from-slate-700 to-gray-900 w-full flex flex-col justify-between">
        <TopWaveSvg />
        <div className="absolute top-[-150px] w-full flex justify-center">
          <Video />
        </div>
        <MainContainer>
          <div className="mt-[300px] max-w-[730px] w-full m-auto">
            <Content />
          </div>
        </MainContainer>

        <BottomWaveSvg />
      </div>
    </>
  );
}

const FeedBackCard = ({
  src,
  description,
  author,
  className,
}: {
  src: string;
  description: string;
  author: string;
  className?: string;
}) => {
  return (
    <div className={cn("bg-white rounded-[10px] p-[30px]", className)}>
      <div className="flex items-center gap-5 flex-wrap">
        <Avatar className={"w-24 h-24 cursor-pointer border !mt-0"}>
          <AvatarImage src={src} alt="@shadcn" className="object-cover" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-3">
          <p className="font-normal max-w-[520px] w-full text-[17px] leading-[normal]">
            {description}
          </p>
          <p className="text-slate-500 font-normal text-[15px]">{author}</p>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <h3 className="font-bold text-white text-[32px] leading-[normal] text-center">
        +1,749 команд поделились своим опытом использования нашего сервиса!
      </h3>

      <div className="flex flex-col gap-5 mt-[50px]">
        <FeedBackCard
          src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          author="Алексей Смирнов"
          description="“Невероятно! Не могу поверить, что настройка нашего интернет-магазина заняла всего несколько минут. Все было просто и понятно.”"
        />

        <FeedBackCard
          src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          author="Михаил Иванов"
          description="“Это лучший сервис для приема онлайн-платежей. Подходит как для начинающих, так и для опытных пользователей, стремящихся к успеху.”"
          className="opacity-70"
        />

        <FeedBackCard
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          author="Ирина Петрова"
          description="“Обязательный инструмент для любого бизнеса, который хочет принимать платежи онлайн быстро и безопасно.”"
          className="opacity-50"
        />
      </div>

      <Button
        variant={"ghost"}
        className="text-green-600 flex gap-2 m-auto mt-[50px]"
      >
        Все отзывы
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

const Video = () => {
  return (
    <div className="max-w-[1110px] w-full h-[352px] sm:h-[552px] md:h-[652px] px-[40px]">
      <iframe
        className="rounded-[30px] w-full h-full"
        src="https://www.youtube.com/embed/Kv1vQyrEOyA"
        title="Chai | Cinematic Tea B-Roll"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

const TopWaveSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        className="fill-white"
        d="M0,128L60,122.7C120,117,240,107,360,85.3C480,64,600,32,720,32C840,32,960,64,1080,85.3C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  );
};

const BottomWaveSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        className="fill-white"
        d="M0,128L60,128C120,128,240,128,360,144C480,160,600,192,720,176C840,160,960,96,1080,85.3C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
};
