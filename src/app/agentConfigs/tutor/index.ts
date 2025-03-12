import { injectTransferTools } from '../utils';
import ElectricalFundamentals from "@/app/agentConfigs/tutor/electricalFundamentals";

// authenticationAgent.downstreamAgents = [ElectricalFundamentals]
// tourAgent.downstreamAgents = [authenticationAgent]

const agents = injectTransferTools([ElectricalFundamentals]);

export default agents;