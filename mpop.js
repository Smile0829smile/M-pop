//Eniig ta harj baival yg odoo garj busdiin hudulmur ayulgui baidliig hamgaalna uu bayrlalaa :)
console.log("Busdiin hudulmur bolon busad zuilsiig hundlej ene hesgees garna uu bayrlalaa")

//Ehlel
function startingThings(){
    idH2.innerHTML = "<input type='button' class='customButtons1' value='M-POP iin social' onClick='socailMedia()'><br><br>"
    idH2.innerHTML += "<input type='button' class='customButtons' value='M-POP members' onClick='mPopGishuud()'><br><br>"
    idH2.innerHTML += "<input type='button' class='customButton' value='M-POP member boloh' onClick='newMember()'><br><br>"
    idH2.innerHTML += "<img src='mpop.jpg' width='90%' height=''>"

    idH3.innerHTML = "Made by:- Nazuke"
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////SOCIAL MEDIA//////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function socailMedia(){
    idH2.innerHTML = "<input type='button' class='customSocial' value='YouTube' onClick='youTube()'><br><br>";
    idH2.innerHTML += "<input type='button' class='customSocial' value='FaceBook' onClick='faceBook()'><br><br>"
    idH2.innerHTML += "<input type='button' class='customButtons2' value='butsah' onClick='startingThings()'>";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////GISHUUD////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mPopGishuud(){
        idH3.innerHTML = "";

    //Back button
    idH2.innerHTML = "<input type='button' class='customButtons2_5' value='butsah' onClick='startingThings()'><br>";


//CEO
        idH2.innerHTML += "<h3 class='nerName'>CEO</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";
        
        //Minji
        output +="<tr><td>Minji</td><td>13</td><td><input type='button' class='proFile' value='FaceBook' onClick='minjiFb()'></td></tr>";

        //Hyeon
        output +="<tr><td>Yuna</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='hyeonFb()'></td></tr>";

        //Nazuke
        output +="<tr><td>Nazuke</td><td>16</td><td><input type='button' class='proFile' value='FaceBook' onClick='nazukeFb()'></td></td>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Manager
        idH2.innerHTML += "<h3 class='nerName'>Manager</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Kimmy
        output +="<tr><td>Kimmy</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='kimmyFb()'></td></tr>";

        //YongMi
        output +="<tr><td>YongMi</td><td>12</td><td><input type='button' class='proFile' value='FaceBook' onClick='yongmiFb()'></td></tr>";

        //Noa
        output +="<tr><td>Noa</td><td>17</td><td><input type='button' class='proFile' value='FaceBook' onClick='noaFb()'></td></tr>";

        //Miku
        output +="<tr><td>Miku</td><td>14</td><td><input type='button' class='proFile' value='FaceBook' onClick='mikuFb()'></td></tr>";


        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//Y4Kill
        idH2.innerHTML += "<h3 class='nerName'>Y4kill</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Jusong
        output +="<tr><td>Jusong</td><td>16</td><td></td></tr>";

        //Kimmy
        output +="<tr><td>Kimmy</td><td>12</td><td></td></tr>";

        //Tedy
        output +="<tr><td>Tedy</td><td>13</td><td></td></tr>";

        //Suna
        output +="<tr><td>Suna</td><td>14</td><td></td></tr>";


        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//CupidZ
        idH2.innerHTML += "<h3 class='nerName'>CupidZ</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Ill5'Z
        idH2.innerHTML += "<h3 class='nerName'>Ill5'Z</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Kaeny
        output +="<tr><td>Kaeny</td><td>11</td><td></td></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Enge7e
        idH2.innerHTML += "<h3 class='nerName'>Enge7e</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Bambi
        output +="<tr><td>Bambi</td><td>11</td><td></td></tr>";

        //Jusong
        output +="<tr><td>Jusong</td><td>16</td><td></td></tr>";

        //Kimmy
        output +="<tr><td>Kimmy</td><td>12</td><td></td></tr>";

        //Star
        output +="<tr><td>Star</td><td>12</td><td></td></tr>";

        //Mizuki
        output +="<tr><td>Mizuki</td><td>10</td><td></td></tr>";

        //Gawon
        output +="<tr><td>Gawon</td><td>11</td><td></td></tr>";

        //Yunji
        output +="<tr><td>Yunji</td><td>13</td><td></td></tr>";


        output +="</table><br><br><br><br><br><br><br><br>";
        idH2.innerHTML += output;

//Cr5zy
        idH2.innerHTML += "<h3 class='nerName'>Cr5zy</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Euryeon
        output +="<tr><td>Euryeon</td><td>10</td><td></td></tr>";

        //Yojun
        output +="<tr><td>Yojun</td><td>15</td><td></td></tr>";

        //Hyeon
        output +="<tr><td>Yuna</td><td>12</td><td></td></tr>";

        //Yunji
        output +="<tr><td>Yunji</td><td>13</td><td></td></tr>";


        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//Astoria
        idH2.innerHTML += "<h3 class='nerName'>Astoria</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//MagicSwan
        idH2.innerHTML += "<h3 class='nerName'>Magic Swan</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Next
        idH2.innerHTML += "<h3 class='nerName'>Next</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Yejun
        output +="<tr><td>Yejun</td><td>15</td><td></td></tr>";

        //Leni
        output +="<tr><td>Leni</td><td>12</td><td></td></tr>";

        //Akuma
        output +="<tr><td>Akuma</td><td>15</td><td></td></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Revelie
        idH2.innerHTML += "<h3 class='nerName'>Revelie</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Star
        output +="<tr><td>Star</td><td>12</td><td></td></tr>";

        //karina
        output +="<tr><td>Karina</td><td>12</td><td></td></tr>";

        //Tsuki
        output +="<tr><td>Tsuki</td><td>16</td><td></td></tr>";

        //Jizelle
        output +="<tr><td>Jizelle</td><td>15</td><td></td></tr>";


        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//Iconic
        idH2.innerHTML += "<h3 class='nerName'>Iconic</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //CheaYun
        output +="<tr><td>CheaYun</td><td>13</td><td></td></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;


//Bbyzoq
        idH2.innerHTML += "<h3 class='nerName'>Bbyzoq</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Ayeon
        output +="<tr><td>Ayeon</td><td>13</td><td></td></tr>";

        //Euryeon
        output +="<tr><td>Euryeon</td><td>10</td><td></td></tr>";

        //Hina
        output +="<tr><td>Hina</td><td></td><td></td></tr>";

        //Suhyeon
        output +="<tr><td>Suhyeon</td><td>16</td><td></td></tr>";
        


        output +="</table><br><br><br><br><br>";
        idH2.innerHTML += output;

//Soloist
        idH2.innerHTML += "<h3 class='nerName'>Soloist</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Hanuel
        output +="<tr><td>Hanuel</td><td>13</td><td></td></tr>";

        //Nazuke
        output +="<tr><td>Nazuke</td><td>16</td><td></td></td>";

        //Nanni
        output +="<tr><td>Nanni</td><td>13</td><td></td></tr>";

        //Enny
        output +="<tr><td>Enny</td><td>12</td><td></td></tr>";

        //Sanghee
        output +="<tr><td>Sanghee</td><td>13</td><td></td></tr>";


        output +="</table><br><br><br><br><br><br>";
        idH2.innerHTML += output;

//Rap Teacher
        idH2.innerHTML += "<h3 class='nerName'>Rap Teacher</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Vocal Teacher
        idH2.innerHTML += "<h3 class='nerName'>Vocal Teacher</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Sisi
        output +="<tr><td>Sisi</td><td>13</td><td></td></tr>";

        //Hina
        output +="<tr><td>Hina</td><td>14</td><td></td></tr>";


        output +="</table><br><br><br><br>";
        idH2.innerHTML += output;

//Editor
        idH2.innerHTML += "<h3 class='nerName'>Editor</h3><br><br>";
        var output ="<br><table><tr><th>Ner</th><th>Nas</th><th>Social</th></tr>";

        //Bambi
        output +="<tr><td>Bambi</td><td>11</td><td></td></tr>";

        //Gawon
        output +="<tr><td>Gawon</td><td>11</td><td></td></tr>";
        

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
    window.open("https://www.facebook.com/profile.php?id=61562921567285")
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
    //noa
    function noaFb(){
        window.open("https://www.facebook.com/profile.php?id=61555881741998")
    }
    //miku
    function mikuFb(){
        window.open("https://www.facebook.com/profile.php?id=100013580803438")
    }
