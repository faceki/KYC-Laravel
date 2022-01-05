<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Faceki</title>
      <!--  all css files  -->
      <link rel="stylesheet" href="{{ asset('public/assets/css/bootstrap.min.css') }}">
      <link rel="stylesheet" href="{{ asset('public/assets/css/style.css') }}">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
      <style type="text/css">
       .facescane_my video{
         -webkit-transform: scaleX(-1);
         transform: scaleX(-1);
       }
     </style>
      
   </head>
   <body>
      <div class="camera-holder position-relative" id="idscannerpage">
         <!--  Id Card front side start -->
         <div id="camera" class="faceki-card faceki-card-light">
            <div class="camera-content-top">
               <h2 id="page-title" class="faceki-card__title">Scan your ID Card</h2>
               <ul class="faceki-card__list">
                  <li class="faceki-card__item justify-content-center">
                     <div class="id-card-logo">
                        <img class="faceki-card__img" src="public/assets/img/user-info/id-front-light.png" alt="">
                     </div>
                     <span class="title">FRONT SIDE</span>
                  </li>
               </ul>
            </div>
            <div id="camera-screen-desktop">
               <img class="camera-screen-desktop d-none d-md-block" src="public/assets/img/shape/desktop.png" alt="">
            </div>
            <div id="camera-screen-mobile">
               <img class="camera-screen-android d-md-none" src="public/assets/img/shape/mobile.png" alt="">
            </div>
            <div class="camera-content-bottom">
               <p>Place your ID card within the frame,<br>
                  and make sure it’s clear with no reflections
               </p>
               <div class="d-flex flex-wrap align-items-center justify-content-center">
                  <button class="camera-btn" id="startbutton">
                     <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86">
                        <g id="Group_286" data-name="Group 286" transform="translate(-152 -470)">
                           <g id="Group_126" data-name="Group 126" transform="translate(-36.5 174)">
                              <circle id="Oval_2" data-name="Oval 2" cx="42" cy="42" r="42"
                                 transform="translate(189.5 297)" fill="none" stroke="#fff"
                                 stroke-miterlimit="10" stroke-width="2" />
                              <circle id="Oval_2-2" data-name="Oval 2" cx="32" cy="32" r="32"
                                 transform="translate(199.5 307)" fill="#fff" />
                           </g>
                           <g id="Group_129" data-name="Group 129" transform="translate(-73 99.58)">
                              <g id="Group_128" data-name="Group 128" transform="translate(254 399)">
                                 <path id="Path_134" data-name="Path 134"
                                    d="M705.2,322.934l1.164-2.325a5.832,5.832,0,0,1,.5-.759,2.636,2.636,0,0,1,.89-.8,1.214,1.214,0,0,1,.539-.131h8.027a1.215,1.215,0,0,1,.541.131,2.637,2.637,0,0,1,.89.8,5.968,5.968,0,0,1,.507.777l1.152,2.307h2.262a4.683,4.683,0,0,1,4.683,4.683v12.041a4.683,4.683,0,0,1-4.683,4.683H702.937a4.683,4.683,0,0,1-4.683-4.683V327.617a4.683,4.683,0,0,1,4.683-4.683Zm-1.593,6.69a1.338,1.338,0,1,0-1.338-1.338,1.338,1.338,0,0,0,1.338,1.338Zm8.7,9.365a6.021,6.021,0,1,0-6.021-6.021,6.02,6.02,0,0,0,6.021,6.021Z"
                                    transform="translate(-698.254 -318.92)" fill="#464c5f" />
                                 <path id="Path_135" data-name="Path 135"
                                    d="M709.937,335.285a4.683,4.683,0,1,0-4.683-4.683,4.683,4.683,0,0,0,4.683,4.683Z"
                                    transform="translate(-695.889 -316.555)" fill="#464c5f"
                                    fill-rule="evenodd" />
                              </g>
                           </g>
                        </g>
                     </svg>
                  </button>
                  <div class="flip-buttons d-md-none ms-3 d-none">
                     <button class="flip-btn" onclick="flipCamera();">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.202" height="26.421"
                           viewBox="0 0 29.202 26.421">
                           <g id="Group_127" data-name="Group 127" transform="translate(-641.557 -463.886)">
                              <path id="Path_132" data-name="Path 132"
                                 d="M648.717,468.058l.94-2.592a2.085,2.085,0,0,1,2.023-1.58h8.954a2.059,2.059,0,0,1,2,1.513l.962,2.659h2.293a4.867,4.867,0,0,1,4.867,4.867V485.44a4.867,4.867,0,0,1-4.867,4.867H646.424a4.867,4.867,0,0,1-4.867-4.867V472.925a4.867,4.867,0,0,1,4.867-4.867Z"
                                 transform="translate(0 0)" fill="#fff" />
                              <path id="Path_133" data-name="Path 133"
                                 d="M648.931,481.4l1.594-1.594a.7.7,0,0,0-.983-.984l-2.781,2.782a.7.7,0,0,0,0,.983l2.781,2.781a.7.7,0,0,0,.983-.984l-1.594-1.594h10.837a2.087,2.087,0,0,0,2.086-2.086v-2.781a.7.7,0,0,0-1.391,0v2.781a.7.7,0,0,1-.7.7Zm10.549-8.343-1.595,1.594a.7.7,0,0,0,.983.984l2.781-2.781a.7.7,0,0,0,0-.984l-2.781-2.78a.7.7,0,0,0-.983.983l1.595,1.594H648.643a2.086,2.086,0,0,0-2.086,2.086v2.781a.7.7,0,1,0,1.391,0v-2.781a.7.7,0,0,1,.7-.7Z"
                                 transform="translate(1.953 1.953)" fill="#464c5f" />
                           </g>
                        </svg>
                     </button>
                     <span class="flip-text">Flip Camera</span>
                  </div>
               </div>
            </div>
            <video id="video" autoplay="" class="video-idcard" muted="" playsinline="">Video stream not
               available.
            </video>
         </div>
         <!--  Id Card front side end -->
         <!--  Id Card result start -->
         <div id="result" class="faceki-card faceki-card-light">
            <div class="camera-content-top">
               <h2 class="faceki-card__title mb-0">Check Readability</h2>
            </div>
            <div id="camera-screen-desktop2">
               <img class="camera-screen-desktop d-none d-md-block" src="public/assets/img/shape/desktop.png" alt="">
            </div>
            <div id="camera-screen-mobile2">
               <img class="camera-screen-android d-md-none" src="public/assets/img/shape/mobile.png" alt="">
            </div>
            <canvas id="canvas" style="display: none;"></canvas>
            <div class="output">
               <img id="photo" alt="The screen capture will appear in this box.">
            </div>
            <div class="camera-content-bottom camera-content-bottom-read">
               <p>
                  Ensure that all data on your document <br>
                  is visible and readable.
               </p>
               <div class="readability-buttons">
                  <button id="retake-button" class="faceki-btn-outline-light">RETAKE</button>
                  <button id="backpartbutton" class="faceki-btn-light">CONFIRM</button>
                  <button id="backpartbutton2" class="faceki-btn-light" style="display:none;">CONFIRM</button>
               </div>
            </div>
         </div>
         <!--  Id Card result end -->
      </div>


      <!--  Selfie Page html start -->


      <section class="faceki-section" id="selfiepage" style="display:none !important;">
      <div class="camera-holder">
        <div class="faceki-card faceki-card-light mx-auto position-relative mx-auto">
          <div class="camera-content-top">
            <h2 id="noFace" class="faceki-card__title mb-0">Take a Selfie</h2>
            <h3 class="faceki-card__title mb-0 d-none d-md-block">Fit your face in the middle</h3>
        </div>
        

        <div id="desktop-selfie" class="d-none d-md-block">
         <img src="public/assets/img/shape/selfie-desktop.png" alt="">
        </div>
  
       <div id="mobile-selfie">
        <img class="slfie-screen d-md-none" src="public/assets/img/shape/selfie.png" alt="">
       </div>
  
        <button class="camera-btn selfie-btn" id="capture" onclick="callApi('front')">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71">
              <g id="Group_276" data-name="Group 276" transform="translate(1.032 1.4)">
                <g id="Group_126" data-name="Group 126" transform="translate(0)">
                  <ellipse id="Oval_2" data-name="Oval 2" cx="34" cy="34.5" rx="34" ry="34.5" transform="translate(-0.032 -0.4)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                  <circle id="Oval_2-2" data-name="Oval 2" cx="26" cy="26" r="26" transform="translate(7.968 8.6)" fill="#fff"/>
                </g>
                <g id="Group_129" data-name="Group 129" transform="translate(22.77 22.428)">
                  <g id="Group_128" data-name="Group 128">
                    <path id="Path_134" data-name="Path 134" d="M703.9,322.184l.947-1.891a4.743,4.743,0,0,1,.4-.617,2.143,2.143,0,0,1,.724-.65.987.987,0,0,1,.438-.107h6.528a.988.988,0,0,1,.44.107,2.145,2.145,0,0,1,.724.65,4.862,4.862,0,0,1,.412.632l.937,1.876h1.84a3.808,3.808,0,0,1,3.808,3.808v9.792a3.808,3.808,0,0,1-3.808,3.808H702.062a3.808,3.808,0,0,1-3.808-3.808v-9.792a3.808,3.808,0,0,1,3.808-3.808Zm-1.3,5.44a1.088,1.088,0,1,0-1.088-1.088,1.088,1.088,0,0,0,1.088,1.088Zm7.072,7.616a4.9,4.9,0,1,0-4.9-4.9,4.9,4.9,0,0,0,4.9,4.9Z" transform="translate(-698.254 -318.92)" fill="#464c5f"/>
                    <path id="Path_135" data-name="Path 135" d="M709.062,333.536a3.808,3.808,0,1,0-3.808-3.808,3.808,3.808,0,0,0,3.808,3.808Z" transform="translate(-697.638 -318.304)" fill="#464c5f" fill-rule="evenodd"/>
                  </g>
                </g>
              </g>
            </svg>
      </button>
    <div class="selfie-content-bottom">
      <h3 class="faceki-card__title mb-0 d-md-none">Fit your face in the middle</h3>
      <h4 id="message-1"></h4>
    </div>
      <div class="facescane_my">
          <img class="pattern d-md-none" src="public/assets/img/shape/pattern.png" alt="">
          <video autoplay="" class="video-selfie" id="video2" muted="" playsinline=""></video>
      </div>

      </div>
   
   
     <canvas id="canvas2" style="display: none;"></canvas>
    </section> 

      <!--  Selfie Page html end -->

      <!-- Verifying Page start -->
      <section id="verifypage" style="display:none !important; height: 100vh;" class="faceki-section d-flex flex-wrap align-items-center justify-content-center w-100">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-lg-6 col-xl-5 mx-auto">
                    <div class="faceki-card faceki-card-dark success__card">
                        <span class="faceki-card__sub-title">Verifying your identity...</span>
                        <img  src="public/assets/img/icon/Faceki-Verifing-animation2.gif" alt="Verifying...">
                        <span class="extra-information">It will take few seconds only</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <!-- Verifying Page end -->

      <!-- Successfull Page start -->
      <section id="successfullpage" style="display:none !important; height: 100vh;" class="faceki-section d-flex flex-wrap align-items-center justify-content-center w-100">
           <div class="container">
               <div class="row">
                   <div class="col-sm-10 col-lg-6 col-xl-5 mx-auto">
                       <div class="faceki-card faceki-card-dark success__card">
                          <div class="success__icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
                               <g id="tick" transform="translate(2.5 2.5)">
                                 <path id="Path_64" data-name="Path 64" d="M45.5,0A45.5,45.5,0,1,1,0,45.5H0A45.37,45.37,0,0,1,45.241,0Z" transform="translate(0 0)" fill="none" stroke="#9ea0ae" stroke-width="5"/>
                                 <path id="Path_65" data-name="Path 65" d="M132.437,111.207l-32.315,32.315-18.1-17.967,7.368-7.239,10.729,10.6,24.948-24.947Z" transform="translate(-61.731 -78.245)" fill="#9ea0ae"/>
                               </g>
                             </svg>
                          </div>
                             
                           <h2 class="faceki-card__title">SUCCESSFUL</h2>
                           <span class="faceki-card__sub-title">Your Identity successfully verified</span>
                           <span class="extra-information">Extra information from dash</span>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       <!-- Successfull Page end -->

       <!-- Extra checkup page start -->
       <section id="extrapage" style="display:none !important; height: 100vh;" class="faceki-section d-flex flex-wrap align-items-center justify-content-center w-100">
           <div class="container">
               <div class="row">
                   <div class="col-sm-10 col-lg-6 col-xl-5 mx-auto">
                       <div class="faceki-card faceki-card-dark success__card">
                          <div class="success__icon">
                           <img src="public/assets/img/icon/tick.png" alt="">
                          </div>
                             
                           <h2 class="faceki-card__title">Extra Check Required</h2>
                           <span class="faceki-card__sub-title">Couldn’t verify your identity</span>
                           <span class="extra-information">Extra information from dash</span>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       <!-- Extra checkup page end -->

      <script src="{{ asset('public/assets/js/kyc.js') }}"></script>

      <script>
        function button_callback2() {
          var video2 = document.getElementById("video2");
          var selfie_constraints = {
            audio: false,
            video: {
                width: {
                    ideal: (is_mobile_device==true)?1280:1920
                },
                height: {
                    ideal: (is_mobile_device==true)?720:1080
                },
                facingMode: "user"
            },
          };

          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
              .getUserMedia(selfie_constraints, {
                    video: {
                        facingMode: 'user'
                    }
               })
              .then(function (stream) {
                video2.srcObject = stream;
                video2.setAttribute("autoplay", "");
                video2.setAttribute("muted", "");
                video2.setAttribute("playsinline", "");
                video2.play();
              })
              .catch(function (err0r) {
                console.log("Something went wrong!");
              });
          }
        }

        function takeASnap(vid) {
          const canvas = document.getElementById('canvas2');
          const ctx = canvas.getContext("2d");
          canvas.width = vid.videoWidth;
          canvas.height = vid.videoHeight;
          ctx.drawImage(vid, 0, 0);
          if(is_mobile_device==true){
           var imageData = canvas.toDataURL("image/png", 0.7);
          }else{
           var imageData = canvas.toDataURL("image/png", 1.0);
          }
          sessionStorage.setItem("selfie_image", 333);
          selfie_image=imageData;
          console.log('data333',sessionStorage.getItem("selfie_image"));
          return new Promise((res, rej) => {
            canvas.toBlob(res, "image/png");
          });
        }

        function callApi(img_type){
            //document.getElementById('video2').style.display = "none";
            //document.getElementById('capture').style.display = "none";
            video2.pause(); 
            takeASnap(video2).then(blob =>{
               selfiepage.style.display = "none";
               verifypage.style.display = "block";
               getToken();
            });
        }

        function getToken(){
            const BASE_URL = "https://app.faceki.com/";
            data = JSON.stringify({
                client_id: client_id,
                email: client_email,
            })
            fetch(BASE_URL+'getToken', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:data
            }).then(response=>{
                return response.json()
            }).then(function(res){
               console.log('front_image',front_image);
               console.log('back_image',back_image);
               console.log('selfie_image',selfie_image);
               sessionStorage.setItem("auth_token", res.token);
               if (front_image == '' || front_image == null) {
                   alert('Please take Id Card front image first!!');
                   window.location.href=baseUrl+"idscaner";
               }

                let doc_type1 = sessionStorage.getItem("doc_type_one");
                let doc_type2 = sessionStorage.getItem("doc_type_two");
                let doc_type3 = sessionStorage.getItem("doc_type_three");

   
                var doc1_jpegFile64 = front_image.replace(/^data:image\/(png|jpeg);base64,/, "");
                var doc1_jpegBlob = base64ToBlob(doc1_jpegFile64, 'image/png');
                var doc1_frontImge = new File([doc1_jpegBlob], "filename-front.png",{ type: 'image/png' });

                var doc1_bjpegFile64 = back_image.replace(/^data:image\/(png|jpeg);base64,/, "");
                var doc1_bjpegBlob = base64ToBlob(doc1_bjpegFile64, 'image/png');
                var doc1_backImg = new File([doc1_bjpegBlob], "filename-back.png",{ type: 'image/png' });

                if (front_image_two != '' && front_image_two != null) {
                    var doc2_jpegFile64 = front_image_two.replace(/^data:image\/(png|jpeg);base64,/, "");
                    var doc2_jpegBlob = base64ToBlob(doc2_jpegFile64, 'image/png');
                    var doc2_frontImge = new File([doc2_jpegBlob], "filename-front2.png",{ type: 'image/png' });
                }else{
                 var doc2_frontImge ='';
                }

                if (back_image_two != '' && back_image_two != null) {
                    var doc2_bjpegFile64 = back_image_two.replace(/^data:image\/(png|jpeg);base64,/, "");
                    var doc2_bjpegBlob = base64ToBlob(doc2_bjpegFile64, 'image/png');
                    var doc2_backImg = new File([doc2_bjpegBlob], "filename-back2.png",{ type: 'image/png' });
                }else{
                 var doc2_backImg ='';
                }

                if (front_image_three != '' && front_image_three != null) {
                    var doc3_jpegFile64 = front_image_three.replace(/^data:image\/(png|jpeg);base64,/, "");
                    var doc3_jpegBlob = base64ToBlob(doc3_jpegFile64, 'image/png');
                    var doc3_frontImge = new File([doc3_jpegBlob], "filename-front3.png",{ type: 'image/png' });
                }else{
                 var doc3_frontImge ='';
                }

                if (back_image_three != '' && back_image_three != null) {
                    var doc3_bjpegFile64 = back_image_three.replace(/^data:image\/(png|jpeg);base64,/, "");
                    var doc3_bjpegBlob = base64ToBlob(doc3_bjpegFile64, 'image/png');
                    var doc3_backImg = new File([doc3_bjpegBlob], "filename-back3.png",{ type: 'image/png' });
                }else{
                 var doc3_backImg ='';
                }

                var sjpegFile64 = selfie_image.replace(/^data:image\/(png|jpeg);base64,/, "");
                var sjpegBlob = base64ToBlob(sjpegFile64, 'image/png');
                var selfieImg = new File([sjpegBlob], "filename-selfie.png",{ type: 'image/png' });

                sendImgeToKyc(doc_type1,doc1_frontImge,doc1_backImg,doc_type2,doc2_frontImge,doc2_backImg,doc_type3,doc3_frontImge,doc3_backImg,selfieImg);

            });
         }

         function base64ToBlob(base64, mime)
         {
             mime = mime || '';
             var sliceSize = 1024;
             var byteChars = window.atob(base64);
             var byteArrays = [];

             for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
                 var slice = byteChars.slice(offset, offset + sliceSize);

                 var byteNumbers = new Array(slice.length);
                 for (var i = 0; i < slice.length; i++) {
                     byteNumbers[i] = slice.charCodeAt(i);
                 }

                 var byteArray = new Uint8Array(byteNumbers);

                 byteArrays.push(byteArray);
             }

             return new Blob(byteArrays, {type: mime});
         }

         function sendImgeToKyc(doc_type1,doc1_frontImge,doc1_backImg,doc_type2,doc2_frontImge,doc2_backImg,doc_type3,doc3_frontImge,doc3_backImg,selfieImg) {
 
             const kycurl = 'https://app.faceki.com/v2/multiple-kyc-verification';

             const data_auth = new FormData();

             data_auth.append('doc_front_image1', doc1_frontImge);
             data_auth.append('doc_back_image1', doc1_backImg);
             data_auth.append('doc_type1', doc_type1);

             data_auth.append('doc_front_image2', doc2_frontImge);
             data_auth.append('doc_back_image2', doc2_backImg);
             data_auth.append('doc_type2', doc_type2);

             data_auth.append('doc_front_image3', doc3_frontImge);
             data_auth.append('doc_back_image3', doc3_backImg);
             data_auth.append('doc_type3', doc_type3);

             data_auth.append('selfie_image', selfieImg);

             const req = new XMLHttpRequest();

             let auth_token = sessionStorage.getItem('auth_token');

             if (auth_token == '') {
                 auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJrcmlzaG5hLW1pc2hyYS1wYXNzd29yZC1rcmlzaG5hIiwiZW1haWwiOiJlci5rcmlzaG5AZ21haWwuY29tIiwiaWF0IjoxNjE1ODkxOTIzLCJleHAiOjE2MTU4OTU1MjN9.-vzKN3v2iHbX7k5HCNs-QR-Ftu2NvMgIYqfcW8q76Qo';
             }

             req.open('POST', kycurl, true);
             req.setRequestHeader('Authorization','Bearer '+auth_token);
             req.onreadystatechange = function () {
                 if (this.readyState == 4 ) {
                     console.log('server_response',this.response);
                     var resp = JSON.parse(this.response);
                     if (this.status == "200") {
                         if (resp.status) {
                            if(resp.status=='Accepted'){
                                verifypage.style.opacity = 0;
                                successfullpage.style.display = "block";
                                location.href = "#successfullpage";
                                setTimeout(function(){ 
                                    window.location.href=baseUrl+newPath;
                                }, 5000);
                            }else if(resp.status=='Decliend'){
                                verifypage.style.opacity = 0;
                                extrapage.style.display = "block";
                                location.href = "#extrapage";
                                setTimeout(function(){ 
                                    window.location.href=baseUrl+newPath;
                                }, 5000);
                            }else{
                                 window.location.href=baseUrl+newPath+"/idscaner";
                            }
                         }else{
                            if (resp.error.code) {
                             if (resp.error.code == 7) {
                                 alert(resp.error.message);
                                 verifypage.style.display = "none";
                                 selfiepage.style.display = "block";
                                 button_callback2();
                             }

                             if (resp.error.code == 9) {
                                 alert(resp.error.message);
                                 verifypage.style.display = "none";
                                 selfiepage.style.display = "block";
                                 button_callback2();
                             }
                            }
                         }
                     }else {
                         alert(resp.message);
                         if(resp.message=='Face not matched!'){
                           verifypage.style.display = "none";
                           selfiepage.style.display = "block";
                           button_callback2();
                         }else if(resp.message=='Photocopy document not allowed.'){
                           window.location.href=baseUrl+newPath+"/idscaner";
                         }else{
                           verifypage.style.display = "none";
                           selfiepage.style.display = "block";
                           button_callback2();
                         }
                     }
                 }
             };
             req.send(data_auth);
         }

         function saveTempImage() {
            const stiurl = 'https://app.faceki.com/saveTempImage';
            const temp_id=new Date().getTime();
            var params = 'temp_id='+temp_id+'&selfie_image='+selfie_image;
            const req = new XMLHttpRequest();
            req.open('POST', stiurl, true);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.onreadystatechange = function () {
                if (this.readyState == 4 ) {
                    if (this.status == "200") {
                             alert('ok');   
                    }else {
                             alert('not ok'); 
                    }
                }
            };
            req.send(params);
        }
      </script>
   </body>
</html>

