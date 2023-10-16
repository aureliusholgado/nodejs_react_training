// eslint --init -> to install es lint and set up rules
// eslint folderName -> to run eslint on folder
// eslint folderName --fix -> to automatically fix errors

let checkPositive = (number) => {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
};

console.log(checkPositive(5));