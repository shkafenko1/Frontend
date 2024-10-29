function push(footballers, name,  goals)
{
    return{
        name, 
        goals,
        next:footballers,
    }
}

function pop(footballers)
{
    if(!isEmpty(footballers.next))
    {
    return footballers.next;
    }
}

function isEmpty(footballers)
{
    return footballers === null || footballers === undefined;
}

function top(footballers)
{
    if(!isEmpty(footballers))
    {
    output({name:footballers.name, goals:footballers.goals, next:null});
    }
}

function output(footballers)
{
    if(!isEmpty(footballers))
    {
        console.log(footballers.name, " ", footballers.goals);
        output(footballers.next);
    }
}

let footballers = null;

footballers = push(footballers, "Messi", 15);
footballers = push(footballers, "Alexei", 2000);
footballers = push(footballers, "Ronaldo", 2);

output(footballers);

footballers = pop(footballers);

output(footballers);

footballers = pop(footballers);
footballers = pop(footballers);

footballers = push(footballers, "Serega", 75000);

top(footballers);