'use strict';

let elem = document.querySelector('#elem');

let list = document.querySelector('#list')

let lists = document.querySelectorAll('#list')

let arr = [
    'Abkhazia','Afghanistan','Albania','Algeria','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain',
'Bangladesh','Belarus','Belgium','Bermuda Islands','Bolivia','Brazil','Bulgaria','Burundi','Cambodia','Cameroon','Canada','Chile',
'China','Colombia','Congo','Costa Rica','Cuba','Cyprus','Czech Republic','Denmark','Dominican Republic','Ecuador','Egypt','El Salvador',
'Estonia','Ethiopia','Finland','France','Georgia','Germany','Ghana','Gibraltar','United Kingdom','Greece','Guatemala','Guinea','Haiti',
'Hawaii','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Ivory Coast','Jamaica',
'Japan','Kazakhstan','Kenya','Kuwait','Kyrgyzstan','Latvia','Lebanon','Liberia','Libya','Lithuania','Luxemburg','Madagascar','Malawi',
'Malaysia','Malta','Mexico','Moldova','Monaco','Mongolia','Morocco','Nepal','Netherlands','New Zeland','Nicaragua','Nigeria','North Korea',
'Norway','Oman','Pakistan','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Romania','Russia',
'Rwanda','Saudi Arabia','Senegal','Sierra Leone','Singapore','Slovakia','Slovenia','South Africa','South Korea','South Ossetia','Spain','Sri Lanka',
'Sudan','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Thailand','Togo','Tunisia','Turkey','Turkmenistan','Uganda','Ukraine','United Arab Emirates',
'United States','Uruguay','Uzbekistan','Venezuela','Yemen','Zaire','Zambia','Zimbabwe'
]


function getCountry(str){
    let res = arr.filter(function(elem){
        return elem.startsWith(str)
    })
    return res
}


function addLi(str){
    
    for(let i of str){
        let li = document.createElement('li')
        li.textContent = i;
        list.append(li)

        li.addEventListener('click',function(){
            elem.value = this.textContent
            list.textContent = ''

        })
    }
    
   
}

elem.addEventListener('input',function(){
    list.innerHTML = ''
    addLi(getCountry(this.value))

})

