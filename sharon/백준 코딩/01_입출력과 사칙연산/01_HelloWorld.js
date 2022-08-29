const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin" // 백준 표준 입력값
      : __filename.split("/").pop().slice(0, -3) + ".txt" // 현재 파일이름을 가져옵니다. (node 03_A+B.txt)
  )
  .toString()
  .trim()
  .split(" ");

  
console.log('Hello World!')