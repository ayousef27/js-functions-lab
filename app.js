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

const isCharAVowel = (argument) => {
  if ((argument) => vowel) {
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
  if (scale === 'f') {
    return ((temp - 32) * 5) / 9
  } else {
    return (temp * 9) / 5 + 32
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, 'f'))
