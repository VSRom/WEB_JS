//  Проверить вводимое пользователем число на чётность и положительность.

function valider()
{
    while(true)
    {

    let temp = prompt("Введите число для проверки");

        if (temp === null) 
            return null;

        temp = temp.trim();

        if(temp === "")
        {
            alert("Введите числа!")
            continue;
        }

        if(isNaN(+temp))
        {
            alert("Нужно ввести числа!");
            continue;
        }
        else 
            return +temp;
    }
}

while(true)
{ 
  let num = valider();

    if(num > 0)
    {
        if(num % 2 == 0)
        {
            alert("Число четное и положительное")
            break;
        }

        else
        {
            alert("Число нечетное и положительное")    
            break;
        }    
    }

    else if (num < 0)
    {
        if(num % 2 == 0)
        {
            alert("Число четное и отрицательное")
            break;
        }
        
        else
        {
            alert("Число нечетное и отрицательное")    
            break;
        }
    }

    else
    {
        alert("Это не подходит для проверки! Введите число не равное нулю!")
        continue;
    }
}
