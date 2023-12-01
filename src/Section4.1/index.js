console.log(genres.options);
let option = genres.options[genres.selectedIndex];
alert(option.text)
alert(option.value);
let elem = new Option('Классика', "classic", true, true);
genres.append(elem)