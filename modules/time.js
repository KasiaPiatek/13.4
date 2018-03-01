/*125/60 = 5 modulo
0
x = 7300s modulo 3600 = 2 reszty 100/60 modulo = 1 :40s

parametry var x = 76600/3600 
zmienna godz = wynik x

xmodulo 3600 do zmiennej reszta jeden
teraz reszta jeden dziele przez 60 i wynik w zmiennej min
restza 1 modulo 60 = 40 - zmienna sek

return "godzin + "" + min "" + sex "" )



var x = seconds;*/

function Time(times){
            var houres;
            var minutes;
            var seconds;
            houres = Math.floor(times/3600);
            minutes = Math.floor((times % 3600) / 60);
            seconds = Math.floor(times % 60);


console.log('Uptime:~ ' + houres + ":" +  minutes + ":" + seconds);
     
};






exports.print = Time;