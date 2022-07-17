var BMI ={
  height: 0,
  weight: 0,
  bmi: 0,
  status: 0,
  
  
  setHeight: function (height){
    this.height=parseInt(height);
   },

  setWeight: function (weight){
    this.weight=parseInt(weight);
   },
  
  getHeight: function (){
    return this.height;
   },

  getWeight: function (){
    return this.weight;
   },

  getBMI: function (){
    this.bmi=(this.weight/(this.height*this.height))*10000;
    return this.bmi;
   },
  
  getStatus: function(){
    
    this.status=BMI.getBMI();
    
    if (this.status<18.5)
      this.status="eat more and enjoy";
    
    else
      if ((this.status>=18.5)&&(this.status<25))
      this.status="normal...keep going.. ";
    
    else
      if ((this.status>=25)&&(this.status<30))
      this.status="little unhealthy ";
    
    else
      if (this.status>=30)
      this.status="eat less and enjoy ";
    
    
    return this.status;
    
  }
  

  
};

function calculateBMI(){
  
  BMI.setHeight(document.getElementById("height").value);
  BMI.setWeight(document.getElementById("weight").value);

  
  document.getElementById("showheight").innerHTML="Height: "+BMI.getHeight()+" cm";
  document.getElementById("showweight").innerHTML="Weight: "+BMI.getWeight()+" kg";  
  document.getElementById("showbmi").innerHTML="BMI: "+BMI.getBMI().toFixed(2);
  document.getElementById("status").innerHTML="Status: "+BMI.getStatus();
  
}