import { ValueOf } from "next/dist/shared/lib/constants";
import { stepIndexes } from "../constants/steps";

export type StepIndexesProps = ValueOf<typeof stepIndexes>;
