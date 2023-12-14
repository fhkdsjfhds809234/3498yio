function openTabTest() {
    const userinput = window.prompt("open a new tab? (yes or no)");
    if (userinput === "yes") {
        const url = "https://google.com";
        var newtab = window.open(url,'_blank');
        window.open(newtab);
    } else if (userinput === "no") 
    window.alert("ok");
    window.close();
    console.log("window closed");
} else {
    const userinput2 = window.prompt("invalid input (yes or no): ");
    if (userinput2 === "yes") {
        window.open(newtab);
    } else if  (userinput2 === "no") {
        window.alert("ok");
        window.close();
        console.log("window closed");
    } else {
        window.alert("Error: (Invalid input)");
        window.close();
        console.log("window closed");
    };

};