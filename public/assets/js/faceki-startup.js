const client_id='af7d4790-04a9-11ec-aecf-1dca4d5eaaf0';
const client_email='demo@faceki.com';
sessionStorage.setItem("client_id",client_id);
sessionStorage.setItem("client_email",client_email);
const API_URL = "https://faceki.com/backend/api/sdk-settings?client_id="+client_id;
const pathUrl = window.location.pathname;
const baseUrl = window.location.origin+"/";

document.getElementById("kyc_items").innerHTML = '<img src="public/assets/img/icon/loader.gif">'; 

fetch(API_URL)
.then(response => {
    return response.json()
}).then(function(res){
    console.log('response_data',res.response);
    sessionStorage.setItem("number_of_doc",res.response.number_of_doc);
    sessionStorage.setItem("doc_type_one",res.response.doc_type_one);
    sessionStorage.setItem("doc_type_two",res.response.doc_type_two);
    sessionStorage.setItem("doc_type_three",res.response.doc_type_three);
    sessionStorage.setItem("success_meaasge",res.response.success_meaasge);
    var success_redirect_url=res.response.success_redirect_url;
    if (success_redirect_url.indexOf("http://") == -1 && success_redirect_url.indexOf("https://") == -1) {
       success_redirect_url="https://"+success_redirect_url;
    }
    sessionStorage.setItem("success_redirect_url",success_redirect_url);
    sessionStorage.setItem("declined_meaasge",res.response.declined_meaasge);
    var declined_redirect_url=res.response.declined_redirect_url;
    if (declined_redirect_url.indexOf("http://") == -1 && declined_redirect_url.indexOf("https://") == -1) {
       declined_redirect_url="https://"+declined_redirect_url;
    }
    sessionStorage.setItem("declined_redirect_url",declined_redirect_url);
    sessionStorage.setItem("invalid_meaasge",res.response.invalid_meaasge);
    var invalid_redirect_url=res.response.invalid_redirect_url;
    if (invalid_redirect_url.indexOf("http://") == -1 && invalid_redirect_url.indexOf("https://") == -1) {
       invalid_redirect_url="https://"+invalid_redirect_url;
    }
    sessionStorage.setItem("invalid_redirect_url",invalid_redirect_url);
    set_sdk_html();
})
.catch(error => {
console.log(error);
});

function set_sdk_html(){

    var number_of_doc=sessionStorage.getItem("number_of_doc");
    var doc_type_one=sessionStorage.getItem("doc_type_one");
    var doc_type_two=sessionStorage.getItem("doc_type_two");
    var doc_type_three=sessionStorage.getItem("doc_type_three");

    var kyc_items='';
    var item_number=1;

    if(doc_type_one=='ID Card'){
    var doc_one_front_icon='id_card_front.svg';
    var doc_one_back_icon='id_card_back.svg';
    }
    if(doc_type_one=='Driving License'){
    var doc_one_front_icon='driving_license_front.svg';
    var doc_one_back_icon='driving_license_back.svg';
    }
    if(doc_type_one=='Passport'){
    var doc_one_front_icon='passport_front.svg';
    var doc_one_back_icon='passport_front.svg';
    }
    sessionStorage.setItem("doc_one_front_icon","white_"+doc_one_front_icon);
    sessionStorage.setItem("doc_one_back_icon","white_"+doc_one_back_icon);

    if(doc_type_two=='ID Card'){
    var doc_two_front_icon='id_card_front.svg';
    var doc_two_back_icon='id_card_back.svg';
    }
    if(doc_type_two=='Driving License'){
    var doc_two_front_icon='driving_license_front.svg';
    var doc_two_back_icon='driving_license_back.svg';
    }
    if(doc_type_two=='Passport'){
    var doc_two_front_icon='passport_front.svg';
    var doc_two_back_icon='passport_front.svg';
    }
    sessionStorage.setItem("doc_two_front_icon","white_"+doc_two_front_icon);
    sessionStorage.setItem("doc_two_back_icon","white_"+doc_two_back_icon);

    if(doc_type_three=='ID Card'){
    var doc_three_front_icon='id_card_front.svg';
    var doc_three_back_icon='id_card_back.svg';
    }
    if(doc_type_three=='Driving License'){
    var doc_three_front_icon='driving_license_front.svg';
    var doc_three_back_icon='driving_license_back.svg';
    }
    if(doc_type_three=='Passport'){
    var doc_three_front_icon='passport_front.svg';
    var doc_three_back_icon='passport_front.svg';
    }
    sessionStorage.setItem("doc_three_front_icon","white_"+doc_three_front_icon);
    sessionStorage.setItem("doc_three_back_icon","white_"+doc_three_back_icon);

    if(number_of_doc==1){
        kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_one_front_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_one+` front side</span>
                             </li>`;
                             if(doc_type_one!='Passport'){
                             item_number++;
                             kyc_items=kyc_items+`<li class="faceki-card__item">
                                <span class="faceki-card__number">`+item_number+`</span>
                                <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_one_back_icon+`" alt=""></div>
                                <span>Scan `+doc_type_one+` back side</span>
                             </li>`;
                             }              
    }else if(number_of_doc==2){
        kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_one_front_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_one+` front side</span>
                                </li>`;
                                if(doc_type_one!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_one_back_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_one+` back side</span>
                                </li>`;
                                }
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_two_front_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_two+` front side</span>
                                </li>`;
                                if(doc_type_two!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_two_back_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_two+` back side</span>
                                </li>`;
                                }

    }else if(number_of_doc==3){
        kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_one_front_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_one+` front side</span>
                                </li>`;
                                if(doc_type_one!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_one_back_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_one+` back side</span>
                                </li>`;
                                }
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_two_front_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_two+` front side</span>
                                </li>`;
                                if(doc_type_two!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_two_back_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_two+` back side</span>
                                </li>`;
                                }
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_three_front_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_three+` front side</span>
                                </li>`;
                                if(doc_type_three!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/`+doc_three_back_icon+`" alt=""></div>
                                    <span>Scan `+doc_type_three+` back side</span>
                                </li>`;
                                }
    }
    item_number++;
    kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/user.png" alt=""></div>
                                    <span>Take a selfie picture</span>
                                </li>`;

               
    document.getElementById("kyc_items").innerHTML = kyc_items; 

}
                          

function goToScannerPage(){
    const pathUrlArray1 = pathUrl.split("/");
    const pathUrlArray = pathUrlArray1.filter(function (el) {
        return el != '';
    });
    const newPath=pathUrlArray.join("/");
    window.location.href=baseUrl+newPath+"/idscaner";
}



    

