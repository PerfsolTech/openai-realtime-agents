import authenticationAgent from './authentication';
import tourAgent from "./tourGuide";
import { injectTransferTools } from '../utils';

authenticationAgent.downstreamAgents = [tourAgent]
tourAgent.downstreamAgents = [authenticationAgent]

const agents = injectTransferTools([tourAgent, authenticationAgent]);

export default agents;