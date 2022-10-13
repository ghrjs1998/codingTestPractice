// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

function solution(arr) { //매개변수 배열arr
    
    var sum = 0; //변수 sum0으로 초기화, 추후에 값을 더해줄 곳
    for(let i = 0; i < arr.length; i++){ 
      sum += arr[i]; //변수 sum에 배열 arr을 순회하면서 모든 값을 더해서 넣어줌/ accumulate
    }
    return sum / arr.length; //arr을 다 더한 값 sum을 총 arr길이로 나눠서 평균 계산
    
}