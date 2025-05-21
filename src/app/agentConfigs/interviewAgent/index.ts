import interviewAgent from './interviewAgent';
import { injectTransferTools } from '../utils';

// If you need to add additional agents that the interview agent could transfer to
// Add them here and uncomment the lines below
// import humanReviewer from './humanReviewer';
// interviewAgent.downstreamAgents = [humanReviewer];

const agents = injectTransferTools([interviewAgent]);

export default agents;