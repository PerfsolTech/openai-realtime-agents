import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import ElectricalFundamentals from "./tutor";
import interviewAgent from "./interviewAgent";
import simpleExample from "./simpleExample";

export const allAgentSets: AllAgentConfigsType = {
  frontDeskAuthentication,
  customerServiceRetail,
  simpleExample,
  ElectricalFundamentals,
  interviewAgent
};

export const defaultAgentSetKey = "customerServiceRetail";
