/*
Вывести название сезона по введённому номеру месяца (1-12) или его названию 
("январь", "февраль", ..., "декабрь"): "зима", "весна", "лето", "осень". 
Для реализации логики использовать переключатель switch.
*/

function choice(temp)
{
    switch(temp)
    {
        case "январь": return 1;
        case "февраль": return 2;
        case "март": return 3;
        case "апрель": return 4;
        case "май": return 5;
        case "июнь": return 6;
        case "июль": return 7;
        case "август": return 8;
        case "сентябрь": return 9;
        case "октябрь": return 10;
        case "ноябрь": return 11;
        case "декабрь": return 12;

        default: return temp;
    }
}

function valider()
{
    while(true)
    {

    let temp = prompt("Введите название или номер месяца!");

        if (temp === null) 
            return null;

        temp = temp.trim();

        if(temp === "")
        {
            alert("Нужно ввести название или номер месяца!!")
            continue;
        }
        else 
            return choice(temp.toLowerCase());
    }
}

 while(true)
 {
    let m = valider();

    if(isNaN(m))
    {
        alert("Введите название или номер месяц!")
        continue;
    }

    let month = +m;

    if(month < 1 || month > 12)
    {
        alert("Нет такого месяца!");
        continue;
    }

    switch(month)
    {
    case 12:
    case 1:
    case 2: 
    {
        alert("Зима");
        break;
    }

    case 3:
    case 4:
    case 5: 
    {
        alert("Весна");
        break;
    }

    case 6:
    case 7:
    case 8: 
    {
        alert("Лето");
        break;
    }

    case 9:
    case 10:
    case 11: 
    {
        alert("Осень");
        break;
    }
  }
  break;
 }
