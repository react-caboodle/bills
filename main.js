
/*
4  x £5 notes  
15 x £10 notes
7  x £20 notes
*/

const target=140;
let fiver=[...Array(4)];
let tenner=[...Array(15)];
let twenty=[...Array(7)];
const answer=[];
fiver.fill(5);
tenner.fill(10);
twenty.fill(20);
const cash = [fiver, tenner, twenty];

let sum=0;

while (getSum() < target) {
    dispenseCash(sum);
    sum=getSum();
}   

console.log('bills are: ', answer);

function dispenseCash(sum) {
    console.log('target ', target);
    if (fiver.length != 0 && getSum()+0 <= target) {
        console.log('in fiver');
        answer.push(fiver.pop());
    }
    if (tenner.length != 0 && getSum()+10 <= target) {
        console.log('in tenner');
        answer.push(tenner.pop());
    }
    if (twenty.length != 0 && getSum()+20 <= target) {
        console.log('in twenty');
        answer.push(twenty.pop());    
    }
};

function getSum() {
    return answer.reduce((a,b)=>a+b,0);
}
