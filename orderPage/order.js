
 let main_box = document.createElement("div");
 main_box.setAttribute("class" ,"box")
 document.getElementsByClassName("main-div")[0].append(main_box)

let box2 = document.getElementsByClassName("box")[0]

//let box = document.getElementsByClassName("box")[0];
//console.log(box)

let box_div = document.createElement("div"); // div created inside box which we wants to flex it
box_div.setAttribute("class","flex");
box2.append( box_div)



let image_div = document.createElement("div"); // div for image created
image_div.setAttribute("class", "img-col");
let image = document.createElement("img");
image.src = "https://assets.smallcase.com/images/smallcases/100/SCET_0005.png";
image_div.append(image);     // appending the image in the image_div container
box_div.append(image_div)     // appending the image_div in flex div



let text_container_div = document.createElement("div");  // div which contains all the text
box_div.append(text_container_div);

let heading_div = document.createElement("div");   // heading of inside text content
heading_div.innerHTML="Growth at Fair Price";
heading_div.setAttribute("class","box-inner-heading");
let text_content_below_heading = document.createElement("div");
text_content_below_heading.innerHTML ="Invested Aug 5,2021"
text_container_div.append(heading_div,text_content_below_heading);




let div_inner_flex = document.createElement("div") // div created for flexing the inside text content;
div_inner_flex.setAttribute("class","inner-flex")

var first_content = document.createElement("div");   

first_content.setAttribute("class", "flex-direction-column")

var first_content_col1 = document.createElement("div");

first_content_col1.innerHTML ="Batch";

var first_content_col2 = document.createElement("div");

first_content_col2.innerHTML ="Invest";

first_content.append( first_content_col1,first_content_col2);   

div_inner_flex.append(first_content);    // appending inside inner-flex div;

text_container_div.append(div_inner_flex);



//2nd col2 text content

var first_content = document.createElement("div");   

first_content.setAttribute("class", "flex-direction-column")

var first_content_col1 = document.createElement("div");

first_content_col1.innerHTML ="Placed on";

var first_content_col2 = document.createElement("div");

first_content_col2.innerHTML ="Aug 5,2021";

first_content.append( first_content_col1,first_content_col2);   

div_inner_flex.append(first_content);    // appending inside inner-flex div;

text_container_div.append(div_inner_flex);




//3rd col3 text content
var first_content = document.createElement("div");   

first_content.setAttribute("class", "flex-direction-column")

var first_content_col1 = document.createElement("div");

first_content_col1.innerHTML ="Status";

var first_content_col2 = document.createElement("div");

first_content_col2.innerHTML ="Filled";

first_content.append( first_content_col1,first_content_col2);   

div_inner_flex.append(first_content);    // appending inside inner-flex div;

text_container_div.append(div_inner_flex);


// horizontal line below the box

let line_div = document.createElement("div");
line_div.setAttribute("class","horizontal-line");
line_div.style.backgroundColor ="rgb(161, 153, 153)"
document.getElementsByClassName("main-div")[0].append(line_div)