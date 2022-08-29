
var choix = true;
function change(){
    var bloc1 = document.getElementById("bloc1");
    var text1 = document.getElementById("text1");
    var bloc2 = document.getElementById("bloc2");
    var text2 = document.getElementById("text2");
    var bloc3 = document.getElementById("bloc3");
    var text3 = document.getElementById("text3");
    var bloc4 = document.getElementById("bloc4");
    var text4 = document.getElementById("text4");
if(choix== true){
    bloc1.style.backgroundColor = 'pink';
    text1.style.color = 'blue';

    bloc2.style.backgroundColor = 'pink';
    text2.style.color = 'blue';

    bloc3.style.backgroundColor = 'pink';
    text3.style.color = 'blue';

    bloc4.style.backgroundColor = 'pink';
    text4.style.color = 'blue';

    choix = false;
}
else{
    bloc1.style.backgroundColor = 'green';
    text1.style.color = 'yellow';

    bloc2.style.backgroundColor = 'green';
    text2.style.color = 'yellow';

    bloc3.style.backgroundColor = 'green';
    text3.style.color = 'yellow';

    bloc4.style.backgroundColor = 'green';
    text4.style.color = 'yellow';

    choix = true;

}
}


    /* 
    var erreur;
    var nom= document.getElementById("nom");
    var prenom= document.getElementById("prenom");
    var Telephone= document.getElementById("Telephone");
    var email= document.getElementById("email");
     
    if(!nom.value){
        erreur = "veuillez renseigner votre Nom";
    }
    if(!prenom.value){
        erreur = "veuillez renseigner votre Prenom";
    }
    if(!email.value){
        erreur = "veuillez renseigner votre E-mail";
    }
    if(!Telephone.value){
        erreur = "veuillez renseigner votre numéro de Téléphone";
    } */
    
document.getElementById('envoyer').addEventListener('submit', function(e){
     var erreur;
    var inputs = document.getElementById("envoyer").getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++){
        if(!inputs[i].value){
            erreur = "veuillez renseigner tous les champs";
        }
    }
      
    if(erreur){
        e.preventDefault();
        document.getElementById('erreur').innerHTML = erreur;  //innerHTML permet de récupérer le code HTML enfant d'un élément en texte
        return false;
    }
    else{
        alert('Formulaire envoyé !'); 
    }

            
        var nom= document.getElementById("nom").value;
        var prenom= document.getElementById("prenom").value;
        var email= document.getElementById("email").value;
        var Telephone= document.getElementById("Telephone").value;
        
        alert('Votre reponse est:\n'+'Nom: ' + nom + '\n Prenom: '+ prenom + '\nTelephone: '+ Telephone);
       

    
});

