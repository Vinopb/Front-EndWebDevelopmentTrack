const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   for (let i = 0; i< companies.length;i++){
//       console.log(companies[i]);
//   }

//for each
//   companies.forEach(function(company){
//     console.log(company);    
//   })

// for filter
  let canDrink =[];
//   for(let i = 0; i<= ages.length;i++)
//   {
//       if(ages[i]>21)
//       {
//         canDrink.push(ages[i]);
//       }
//   }

//Filter with call back es5
// canDrink = ages.filter(function(age)
//  {
//      if(age >= 21)
//      {
//          return true;
//      }
//  });

 //Arrow funcation
canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

//Filter retail companies

// const retailCompany = companies.filter(function(company)
// {
//   if(company.category == 'Retail')
//   {
//       return true;
//   }
// });

// const retailCompany = companies.filter(company => company.category === 'Retail')
// console.log(retailCompany);

// Get 80s companies
// const eightCompanies = companies.filter(company => (company.start >= 1980 && 
//     company.start <= 1990))

// console.log(eightCompanies);

//Map
//create the array of company names;
// const companyName = companies.map(function(company)
// {
//    return company.name;
// });

// const testMap = companies.map(function(company)
// {
//    return `${company.name} [${company.start} - ${company.end}]`;
// });

const testMap = companies.map(company => 
    `${company.name} [${company.start} - ${company.end}]`
);
 console.log(testMap);

 //sort

//  const sortCompnies  = companies.sort(function(c1,c2)
// {
//     if(c1.start < c2.start)
//     {
//         return 1;        
//     }else{
//         return -1;
//     }
// })

const sortCompnies  = companies.sort((a,b)=>a.start<b.start?1:-1);
console.log(sortCompnies);