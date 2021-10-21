/*

let query = ""
let req = {}
let results = []
let netID = "kmm76921"
let pw = "13509BryantAve"

Label2.onclick = function() {

  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  results = JSON.parse(req.responseText)
  console.log(`The results are \n ${results}`)
  if (results.length == 0)
    Label2.value = "There are no customers in the database."
  else {
    let message = ""
    for (i = 0; i < results.length; i++)
      message = message + results[i][1] + "\n"
    Label2.value = message
} else
  Label2.value = "Error code: " + req.status
}


Button2.onclick = function() {
    query = `DELETE * FROM customer WHERE name = ${Input1.value}`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
      Label2.value = `Customer ${Input1.value} has been deleted`

      Label2.value = "Error code: " + req.status
    }
    
    */