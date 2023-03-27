    function myFunction() {
      var lambd = [1, 0.048, 0.04, 0.23, 0.03, 0.15, 0.43, 1.6, 0.55, 0.975];
      var opcije = ["--None--", "Stakleno vlakno", "Mineralna vuna", "Celuloza", "Ekspandirani polistiren (stiropor)", "Drvo", "Cement", "Cigla", "Beton", "Glina"];
      var rez, rezW, rezL, firstW, secondW, firstL, secondL, novtI, denom = 0.0;
      // metraza
      var heigth = parseFloat(document.form1.heigth.value);
      var width = parseFloat(document.form1.width.value);
      var length = parseFloat(document.form1.length.value);
      var kvad = parseFloat(document.form1.kvad.value);
      // tempic
      var tI = parseFloat(document.form1.tI.value);
      var tE = parseFloat(document.form1.tE.value);
      //tipovi zidovi
      var d = [parseFloat(document.form1.d1.value), parseFloat(document.form1.d2.value), parseFloat(document.form1.d3.value), parseFloat(document.form1.d4.value), parseFloat(document.form1.d5.value)];
      var tip = [document.form1.tip1.value, document.form1.tip2.value, document.form1.tip3.value, document.form1.tip4.value, document.form1.tip5.value];
      // value increased
      var koliko = parseFloat(document.form1.koliko.value);
      // izabir
      var izabir = document.form1.myRange.value;
      tE = tE + 273.15;
      novtI = tI + koliko;
      tI = tI + 273.15;
      novtI = novtI + 273.15;
      for(var i = 0; i < 5; i++) {
        if(tip[i] != opcije[0] && (d[i]<0 || d[i]>0)) {
          for(var j = 1; j < 10; j++) {
            if(opcije[j] == tip[i]) {
              denom = denom + (d[i] / lambd[j]);
            }
          }
        }
      }
      firstW = (((heigth*width)- kvad) * (tI-tE)) / denom;
      secondW = (((heigth*width)) * (novtI-tE)) / denom;
      firstL = (((heigth*length)) * (tI-tE)) / denom;
      secondL = (((heigth*length)) * (novtI-tE)) / denom;
      rezW = secondW - firstW;
      rezL = secondL - firstL;
      rez = (2*rezW + 2*rezL)/1000;
      if (rez < 0) {
        rez = Math.abs(rez);
        if (izabir == 1) {
          document.getElementById("sat").innerHTML = "Za sat ste uštedjeli "+ ((rez * 4.94) / 30)/24 + " KM";
          document.getElementById("dan").innerHTML = "Za dan ste uštedjeli "+ (rez * 4.94) / 30+ " KM";
          document.getElementById("mjesec").innerHTML = "Za mjesec ste uštedjeli  "+ rez * 4.94+ " KM";
        }
        else {
          document.getElementById("sat").innerHTML = "Za sat ste uštedjeli "+ ((rez * 7.16) / 30)/24+ " KM";
          document.getElementById("dan").innerHTML = "Za dan ste uštedjeli "+ (rez * 7.16) / 30+ " KM";
          document.getElementById("mjesec").innerHTML = "Za mjesec ste uštedjeli "+ rez * 7.16+ " KM";
        }
      }
      else {
        if (izabir == 1) {
          document.getElementById("sat").innerHTML = "Za sat ste potrošili "+ ((rez * 4.94) / 30)/24+ " KM";
          document.getElementById("dan").innerHTML = "Za dan ste potrošili "+ (rez * 4.94) / 30+ " KM";
          document.getElementById("mjesec").innerHTML = "Za mjesec ste potrošili "+ rez * 4.94+ " KM";
        }
        else {
          document.getElementById("sat").innerHTML = "Za sat ste potrošili "+ ((rez * 7.16) / 30)/24+ " KM";
          document.getElementById("dan").innerHTML = "Za dan ste potrošili "+ (rez * 7.16) / 30+ " KM";
          document.getElementById("mjesec").innerHTML = "Za mjesec ste potrošili "+ rez * 7.16+ " KM";
        }
      }

    }
