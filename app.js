const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))

const isAdult = (Age) => {
  if (Age >= 18) {
    return 'Adult'
  } else {
    return 'Minor'
  }
}
console.log('Exercise 2 Result:', isAdult(21))

const isCharAVowel = (char) => {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
  ) {
    return true
  } else {
    return false
  }
}
console.log('Exercise 3 Result:', isCharAVowel('a'))

const generateEmail = (name, domain) => {
  return `${name}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

const greetUser = (name, timeofday) => {
  return `Good ${timeofday}, ${name}!`
}
console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

const maxOfThree = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return num1
  } else if (num2 >= num1 && num2 >= num3) {
    return num2
  } else {
    return num3
  }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

const calculateTip = (ba, tp) => {
  return ba % tp
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

const convertTemperature = (temp, scale) => {
  if (scale === 'F') {
    return ((temp - 32) * 5) / 9
  } else if (scale === 'C') {
    return (temp * 9) / 5 + 32
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, 'C'))

const basicCalculator = (num1, num2, operation) => {
  if (operation === 'add') {
    return num1 + num2
  } else if (operation === 'subtract') {
    return num1 - num2
  } else if (operation === 'multiply') {
    return num1 * num2
  } else if (operation === 'divide') {
    return num1 / num2
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))

const calculateGrade = (grade) => {
  if (grade >= 90) {
    return 'A'
  } else if (grade >= 80) {
    return 'B'
  } else if (grade >= 70) {
    return 'C'
  } else if (grade >= 60) {
    return 'D'
  } else if (grade < 60) {
    return 'F'
  }
}
console.log('Exercise 10 Result:', calculateGrade(100))
