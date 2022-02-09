const XLSX=require('xlsx');

const data = function excelFileTojson (FileName) {
  const workbook=XLSX.readFile(FileName);
  const sheet_name_list = workbook.SheetNames;
  console.log(sheet_name_list); // getting as Sheet1

  sheet_name_list.forEach(function (y) {
    const worksheet = workbook.Sheets[y];
    
    const headers = {};
    const data = [];

    // Function of the loop
    for (let z in worksheet){
      if (z[0] === "!") continue;
      //parse out the column, row, and value
      const col = z.substring(0, 1);
      // console.log(col);

      const row = parseInt(z.substring(1));
      // console.log(row);

      const value = worksheet[z].v;
      // console.log(value);

      //store header names
      if (row == 1) {
        headers[col] = value;
        // storing the header names
        continue;
      }

      if (!data[row]) data[row] = {};
      data[row][headers[col]] = value;
    }

    //drop those first two rows which are empty
    data.shift();
    data.shift();
    console.log(data);            //data will hold the json array
    return data;                  //return the json array
  });
};

module.exports = data; 
  