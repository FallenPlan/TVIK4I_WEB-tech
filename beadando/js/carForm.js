$(document).ready(function(){
    $("#btn").click(function() {
        const formToJSON = elements => [].reduce.call(elements, (data, element) => {

            if(isValidElement(element)){
                data[element.name] = element.value;
            }
            return data;
        }, {});

        const handleFormSubmit = event => {
            event.preventDefault();
            const data = formToJSON(form.elements);

            var resJSON =JSON.stringify(data);
            //console.log(resJSON);

            $.ajax({
                type: 'POST',
                url: "https://webtechcars.herokuapp.com/api/cars",
                data: resJSON,
                error: function(e) {
                console.log(e);
                },
                dataType: "json",
                contentType: "application/json"
            });
        };

        const form = document.getElementsByClassName('myForm')[0];
        form.addEventListener('submit', handleFormSubmit);
        
        const reducerFunction = (data, element) => {

            data[element.name] = element.value;
    
            console.log(JSON.stringify(data));
    
            return data;
        };

        const isValidElement = element => {
        return element.name && element.value;
        };
    });

});