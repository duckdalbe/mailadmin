function showSelectedDomain(id) {
	if(parseInt(id) <= 0) return false;
	window.location.href = "domain/" + id;
}
