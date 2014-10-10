$(document).ready(function() {
    var jobs = [];

    var url = "http://10.1.1.153:8080/api/json";

    $.getJSON(url, function(data){
        $.each(data.jobs, function(key, value){
            jobs.push(value);

            if(value.name.indexOf("AdventDirectUI") >= 0){
                var listItem = "<li class='list-group-item'><a href="+ value.url + " class='btn btn-default'>" + value.name + "</a></li>";

                if(value.color == "red"){
                    listItem = "<li class='list-group-item'><a href="+ value.url + " class='btn btn-danger'>" + value.name + "</a></li>";
                    $(listItem).appendTo("#jobs");
                }else if(value.color == "blue"){
                    listItem = "<li class='list-group-item'><a href="+ value.url + " class='btn btn-success'>" + value.name + "</a></li>";
                    $(listItem).appendTo("#jobs");
                }else if(value.color == "yellow"){
                    listItem = "<li class='list-group-item'><a href="+ value.url + " class='btn btn-warning'>" + value.name + "</a></li>";
                    $(listItem).appendTo("#jobs");
                } else {
                    $(listItem).appendTo("#jobs");
                }
            }

        });

        //$('.jobs').html(jobs);
    });
});