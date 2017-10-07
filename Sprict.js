function makeSequence() {
    var x = 20; // so it wraps to 0 first time
    return function() {
        if (x == 20) { x = 0 }
        else { x += 4 }
        wait()
        return x;
    }
}
