"use client";
import { Step, Steps } from "@/ui/stepper";
import { steps } from "../model/constants/steps";

export default function StepperStepsComponent() {
  return (
    <Steps>
      {steps.map((stepProps, index) => (
        <Step key={index} {...stepProps}></Step>
      ))}
    </Steps>
  );
}
