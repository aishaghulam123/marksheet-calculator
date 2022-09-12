



document.write("     <fieldset>        <h1>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp MARKSHEET OF STUDENT</h1>")






var firstName = prompt("Enter your full Name")
var urdu = parseInt(prompt('Enter your Urdu marks'))
var math =parseInt( prompt('Enter your Maths marks'))
var english = parseInt(prompt("Enter your English Marks"))
var isl = parseInt(prompt('Enter your Islamiat marks'))
var computer = parseInt(prompt('enter your Computer marks'))
var total=(urdu+math+english+isl+computer)
var a500 = (500)
var b100 = (100)
var Percentege= (total/a500*b100)
var CLASS = prompt("Enter your class")
document.write("<table border><tr><th>NAME :</th><td>"+firstName+"</td></tr>" +"          "+"<tr><th>class :</th><td>"+CLASS+"</td></tr><tr><th>NAME OF SUBJECTS </th><th>MARKS_OBTAIN </th><th>TOTAL_MARKS </th></tr>")
document.write("<tr><th>URDU</th>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<td>"+ urdu+"  </td><td>100</td></tr>  "    )
document.write("<tr><th>MATH</th>&nbsp&nbsp&nbsp&nbsp&nbsp<td>"+ math  +"  </td><td>100</td></tr>  "  )   
document.write("<tr><th>ENGLISH</th>&nbsp&nbsp&nbsp<td>"+ english   +" </td><td>100</td></tr>" )
document.write("<tr><th>ISLAMIAT</th>&nbsp&nbsp&nbsp<td>"+ isl +"</td><td>100</td></tr>"  )
document.write("<tr><th>COMPUTER</th>&nbsp&nbsp&nbsp<td>"+ computer    +"  </td><td>100</td></tr>   " )
document.write("<tr><th>TOTAL </th>&nbsp&nbsp <td>"+total   +"  </td><td>"+500+"</td></tr>")
document.write("<tr><th>PERCENTAGE</th>&nbsp&nbsp&nbsp<td>"+Percentege+"  </td></tr>   ")
document.write("<tr><th>GRADE</th>&nbsp&nbsp&nbsp<td>")



if(Percentege >=90){
    document.write("A1")

}
if(Percentege >=80 && Percentege < 90){
    document.write("A")
}
if(Percentege >=70 && Percentege  < 80){
    document.write("B")
}
if(Percentege >=60 && Percentege < 70){
    document.write("C")
}
if(Percentege >=50 && Percentege < 60){
    document.write("D")
}
   
if  (Percentege >=00 && Percentege < 49)  
   { document.write("FAIL")}


   document.write("</td></tr></table> </fieldset>")
   document.write("<h3><strong>NAME :</strong>&nbsp&nbsp&nbsp&nbsp <u><em>Aisha Muhammad Ghulam</em></u></h3>")
   document.write("<h3><strong>ROLL NO :</strong>&nbsp&nbsp&nbsp&nbsp<u> <em>WAC-72495&nbsp&nbsp&nbsp&nbsp (WEB & APP COURSE &nbsp &nbsp&nbsp BATCH:&nbsp&nbsp1&nbsp)</em></u></h3>")
   document.write("<h3><strong>ASSIGNMENT:</strong>&nbsp&nbsp&nbsp&nbsp <u><em>MARKSHEET OF STUDENT</em></u></h3>")
    

