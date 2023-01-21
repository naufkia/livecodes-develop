import { createApi, initializeApp, loadToolsPane } from './core';
import { API, Config } from './models';

export const app = async (config: Partial<Config>, baseUrl: string): Promise<API> => {
  await initializeApp({ config, baseUrl, isEmbed: true }, async () => {
    await loadToolsPane();
  });
  return createApi();
};
