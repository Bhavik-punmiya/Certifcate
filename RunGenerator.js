// python-runner.js

const { exec } = require('child_process');

function runPythonScript() {
    console.log('Running Python script...');
    // Run the Python script
    exec('python3 Generator.py', (error, stdout, stderr) => {
        console.log('Python script finished running');
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}


module.exports = {
    runPythonScript,
};
