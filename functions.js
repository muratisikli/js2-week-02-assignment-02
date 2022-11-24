const changeEmailFromGmailToHicoders = (p_array) => {
    let filter_email=p_array
    .filter((element)=>element.includes(41))
    .sort()
    .map((email)=>email.toLowerCase().replace(["gmail.com"],["hicoders.ch"]));
    return filter_email

};


const findSuperNumbers = (p_array) => {
    let super_number_arr = [];
    p_array.map(super_num=>{ 
      let numberList = String(super_num).split("").map(Number) 
      let totalNumber=0;
      numberList.map(element=>{  
          totalNumber+=Math.pow(element,numberList.length) 
      })
      if(totalNumber===super_num){
          super_number_arr.push(super_num)
      }
    })
    return super_number_arr;
};

export { changeEmailFromGmailToHicoders, findSuperNumbers };
