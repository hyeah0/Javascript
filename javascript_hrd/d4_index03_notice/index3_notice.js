//윈도우 오픈 
// window.open(경로, 창이름, 창 옵션 innerWidth,height)

let openPop = window.open("index3_notice.html","pop", "width=500, height=400");

if(openPop == null){
    alert("팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요.")
}
