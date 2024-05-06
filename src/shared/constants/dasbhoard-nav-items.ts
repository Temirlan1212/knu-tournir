import { type INavItem } from "@/widgets/sidebar/model/types/sidebar";
import {
  BookOpen,
  Folder,
  Home,
  List,
  MessageSquareMore,
  Pipette,
  Search,
  Settings,
} from "lucide-react";

export const DashboardNavItems: INavItem[] = [
  {
    title: "Главная",
    icon: Home,
    path: { pathname: "/dashboard/manage" },
    color: "text-500",
  },
  {
    title: "Поиск",
    icon: Search,
    path: { query: "sidebar=search" },
    color: "text-500",
  },
  {
    title: "Проекты",
    icon: Folder,
    path: { pathname: "/dashboard/projects" },
    color: "text-500",
  },
  {
    title: "Курсы",
    icon: BookOpen,
    path: { pathname: "/dashboard/courses" },
    color: "text-500",
    isChidren: true,
    children: [
      {
        title: "Список курсов",
        icon: List,
        color: "text-500",
        path: { pathname: "/dashboard/courses/list" },
      },
    ],
  },
  {
    title: "Поддержка",
    icon: MessageSquareMore,
    path: { pathname: "/dashboard/support" },
    color: "text-500",
    position: "bottom",
  },
  {
    title: "Настройки",
    icon: Settings,
    path: { pathname: "/dashboard/settings" },
    color: "text-500",
    position: "bottom",
    isChidren: true,
    children: [
      {
        title: "Цвет интерфейса",
        icon: Pipette,
        color: "text-500",
        path: { pathname: "/dashboard/settings/theme" },
      },
    ],
  },
];
