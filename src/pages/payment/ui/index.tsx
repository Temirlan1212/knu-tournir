"use client";

import {
  PaymentZustandForm,
  selectPaymentStoreValues,
  usePaymentFormStore,
} from "@/features/payment/form";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Page = () => {
  const values = usePaymentFormStore(selectPaymentStoreValues);

  return (
    <div className="w-full max-w-[420px] m-auto flex flex-col gap-3">
      <Cards
        cvc={values?.cvc || ""}
        expiry={values?.expiry || ""}
        focused={""}
        name={values?.name || ""}
        number={values?.number || 0}
      />
      <PaymentZustandForm
        onSubmit={(v) => {
          console.log(v);
        }}
      />
    </div>
  );
};

export default Page;
