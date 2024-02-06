const n = 10;
const array = [];

init();

function init()
{
    for(let i = 0 ; i < 10 ; i++)
    {
    array[i] = Math.random();
    }
    showBars();
}

function BubbleSort(array)
{
    const swaps = [];

do{
    var swapped = false;

    for(let i = 0 ; i < array.length ; i++)
    {
        if(array[i-1] > array[i])
        {
            swapped = true;
            swaps.push([i-1,i]);
            [array[i],array[i-1]] = [array[i-1],array[i]];
            }
    }
}while(swapped)
return swaps;
}

function play()
{   
    const copy = [...array];
    const swaps = BubbleSort(copy);
    animate(swaps);
}

function animate(swaps)
{
    if(swaps.length==0)
    {
        return;
    }

    const [i,j] = swaps.shift();
    [array[i],array[j]] = [array[j],array[i]];
    showBars([i,j]);
    setTimeout(function(){animate(swaps);},20);
}

function showBars(indices)
{
container.innerHTML = ""; //clears the present values so that the next ones can appear. otherwise they keep appearing next to each other.
for(let i = 0 ; i < array.length ; i++)
{
    const bar = document.createElement("div");
    bar.style.height = array[i]*100+"%";
    bar.style.width = "30px";
    bar.style.backgroundColor = "yellow";
    bar.classList.add("bar");
    

    if(indices && indices.includes(i))
    {
        bar.style.backgroundColor = "red";
    }

    container.appendChild(bar);
}
}
