import { iconPaths } from "@/shared/constants/icon-paths";
import { MainContainer } from "@/widgets/container";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <MainContainer>
        <div className="border w-full mb-[40px]" />

        <div className="flex items-center justify-center md:justify-between gap-4 flex-wrap">
          <p className="text-center">
            © 2024 Copyright, All Right Reserved, Made by Ilya Yugai with ❤️
          </p>

          <nav className="flex gap-5 items-center w-full md:w-auto justify-center">
            <Link href={"#"}>
              <img
                src={iconPaths.socialMedia.twitter}
                className="w-[19px] h-[19px]"
              />
            </Link>
            <Link href={"#"}>
              <img
                src={iconPaths.socialMedia.facebook}
                className="w-[19px] h-[19px]"
              />
            </Link>
            <Link href={"#"}>
              <img
                src={iconPaths.socialMedia.instagram}
                className="w-[19px] h-[19px]"
              />
            </Link>
            <Link href={"#"}>
              <img
                src={iconPaths.socialMedia.telegram}
                className="w-[19px] h-[19px]"
              />
            </Link>
          </nav>
        </div>
      </MainContainer>
    </div>
  );
}
