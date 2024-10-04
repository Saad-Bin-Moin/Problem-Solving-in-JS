// Javascript program to implement insert
    // operation in an unsorted array.
    
    // Function to insert a given
    // key in the array. This
    // function  returns n + 1
    // if insertion is successful,
    // else n.
    function insertSorted(arr, n, key, capacity)
    {
         
        // Cannot insert more elements
        // if n is already more than
        // or equal to capacity
        if (n >= capacity)
            return n;
     
        arr[n] = key;
        return (n + 1);
    }
    
    let arr = new Array(20);
    arr[0] = 12;
    arr[1] = 16;
    arr[2] = 20;
    arr[3] = 40;
    arr[4] = 50;
    arr[5] = 70;
    let capacity = 6;
    let n = 6; // array length
    let i, key = 26;  // insert_item

    console.log("Before Insertion: ");
    for (i = 0; i < n; i++)
      console.log(arr[i]+" ");
    console.log("</br>");

    // Inserting key
    n = insertSorted(arr, n, key, capacity);

    console.log("After Insertion: ");
    for (i = 0; i < n; i++)
      console.log(arr[i]+" ");