//This is the base javascript filefunction billme()

function billme()
{
        var v1= document.order.W.value;
        var v4= document.order.WL.value;
		var v7= document.order.H.value;

        //These lines define the variables.
        
         var   W= parseFloat(v1);
         var   WL= parseFloat(v4);
		 var  H=parseFloat(v7);
		 var GP=0.389*H;
         var GH=0.46*GP;
        var   LAWAH= GH;// In html, it is LAAH ??
        var LAWL = GP;
        var es = 15*Math.PI/180  // for 15 degree
        var LAES = 0.25*GP * Math.sin(es);
        var THETAES=15;
        

        

        //These lines make sure that variables 1, 2, and 3 are numbers.
			order.WAH.value= W*0.048
            order.subtotalBox.value= (W*0.048*LAWAH+WL*LAWL)/LAES //Fdeltoid

            var JRFH=order.subtotalBox.value*Math.cos(es);
            var JRFV=order.subtotalBox.value*Math.sin(es)-W*0.048-WL;

			order.LAWAH.value=LAWAH;
			order.LAWL.value=LAWL;
            order.LAES.value=LAES;
            order.JRF.value=Math.sqrt(JRFH*JRFH+JRFV*JRFV);
			document.order.WAH.value=document.order.WAH.value
			document.order.subtotalBox.value=document.order.subtotalBox.value
            document.order.JRF.value=document.order.JRF.value

        }
