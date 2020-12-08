$(document).ready(function(){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
        var table = $("#manuDelTable");
        $.each(data, function(key, value){
            var row = $('<tr></tr>');
            var idCell = $('<td>' + value._id + '</td>');
            var nameCell = $('<td>' + value.name + '</td>');
            var countryCell = $('<td>' + value.country + '</td>');
            var foundedCell = $('<td>' + value.founded + '</td>');
            $(row).append(idCell);
            $(row).append(nameCell);
            $(row).append(countryCell);
            $(row).append(foundedCell);

            $(table).append(row);
        })
    });
    
    $("#btnMD").click(function(e) {
        e.preventDefault();

        var id = document.getElementById("idVal").value;
        //console.log(id);

        var url = "https://webtechcars.herokuapp.com/api/manufacturers" + "/" + id;

        $.ajax({
            type: 'DELETE',
            url: url,
            success: function(){
                console.log("success!");
                alert("Deleted successfully!");
            }, error: function(e) {
                console.log(e);
            }
            });
    });
});