// eslint --init -> to install es lint and set up rules; you can see the requirements in .eslintrc.json
// eslint folderName -> to run eslint on folder
// eslint folderName --fix -> to automatically fix errors

let checkPositive = (number) => {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
};

checkPositive(5);