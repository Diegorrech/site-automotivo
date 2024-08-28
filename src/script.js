let first_name;
let e_mail;
let phone_number;
let msg;

let complete_data;


function enviar_msg(){

    first_name = document.querySelector("#name");
        e_mail = document.querySelector("#e_mail");
        phone_number = document.querySelector("#number");
        msg = document.querySelector("#msg");

        complete_data = first_name.value + " " 
                        +  e_mail.value  + " "
                         +  phone_number.value + " "
                          + msg.value;

        confirm(complete_data);
                                
}


enviar_msg();