var maxPage = 3; //최대 페이지
var nowPage = 1; //현재 페이지 (전역 변수임에 유의)

document.querySelector(".next").addEventListener("click", function () {
  //.next를 클릭했을 때 발생하는 함수
  //nowPage 를 하나씩 증가함
  if (nowPage == maxPage) {
    //최대 페이지에 달하면 증가 중단
    return false;
  }
  nowPage++; //하나씩 증가함
  //얼만큼 증가하는지
  var nowPoint = (nowPage - 1) * -1340; //페이지 기준으로 이동 픽셀 설정
  document.querySelector(".product_list").style.transform =
    "translate(" + nowPoint + "px)";
});

document.querySelector(".prev").addEventListener("click", function () {
  //nowPage 를 하나씩 감소시킴
  if (nowPage == 1) {
    //최소 페이지이면 감소 중단
    return false;
  }
  //얼만큼 감소하는지
  nowPage--;
  var nowPoint = (nowPage - 1) * -1340; //페이지 기준으로 이동 픽셀 설정
  document.querySelector(".product_list").style.transform =
    "translateX(" + nowPoint + "px)";
});
