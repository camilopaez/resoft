module.exports={
    parseDate:function (str,fun){
        var month=str.slice(4,7);
        var monthnumber;
        switch(month){
            
            case "Jan":
            monthnumber=01;
            break;
            case "Feb":
            monthnumber=02;
            break;
            case "Mar":
            monthnumber=03;
            break;
            case "Apr":
            monthnumber=04;
            break;
            case "May":
            monthnumber=05;
            break;
            case "Jun":
            monthnumber=06;
            break;
            case "Jul":
            monthnumber=07;
            break;
            case "Aug":
            monthnumber=08;
            break;
            case "Sep":
            monthnumber=09;
            break;
            case "Oct":
            monthnumber=10;
            break;
            case "Nov":
            monthnumber=11;
            break;
            case "Dec":
            monthnumber=12;
            break;    
        }
        str=str.slice(8,24);
        str=str.slice(0,2)+monthnumber.toString()+str.slice(3);
        return str;
    },

    horafecha:function(str){

        return [str.slice(0,10),str.slice(11,19)];

    }

}
