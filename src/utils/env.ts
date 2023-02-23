import * as dotenv from 'dotenv';

const config = dotenv.config().parsed;

export const environmentVariables = (env) => {
  const envVariable = config[env];
  if (!envVariable) {
    throw new Error(`Unable to locate Environment variable - ${env}`);
  }
  return envVariable;
};
