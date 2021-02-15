const test = [2, 4, 0, 3, 5, 0];
test.push(test.splice(test.indexOf(0), 1)[0]);
document.getElementById('output0').innerHTML = (test);

const pengen = [0, 4, 0, 3, 0, 1];
function punya(macBookPro) {
    for (let i = macBookPro.length - 1; i >= 0; i--) {
        if (macBookPro[i] === 0) {
            macBookPro.splice(i, 1);
            macBookPro.push(0);
        }
    }
    return macBookPro;
}

document.getElementById('output1').innerHTML = (punya(pengen));

const aku = [0, 4, 8, 3, 0, 1];
function kurang(ganteng) {
    for (let i = ganteng.length - 1; i >= 0; i--) {
        if (ganteng[i] === 0) {
            ganteng.splice(i, 1);
            ganteng.push(0);
        }
    }
    return ganteng;
}

document.getElementById('output2').innerHTML = (kurang(aku));

const otewe = [0, 0, 0, 0, 0, 0];
document.getElementById('output3').innerHTML = (otewe);

const error = [0, 6, 0, 4, 0, A];
error.push(error.splice(error.indexOf(0), 1)[0]);
document.getElementById('output4').innerHTML = (error);


