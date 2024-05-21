"use client";
import { Step, Stepper } from "@/ui/stepper";
import { steps } from "../model/constants/steps";
import Content from "./stepper-content";

export default function StepperDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper
        initialStep={0}
        steps={steps}
        responsive={false}
        variant="line"
        orientation="horizontal"
      >
        {steps.map((stepProps, index) => (
          <Step key={index} {...stepProps}></Step>
        ))}
        <Content />
      </Stepper>
    </div>
  );
}
