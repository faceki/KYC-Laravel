const client_id='af7d4790-04a9-11ec-aecf-1dca4d5eaaf0';
const client_email='demo@faceki.com';
sessionStorage.setItem("client_id",client_id);
sessionStorage.setItem("client_email",client_email);
const API_URL = "https://faceki.com/backend/api/sdk-settings?client_id="+client_id;
const pathUrl = window.location.pathname;
const baseUrl = window.location.origin+"/";

document.getElementById("kyc_items").innerHTML = '<img src="public/public/assets/img/icon/loader.gif">'; 

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
    sessionStorage.setItem("success_redirect_url",res.response.success_redirect_url);
    sessionStorage.setItem("declined_meaasge",res.response.declined_meaasge);
    sessionStorage.setItem("declined_redirect_url",res.response.declined_redirect_url);
    sessionStorage.setItem("invalid_meaasge",res.response.invalid_meaasge);
    sessionStorage.setItem("invalid_redirect_url",res.response.invalid_redirect_url);
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
    if(number_of_doc==1){
        kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-front-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_one+` front side</span>
                             </li>`;
                             if(doc_type_one!='Passport'){
                             item_number++;
                             kyc_items=kyc_items+`<li class="faceki-card__item">
                                <span class="faceki-card__number">`+item_number+`</span>
                                <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-back-dark.png" alt=""></div>
                                <span>Scan `+doc_type_one+` back side</span>
                             </li>`;
                             }              
    }else if(number_of_doc==2){
        kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-front-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_one+` front side</span>
                                </li>`;
                                if(doc_type_one!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-back-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_one+` back side</span>
                                </li>`;
                                }
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-front-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_two+` front side</span>
                                </li>`;
                                if(doc_type_two!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-back-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_two+` back side</span>
                                </li>`;
                                }

    }else if(number_of_doc==3){
        kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-front-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_one+` front side</span>
                                </li>`;
                                if(doc_type_one!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-back-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_one+` back side</span>
                                </li>`;
                                }
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-front-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_two+` front side</span>
                                </li>`;
                                if(doc_type_two!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-back-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_two+` back side</span>
                                </li>`;
                                }
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                   <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-front-dark.png" alt=""></div>
                                    <span>Scan `+doc_type_three+` front side</span>
                                </li>`;
                                if(doc_type_three!='Passport'){
                                item_number++;
                                kyc_items=kyc_items+`<li class="faceki-card__item">
                                    <span class="faceki-card__number">`+item_number+`</span>
                                    <div class="id-card-logo"><img class="faceki-card__img" src="public/assets/img/user-info/id-back-dark.png" alt=""></div>
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



    

