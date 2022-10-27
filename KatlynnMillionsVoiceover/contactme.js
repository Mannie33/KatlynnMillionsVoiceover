function submitHandler() {
    var wordCount = $(".word-count").val(); 
    var splitFiles = $(".split-files").val(); 
    var days = $(".days").val(); 
    var monOnline = $(".mon-online").prop("checked"); 
    var terrestrial = $(".terrestrial").prop("checked"); 
    var proofRead = $(".proof-read").prop("checked"); 
    var avSync = $(".av-sync").prop("checked"); 

    // console.log(wordCount); 
    // console.log(splitFiles); 
    // console.log(days); 
    // console.log(monOnline); 
    // console.log(terrestrial); 
    // console.log(proofRead); 
    // console.log(avSync); 

    var wordCountRate = wordCountRateHandler(wordCount); 
    
    var splitFileRate; 
    if (splitFiles > 0) {
        splitFileRate = splitFileHandler(splitFiles); 
    } else {
        splitFileRate = 0; 
    }
    
    var daysRateModifier = daysHandler(days);
    var monOnlineCharge;
    var terrestrialCharge;
    var proofReadCharge;
    var avSyncCharge;

    if (monOnline) {
        monOnlineCharge = monOnlineHandler(monOnline);
    } else {
        monOnlineCharge = 0; 
    }

    if (terrestrial) {
        terrestrialCharge = terrestrialHandler(terrestrial);
    } else {
        terrestrialCharge = 0; 
    }

    if(proofRead) {
        proofReadCharge = proofReadHandler(proofRead,wordCount);
    } else {
        proofReadCharge = 0; 
    }

    if (avSync) {
        avSyncCharge = avSyncHandler(avSync);
    } else {
        avSyncCharge = 0; 
    }

    console.log(wordCountRate); 
    console.log(daysRateModifier); 
    console.log(splitFileRate); 
    console.log(monOnlineCharge); 
    console.log(terrestrialCharge); 
    console.log(proofReadCharge); 
    console.log(avSyncCharge); 
    
    var quoteAmount = parseFloat((wordCountRate * daysRateModifier) + splitFileRate + monOnlineCharge + terrestrialCharge + proofReadCharge + avSyncCharge).toFixed(2); 

    $(".quote-information").html("Quote Amount: " + quoteAmount); 
}

function wordCountRateHandler(wordCount) {
    let numOfHundredWords = Math.ceil(wordCount / 100); 
    let wordCountRate = numOfHundredWords * 10.00; 
    // console.log(wordCountRate);
    return wordCountRate; 
}

function splitFileHandler(splitFiles) {
    let numOfFiveFiles = Math.ceil(splitFiles / 5);
    let splitFilesRate = numOfFiveFiles * 5.00; 
    // console.log(splitFilesRate);
    return splitFilesRate; 
}

// Just times the word count rate by this modifier, not the entire amount
function daysHandler(days) {
    switch (days) {
        case "24hours":
            return 1.3; 
            break;
        case "48hours":
            return 1.2;
            break;
        case "5days":
            return 1.1;
            break; 
        case "5ormore":
            return 1.0; 
            break;
        default:
            return 1.0; 
    }
}

function monOnlineHandler(monOnline) {
    if (monOnline) {
        return 20.00; 
    } 
}

function terrestrialHandler(terrestrial) {
    if (terrestrial) {
        return 40.00; 
    } 
}

function proofReadHandler(proofRead, wordCount) {
    if(proofRead) {
        let numOfTwoHundredWords = Math.ceil(wordCount / 200); 
        let proofReadRate = numOfTwoHundredWords * 5.00; 
        // console.log(proofReadRate);
        return proofReadRate; 
    }
}

function avSyncHandler() {
    return 0;
}