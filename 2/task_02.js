/*
По возрасту пользователя выполнить классификацию и вывести сообщение: "ребёнок" (0-12), "подросток" (13-17), "взрослый" (18-64),
 "пенсионер" (65+). Для реализации логики использовать условную конструкцию if..else if..else.
    */ 
function valider()
{
    while(true)
    {

    let temp = prompt("Введите возвраст");

        if (temp === null) 
            return null;

        temp = temp.trim();

        if(temp === "")
        {
            alert("Введите возвраст числом!")
            continue;
        }

        if(isNaN(+temp))
        {
            alert("Нужно ввести число!");
            continue;
        }
        else 
            return +temp;
    }
}

 while(true)
 {
    let num = valider();

    if (num < 0)
    {
        alert("Возвраст не может быть отрицательным! Вероятно вы ошиблись, повторите ввод.")
        continue;
    }

    if(num <= 12)
    {
        alert("Ребенок")    
        break;
    }    

    else if (num <= 17)
    {
       alert("Подросток")    
       break;
    }
    
    else if (num <= 64)
    {
        alert("Взрослый");
        break;
    }
    else if (num < 120)
    {
        alert("Пенсионер");
        break;
    }
    else
    {
        alert("Столько не живут обычно, если вам 120 лет и более - обратитесь к администрации!")
        continue;
    }
 }
