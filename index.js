

// Good Version //

function changeColour(value)
{
    let color = document.body.style.backgroundColor;
    switch(value)
    {
 
//  Radio 1 Red //

  case 'red':
  color = "#FF0000";
  
  
  // Radio 2 Green //
  break;
 
  case 'blue':
  color = "#0073b0";



  // Radio 3 Blue //
    break;
    case 'green':
    color = "#377e5f";

        
    }
    document.body.style.backgroundColor = color;
  }


  // DOM MANIPULATION Element.classList //
  
  let blueBtn = document.getElementById('blueBtn');
  console.log(blueBtn.classlist);

  // blueBtn.classList.add('bold');


  

  

