import { fileTestRunner } from "./runner";

import { stringTemplateAgent, slashGPTAgent } from "@/experimental_agents";

export const main = async () => {
  await fileTestRunner("/graphs/slash_gpt.yml", { slashgpt: slashGPTAgent, stringTemplate: stringTemplateAgent });
};
main();
