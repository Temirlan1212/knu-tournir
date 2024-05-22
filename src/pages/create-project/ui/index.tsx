"use client";
import {
  CreateProjectProcessesSteps,
  CreateProjectProcessesContent,
  CreateProjectProcessesProvider,
} from "@/widgets/create-project-processes";
import { CreateProjectProcessesHeader } from "@/widgets/header";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <CreateProjectProcessesProvider>
        <CreateProjectProcessesHeader>
          <div className="w-full mt-3">
            <CreateProjectProcessesSteps />
          </div>
        </CreateProjectProcessesHeader>

        <div className="py-5 px-5">
          <CreateProjectProcessesContent />
        </div>
      </CreateProjectProcessesProvider>
    </div>
  );
}
