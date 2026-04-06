/*
Вывести корни квадратного уравнения по введенным пользователем коэффициентам.
*/

function valider(name)
{
    while(true)
    {

    let temp = prompt("Введите корень " + name);

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
    a = valider("a");
    if(a === null) break;

    if(a === 0) 
        {
            alert("Коэффициент a равен нулю. Это уже линейное уравнение.");
            continue;
        }

    b = valider("b");
    if(b === null) break;
    
    c = valider("c");
    if(c === null) break;
    
    let x, x1, x2;

    let D = b * b - 4 * a * c;

    if (D < 0)
    {
        alert("Нет действительных корней");
        break;
    }
    
    else if (D === 0)
    {
        x = -b / (2 * a);
        alert("Один корень, равный: " + x)
        break;
    }
    else 
    {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        alert("Корень x1 === " + x1 + "\nКорень x2 === " + x2);
        break;
    }
 }
