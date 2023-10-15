const loginForm = document.getElementById("loginForm");
//console.log(loginForm);

loginForm.addEventListener('submit',function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    //console.log(username + password);

    const isUsernameValid = username.length >= 8 && username[0] === username[0].toUpperCase() &&
                            /\d/.test(username) && /[!@#$%^&*]/.test(username);
    
    const isPasswordValid = password.length >= 8 && password.length <= 20 &&
                            /[!@#$%^&*]/.test(password);
    
    if(isUsernameValid && isPasswordValid){
        alert('Login Successful! \n Username: '+ username + '\n Password:' + password);
    }else{
        alert('Invalid username or password. Please check again!')
    }
});

function resetForm(){
    loginForm.reset();
}
//search the table
function myFunction(){
    const input = document.getElementById("myInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");
    

    for(let i = 1; i < rows.length; i++){
        const td = rows[i].getElementsByTagName("td")[0];
        
        if(td){
            const textValue = td.textContent || td.innerText;
            
            if(textValue.toLowerCase().indexOf(filter) > -1){
                rows[i].style.display = '';
            }else{
                rows[i].style.display = 'none';
            }
        }
    }
}

const myInput = document.getElementById("myInput");
myInput.addEventListener('keyup',myFunction);

//sort the table
function sortAscTable(){
    let table, rows,switching, i,x,y,shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while(switching){
        switching = false;
        rows = table.rows;
        for(i = 1;i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i+1].getElementsByTagName("td")[0];
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
        }
    }
}
function sortDescTable(){
    let table, rows,switching, i,x,y,shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while(switching){
        switching = false;
        rows = table.rows;

        for(i = 1;i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i+1].getElementsByTagName("td")[0];
            if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
        }
    }
}