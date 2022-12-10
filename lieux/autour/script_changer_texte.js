



 ///////////////////////CHANGER TEXT//////////////////////////////////

var playlist = new Array(
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',
'<span id="souligne_txt">Davézieux</span>',
'<span id="souligne_txt">Davézieux</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Moulinage Barou</span>',
'<span id="souligne_txt">Pélussin</span>',
'<span id="souligne_txt">Pélussin</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">Remettage Piraillon</span>',
'<span id="souligne_txt">barrage du lac de Ternay</span>',

);

var currentSong = 0;



    next.addEventListener('click', function () {
        currentSong ++;
        if(currentSong >= playlist.length){
            currentSong = 0;
        }
        if(currentSong < playlist.length){
            document.getElementById("txt_descriptif").innerHTML = playlist[currentSong];
            }
         
    });

        prev.addEventListener('click', function () {
        currentSong --;
        if(currentSong < 0){
            currentSong = playlist.length-1;
        }
        if(currentSong < playlist.length){
            document.getElementById("txt_descriptif").innerHTML = playlist[currentSong];
            }

       
    });




function fonctionTexteDepart(){
document.getElementById("txt_descriptif").innerHTML= playlist[currentSong];
}
