var helper = {
    getHoursFromDate: function(datestring){
        var hours12 = datestring.split(':')[0],
            result;
        if(datestring.indexOf('AM') != -1){
            result = parseInt(hours12);
            if(result == 12){
                result = 0;
            }
            return result;
        }else{
            var hours24 = hours12;
            if(hours12 != '12'){
                hours24 = parseInt(hours12) + 12.0;
            }
            result = parseInt(hours24);
            return result;
        }
    }
};