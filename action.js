function myFunction() 
{	
	var x = document.getElementById("macscreen");
	if (x.style.display === "none") 
	{
		x.style.display = "block";
	} 
	else 
	{
		x.style.display = "none";
	}
}
		
function myfun()
{
	var x = document.getElementById("scene");
	if(x.style.pointerEvents === "auto")
	{
		x.style.pointerEvents = "none";
	}
	else
	{
		x.style.pointerEvents = "auto";
	}
}