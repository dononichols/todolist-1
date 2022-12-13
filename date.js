//jshint esversion:6

 


exports.getDate = function getDate() { 

const today = new Date();
   
const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

return today.toLocaleDateString("en-us", options);

};

// -------------


 

 exports.getDay = function getDay() { 

    const today = new Date();
       
    const options = {
        weekday: "long",
        
    };
    
    return today.toLocaleDateString("en-us", options);
    
    };

    