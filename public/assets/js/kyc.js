sessionStorage.removeItem("front_img");
sessionStorage.removeItem("back_img");
sessionStorage.removeItem("front_img_two");
sessionStorage.removeItem("back_img_two");
sessionStorage.removeItem("front_img_three");
sessionStorage.removeItem("back_img_three");
const pathUrl = window.location.pathname;
const baseUrl = window.location.origin+"/";
var pathUrlArray1 = pathUrl.split("/");
var pathUrlArray = pathUrlArray1.filter(function (el) {
    return el != '';
});
pathUrlArray.pop();
var newPath=pathUrlArray.join("/");

var client_id = sessionStorage.getItem("client_id");
var client_email = sessionStorage.getItem("client_email");

var idscannerpage = document.getElementById("idscannerpage");
var selfiepage = document.getElementById("selfiepage");
var verifypage = document.getElementById("verifypage");
var successfullpage = document.getElementById("successfullpage");
var extrapage = document.getElementById("extrapage");

var number_of_doc=sessionStorage.getItem("number_of_doc");
var doc_type_one=sessionStorage.getItem("doc_type_one");
var doc_type_two=sessionStorage.getItem("doc_type_two");
var doc_type_three=sessionStorage.getItem("doc_type_three");
var success_meaasge= sessionStorage.getItem("success_meaasge");
var success_redirect_url= sessionStorage.getItem("success_redirect_url");
var declined_meaasge= sessionStorage.getItem("declined_meaasge");
var declined_redirect_url= sessionStorage.getItem("declined_redirect_url");
var invalid_meaasge= sessionStorage.getItem("invalid_meaasge");
var invalid_redirect_url= sessionStorage.getItem("invalid_redirect_url");

var widthOfCrop = 500; // width of frame where we have to fit ID for desktop
var heightOfCrop = 300; // height of frame where we have to fit ID for desktop
var xCrop = 390; // x axis distance of where we start cropping
var yCrop = 195; // y axis distance of where we start cropping

var front_image='';
var back_image='';
var front_image_two='';
var back_image_two='';
var front_image_three='';
var back_image_three='';
var selfie_image='';
var is_mobile_device = false;
(function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        is_mobile_device = true;
})(navigator.userAgent || navigator.vendor || window.opera);

    (function() {
        var camera = document.getElementById("camera");
        var result = document.getElementById("result");
        var video = document.getElementById("video");
        var canvas = document.getElementById("canvas");
        var photo = document.getElementById("photo");
        var startbutton = document.getElementById("startbutton");
        var retakebuton = document.getElementById("retake-button");
        var confirm = document.getElementById('backpartbutton');
        var confirm2 = document.getElementById('backpartbutton2');
        var mediaStream = null;

        var doc_type_one=sessionStorage.getItem("doc_type_one");
        document.querySelector('.faceki-card__title').textContent = 'Scan your '+doc_type_one;
        // Prefer camera resolution nearest to 1280x720.
        var constraints = {
            audio: false,
            video: {
                width: {
                    ideal: (is_mobile_device==true)?1280:1920
                },
                height: {
                    ideal: (is_mobile_device==true)?720:1080
                },
                facingMode: "environment"
            },
        };

        async function getMediaStream(constraints) {
            try {
                mediaStream = await navigator.mediaDevices.getUserMedia(constraints, {
                    video: (is_mobile_device == true) ? {
                        facingMode: 'environment'
                    } : {
                        facingMode: 'user'
                    }

                });
                let video = document.querySelector('video');
                video.srcObject = mediaStream;
                video.onloadedmetadata = (event) => {
                    video.play();
                };
            } catch (err) {
                console.error(err.message);
            }
        };

        async function switchCamera(cameraMode) {
            try {
                // stop the current video stream
                if (mediaStream != null && mediaStream.active) {
                    var tracks = mediaStream.getVideoTracks();
                    tracks.forEach(track => {
                        track.stop();
                    })
                }
                // set the video source to null
                document.querySelector('video').srcObject = null;
                // change "facingMode"
                constraints.video.facingMode = cameraMode;
                // get new media stream
                await getMediaStream(constraints);
            } catch (err) {
                console.error(err.message);
                alert(err.message);
            }
        }

        function takePicture() {
            let canvas = document.getElementById('canvas');
            let video = document.querySelector('video');
            let photo = document.getElementById('photo');
            let context = canvas.getContext('2d');
            const height = video.videoHeight;
            const width = video.videoWidth;
            if (width && height) {

                if(is_mobile_device==true){
                    canvas.width = width;
                    canvas.height = height;
                    context.drawImage(video, 0, 0, width, height);
                    var data = canvas.toDataURL('image/png', 0.7);
                    photo.setAttribute('src', data);
                }else{
                    canvas.width = width;
                    canvas.height = height;
                    context.drawImage(video, 0, 0, width, height);
                    var data = canvas.toDataURL('image/png', 1.0);
                    photo.setAttribute('src', data);

                    canvas.width = widthOfCrop;
                    canvas.height = heightOfCrop;
                    context.drawImage(video, xCrop, yCrop, widthOfCrop, heightOfCrop, 0, 0, widthOfCrop, heightOfCrop);
                    var data = canvas.toDataURL('image/png', 1.0);
                    //console.log('doc_data',data);
                }

                var front_img=sessionStorage.getItem("front_img");
                var back_img=sessionStorage.getItem("back_img");
                var front_img_two=sessionStorage.getItem("front_img_two");
                var back_img_two=sessionStorage.getItem("back_img_two");
                var front_img_three=sessionStorage.getItem("front_img_three");
                var back_img_three=sessionStorage.getItem("back_img_three");

                if(number_of_doc==1){
                    if(front_img=='' || front_img==null){
                     sessionStorage.setItem("front_img",111);
                     front_image=data;
                     console.log('data111',sessionStorage.getItem("front_img"));
                         if(doc_type_one=='Passport'){
                           sessionStorage.setItem("back_img",222);
                           back_image=front_image
                           confirm.style.display = "none";
                           confirm2.style.display = "inline-block";
                         }
                    }else if(back_img=='' || back_img==null){
                     sessionStorage.setItem("back_img",222);
                     back_image=data;
                     console.log('data222',sessionStorage.getItem("back_img"));
                     confirm.style.display = "none";
                     confirm2.style.display = "inline-block";
                    }
                }else if(number_of_doc==2){
                    if(front_img=='' || front_img==null){
                     sessionStorage.setItem("front_img",111);
                     front_image=data;
                     console.log('data111',sessionStorage.getItem("front_img"));
                         if(doc_type_one=='Passport'){
                           sessionStorage.setItem("back_img",222);
                           back_image=front_image;
                           console.log('data222',sessionStorage.getItem("back_img"));
                         }
                    }else if(back_img=='' || back_img==null){
                     sessionStorage.setItem("back_img",222);
                     back_image=data;
                     console.log('data222',sessionStorage.getItem("back_img"));
                    }else if(front_img_two=='' || front_img_two==null){
                     sessionStorage.setItem("front_img_two",333);
                     front_image_two=data;
                     console.log('data333',sessionStorage.getItem("front_img_two"));
                         if(doc_type_two=='Passport'){
                           sessionStorage.setItem("back_img_two",444);
                           back_image_two=front_image_two;
                           console.log('data444',sessionStorage.getItem("back_img_two"));
                           confirm.style.display = "none";
                           confirm2.style.display = "inline-block";
                         }
                    }else if(back_img_two=='' || back_img_two==null){
                     sessionStorage.setItem("back_img_two",444);
                     back_image_two=data;
                     console.log('data444',sessionStorage.getItem("back_img_two"));
                     confirm.style.display = "none";
                     confirm2.style.display = "inline-block";
                    }

                }else if(number_of_doc==3){
                    if(front_img=='' || front_img==null){
                     sessionStorage.setItem("front_img",111);
                     front_image=data;
                     console.log('data111',sessionStorage.getItem("front_img"));
                         if(doc_type_one=='Passport'){
                           sessionStorage.setItem("back_img",222);
                           back_image=front_image;
                           console.log('data222',sessionStorage.getItem("back_img"));
                         }
                    }else if(back_img=='' || back_img==null){
                     sessionStorage.setItem("back_img",222);
                     back_image=data;
                     console.log('data222',sessionStorage.getItem("back_img"));
                    }else if(front_img_two=='' || front_img_two==null){
                     sessionStorage.setItem("front_img_two",333);
                     front_image_two=data;
                     console.log('data333',sessionStorage.getItem("front_img_two"));
                           if(doc_type_two=='Passport'){
                               sessionStorage.setItem("back_img_two",444);
                               back_image_two=front_image_two;
                               console.log('data444',sessionStorage.getItem("back_img_two"));
                           }
                    }else if(back_img_two=='' || back_img_two==null){
                     sessionStorage.setItem("back_img_two",444);
                     back_image_two=data;
                     console.log('data444',sessionStorage.getItem("back_img_two"));
                    }else if(front_img_three=='' || front_img_three==null){
                     sessionStorage.setItem("front_img_three",555);
                     front_image_three=data;
                     console.log('data555',sessionStorage.getItem("front_img_three"));
                            if(doc_type_three=='Passport'){
                               sessionStorage.setItem("back_img_three",666);
                               back_image_three=front_image_three;
                               console.log('data666',sessionStorage.getItem("back_img_three"));
                               confirm.style.display = "none";
                               confirm2.style.display = "inline-block";
                           }
                    }else{
                     sessionStorage.setItem("back_img_three",666);
                     back_image_three=data;
                     console.log('data666',sessionStorage.getItem("back_img_three"));  
                     confirm.style.display = "none";
                     confirm2.style.display = "inline-block";
                    }
                }
            } else {
                clearphoto();
            }
        }

        function clearPhoto() {
            let canvas = document.getElementById('canvas');
            let photo = document.getElementById('photo');
            let context = canvas.getContext('2d');

            context.fillStyle = "#AAA";
            context.fillRect(0, 0, canvas.width, canvas.height);
            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
        }
        document.getElementById('startbutton').onclick = (event) => {
            takePicture(); 
            event.preventDefault();
        }
        startbutton.addEventListener("click", function(ev) {
                camera.style.opacity = "0";
                camera.style.visibility = "hidden";
                result.style.opacity = "1";
                result.style.visibility = "visible";
                ev.preventDefault();
            },
            false
        );
        retakebuton.addEventListener("click", function(ev) {
                result.style.opacity = "0";
                result.style.visibility = "hidden";
                camera.style.opacity = "1";
                camera.style.visibility = "visible";
                var back_img=sessionStorage.getItem("back_img");
                if(back_img!='' && back_img!=null){
                sessionStorage.removeItem("back_img");
                }else{
                sessionStorage.removeItem("front_img"); 
                }
                ev.preventDefault();
            },
            false
        );

        confirm.addEventListener("click", function(ev) {
                var number_of_doc=sessionStorage.getItem("number_of_doc");
                var doc_type_one=sessionStorage.getItem("doc_type_one");
                var doc_type_two=sessionStorage.getItem("doc_type_two");
                var doc_type_three=sessionStorage.getItem("doc_type_three");

                var front_img=sessionStorage.getItem("front_img");
                var back_img=sessionStorage.getItem("back_img");
                var front_img_two=sessionStorage.getItem("front_img_two");
                var back_img_two=sessionStorage.getItem("back_img_two");
                var front_img_three=sessionStorage.getItem("front_img_three");
                var back_img_three=sessionStorage.getItem("back_img_three");

                if(front_img=='' || front_img==null){
                   //alert(1);
                }else if(back_img=='' || back_img==null){
                   //alert(2);
                   document.querySelector('.faceki-card__img').src = 'assets/img/user-info/id-back-light.png';
                   document.querySelector('.title').textContent = 'BACK SIDE';
                }else if(front_img_two=='' || front_img_two==null){
                   //alert(3);
                   document.querySelector('.faceki-card__img').src = 'assets/img/user-info/id-front-light.png';
                   document.querySelector('.faceki-card__title').textContent = 'Scan your '+doc_type_two;
                   document.querySelector('.title').textContent = 'FRONT SIDE';
                }else if(back_img_two=='' || back_img_two==null){
                   //alert(4);
                   document.querySelector('.faceki-card__img').src = 'assets/img/user-info/id-back-light.png';
                   document.querySelector('.title').textContent = 'BACK SIDE';
                }else if(front_img_three=='' || front_img_three==null){
                   //alert(5);
                   document.querySelector('.faceki-card__img').src = 'assets/img/user-info/id-front-light.png';
                   document.querySelector('.faceki-card__title').textContent = 'Scan your '+doc_type_three;
                   document.querySelector('.title').textContent = 'FRONT SIDE';
                }else{
                   //alert(6);
                   document.querySelector('.faceki-card__img').src = 'assets/img/user-info/id-back-light.png';
                   document.querySelector('.title').textContent = 'BACK SIDE';
                }

              result.style.opacity = "0";
              result.style.visibility = "hidden";
              camera.style.opacity = "1";
              camera.style.visibility = "visible";
              ev.preventDefault(); 
            },
            false
        );

        confirm2.addEventListener("click", function(ev) {
                idscannerpage.style.display = "none";
                selfiepage.style.display = "block";
                button_callback();
        },
        false
        );

        function button_callback() {
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
        
        window.onload = (event) => {
            switchCamera("environment");
        };

    })();