var edge = require('./lib/edge');

var getVoltage = edge.func(function() {/*
    #r "C:\Program Files\nodejs\EzDNAApiNet.dll"
    using System;
    using System.Threading.Tasks;
    using System.Runtime.InteropServices;
    using InStep.eDNA.EzDNAApiNet;
    class Startup
    {
        public async Task<object> Invoke(dynamic input)
        {
            return await Task<object>.Run(() => {
                try {
                        double value;
                        DateTime time;
                        string status, desc, units;
                        int iRet;
                        value = -1;
                        time = DateTime.Now;
                        status = "";
                        desc = "";
                        units = "";
                        string pointName = input.point;
                        iRet = RealTime.DNAGetRTAll(pointName, out value, out time, out status, out desc, out units);
                        return new {value = value, time = time, status = status, desc = desc, units = units};
                }
                finally {

                }
            });
        }
    }
*/});

function getPointData(pnt, callback){
    getVoltage({ point: pnt }, function (error, result) {
        if (error) {
            console.log(error);
            callback(error);
        }
        else {
            console.log(JSON.stringify(result));
            callback(null, result);
        }
    })
}

getPointData("WRLDC.PHASOR.WRDC0783", function(error, result){
    console.log("reached here...");
    if(error){
        console.log("Oops, error occurred...");
    }
});