//Eniig ta harj baival yg odoo garj busdiin hudulmur ayulgui baidliig hamgaalna uu bayrlalaa :)
console.log("Busdiin hudulmur bolon busad zuilsiig hundlej ene hesgees garna uu bayrlalaa")

//Ehlel
function startingThings(){
    idH2.innerHTML = "<img src='mpop.jpg' width='300px' height=''><br><br>"
    idH2.innerHTML += "<input type='button' class='customButtons1' value='M-POP iin social' onClick='socailMedia()'><br><br>"
    idH2.innerHTML += "<input type='button' class='customButtons' value='M-POP members' onClick='mPopGishuud()'><br><br>"
    idH2.innerHTML += "<input type='button' class='customButton' value='M-POP member boloh' onClick='newMember()'><br><br>"
    

    idH3.innerHTML = "Made by:- Nazuke"

    idH4.innerHTML = "<input type='button' class='nuuts' value='' onClick='nuuts()'>"
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////SOCIAL MEDIA//////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function socailMedia(){
    idH2.innerHTML = "<input type='button' class='customSocial' value='YouTube' onClick='youTube()'><br><br>";
    idH2.innerHTML += "<input type='button' class='customSocial' value='FaceBook' onClick='faceBook()'><br><br>"
    idH2.innerHTML += "<input type='button' class='customButtons2' value='butsah' onClick='startingThings()'>";
    idH4.innerHTML += "";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////GISHUUD////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mPopGishuud(){
        idH3.innerHTML = "";
        idH4.innerHTML = "";

    //Back button
    idH2.innerHTML = "<input type='button' class='customButtons2_5' value='butsah' onClick='startingThings()'><br>";


//CEO
        idH2.innerHTML += "<h3 class='nerName'>CEO</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";
        
        //Minji
        output +="<tr><td>Minji</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='minjiFb()'></td></tr>";

        //Hyeon
        output +="<tr><td>Hyeon</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='hyeonFb()'></td></tr>";

        //Nazuke
        output +="<tr><td>Nazuke</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='nazukeFb()'></td></td>";

        //Jusong
        output +="<tr><td>Jusong</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='jusongFb()'></td></tr>";


        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//Manager
        idH2.innerHTML += "<h3 class='nerName'>Manager</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Kimmy
        output +="<tr><td>Kimmy</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='kimmyFb()'></td></tr>";

        //YongMi
        output +="<tr><td>YongMi</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='yongmiFb()'></td></tr>";

        //Miku
        output +="<tr><td>Miku</td><td>14</td><td><input type='button' class='proFile' value='FaceBook' onClick='mikuFb()'></td></tr>";

        //Ruby
        output +="<tr><td>Ruby</td><td>11</td><td><input type='button' class='proFile' value='FaceBook' onClick='rubyFb()'></td></tr>"

        //Lusie
        output +="<tr><td>Lusie</td><td>11</td><td></td></tr>";

        // //Anni
        // output +="<tr><td>Anni</td><td>13</td><td></td></tr>";

        // //Jeny
        // output +="<tr><td>Jeny</td><td>11</td><td></td></tr>";


        output +="</table><br><br><br><br><br><br><br><br>";
        idH2.innerHTML += output;

//Y4Kill
        idH2.innerHTML += "<h3 class='nerName'>Y4kill</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Jusong
        output +="<tr><td>Jusong</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='jusongFb()'></td></tr>";

        //Kimmy
        output +="<tr><td>Kimmy</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='kimmyFb()'></td></tr>";

        //Tedy
        output +="<tr><td>Tedy</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='tedyFb()'></td></tr>";

        //Suna
        output +="<tr><td>Suna</td><td>14</td><td><input type='button' class='proFile' value='FaceBook' onClick='sunaFb()'></td></tr>";


        output +="</table><br><br><br><br><br><br>";
        idH2.innerHTML += output;

// //CupidZ
//         idH2.innerHTML += "<h3 class='nerName'>CupidZ</h3><br><br>";
//         var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";


//         output +="</table><br><br><br><br>";
//         idH2.innerHTML += output;


//Enge7e
        idH2.innerHTML += "<h3 class='nerName'>Enge7e</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Bambi
        output +="<tr><td>Bambi</td><td>11</td><td><input type='button' class='proFile' value='FaceBook' onClick='bambiFb()'></td></tr>";

        //Jusong
        output +="<tr><td>Jusong</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='jusongFb()'></td></tr>";

        //Kimmy
        output +="<tr><td>Kimmy</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='kimmyFb()'></td></tr>";

        //Mizuki
        output +="<tr><td>Mizuki</td><td>10</td><td><input type='button' class='proFile' value='FaceBook' onClick='mizukiFb()'></td></tr>";

        //Gawon
        output +="<tr><td>Gawon</td><td>11</td><td><input type='button' class='proFile' value='FaceBook' onClick='gawonFb()'></td></tr>";

        //Yunji
        output +="<tr><td>Yunji</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='yunjiFb()'></td></tr>";


        output +="</table><br><br><br><br><br><br><br><br>";
        idH2.innerHTML += output;

// //Cr5zy
//         idH2.innerHTML += "<h3 class='nerName'>Cr5zy</h3><br><br>";
//         var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

//         //Euryeon
//         output +="<tr><td>Euryeon</td><td>10</td><td><input type='button' class='proFile' value='FaceBook' onClick='euryeonFb()'></td></tr>";

//         //Yojun
//         output +="<tr><td>Yojun</td><td>15</td><td><input type='button' class='proFile' value='FaceBook' onClick='yojunFb()'></td></tr>";

//         //Hyeon
//         output +="<tr><td>Hyeon</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='hyeonFb()'></td></tr>";

//         //Yunji
//         output +="<tr><td>Yunji</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='yunjiFb()'></td></tr>";

//         //Nana
//         output +="<tr><td>Nana</td><td></td><td><input type='button' class='proFile' value='FaceBook' onClick='nanaFb()'></td></tr>";


//         output +="</table><br><br><br><br><br><br><br>";
//         idH2.innerHTML += output;

// //MagicSwan
//         idH2.innerHTML += "<h3 class='nerName'>Magic Swan</h3><br><br>";
//         var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";


//         output +="</table><br><br><br>";
//         idH2.innerHTML += output;

//Next
        idH2.innerHTML += "<h3 class='nerName'>Next</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Yejun
        output +="<tr><td>Yejun</td><td>15</td><td><input type='button' class='proFile' value='FaceBook' onClick='yejunFb()'></td></tr>";

        //Leni
        output +="<tr><td>Leni</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='kimmyFb()'></td></tr>";

        //Akuma
        output +="<tr><td>Akuma</td><td>15</td><td><input type='button' class='proFile' value='FaceBook' onClick='akumaFb()'></td></tr>";


        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//Reverie
        idH2.innerHTML += "<h3 class='nerName'>Revelie</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //karina
        output +="<tr><td>Karina</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='karinaFb()'></td></tr>";

        //Tsuki
        output +="<tr><td>Tsuki</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='tsukiFb()'></td></tr>";

        //Jizelle
        output +="<tr><td>Jizelle</td><td>15</td><td><input type='button' class='proFile' value='FaceBook' onClick='jizelleFb()'></td></tr>";


        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//Iconic
        idH2.innerHTML += "<h3 class='nerName'>Iconic</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //CheaYun
        output +="<tr><td>CheaYun</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='cheayunFb()'></td></tr>";

        //Yujin
        output +="<tr><td>Yujin</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='yujinFb()'></td></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;


//Bbyzoq
        idH2.innerHTML += "<h3 class='nerName'>Bbyzoq</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Ayeon
        output +="<tr><td>Ayeon</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='ayeonFb()'></td></tr>";

        //Euryeon
        output +="<tr><td>Euryeon</td><td>10</td><td><input type='button' class='proFile' value='FaceBook' onClick='euryeonFb()'></td></tr>";

        //Hina
        output +="<tr><td>Hina</td><td>14</td><td><input type='button' class='proFile' value='FaceBook' onClick='hinaFb()'></td></tr>";

        //Suzumi
        output +="<tr><td>Suzumi</td><td>11</td><td><input type='button' class='proFile' value='FaceBook' onClick='suzumiFb()'></td></tr>";

        //Cheonsa
        output +="<tr><td>Cheonsa</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='cheonsaFb()'></td></tr>";

        //Nana
        output +="<tr><td>Nana</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='nanaFb()'></td></tr>";


        output +="</table><br><br><br><br><br><br><br><br>";
        idH2.innerHTML += output;

//Sweetly
        idH2.innerHTML += "<h3 class='nerName'>Sweetly</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Susan
        output +="<tr><td>Susan</td><td>12</td><td></td></tr>";

        //Heewon
        output +="<tr><td>Heewon</td><td>13</td><td></td></tr>";

        //Haram
        output +="<tr><td>Haram</td><td>12</td><td></td></tr>";

        //Teddy
        output +="<tr><td>Teddy</td><td>13</td><td></td></tr>";

        output +="</table><br><br><br><br><br><br>";
        idH2.innerHTML += output;

//Ill5'Z
        idH2.innerHTML += "<h3 class='nerName'>Ill5'Z</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Yini
        output +="<tr><td>Yini</td><td>12</td><td></td></tr>";

        //Kaeny
        output +="<tr><td>Kaeny</td><td>11</td><td></td></tr>";

        //Mina
        output +="<tr><td>Mina</td><td>13</td><td></td></tr>";

        //Minju
        output +="<tr><td>Minju</td><td>11</td><td></td></tr>";

        //Yujin
        output +="<tr><td>Yujin</td><td>9</td><td></td></tr>";


        output +="</table><br><br><br><br><br><br>";
        idH2.innerHTML += output;

//Celestial
        idH2.innerHTML += "<h3 class='nerName'>Celestial</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Veni
        output +="<tr><td>Veni</td><td>12</td><td></td></tr>";

        //Muunee
        output +="<tr><td>Muunee</td><td>11</td><td></td></tr>";

        output +="</table><br><br><br>";
        idH2.innerHTML += output;

//QUEX
        idH2.innerHTML += "<h3 class='nerName'>QUEX</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Teddy
        output +="<tr><td>Teddy</td><td>13</td><td></td></tr>";

        //Jusong
        output +="<tr><td>Jusong</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='jusongFb()'></td></tr>";

        //Kimmy
        output +="<tr><td>Kimmy</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='kimmyFb()'></td></tr>";

        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Inferno
        idH2.innerHTML += "<h3 class='nerName'>Inferno</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Jihoon
        output +="<tr><td>Jihoon</td><td>15</td><td></td></tr>";

        //Jusong
        output +="<tr><td>Jusong</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='jusongFb()'></td></tr>";

        //Rora
        output +="<tr><td>Rora</td><td>14</td><td></td></tr>";

        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//Soloist
        idH2.innerHTML += "<h3 class='nerName'>Soloist</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Hanuel
        output +="<tr><td>Hanuel</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='hanuelFb()'></td></tr>";

        //Nazuke
        output +="<tr><td>Nazuke</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='nazukeFb()'></td></td>";

        //Nanni
        output +="<tr><td>Nanni</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='nanniFb()'></td></tr>";

        //Enny
        output +="<tr><td>Enny</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='ennyFb()'></td></tr>";

        //Sanghee
        output +="<tr><td>Sanghee</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='sangheeFb()'></td></tr>";

        // //Liana
        // output +="<tr><td>Liana</td><td>10</td><td><input type='button' class='proFile' value='FaceBook' onClick='lianaFb()'></td></tr>";

        // //Noa
        // output +="<tr><td>Noa</td><td>17</td><td><input type='button' class='proFile' value='FaceBook' onClick='noaFb()'></td></tr>";

        //Gena
        output +="<tr><td>Gena</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='genaFb()'></td></tr>";

        //Lychee
        output +="<tr><td>Lychee</td><td>11</td><td></td></tr>";

        //Alex
        output +="<tr><td>Alex</td><td>15</td><td></td></tr>";

        //Remi
        output +="<tr><td>Remi</td><td>11</td><td></td></tr>";

        //Eunjin
        output +="<tr><td>Eunjin</td><td>11</td><td></td></tr>";

        // //Collera
        // output +="<tr><td>Collera</td><td>12</td><td></td></tr>";

        //Michy
        output +="<tr><td>Michy</td><td>10</td><td></td></tr>";

        //Yuri
        output +="<tr><td>Yuri</td><td>14</td><td></td></tr>";

        //Lyuni
        output +="<tr><td>Lyuni</td><td>11</td><td></td></tr>";

        //Lily
        output +="<tr><td>Lily</td><td>11</td><td></td></tr>";

        //Miya
        output +="<tr><td>Miya</td><td>13</td><td></td></tr>";

        //Ellena
        output +="<tr><td>Ellena</td><td>9</td><td></td></tr>";

        //Julia
        output +="<tr><td>Julia</td><td>13</td><td></td></tr>";

        //Jenniefer
        output +="<tr><td>Jenniefer</td><td>12</td><td></td></tr>";

        output +="</table><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
        idH2.innerHTML += output;

// //Rap Teacher
//         idH2.innerHTML += "<h3 class='nerName'>Rap Teacher</h3><br><br>";
//         var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";


//         output +="</table><br><br><br><br>";
//         idH2.innerHTML += output;

//Vocal Teacher
        idH2.innerHTML += "<h3 class='nerName'>Vocal Teacher</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Sisi
        output +="<tr><td>Sisi</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='sisiFb()'></td></tr>";

        //Hina
        output +="<tr><td>Hina</td><td>14</td><td><input type='button' class='proFile' value='FaceBook' onClick='hinaFb()'></td></tr>";

        //Yurie
        output +="<tr><td>Yurie</td><td>12</td><td></td></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Editor
        idH2.innerHTML += "<h3 class='nerName'>Editor</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Bambi
        output +="<tr><td>Bambi</td><td>11</td><td><input type='button' class='proFile' value='FaceBook' onClick='bambiFb()'></td></tr>";

        //Gawon
        output +="<tr><td>Gawon</td><td>11</td><td><input type='button' class='proFile' value='FaceBook' onClick='gawonFb()'></td></tr>";

        //Star
        output +="<tr><td>Star</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='starFb()'></td></tr>";
        

        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;


    //Back button
    idH2.innerHTML += "<br><br><input type='button' class='customButtons2' value='butsah' onClick='startingThings()'>";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////New Member/////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function newMember(){
    idH2.innerHTML = "<input type='button' class='customSocial' value='Elseh' onClick='elsehYm()'><br><br>";
    idH2.innerHTML += "<input type='button' class='customButtons2' value='butsah' onClick='startingThings()'>";
}


//Social
function youTube(){
    window.open("https://www.youtube.com/@MPOP-b8r")
}
function faceBook(){
    window.open("https://www.facebook.com/profile.php?id=61562921567285&mibextid=ZbWKwL")
}

function elsehYm(){
    window.open("https://forms.gle/2AmfJkkq4opApr7B9")
}


//Social profiles

//CEO
    //minji
    function minjiFb(){
        window.open("https://www.facebook.com/profile.php?id=61560992931071")
    }

    //heyon
    function hyeonFb(){
        window.open("https://www.facebook.com/profile.php?id=61562968313601")
    }

    //nazuke
    function nazukeFb(){
        window.open("https://www.facebook.com/profile.php?id=100079794763005")
    }

//Manager
    //kimmy
    function kimmyFb(){
        window.open("https://www.facebook.com/bayarsaikhan.nandinerdene.1")
    }
    //yongmi
    function yongmiFb(){
        window.open("https://www.facebook.com/Arukanne01")
    }
    //miku
    function mikuFb(){
        window.open("https://www.facebook.com/profile.php?id=100013580803438")
    }
    //ruby
    function rubyFb(){
        window.open("https://www.facebook.com/profile.php?id=100092261079166")
    }

//Y4Kill
    //jusong
    function jusongFb(){
        window.open("https://www.facebook.com/gvnj.gvnj.520900")
    }
    //tedy
    function tedyFb(){
        window.open("https://www.facebook.com/groups/514406584324431/user/100093049583504")
    }
    //suna
    function sunaFb(){
        window.open("https://www.facebook.com/DaiviuGDL")
    }

//Enge7e
    //yunji
    function yunjiFb(){
        window.open("https://www.facebook.com/tugsuu.tugsuu.71404")
    }
    //mizuki
    function mizukiFb(){
        window.open("https://www.facebook.com/hwangmizuki")
    }
    //gawon
    function gawonFb(){
        window.open("https://www.facebook.com/profile.php?id=100045762031062")
    }

//Cr5zy
    //euryeon
    function euryeonFb(){
        window.open("https://www.facebook.com/starxniki")
    }
    //yojin
    function yojunFb(){
        window.open("https://www.facebook.com/profile.php?id=61554562125987")
    }
    //nana
    function nanaFb(){
        window.open("https://www.facebook.com/profile.php?id=100085845609786")
    }

//Next
    //yejun
    function yejunFb(){
        window.open("https://www.facebook.com/profile.php?id=61563382205919")
    }
    //leni
    function leniFb(){
        window.open("https://www.facebook.com/profile.php?id=100089019276840")
    }
    //akuma
    function akumaFb(){
        window.open("https://www.facebook.com/profile.php?id=100057014456901")
    }

//Reverie
    //karina
    function karinaFb(){
        window.open("https://www.facebook.com/hyunjnni")
    }
    //tsuki
    function tsukiFb(){
        window.open("https://www.facebook.com/profile.php?id=100079614865512")
    }
    //jizelle
    function jizelleFb(){
        window.open("https://www.facebook.com/profile.php?id=100057389401048")
    }

//Iconic
    //cheayun
    function cheayunFb(){
        window.open("https://www.facebook.com/profile.php?id=61555189326763")
    }
    //yujin
    function yujinFb(){
        window.open("https://www.facebook.com/profile.php?id=100090969111941")
    }

//Bbyzoq
    //Ayeon
    function ayeonFb(){
        window.open("https://www.facebook.com/profile.php?id=100094028740249")
    }
    //Euryeon
    function euryeonFb(){
        window.open("https://www.facebook.com/starxniki")
    }
    //hina
    function hinaFb(){
        window.open("https://www.facebook.com/profile.php?id=61557516809823")
    }
    //suzumi
    function suzumiFb(){
        window.open("https://www.facebook.com/profile.php?id=61556688775130")
    }
    //cheonsa
    function suzumiFb(){
        window.open("https://www.facebook.com/profile.php?id=100069317305856")
    }

//Soloist
    //hanuel
    function hanuelFb(){
        window.open("https://www.facebook.com/profile.php?id=61550920065592")
    }
    //nanni
    function nanniFb(){
        window.open("https://www.facebook.com/profile.php?id=100091770334227")
    }
    //enny
    function ennyFb(){
        window.open("https://www.facebook.com/profile.php?id=61560857954389")
    }
    //sanghee
    function sangheeFb(){
        window.open("https://www.facebook.com/munkh.ujin.35")
    }
    //liana
    function lianaFb(){
        window.open("https://www.facebook.com/profile.php?id=100037674138629")
    }
    //noa
    function noaFb(){
        window.open("https://www.facebook.com/profile.php?id=61555881741998")
    }
    //gena
    function genaFb(){
        window.open("https://www.facebook.com/profile.php?id=100076458789842")
    }

//Vocal teacher
    //Sisi
    function sisiFb(){
        window.open("https://www.facebook.com/sondor.sondor.906")
    }
    //Hina
    function hinaFb(){
        window.open("https://www.facebook.com/profile.php?id=61557516809823")
    }

//Editor
    //Bambi
    function bambiFb(){
        window.open("https://www.facebook.com/profile.php?id=100082620841186")
    }
    //Star
    function starFb(){
        window.open("https://www.facebook.com/profile.php?id=61555162224540")
    }





//nuuts
function nuuts(){
    idH2.innerHTML = "<input type='textbox' class='textbox' value='' placeholder='Code' id='idCode'>"
    idH2.innerHTML += "<br><br>"
    idH2.innerHTML += "<input type='button' class='customButtons' id='idBtn1' value = 'shalgah' onClick ='checkCode()'><br><br>"
    idH2.innerHTML += "<input type='button' class='customButtons2' value='butsah' onClick='startingThings()'>";

    idH4.innerHTML ="";
}

function checkCode(){
    if(idCode.value == "2024nazuke"){
        idH2.innerHTML = "Hey there, here is dark side of this..."

        idH2.innerHTML += "<br><br><input type='button' class='customButtons2' value='butsah' onClick='startingThings()'>";
    }
    else if(idCode.value == "2024MPOP"){
        idH2.innerHTML = "Bi entiinhendee hairtai <3. love you all from nazuke."

        idH2.innerHTML += "<br><br><input type='button' class='customButtons2' value='butsah' onClick='startingThings()'>";
    }
    else{
        alert("Code is wrong, please try again.")
    }
}