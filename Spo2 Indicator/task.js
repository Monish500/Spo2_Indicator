// I'll be Creating an JSON for Console Verification 
const Reference_Value = {
    Low_Reference_Value: 50,
    User_Vital_Value: 95,
    High_Reference_Value: 100,
    Healthy_Value: 95
}

// This function is Used to Change the Width Of the Spo2, If the Values are Above 50%;

const AboveReferenceValue = () => {
    var Sp02_ind = X_Axis_Point_Value();
    var BottomLineAndPercentage = Bottom_LinePercentage();
    // Percentage Functionality
    var Percentage_indicator_Text = document.getElementById("Percentage").innerHTML = Reference_Value.User_Vital_Value + "%";
    var Percentage_indicator = document.getElementById("Percentage").style.marginLeft = Sp02_ind + "%";
    // Arrow Indicator
    var Arrow_indicator = document.getElementById("down-arrow-icon").style.marginLeft = Sp02_ind + "%";
    //Spo2 Indicator
    var Spo2_width_indicator = document.getElementById("Spo2-indicator").style.width = Sp02_ind + "%";
    // Bottom Percentage Texts
    var BottomLowPercentageText = document.getElementById("low-percentage").innerHTML = Reference_Value.Low_Reference_Value + "%";
    var BottomHighPercentageText = document.getElementById("high-percentage").innerHTML = Reference_Value.High_Reference_Value + "%";
    var BottomHealthyPercentageText = document.getElementById("Healthy-Value-Percentage").innerHTML = Reference_Value.Healthy_Value;
    var BottomHealthyPercentageMovement = document.getElementById("Healthy-Value-Percentage").style.marginLeft = BottomLineAndPercentage + "%";
    // Bottom Vertical Lines for Indicating Percentage
    var start_of_highest_value_line_Movement = document.getElementById("start-of-highest-value-line").style.marginLeft = BottomLineAndPercentage + "%";
    // Auto Adjusting the Health Indicator Width. 


    // if(Reference_Value.Healthy_Value){
    //     var Low_Width = document.getElementById("Low").style.width = Reference_Value.Healthy_Value + "%";
    //     // var Low_BackGroundcolor = document.getElementById("Low").style.backgroundColor = "Grey";
    //     var Healthy_Width = document.getElementById("Healthy").style.width = BottomLineAndPercentage + "%";
    //     var Healthy_BAckgroundcolor = document.getElementById("Healthy").style.backgroundColor = "rgb(94, 92, 92)"
    // }else{
    //     console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
    // }

}


//This function will Reduce the Values to Initial Points if the Reference value is below or Equal to 50%

const BelowLowValue = () => {
    const widthmin = document.getElementById("Spo2-indicator").style.width = "0%";
    const arrowmin = document.getElementById("down-arrow-icon").style.marginLeft = "0%";
    const Percentagemintext = document.getElementById("Percentage").innerHTML = Reference_Value.User_Vital_Value + "%";
    const Percentagemin = document.getElementById("Percentage").style.marginLeft = "0%"
    const BottomLineandPercentageIndicatorText = document.getElementById("Healthy-Value-Percentage").innerHTML = Reference_Value.Healthy_Value + "%";
    // const BottomLineandPercentageIndicator = document.getElementById("Healthy-Value-Percentage").marginLeft = "0%"
}

// To Calculate the Reference Point.
// x axis point value different

const X_Axis_Point_Value = () => {
    let get_X_Axis_Point_Value = ((Reference_Value.High_Reference_Value - Reference_Value.Low_Reference_Value) / 10);

    var Sp02_Indicator = ((Reference_Value.Low_Reference_Value - Reference_Value.User_Vital_Value) / get_X_Axis_Point_Value * 10);

    return Sp02_Indicator * -1;
}
console.log("X_Axis_Point_Value", X_Axis_Point_Value());


// To Calculate the Bottom Indicator's Vertical Line and Percentage

const Bottom_LinePercentage = () => {
    let getBottom_LinePercentage = ((Reference_Value.High_Reference_Value - Reference_Value.Low_Reference_Value) / 10);

    var BottomLineAndPercentageIndicator = ((Reference_Value.Low_Reference_Value - Reference_Value.Healthy_Value) / getBottom_LinePercentage * 10);

    return BottomLineAndPercentageIndicator * -1;
}
console.log("Bottom_LinePercentage", Bottom_LinePercentage());


//If The Use Enters Low Value Below 50 It'll Automatically goes to its initial state which is 50.
if (Reference_Value.User_Vital_Value <= 50) {
    BelowLowValue();
} else {
    AboveReferenceValue();
}