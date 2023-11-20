// Define the interface for the input object
interface InputObject {
  [fileName: string]: string;
}

// Define the interface for the output object
interface OutputObject {
  [name: string]: string[];
}

// Function to convert the input data to the desired output format
function convertData(inputData: InputObject[]): OutputObject[] {
  // Result object to store the intermediate data
  const result: OutputObject = {};

  // Iterate through each item in the input array
  inputData.forEach((item) => {
    // Extract the file name and person's name from the input item
    const fileName = Object.keys(item)[0];
    const name = item[fileName];

    // Update the result object based on the extracted data
    if (result[name]) {
      result[name].push(fileName);
    } else {
      result[name] = [fileName];
    }
  });

  // Map the result object to the desired output format
  const finalResult: OutputObject[] = Object.keys(result).map((name) => ({
    [name]: result[name],
  }));

  return finalResult;
}

// Example input array
const inputArray: InputObject[] = [
  { "letter.txt": "Richard" },
  { "paper.pdf": "Jack" },
  { "test.py": "Johnny" },
  { "numbers.docx": "Jack" },
];

// Convert the input array to the desired output format
const outputArray: OutputObject[] = convertData(inputArray);

// Print the result
console.log(outputArray);

// To run this file, run the following command in your terminal
// npx ts-node reshape-files-array.ts
