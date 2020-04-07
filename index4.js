let body = {
    tagName: 'body',
    attrs: {},
    children: [
        {tagName:'div',
         attrs: {},
         children: [
            {tagName:'span',
            text:'Enter a data please:',
            children:[''],
            },
            {tagName:'input',
            attrs:{
            type:'text',   
            id:'name',
            children:[''],
            }
            },        
            {tagName:'span',
            attrs:{
            type:'text',
            id:'surname',
            children:[''],
            }

            }
         ],
         paired: true,
        },
        {tagName:'div',
        attrs: {},
        children: [
            {tagName:'button',
            attrs:{
            id:'ok',
            text:'OK',
            children:['']
            }   
            },
            {tagName:'button',
            attrs:{
            id:'cancel',
            text:'Cancel',
            children:[''],
            }
            }
        ],
        paired: true,
        }
    ],
    paired: true,
} 
alert(body.children[0].children[2].attrs.id)
alert(body.children[1].children[1].attrs.id)

let notebook = {
    brand : prompt("Укажите бренд  ноутбука",'HP'),
    type:  +prompt ("Укажите cерию", '440 G4'),
    model: prompt ("Укажите модель", 'Y7Z75EA'),
    ram: +prompt ("Оперативная память GB", '4'),
    size: +prompt ("Укажите диагональ экрана", '14'),
    weight: +prompt ("Укажите вес", '1.8'),
    resolution: {
        width: parseInt(prompt("Разрешение экрана",'1920')) ,
        height: parseInt(prompt("Разрешение экрана",'1080')),
    },
  };

let phone = {
    brand: prompt("Укажите бренд  телефона",'meizu'),
    model: prompt("Укажите модель  телефона",'m2'),
    ram: +prompt("Оперативная память GB", '2'),
    color: prompt("Цвет", 'black'),
};

let person = {
    name: prompt("Укажите  имя", 'Donald'),
    surname: prompt("Ваша фамилия?", 'Trump'),
    married: confirm("Вы в браке",'true')
}


            // object links
    person.laptop = notebook;
    person.smartphone = phone;
    notebook.owner = person;
    phone.owner = person;
    person.smartphone.owner.laptop.owner.smartphone == person.smartphone

            // imperative array fill 3

let obj = []
obj[0] = prompt('Сколько тебе лет?'),
obj[1] = prompt('Какой у тебя люимый писатель?'),
obj[2] = prompt('Какой твои любий вид спорта?')



             // while confirm 

 while (!confirm("Нажмите 'ок',чтобы все закончилось"));

            // array fill

let obj1 = []
do {
  let obj1new = obj1.push ('');
    obj1New = prompt("Ведите значение", 'Привет');
} while (obj1New);

            //array fill nopush не сделал


        //   infinite probability

let i = 0;
while(true) {
    if(Math.random() > 0.9) {
            alert(++i);
            break;
    }else i++;
}


                 // empty loop
while (true){
let cancel = prompt();
    if (cancel != null)
    {break;}
}
    //progression sum

for(let i=1;i<200;i= i+3){
        alert(i)
}
            // chess one line
    for (var i=1,str="";i<=10;i++){
        if(i%2 !=0){str+=" ";}
        else if(str+="#");
    }
    console.log(str)

    numbers
    for (var str = "", i=0;i<10; i++){
      for (j=0;j<10;j++){
        str += j;
        if (j==9) {
          str +="\n";
        }
      }
    }
    console.log(str)



    //    chess
    for (var i=1 ,str="";i<10;i++){
        for (let j=1;j<=6 ;j++){
            str +=".";
            str +="#";
                if(j==6){
                    str +="\n";
                    i++;}
       
        for (let j=1;j<=6 && i % 2 == 0;j++){
            str +="#";
            str +=".";
            if(j==6){
                    str +="\n";
                    }   
    }
    }
       }
       console.log(str)

