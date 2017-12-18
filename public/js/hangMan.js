let words=[
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Croatia',
  'Cuba',
  'Curacao',
  'Cyprus',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Ecuador',
  'Egypt',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Samoa',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Somalia',
  'Spain',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

let randomWord = function() {
  let index = Math.floor(Math.random() * words.length);
  return words[index].toLowerCase();
}

// console.log(randomWord());

let emptyLetters = function(length) {
  let output = [];
  for(let index=0;index<length;index++){
    output.push('_');
  }
  return output.join(' ');
}

// console.log(emptyLetters(5));

let checkLetter = function(word,letter) {
  let indexOfLetterInWord = [];
  for(let index=0;index<word.length;index++){
    if(letter == word[index]){
      indexOfLetterInWord.push(index);
    }
  }
  return indexOfLetterInWord;
}

// console.log(checkLetter("india","i"));


let updateDisplay = function(emptyItems,indexOfLetterInWord,letter) {
  for(let index=0;index<indexOfLetterInWord.length;index++){
    emptyItems[indexOfLetterInWord[index]] = letter;
  }
  emptyItems = emptyItems.join(' ');
  document.getElementById('input').innerText = emptyItems;
  return emptyItems;
}

// If you want to test updateDisplay() then comment line number 200.
// console.log(updateDisplay(['_','_','_','_'],[1,3],'i'));
