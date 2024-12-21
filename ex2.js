const fs = require("fs"); // ייבוא המודול 'fs' לעבודה עם קבצים ב-Node.js

function copyLinesFromFiles(inputFiles, outputFile) {
  let output = ""; // משתנה לשמירת התוכן שייכתב לקובץ הפלט

  inputFiles.forEach((filePath, index) => {
    // מעבר על כל קובץ במערך הקבצים
    try {
      const lines = fs.readFileSync(filePath, "utf8").split("\n"); // קריאת תוכן הקובץ וחלוקה לשורות
      output += lines.slice(0, index + 1).join("\n") + "\n"; // הוספת מספר שורות מהקובץ בהתאם למספר הסידורי שלו
    } catch (err) {
      console.warn(`File '${filePath}' not found. Skipping.`); // אזהרה במקרה שהקובץ לא נמצא
    }
  });

  fs.writeFileSync(outputFile, output); // כתיבת כל התוכן שנאסף לקובץ הפלט
}

const inputFiles = Array.from(
  { length: 10 },
  (_, i) => `input_file_${i + 1}.txt`
); // יצירת מערך שמות קבצים input_file_1.txt עד input_file_10.txt
const outputFile = "output_file.txt"; // שם קובץ הפלט

copyLinesFromFiles(inputFiles, outputFile); // קריאה לפונקציה להעתקת השורות
console.log(`Contents have been copied to '${outputFile}'.`); // הדפסת הודעה לסיום
