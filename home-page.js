var search=document.getElementById("search");
var ok=document.getElementById("ok");
var vd=document.getElementsByClassName("vd");



ok.addEventListener("click",function(){
	var searchfor = search.value;
	for (var i = 0; i < vd.length; i++) {
        var title = vd[i].getElementsByTagName("b")[0].innerText;
        var description = vd[i].getElementsByTagName("p")[0].innerText;
        if (title.includes(searchfor) || description.includes(searchfor)) {
            vd[i].style.display = "block";
        } else {
            vd[i].style.display = "none";
        }
    }	
});
