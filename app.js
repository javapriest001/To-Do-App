let toDoInput = document.getElementById('toDoInput').value;
let dateInput = document.getElementById('dateInput').value;
let errorText = document.getElementById('errorText')
let tablebody = document.getElementById('tableBody')
let tableHead = document.getElementById('tableHead')
let noDataParagraph = document.getElementById('nodata')
let toDoField = document.getElementById('toDoInput');
let dateField = document.getElementById('dateInput')



let b = 'c'
console.log(b)

const validateEntry = (toDoEntry , dateEntry) => {
    
return toDoEntry != ''  && dateEntry != ''

}


const addToDoList = (event) => {
    event.preventDefault()
  
    toDoInput = document.getElementById('toDoInput').value;
    dateInput = document.getElementById('dateInput').value;
    errorText = document.getElementById('errorText')
    


    
    if (validateEntry(toDoInput, dateInput)) {
   
        addToDoToTable(toDoInput , dateInput)
        clearInputFields(toDoField , dateField)
        hideTextOnClick(tableHead , noDataParagraph)

       console.log(toDoInput)
       console.log(dateInput)  
}
    else {
     alert('wait')
     errorText.innerHTML = 'Add An Event To Continue'
}
} 


const addToDoToTable = ( toDoEntry , dateEntry) => {
    tablebody.innerHTML += `
            <tr>
            
            <td> ${toDoEntry}</td>
            <td> ${dateEntry}</td>
            <td> <button class="delete" onClick="deleteRecord(this)"><i class="bi bi-trash delete"></i></td></button>

            
            
            
            
            </tr>




    `


}

const clearInputFields = (toDoEntry , dateEntry) => {

    toDoEntry.value = ''
    dateEntry.value = ''

}

const hideTextOnClick = (tableH , noData) => {

tableH.classList.remove('d-none')
noData.classList.add('d-none')

}
const deleteRow = (e) => {

   if(confirm('Are Done With This Event')) {
        if (e.target.classList.contains('delete')) {
   
        const btn = e.target;
        btn.closest('tr').remove()
}
    }
    

    
}

tableHead.addEventListener('click' , deleteRow)