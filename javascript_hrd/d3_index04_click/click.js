// function showDetail(){
//     let desc = document.querySelector('#desc');
//     console.log(desc);
//     desc.style.display="block";
// }

// function hideDetail(){
//     let desc = document.querySelector('#desc');
//     console.log(desc);
//     desc.style.display="none";
// }

document.querySelector('#open').onclick = funchtion()
  document.querySelector('#desc').style.display ="block";
  document.querySelector('#open').style.display ="none";
;

document.querySelector('#close').onclick = funchtion()
    document.querySelector('#open').style.display ="inline";
    document.querySelector('#desc').style.display ="none";
;