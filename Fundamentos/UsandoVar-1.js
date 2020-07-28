{
     { 
         { 
             { 
                 var sera = 'Sera???' 
                 console.log(sera)
             }
          }
      }
 }
 console.log(sera) // é possivel executar o var dentro de muitos escopos


 function teste(){
     var local = 123 //Quando iniciamos uma var dentro de uma function Ela só pode ser visualizada dentro do escopo da function
 }

 teste()
 console.log(local)