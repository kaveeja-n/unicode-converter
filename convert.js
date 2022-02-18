var text;
var nVowels;
var consonants= new Array()
var consonantsUni= new Array()
var vowels= new Array()
var vowelsUni= new Array()
var vowelModifiersUni= new Array()
var specialConsonants= new Array()
var specialConsonantsUni= new Array()
var specialCharUni= new Array()
var specialChar= new Array()


    vowelsUni[0]='ඌ';    vowels[0]='uu';    vowelModifiersUni[0]='ූ';
    vowelsUni[1]='ඕ';    vowels[1]='oo';    vowelModifiersUni[1]='ෝ';
    vowelsUni[2]='ඕ';    vowels[2]='oo';    vowelModifiersUni[2]='ෝ';
    vowelsUni[3]='ආ';    vowels[3]='aa';    vowelModifiersUni[3]='ා';
    vowelsUni[4]='ආ';    vowels[4]='aa';    vowelModifiersUni[4]='ා';
    vowelsUni[5]='ඈ';    vowels[5]='Aa';    vowelModifiersUni[5]='ෑ';
    vowelsUni[6]='ඈ';    vowels[6]='AA';    vowelModifiersUni[6]='ෑ';
    vowelsUni[7]='ඈ';    vowels[7]='Aa';    vowelModifiersUni[7]='ෑ';
    vowelsUni[8]='ඊ';    vowels[8]='ii';    vowelModifiersUni[8]='ී';
    vowelsUni[9]='ඊ';    vowels[9]='I';    vowelModifiersUni[9]='ී';
    vowelsUni[10]='ඊ';    vowels[10]='Ii';    vowelModifiersUni[10]='ී';
    vowelsUni[11]='ඊ';    vowels[11]='ii';    vowelModifiersUni[11]='ී';
    vowelsUni[12]='ඒ';    vowels[12]='ee';    vowelModifiersUni[12]='ේ';
    vowelsUni[13]='ඒ';    vowels[13]='ee';    vowelModifiersUni[13]='ේ';
    vowelsUni[14]='ඒ';    vowels[14]='ee';    vowelModifiersUni[14]='ේ';
    vowelsUni[15]='ඌ';    vowels[15]='U';    vowelModifiersUni[15]='ූ';
    vowelsUni[16]='ඌ';    vowels[16]='Uu';    vowelModifiersUni[16]='ූ';
    vowelsUni[17]='ඖ';    vowels[17]='au';    vowelModifiersUni[17]='ෞ';
    vowelsUni[18]='ඇ';    vowels[18]='Aa';    vowelModifiersUni[18]='ැ';
    
    vowelsUni[19]='අ';    vowels[19]='a';    vowelModifiersUni[19]='';
    vowelsUni[20]='ඇ';    vowels[20]='A';    vowelModifiersUni[20]='ැ';
    vowelsUni[21]='ඉ';    vowels[21]='i';    vowelModifiersUni[21]='ි';
    vowelsUni[22]='එ';    vowels[22]='e';    vowelModifiersUni[22]='ෙ';
    vowelsUni[23]='උ';    vowels[23]='u';    vowelModifiersUni[23]='ු';
    vowelsUni[24]='ඔ';    vowels[24]='o';    vowelModifiersUni[24]='ො';
    vowelsUni[25]='ඓ';    vowels[25]='ai';    vowelModifiersUni[25]='ෛ';
    vowelsUni[26]='ං';    vowels[26]='x';    vowelModifiersUni[26]='ං';
    vowelsUni[27]='ඃ';    vowels[27]='H';    vowelModifiersUni[27]='ඃ';
    nVowels=28;
    
    consonantsUni[0]='ඬ'; consonants[0]='zd';
    consonantsUni[1]='ඳ'; consonants[1]='zdh';
    consonantsUni[2]='ඟ'; consonants[2]='zg';
    consonantsUni[3]='ථ'; consonants[3]='Th';
    consonantsUni[4]='ධ'; consonants[4]='Dh';
    consonantsUni[5]='ඝ'; consonants[5]='gh';
    consonantsUni[6]='ඡ'; consonants[6]='chh';
    consonantsUni[7]='ඵ'; consonants[7]='ph';
    consonantsUni[8]='භ'; consonants[8]='bh';
    consonantsUni[9]='ඣ'; consonants[9]='jh';
    consonantsUni[10]='ෂ'; consonants[10]='Sh';
    consonantsUni[11]='ඥ'; consonants[11]='zh';
    consonantsUni[12]='ඤ'; consonants[12]='zk';
    consonantsUni[13]='ළු'; consonants[13]='Lu';
    consonantsUni[14]='ඛ'; consonants[14]='kh';
    consonantsUni[15]='ඨ'; consonants[15]='T';
    consonantsUni[16]='ඪ'; consonants[16]='Dh';
    consonantsUni[17]='ඳ'; consonants[17]='zq';
    consonantsUni[18]='ධ'; consonants[18]='Q';
    consonantsUni[19]='ඝ'; consonants[19]='G';
    consonantsUni[17]='ශ'; consonants[17]='S';

    consonantsUni[18]='ද'; consonants[18]='q';
    consonantsUni[19]='ච'; consonants[19]='ch';
    consonantsUni[20]='ත'; consonants[20]='th';
    consonantsUni[21]='ට'; consonants[21]='t';
    consonantsUni[22]='ක'; consonants[22]='k';
    consonantsUni[23]='ඩ'; consonants[23]='d';
    consonantsUni[24]='න'; consonants[24]='n';
    consonantsUni[25]='ප'; consonants[25]='p';
    consonantsUni[26]='බ'; consonants[26]='b';
    consonantsUni[27]='ම'; consonants[27]='m';
    consonantsUni[28]='‍ය'; consonants[28]='\\u005C' + 'y';
    consonantsUni[29]='‍ය'; consonants[29]='Y';
    consonantsUni[30]='ය'; consonants[30]='y';
    consonantsUni[31]='ජ'; consonants[31]='j';
    consonantsUni[32]='ල'; consonants[32]='l';
    consonantsUni[33]='ව'; consonants[33]='v';
    consonantsUni[34]='ව'; consonants[34]='w';
    consonantsUni[35]='ස'; consonants[35]='s';
    consonantsUni[36]='හ'; consonants[36]='h';
    consonantsUni[37]='ණ'; consonants[37]='N';
    consonantsUni[38]='ළ'; consonants[38]='L';
    consonantsUni[39]='ඛ'; consonants[39]='K';
    consonantsUni[40]='ඝ'; consonants[40]='G';
    consonantsUni[41]='ඵ'; consonants[41]='P';
    consonantsUni[42]='ඹ'; consonants[42]='B';
    consonantsUni[43]='ෆ'; consonants[43]='f';
    consonantsUni[44]='ග'; consonants[44]='g';
    consonantsUni[46]='ක'; consonants[46]='c';
    consonantsUni[45]='ර'; consonants[45]='r'; 
    consonantsUni[46]='ද'; consonants[46]='dh';
    consonantsUni[47]='ඦ'; consonants[47]='zj';
    
    specialCharUni[0]='ෲ'; specialChar[0]='ruu';
    specialCharUni[1]='ෘ'; specialChar[1]='ru';
    specialCharUni[2]='්‍ර'; specialChar[2]='ra';


function startText() {
    var s,r,v;
    text = document.txtBox.box1.value;  
      
    //special consonents
    for (var i=0; i<specialConsonants.length; i++)
        text = text.replace(specialConsonants[i], specialConsonantsUni[i]);
   
    //consonents + special Chars
    for (var i=0; i<specialCharUni.length; i++){
        for (var j=0;j<consonants.length;j++){
            s = consonants[j] + specialChar[i];
            v = consonantsUni[j] + specialCharUni[i];
            r = new RegExp(s,"g");
            text = text.replace(r, v);
        }
    }
    //consonants + Rakaransha + vowel modifiers
    for (var j=0;j<consonants.length;j++){
        for (var i=0;i<vowels.length;i++){
            s = consonants[j] + "r" + vowels[i];
            v = consonantsUni[j] + "්‍ර" + vowelModifiersUni[i];
            r = new RegExp(s,"g");
            text = text.replace(r, v);
        }
        s = consonants[j] + "r";
        v = consonantsUni[j] + "්‍ර";
        r = new RegExp(s,"g");
        text = text.replace(r, v);
    }
    //consonents + vowel modifiers
    for (var i=0;i<consonants.length;i++){
        for (var j=0;j<nVowels;j++){ 
            s = consonants[i]+vowels[j];
            v = consonantsUni[i] + vowelModifiersUni[j];
            r = new RegExp(s,"g");
            text = text.replace(r, v);
        }
    }

    //consonents + HAL
    for (var i=0; i<consonants.length; i++){
        r = new RegExp(consonants[i],"g");
        text = text.replace(r, consonantsUni[i]+"්");
    }
        
    //vowels
    for (var i=0; i<vowels.length; i++){
        r = new RegExp(vowels[i],"g");
        text = text.replace(r, vowelsUni[i]);
    }

    document.txtBox.box2.value=text;
}

function copyit(theField) {
    var tempval=eval("document."+theField);
    tempval.focus();
    tempval.select();
    therange=tempval.createTextRange();
    therange.execCommand("Copy")
}

var schemeVisible = 0;
function changeVisibility(){
    if (schemeVisible){
        document.getElementById('scheme').style.visibility='hidden';
        document.getElementById('link').innerHTML="&nbsp;Show Transliteration Scheme&nbsp;";
        schemeVisible=0;
    }
    else{
        document.getElementById('scheme').style.visibility='visible';
        document.getElementById('link').innerHTML="&nbsp;&nbsp;Hide Transliteration Scheme&nbsp;";
        schemeVisible=1;
    }
}
