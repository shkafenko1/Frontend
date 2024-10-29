"use strict"

function createNode(type, maxSpeed)
{
    return{
        type,
        maxSpeed,
        next:null,
    }
}

function enqueue(vehicle, type, maxSpeed)
{
    if (vehicle === null)
    {
        return createNode(type, maxSpeed);
    }
    else{
        vehicle.next = enqueue(vehicle.next, type, maxSpeed)
    }
    return vehicle;
}

function pop(vehicle)
{
    if(isEmpty(vehicle))
    {
        console.log("empty:(");
        return vehicle;
    }
    return vehicle.next;
}

function isEmpty(vehicle)
{
    return vehicle === null;
}

function size(vehicle, count)
{
    if (vehicle.next != null)
    {
        count++;
        size(vehicle.next, count);
    }
    else
    {
        console.log(`size ${count + 1}`);
    }
}

function front(vehicle)
{
    if(!isEmpty(vehicle))
    {
        console.log(vehicle.type, " ", vehicle.maxSpeed);
    }
    else
    {
        console.log("empty:(");
    }
}

function output(vehicle)
{
    if (vehicle != null)
    {
        console.log(vehicle.type, " ", vehicle.maxSpeed);
        output(vehicle.next);
    }
}

let vehicle = null;

vehicle = enqueue(vehicle, "Samosval", 100);
vehicle = enqueue(vehicle, "Gazon", 120);
vehicle = enqueue(vehicle, "Tramway", 70);

output(vehicle);

vehicle = pop(vehicle);

output(vehicle);

vehicle = enqueue(vehicle, "Zhiguli", 2000);

output(vehicle);

size(vehicle, 0);

front(vehicle);