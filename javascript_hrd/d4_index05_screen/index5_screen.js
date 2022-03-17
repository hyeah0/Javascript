function openCenter(doc, win, w, h){
    let left = (screen.availWidth-w)/2;
    //화면 중앙에 오게
    let top = (screen.availHeight-h)/2;
    let opt = 'left=' + left + 'top=' + top + 'width=' + w + 'height=' + h;
    window.open(doc, win, opt);

    //경로, 창이름, 옵션
}
openCenter('index5_notice.html','pop','width=500, height=400');