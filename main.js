album= [
"blob:https://web.whatsapp.com/4ec7bb77-4236-4cb3-a157-920b54f26e19",
"blob:https://web.whatsapp.com/cf949aaf-9de7-43b0-a79f-dfc011d9667c",
"blob:https://web.whatsapp.com/652a8da6-033a-4f42-adc5-54f4be594487",
"blob:https://web.whatsapp.com/58abc9b4-e5b3-4c16-a444-3b9feeae90e9"
] 
  var i = 0;
  function nextslide() { 
   
     if(i == 4 )
       {
         i=0;
       }
     
      document.getElementById("album").src = images[i];
    i++;
   
  }
  
  
  