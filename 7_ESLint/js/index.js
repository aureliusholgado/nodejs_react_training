// eslint --init -> to install es lint and set up rules; you can see the requirements in .eslintrc.json
// eslint folderName -> to run eslint on folder
// eslint folderName --fix -> to automatically fix errors
// https://eslint.org/docs/latest/rules/ check this link for other rules you may want to put

let checkPositive = (number) => {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
};

checkPositive(5);