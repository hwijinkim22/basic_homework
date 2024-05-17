document.querySelector('#container').classList.add("clicked")

function getSquare(number) {
    return Math.pow(number,2);
  }
  
  const result = getSquare(5);
  console.log(result); // 25 출력 (5의 제곱)