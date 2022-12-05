//Allows canGiveBlood to be executed for its results//
function canGiveBlood(a,b)

//Setting the strings//
    const APlus = ["A+", "AB+"]
    const AMinus = ["A-", "AB-","AB+","A+"]
    const BPlus = ["B+", "AB+"]
    const BMinus = ["B-", "AB-","AB+","B+"]
    const ABPlus = ["AB+"]
    const ABMinus = ["AB-", "AB-"]
    const OPlus = ["O+","A+","B+","AB+"]
    const OMinus = ["A+", "A-", "O+", "O-", "B+", "B-", "AB+", "AB-"]

//Setting the rules "if"//
    if (a == "A+" && APlus.includes(b)){
        return true;
    }
    if (a == "A-" && AMinus.includes(b)){
        return true;
    }
    if (a == "B+" && BPlus.includes(b)){
        return true;
    }
    if (a == "B-" && BMinus.includes(b)){
        return true;
    }
    if (a == "AB+" && ABPlus.includes(b)){
        return true;
    }
    if (a == "AB-" && ABMinus.includes(b)){
        return true;
    }
    if (a == "O+" && OPlus.includes(b)){
        return true;
    }
    if (a == "O-" && OMinus.includes(b)){
        return true;
    }

    else{
        return false;
    }

    //Computes the result//
    console.log (canGiveBlood("O+", "A+"));
    console.log (canGiveBlood("A-", "B-"));
    console.log (canGiveBlood("A-", "AB+"));