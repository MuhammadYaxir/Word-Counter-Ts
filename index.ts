import inquirer from "inquirer"

type wordCount = (str: string) => void;

const wordCount: wordCount = (string) => {
    const words = string.trim().split(/\s+/g);
    console.log("Total Words In The Paragraph Are: " + words.length);

}


const getInput = async() => {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Enter Your word to count: "
        }
    ]);
    await wordCount(userInput.para)
}

await getInput();