/*
По введенному номеру дня недели (1-7) вывести название дня ("Понедельник", ..., "Воскресенье"). 
Для реализации логики использовать переключатель switch..case.
*/
function valider()
{
    while(true)
    {

    let temp = prompt("Введите день недели (1-7): ");

        if (temp === null) 
            return null;

        temp = temp.trim();

        if(temp === "")
        {
            alert("Введите числом день недели!")
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
    let day = valider();
    
    if(day < 1 || day > 7)
    {
      alert("Неверное значение дня недели. от 1 до 7 !!!")
      continue;
    }

  switch(day)
  {
    case 1: alert("Понедельник"); break;
    case 2: alert("Вторник"); break;
    case 3: alert("Среда"); break;
    case 4: alert("Четверг"); break;
    case 5: alert("Пятница"); break;
    case 6: alert("Суббота"); break;
    case 7: alert("Воскресенье"); break;
  }
  break;
 }
