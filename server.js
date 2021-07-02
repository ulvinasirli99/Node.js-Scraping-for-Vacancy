const rp = require('request-promise');
const url = 'https://ejob.az/is-elanlari/informasiya-texnologiyalari/proqramlasdirma-proqramci';
const cheerio = require('cheerio');
const request = require('request')

//  rp(url)
//   .then(function(html){
//     //success!
//     console.log($('list', html).text());
//   })
//   .catch(function(err){
//     //handle error
//   });

request(url,(error,response,html)=>{

  if(!error && response.statusCode==200){
  
    const $ = cheerio.load(html);



    // const list = $('.list');
    // Todo Vakansiyalarin adlari gelir...........
    // const output = list.find('h3').text();
    // console.log(output);



    // $('.list a').each((i,el)=>{

    //Todo Vakansiyalrin Linkleri Gelir

    //   const link = $(el).attr('href');//Vakansiyalrin Linkleri

    //   console.log(link);

    // });



    //Todo Butun Vakansiyalar Gelir
    // $('.list').each((t,ml)=>{

    //   const desc = $(ml).text();

    //   console.log(desc);

    // });



    $('.list').each((t,ml)=>{

      //Todo Job Title Done
      const jobTitle = $(ml)
      
      .find('a')

      .text();

      //Todo Job Salary Done
      const jobSalary = $(ml)
     
      .find('.salary')
     
      .text();

      //Todo JOb Location Done
    const jobLocation = $(ml)
    
    .find('.description')
    
    .text();


    //Todo Job Company Done
    const jobCompany = $(ml)
    
    .find('.company')
    
    .text();

    console.log(jobTitle,jobSalary,jobCompany,jobLocation);

    });

  }

});


  