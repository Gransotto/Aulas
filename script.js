$(document).ready(function(){
    $("#corpo").load("pesquisa.html");
    }
);


$("#botao").click(function(){
    $("#corpo").load("index1.html");
}
);

    $("#botao1").click(function(){
    $("#corpo").load("forms.html");
}
);

    $("#botao2").click(function(){
    $("#corpo").load("pesquisa.html");

    
}
);

$("#aula").click(function(){ GETRegistros();

}
);


function GETRegistros(){
    $.ajax({
        type:'GET', 
        url: 'http://192.168.10.174:9000/aula',        
        headers :{
            
        },			
        success: function(data){
            alert (data.aula);	                                          
        },
        error:function(data){
            console.log (data);	     
        },
        complete:function(data){
            
        }
    });
}