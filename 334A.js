function main(input) {
    input = input.split(" ").map(Number);
    if(input[0]>input[1]){
        console.log("Bat")
    }
    else{
        console.log("Glove")
    }
}
main("100 200")