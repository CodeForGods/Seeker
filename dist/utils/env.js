"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentVariables = void 0;
const dotenv = require("dotenv");
const config = dotenv.config().parsed;
const environmentVariables = (env) => {
    const envVariable = config[env];
    if (!envVariable) {
        throw new Error(`Unable to locate Environment variable - ${env}`);
    }
    return envVariable;
};
exports.environmentVariables = environmentVariables;
//# sourceMappingURL=env.js.map