"use client";
import {
  GlobalCreateProjectProcessesSteps,
  GlobalCreateProjectProcessesContent,
  GlobalCreateProjectProcessesProvider,
} from "@/widgets/global-create-project-processes";
import { GlobalCreateProjectProcessesHeader } from "@/widgets/header";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <GlobalCreateProjectProcessesProvider>
        <GlobalCreateProjectProcessesHeader>
          <div className="w-full mt-3">
            <GlobalCreateProjectProcessesSteps />
          </div>
        </GlobalCreateProjectProcessesHeader>

        <div className="py-5 px-5">
          <GlobalCreateProjectProcessesContent />
        </div>
      </GlobalCreateProjectProcessesProvider>
    </div>
  );
}
