// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// letter은 길이가 1인 영문자입니다.
// my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
// 대문자와 소문자를 구분합니다.
// 입출력 예
// my_string	letter	result
// "abcdef"	"f"	"abcde"
// "BCBdbe"	"B"	"Cdbe"
// 입출력 예 설명
// 입출력 예 #1

// "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.
// 입출력 예 #2

// "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.

function solution(my_string, letter) {
    return my_string.replaceAll(letter, '');
}