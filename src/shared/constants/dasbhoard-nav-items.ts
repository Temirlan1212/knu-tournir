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
import { dashboardPaths } from "@/shared/routing";

export const DashboardNavItems: INavItem[] = [
  {
    title: "Главная",
    icon: Home,
    path: { pathname: dashboardPaths.manage },
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
    path: { pathname: dashboardPaths.projects },
    color: "text-500",
  },
  {
    title: "Курсы",
    icon: BookOpen,
    path: { pathname: dashboardPaths.courses },
    color: "text-500",
    isChidren: true,
    children: [
      {
        title: "Список курсов",
        icon: List,
        color: "text-500",
        path: { pathname: dashboardPaths.coursesList },
      },
    ],
  },
  {
    title: "Поддержка",
    icon: MessageSquareMore,
    path: { pathname: dashboardPaths.support },
    color: "text-500",
    position: "bottom",
  },
  {
    title: "Настройки",
    icon: Settings,
    path: { pathname: dashboardPaths.settings },
    color: "text-500",
    position: "bottom",
    isChidren: true,
    children: [
      {
        title: "Цвет интерфейса",
        icon: Pipette,
        color: "text-500",
        path: { pathname: dashboardPaths.settingsTheme },
      },
    ],
  },
];
