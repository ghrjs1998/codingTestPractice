// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1
// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.


function solution(n) {
    //정수 n의 제곱근을 구하고 제곱근일 경우, 제곱근이 아닐 경우를 조건으로 한다. 이 때 구분하는 조건은 나머지(%)를 사용한다.
    // 제곱근일 경우, 제곱근에 +1을 한 제곱을 출력하고
    // 제곱근이 아닐 경우, -1을 출력한다.
    var answer = 0;
    let sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) { // 나머지를 이용해 소숫점 판별, 제곱근이 아닐 경우
       answer = -1;
    } else {
        answer = Math.pow(sqrt+1,2); // 제곱근일 경우
    }
    return answer
}
    