let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
    constructor(name,startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    yearsExperienceFromBeginningOf(year) {
        // return int
        return year - this.startDate.getFullYear();
    }
}

class Route {
    constructor(beginningLocation,endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }
    blocksTravelled() {
        // return int
        return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal) ) + Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    }
    estimatedTime(peak = false) {
        if (peak) {
            return this.blocksTravelled() / 2
        }
        else {
            return this.blocksTravelled() / 3
        }
    }
}