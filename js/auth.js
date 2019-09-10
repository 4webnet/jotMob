$(document).ready(function(){
	var url="https://app.scoutjotichallenge.com/app/auth.php";
    
    //Login Function
    $("#login").click(function(){
    	
    	var registro=$("#registro").val();
    	var nascimento=$("#nascimento").val();
    	var dataString="registro="+registro+"&nascimento="+nascimento;
    	if($.trim(registro).length>0 & $.trim(nascimento).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				dataType: "json",
				crossDomain: true,
				cache: false,
				beforeSend: function(){ 
					$("#login").html('Connecting...');
				},
				success: function(data){
					if(data.usu_id != "")
					{
						localStorage.login		= "true";
						localStorage.nome 		= data.Nome;
						localStorage.nascimento = data.Nascimento;
						localStorage.ramo 		= data.Ramo;
						localStorage.sexo 		= data.Sexo;
						localStorage.email 		= data.Email;
						localStorage.registro 	= data.Registro;
						localStorage.idade 		= data.Idade;
						localStorage.tipo 		= data.Tipo;
						window.location.href 	= "index.html";
					}
					else
					{
						alert("Login error");
						$("#login").html('Login');
					}
				}
			});
		}return false;

    });

    //logout function
    $("#logout").click(function(){
    	localStorage.login="false";
    	window.location.href = "login.html";
    });

});