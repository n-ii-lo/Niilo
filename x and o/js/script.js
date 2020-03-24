let x = new Array(9);

function zero() {
	let id = Math.floor(Math.random() * 9);
	x[id] ? zero() : move(id, 'zero');
}

function checkEnd() {
	if ( x[0]=='zero' && x[1]=='zero' && x[2]=='zero' || x[0]=='hero' && x[1]=='hero' && x[2]=='hero') return true;
	if ( x[3]=='zero' && x[4]=='zero' && x[5]=='zero' || x[3]=='hero' && x[4]=='hero' && x[5]=='hero') return true;
	if ( x[6]=='zero' && x[7]=='zero' && x[8]=='zero' || x[6]=='hero' && x[7]=='hero' && x[8]=='hero') return true;
	if ( x[0]=='zero' && x[3]=='zero' && x[6]=='zero' || x[0]=='hero' && x[3]=='hero' && x[6]=='hero') return true;
	if ( x[1]=='zero' && x[4]=='zero' && x[7]=='zero' || x[1]=='hero' && x[4]=='hero' && x[7]=='hero') return true;
	if ( x[2]=='zero' && x[5]=='zero' && x[8]=='zero' || x[2]=='hero' && x[5]=='hero' && x[8]=='hero') return true;
	if ( x[0]=='zero' && x[4]=='zero' && x[8]=='zero' || x[0]=='hero' && x[4]=='hero' && x[8]=='hero') return true;
	if ( x[2]=='zero' && x[4]=='zero' && x[6]=='zero' || x[2]=='hero' && x[4]=='hero' && x[6]=='hero') return true;
	if ( x[0] && x[1] && x[2] && x[3] && x[4] && x[5] && x[6] && x[7] && x[8] ) return true;
}

function move(id, role) {
	if(x[id]) return false;
	x[id] = role;
	document.getElementById(id).className = 'main-template__box ' + role;
	!checkEnd() ? (role == 'hero') ? zero() : null : reset();
}

function reset() {
<<<<<<< HEAD
	alert('Игра окончена!');
=======
	alert('Game end!');
>>>>>>> master
	location.reload();
}