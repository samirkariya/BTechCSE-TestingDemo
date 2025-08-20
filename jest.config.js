module.exports = {
reporters: [
"default",
["jest-junit", { outputName: "junit.xml" }]
],
coverageReporters: ["lcov", "html"]
};