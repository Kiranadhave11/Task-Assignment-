const recordsDisplay = document.getElementById('data-output');
var recordspeople;

// fetch data from jsonfile
fetch("data.json")
.then(function(response){
   return response.json();
})
.then(function(peoples){
   recordspeople = peoples;
   DisplayRecords(recordspeople);
   console.log(recordspeople);
   let placeholder = document.querySelectorAll("#data-output");
   let out = "";
   for(let data of peoples){
      out += `
         <tr>
            <td>Name:${data.name}</td>
            <td>Location:${data.location}</td>
         </tr>
      `;
   } 
   placeholder.innerHTML = out;
}); 

// 3 records per page function
const total_records_tr = document.querySelectorAll('#data-output tr');
const records_per_page = 3;
let page_number = 1;
const total_records = total_records_tr.length;
const total_page = Math.ceil(total_records / records_per_page);

function DisplayRecords()
{
   let start_index = (page_number - 1)* records_per_page;
   let end_index = start_index + (records_per_page - 1);
      let statement = '';
   for (let i = start_index; i<=end_index; i++)
   {
      console.log(recordspeople);
      statement += `
      <tr>
         <td>Name:${recordspeople[i].name}</td>
         <td>Location:${recordspeople[i].location}</td>
      </tr>
   `;
   }
   recordsDisplay.innerHTML = statement;
}

// Nextbtn function
function nextBtn()
{
  page_number++;
  DisplayRecords();
}