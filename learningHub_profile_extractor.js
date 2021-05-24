// https://learninghub.dwu.ac.pg/theme/image.php/lambda/core/1603152342/u/f2
// https://learninghub.dwu.ac.pg/theme/image.php/lambda/core/1603152342/u/f2


// https://learninghub.dwu.ac.pg/pluginfile.php/31623/user/icon/lambda/f2?rev=788753
// https://learninghub.dwu.ac.pg/pluginfile.php/31905/user/icon/lambda/f2?rev=61786


var img = document.querySelectorAll(".user a img");

for (var i = 0; i < img.length; i++) {
	if (/https:\/\/learninghub\.dwu\.ac\.pg\/theme\/image\.php\/lambda\/core\/(\d{2,})\/u\/f2/i.test(img[i].src)) {
		console.log(img[i].parentElement.innerText + " does not have a profile picture");
	}

	// https://learninghub.dwu.ac.pg/theme/image.php/lambda/core/1603152342/u/f2
	if (/https:\/\/learninghub\.dwu\.ac\.pg\/pluginfile\.php\/(\d{2,})\/user\/icon\/lambda\/f2\?rev=(\d{1,})/i.test(img[i].src)) {
		console.log(img[i].parentElement.innerText + " have a profile picture.");
	}

}