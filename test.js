const axios = require('axios');
const queryUrl = `https://api.github.com/users/KelalArrzenai`;
axios
                .get(queryUrl)
                .then(function (res) {
                    // const githubURL = JSON.stringify(res.html_url);
                    // const mdTemplate = `
// # ${titleInput}
            
// ## Description

// ${descrInput}

// ## Table of Contents

// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Contributing](#contributing)
// * [Tests](#tests)
// * [Questions](#questions)

// ## Installation

// ${installInput}

// ## Usage

// ${usageInput}

// ## License

// ${licInput}

// ## Contributing

// ${contInput}

// ## Tests

// ${testInput}

// ## Questions

// ${questInstr}

// ![${answers.githubID}(${githubURL})

// ${userEmail}

// `; // 
                    // fs.writeFile('README.md', mdTemplate, 'utf8', (err) => {
                    //     if (err) {
                    //         console.log(err);
                    //     }
                    //     console.log('\n README generated succesfully');
                    // });
                    console.log(res.data.html_url);
                });