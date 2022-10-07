// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.


function solution(n){
    let sum = 0; //변수 sum=0으로 초기화, 추후에 값을 더해줄 곳
    n=n.toString().split(''); //문자열을 문자마다 쪼개기
    for(let i=0; i<n.length; i++){ 
        sum += Number(n[i]) //toString().split('')으로 쪼갰던 문자를 숫자로 변환
    }
    return sum;
}