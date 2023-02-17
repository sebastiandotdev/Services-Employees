import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transform: {
    "^.+\\.ts?$": "babel-jest",
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
};

export default config;
