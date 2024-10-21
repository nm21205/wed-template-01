<script>
function checkLogin() {
  // validUsername과 validPassword 변수에는 정의된 올바른 사용자 이름과 비밀번호가 저장 되어 있습니다.
  const validUsername = "user";
  const validPassword = "pass";

  //1번 username변수에 #username에 입력한 값을, password변수에 #password에 입력한 값을 할당 합니다.
  //여기에 코드를 작성해 주세요(1번)
  var username = document.getElementById("username").value;
  console.log(username);

  var password = document.getElementById("password").value;
  console.log(password);
  //2번 && 연산자를 사용하여 username과 password가 validUsername과 validPassword와 둘 다 올바른지 확인
  //여기에 코드를 작성해 주세요(2번)
  var isLoginValid =
    username === validUsername && password === validPassword;

  //아이디가 message인 요소를 선택
  const messageElement = document.getElementById("message");
  //3번 username과 password가 올바르면(true) messageElement에 "로그인 성공" 이라는 글자를 넣어 주고, username과 password중 하나라도 다르면 "로그인 실패" 라는 글자를 넣어 줍니다.
  //여기에 코드를 작성해 주세요(3번)
  if (isLoginValid) {
    //isLoginVaild가 true면 실행
    messageElement.textContent = "로그인 성공";
    messageElement.style.color = "red";
  } else {
    //isLoginvaild가 false면 실행
    messageElement.textContent = "로그인 실패";
    messageElement.style.color = "red";
  }
}
</script>