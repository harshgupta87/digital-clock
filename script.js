function showtime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    h = h<10 ? "0"+h : h; 
    m = m<10 ? "0"+m : m; 
    s = s<10 ? "0"+s : s; 
    
    var time = h + " : " +m +" : "+s;
    document.getElementsByTagName('h1')[0].innerText = time;
    setTimeout(showtime,1000);
}