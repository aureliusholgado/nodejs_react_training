// Install first all dependencies using 'npm install'
// 'npm ls' to verify all versions installed
// 'npm update' to update all dependencies

// SEMANTIC VERSIONING: "^" vs "~"
    // "^" will check for the version and everything ABOVE (e.g. v1.1.0 and v2.1.0) -> ANY UPDATE later than the version will work
    // "~" will check only for variations of the version (e.g. v1.1.0 and v1.2.0) -> ONLY PATCH UPDATES will work

// 'npm show depencyName versions' to see all available versions
    // lodash already has 4.17.21, but since we put a "~" on it, it will only apply the version until 4.16.6 (patch update), which is a bug-free version
    // request on the other hand, has a version until 2.88.2, so since we put a "^" on it, v2.88.2 will apply

// 'npm outded' to show all the outdated versions
// 'npm update' to update the packages according the semantic versionings
// 'npm i dependencyName@version' is another way of installing a specific version; 'npm i dependencyName@latest' to install the latest version