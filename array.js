// Problem Solving From GFG - 'Search Operation'
// https://www.geeksforgeeks.org/search-insert-and-delete-in-an-unsorted-array/

function findElement(arr, arrayLength, item) {

    let i;
    for (i=0; i < arrayLength; i++)
    {
        if(arr[i] == item) 
            return i;   
    }
    return -1; 
}

    let arr = [20, 50, 5, 30, 10, 40, 70, 80, 55];
    let arrayLength = arr.length;

    let item = 70;
    let position = findElement(arr,arrayLength,item);

    if (position == -1)
        console.log("Element Not found");
    else
     console.log("Element found at position: " + (position+1)) ;
     
