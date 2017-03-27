$(function() {
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/kryzalid.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var data = response.courses.completed;
      for(var i = 0;i <= data.length;i++){
        var div = document.createElement("div");
        div.className = "course";
        var badgeTitle = document.createElement("h3");
        var titlenode = document.createTextNode(data[i].title);
        var img = document.createElement("img");
        img.src = data[i].badge;
        var cta = document.createElement("a");
        var ctanode = document.createTextNode("See Course");
        cta.href = data[i].url;
        cta.target = "_blank";
        cta.className = "btn btn-primary";
        cta.appendChild(ctanode);
        badgeTitle.appendChild(titlenode);
        div.appendChild(badgeTitle);
        div.appendChild(img);
        div.appendChild(cta);
        document.getElementById("badges").appendChild(div);
      }
    }
  });
});
