import { CheckboxWithLabelAccordionItemDataProps } from "@/entities/checkbox-with-label-accordion";
import { iconPaths } from "@/shared/constants/icon-paths";

export const platformsData: CheckboxWithLabelAccordionItemDataProps = [
  { label: "Посадочная страница", value: "pc", icon: iconPaths.platforms.pc },
  {
    label: "Рассылка через почту",
    value: "gmail",
    icon: iconPaths.platforms.gmail,
  },
  { label: "Яндекс.Директ", value: "yandex", icon: iconPaths.platforms.yandex },
  {
    label: "Google Ads",
    value: "google-ads",
    icon: iconPaths.platforms.googleAds,
  },
  { label: "YouTube", value: "youtube", icon: iconPaths.platforms.youtube },
];

export const socialMediaData: CheckboxWithLabelAccordionItemDataProps = [
  { label: "Instagram", value: "pc", icon: iconPaths.socialMedia.instagram },
  {
    label: "ВКонтакте",
    value: "vk",
    icon: iconPaths.socialMedia.vk,
  },
  {
    label: "Facebook",
    value: "facebook",
    icon: iconPaths.socialMedia.facebook,
  },
  {
    label: "Telegram",
    value: "telegram",
    icon: iconPaths.socialMedia.telegram,
  },
  { label: "Viber", value: "viber", icon: iconPaths.socialMedia.viber },
];

export const offlineEventsData: CheckboxWithLabelAccordionItemDataProps = [
  { label: "Выставки", value: "pc" },
  {
    label: "Вебинары",
    value: "vk",
  },
  {
    label: "Мероприятия",
    value: "facebook",
  },
  {
    label: "Каталоги",
    value: "telegram",
  },
  { label: "Статьи", value: "viber" },
];
