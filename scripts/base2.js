//This is the base javascript filefunction billme()

function billme() {
    var v1 = document.order.W.value;
    var v4 = document.order.WL.value;
    var v7 = document.order.H.value;
    var v8 = document.order.THETATNH.value;
    var v9 = document.order.THETAAH.value;
    //These lines define the variables.
    var W = parseFloat(v1);
    var WL = parseFloat(v4);
    var H = parseFloat(v7);
    var THETATNH = parseFloat(v8) * Math.PI / 180;
    var THETAAH = parseFloat(v9) * Math.PI / 180;

    var KG = 0.295 * H;
    var KJ = 0.6 * 0.295 * H;
    var KF = 0.667 * KG;
    var GP = 0.389 * H;
    var GH = 0.412 * GP;



    var LATNH = KJ * Math.sin(THETATNH);
    var LAWAH = KG * Math.sin(THETATNH) + GH * Math.sin(THETAAH); // In html, it is LAAH 
    var LAWL = KG * Math.sin(THETATNH) + GP * Math.sin(THETAAH);
    var es = 12 * Math.PI / 180 // for 12 degree
    var LAES = KF * Math.sin(es);
    var THETAES = 12;


    order.WTNH.value = W * 0.545
    order.WAH.value = W * 0.107
    order.subtotalBox.value = (W * 0.545 * LATNH + W * 0.107 * LAWAH + WL * LAWL) / LAES

    var JRFH = order.subtotalBox.value * Math.sin(THETATNH + es);
    var JRFV = order.subtotalBox.value * Math.cos(THETATNH + es) + W * 0.545 + W * 0.107 + WL;

    order.LATNH.value = LATNH;
    order.LAWAH.value = LAWAH;
    order.LAWL.value = LAWL;
    order.LAES.value = LAES;
    order.JRF.value = Math.sqrt(JRFH * JRFH + JRFV * JRFV);

    document.order.WTNH.value = document.order.WTNH.value
    document.order.WAH.value = document.order.WAH.value
    document.order.subtotalBox.value = document.order.subtotalBox.value
    document.order.JRF.value = document.order.JRF.value
}

