function countPositivesSumNegatives(input) {
    const arr = [];
    let positiveSumCount = 0;
    let negativeSum = 0;
    if(input && input.length) {
      for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) { //count the positives
            positiveSumCount += 1;
        } else {
            negativeSum += input[i]; //sum the negatives
        }
      }
      arr.push(positiveSumCount); //push to an array
      arr.push(negativeSum);
    }
    return arr;
}