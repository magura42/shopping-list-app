/* global module */

module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "roots": [
        "./src/*",
        "./test/components"
    ],
    "setupTestFrameworkScriptFile": "./enzymeSetup.ts",
    "testRegex": "Test\\.tsx?$",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testURL": "http://localhost"
};
