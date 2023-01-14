function give(){
	let name = document.getElementById("user-name").value
	document.getElementById("response").innerHTML = giveFlower(name)
}


function giveFlower( name ) {
	
	if ( "aoeui".includes( name.charAt(0).toLowerCase() ) ) {
		return name + " gets chamomile"
	} else {
		return name + " gets rose"
	}
 
    // short if-esle notation
    // return "aoeui".includes( name.charAt(0).toLowerCase() ) ? name + " gets chamomile" : name + " gets rose"

}

//document.writeln(  giveFlower( "Alex" )    +"<br>" )
//document.writeln(  giveFlower( "Petr" )    +"<br>" )
//document.writeln(  giveFlower( "Andy" )    +"<br>" )
//document.writeln(  giveFlower( "Volodya" ) +"<br>" )
