export function getMergeSortAnimations(array){ 
    let animations = [];
    if(array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSort(array,0,array.length - 1,animations,auxArray);
    return animations;
}

function mergeSort(array,start,end,animations,auxArray){
    if(start === end) return;
    let middle = Math.floor((end + start)/2);
    mergeSort(auxArray,start,middle,animations,array);
    mergeSort(auxArray,middle + 1,end,animations,array)
    merge(array,start,middle,end,auxArray,animations);
}

function merge(array,start,middle,end,auxArray,animations){
    let k = start;
    let i = start;
    let j = middle + 1;

    while(i <= middle && j <= end){

        animations.push([i,j]);
        animations.push([i,j]);

        if(auxArray[i] > auxArray[j]){
            animations.push([k,auxArray[j]])
            array[k++] = auxArray[j++];
        }
        else{
            animations.push([k,auxArray[i]])
            array[k++] = auxArray[i++];
        }
    }

    while(i <= middle){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxArray[i]]);
        array[k++] = auxArray[i++];
    }
    while(j <= end){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxArray[j]]);
        array[k++] = auxArray[j++];
    }
}

