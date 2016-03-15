// Javascript Entry Point
import $ from 'jquery';



var url = 'https://api.github.com/users/ammeep/orgs'


$.ajax(url).then(function(data) {
	var $orgs = $('.orgs')
console.log(data)
	data.forEach(function({avatar_url, login}) {
		$orgs.append(`<li>
						<img src="${avatar_url}">${login}
					</li>`);

	});
});
