
/*
4  x £5 notes  
15 x £10 notes
7  x £20 notes
*/

//replace with user input
const target=140;

//prepare the data
let fiver=[...Array(4)];
fiver.fill(5);
let tenner=[...Array(15)];
tenner.fill(10);
let twenty=[...Array(7)];
twenty.fill(20);

//set the following in React state.
const cash = [fiver, tenner, twenty];
const answer=[];

//running sum/total
let sum=0;

//main loop to dispense cash
while (getSum() < target) {
    dispenseCash(sum);
    sum=getSum();
}   

//for debugging. answer will eventually gets displayed on the screen
console.log('bills are: ', answer);

// this function add bill into the answer []
// then remove that bill from the array, i.e. pop()
// adding only if the sum is <= target, and if that denomination is still available.
function dispenseCash(sum) {
    if (fiver.length != 0 && getSum()+5 <= target) {
        answer.push(fiver.pop());
    }
    if (tenner.length != 0 && getSum()+10 <= target) {
        answer.push(tenner.pop());
    }
    if (twenty.length != 0 && getSum()+20 <= target) {
        answer.push(twenty.pop());    
    }
};

//helper method to calculate the running sum
//of all the bills we've added so far in the answer []
function getSum() {
    return answer.reduce((a,b)=>a+b,0);
}
