function objectsProblem5(input) {
    let infoObj = {};
    
    for (let info of input){
        let [town, nums] = info.split(` - `);
        nums = Number(nums);
        if(infoObj[town]!==undefined){
            infoObj[town]+=nums;
        }else{
        infoObj[town]=nums;
        }
    }
    for(let name in infoObj){
        console.log(`${name} : Numbers of total counted Peoples is ${infoObj[name]}! `);
    }


}
objectsProblem5([`Plovdiv - 12`, `Plovdiv - 24`, `Sofiq - 256`, `Varna - 326`, `Pleven - 9` ]);