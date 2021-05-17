function classic(){
      document.onreadystatechange = function () {
      if (document.readyState == "complete") {
          var xmlHttp = new XMLHttpRequest();

            xmlHttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                 // Typical action to be performed when the document is ready:
                    var lines  = xmlHttp.responseText.split("\n");
                   for(var i=0;i<lines.length; ++i){
                   line = lines[i].split("|");
                     var divi = document.createElement('div');
                     divi.className = "paper";
                     divi.id = "x"+i;
                     divi.innerHTML = '<a id = "a'+i+'" class="col-md-4">'+line[0]+ '</a>';
                     divi.innerHTML += '<a id = "b'+i+'"class="col-md-8" href="'+line[1] +'">' + line[2] + '</a> ';
                     document.querySelector(".element").appendChild(divi);
                     var brline = document.createElement('hr');
                     document.querySelector(".element").appendChild(brline);
                   }

                 }
              };
        xmlHttp.open("GET","papers.csv",false);
        xmlHttp.send();
      }
  }
}
