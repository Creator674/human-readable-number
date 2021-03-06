module.exports = function toReadable (number) {
    const WORDS = {
        0: {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine"
        },
        1: {
            0: "ten",
            1: "eleven",
            2: "twelve",
            3: "thirteen",
            4: "fourteen",
            5: "fifteen",
            6: "sixteen",
            7: "seventeen",
            8: "eighteen",
            9: "nineteen"
        },
        2: {
            1: "ten",
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety"
        }
    };
    let answer = [];
    let str = ""+number;
    console.log(str);
    arr = str.split("");
    console.log(arr);
    switch(arr.length){
        case 1:
            answer.push(WORDS[0][number]);
            break;
        case 2:
            if(arr[0] === '1'){
                answer.push(WORDS[1][arr[1]]);
            }
            else if(arr[1] === '0'){
                answer.push(WORDS[2][arr[0]]);
            }
            else{
                answer.push(WORDS[2][arr[0]]);
                answer.push(" ");
                answer.push(WORDS[0][arr[1]]);
            }
            break;
        case 3:
            answer.push(WORDS[0][arr[0]]);
            answer.push(" ");
            answer.push("hundred");
            if(arr[1] === '1'){
                answer.push(" ");
                answer.push(WORDS[1][arr[2]]);
            }
            else if(arr[1] === '0' && arr[2] === '0'){
                return answer.join("");
            }
            else if(arr[1] === '0'){
                answer.push(" ");
                answer.push(WORDS[0][arr[2]]);
            }
            else if(arr[2] === '0'){
                answer.push(" ");
                answer.push(WORDS[2][arr[1]]);
            }
            else {
                answer.push(" ");
                answer.push(WORDS[2][arr[1]]);
                answer.push(" ");
                answer.push(WORDS[0][arr[2]]);
            }
            break;
    }
    console.log(answer);
    return answer.join("");
}