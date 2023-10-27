
const FileNameFromPath = (path) => {
const imageFilePath = path

// Split the string into two parts using the last '/'
const [ fileNameWithExtension, directoryPath] = imageFilePath.split('/').reverse();


return fileNameWithExtension;
}

module.exports = {
    FileNameFromPath,
};