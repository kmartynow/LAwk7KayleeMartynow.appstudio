/*

let query = ""
let req = {}
let netID = "kmm76921"
let pw = "13509BryantAve"
let results = []
 

lblShowCustomers.onclick=function(){
  query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length == 0)
            lblShowCustomers.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + '\n'
            lblShowCustomers.value = message
        } 
      } else 
        
        lblShowCustomers.value = "Error code: " + req.status
}

btnAdd.onclick=function(){
  let name = inptName.value
  let street = inptAddress.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZip.value
  query = `INSERT INTO customer375 VALUES = ${name} ${street} ${city} ${state} ${zipcode}`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
 
  if (req.status == 200) {
    lblShowCustomers.value = `Customer ${name} has been added!`
 
  } else 
    lblShowCustomers.value = "Error code: " + req.status
}
 */