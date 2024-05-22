// "use client";
// import { Step, Stepper } from "@/ui/stepper";
// import { steps } from "../model/constants/steps";
// import Content from "./stepper-content";

// export default function StepperComponent() {
//   return (
//     <div className="flex w-full flex-col gap-4">
//       <Stepper
//         initialStep={0}
//         steps={steps}
//         responsive={false}
//         variant="circle-column"
//         orientation="horizontal"
//         onClickStep={(step) => {
//           console.log(step);
//         }}
//       >
//         {steps.map((stepProps, index) => (
//           <Step key={index} {...stepProps}></Step>
//         ))}

//         <Content />
//       </Stepper>
//     </div>
//   );
// }

"use client";
import { Step, Steps } from "@/ui/stepper";
import { steps } from "../model/constants/steps";
import Content from "./stepper-content";
import { StepperProvider } from "@/shared/ui/stepper/context";

export default function StepperComponent() {
  return (
    <div className="flex w-full flex-col gap-4">
      <StepperProvider
        value={{
          steps: steps,
          initialStep: 0,
          responsive: false,
          variant: "circle-column",
          orientation: "horizontal",
          clickable: true,
        }}
      >
        <Steps>
          {steps.map((stepProps, index) => (
            <Step key={index} {...stepProps}></Step>
          ))}
        </Steps>

        <Content />
      </StepperProvider>
    </div>
  );
}
