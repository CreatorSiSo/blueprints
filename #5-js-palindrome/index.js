function checkPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    const middle = Math.floor(str.length / 2);
    if (str.length % 2 == 0) {
        str = str.substring(0, middle) + "_" + str.substring(middle);
    }

    console.log(str, middle);

    for (let i = 1; i < middle; i++) {
        console.log(str[middle - i], str[middle + i]);

        if (str[middle - i] != str[middle + i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("A man, a plan, a canal. Panama"), checkPalindrome("almostomla"));

function checkFastPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const length = str.length;

    console.log(str, length)

    for (let i = 0; i < length / 2; i++) {
        console.log(str[i], str[length - 1 - i]);

        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkFastPalindrome("almostomla"));

var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    return `${count} ${count > 0 ? "Bet" : "Hold"}`;
    // Only change code above this line
}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));

let recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    } else if (prop == "tracks") {
        if (records[id].hasOwnProperty(prop)) {
            records[id][prop].push(value);
        } else {
            records[id][prop] = [value];
        }
    } else {
        records[id][prop] = value;
    }
    return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([8, 9, 9], 3));