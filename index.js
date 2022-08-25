const weightFactors = {
    "st":
    {
        "ton":0.00635029,
        "kg":6.35029,
        "g":6350.29,
        "mg":6350000
    },
    "lb":
    {
        "ton":0.000453592,
        "kg":0.453592,
        "g":453.592,
        "mg":453592
    },
    "oz":
    {
        "ton":0.0000283495,
        "kg":0.0283495,
        "g":28.3495,
        "mg":28349.5
    }
}

const heightFactors = {
    "mi":
    {
        "km":1.60935,
        "m":1609.35,
        "cm":160935,
        "mm":1609350
    },
    "yd":
    {
        "km":0.0009144,
        "m":0.9144,
        "cm":91.44,
        "mm":914.4
    },
    "ft":
    {
        "km":0.0003048,
        "m":0.3048,
        "cm":30.48,
        "mm":304.8
    },
    "in":
    {
        "km":0.0000254,
        "m":0.0254,
        "cm":2.54,
        "mm":25.4
    }
}

document.getElementById("Wconvert").addEventListener("click", Wconvert)
document.getElementById("Hconvert").addEventListener("click", Hconvert)

function Wconvert () 
{
    // input variable
    var value = parseInt(document.getElementById("Winput").value);

    // imperial variables
    var i = document.getElementById("WImperial");
    var iUnit = i.options[i.selectedIndex].value;

    // metric variables
    var m = document.getElementById("WMetric");
    var mUnit = m.options[m.selectedIndex].value;

    // output
    result = value * weightFactors[iUnit][mUnit]
    document.getElementById("output").innerText = result;
}

function Hconvert () 
{
    // input variable
    var value = parseInt(document.getElementById("Hinput").value);

    // imperial variables
    var i = document.getElementById("HImperial");
    var iUnit = i.options[i.selectedIndex].value;

    // metric variables
    var m = document.getElementById("HMetric");
    var mUnit = m.options[m.selectedIndex].value;

    // output
    result = value * heightFactors[iUnit][mUnit]
    document.getElementById("output").innerText = result;
}