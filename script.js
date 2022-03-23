function query(params) {
    return document.querySelector(params)
}

upload = document.getElementById('image')
upload.onchange=function(){
    console.log(upload.files[0])
   url =  URL.createObjectURL(upload.files[0])
   wid=1;
   setInterval(function(params) {
       if (wid>=100) {
           clearInterval()
           query('.preview-image').innerHTML=`<img src="${url}" width='200' height="200">`
       }else{
       query('p').style.width=`${wid++}%`
       query('p').innerText=`${wid++}%`
       }
   },1000)
  
  
}