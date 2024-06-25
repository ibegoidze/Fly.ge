class ObjectGenerator {
  constructor(from, to, departure, returnDate) {
    this.from = from;
    this.to = to;
    this.departure = departure;
    this.returnDate = returnDate;
  }

  generateId(index) {
    return index + 1;
  }

  generateFromCityId() {
    return this.from.substring(0, 3).toUpperCase();
  }

  generateToCityId() {
    return this.to.substring(0, 3).toUpperCase();
  }

  generateWay() {
    return Math.random() > 0.5 ? "Bilateral" : "Unilateral";
  }

  generateClass() {
    const classes = [
      "Economy class",
      "First class",
      "Business class",
      "Premium class",
    ];
    const weights = [0.7, 0.1, 0.1, 0.1];
    const rand = Math.random();
    let sum = 0;

    for (let i = 0; i < classes.length; i++) {
      sum += weights[i];
      if (rand <= sum) return classes[i];
    }
  }

  generateTime(start = "00:00", end = "23:59") {
    const getMinutes = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + Math.floor(minutes / 10) * 10;
    };

    const randomMinutes = (startMinutes, endMinutes) => {
      const diff = endMinutes - startMinutes;
      const randomDiff = Math.floor(Math.random() * diff);
      return startMinutes + Math.floor(randomDiff / 10) * 10;
    };

    const formatTime = (minutes) => {
      const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
      const mins = String(minutes % 60).padStart(2, "0");
      return `${hours}:${mins}`;
    };

    const startMinutes = getMinutes(start);
    const endMinutes = getMinutes(end);
    const randomStartMinutes = randomMinutes(startMinutes, endMinutes - 60);
    const randomEndMinutes = randomMinutes(randomStartMinutes + 10, endMinutes);

    return [formatTime(randomStartMinutes), formatTime(randomEndMinutes)];
  }

  generateTransfer() {
    const transfers = ["1", "2", "3", "4", "none"];
    const randIndex = Math.floor(Math.random() * transfers.length);
    return transfers[randIndex];
  }

  generateTransferWay(transfer) {
    if (transfer === "none") return null;
    if (transfer === "3" || transfer === "4") return "both";
    if (transfer === "1")
      return ["departure", "return"][Math.floor(Math.random() * 2)];
    return ["departure", "return", "both"][Math.floor(Math.random() * 3)];
  }

  generateCityNames() {
    const cities = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
    ];
    const city = cities[Math.floor(Math.random() * cities.length)];
    return { short: city.substring(0, 3).toUpperCase(), full: city };
  }

  generatePrice() {
    return (Math.floor(Math.random() * 100) * 10).toFixed(2);
  }
  generateSequentialTime(start, minInterval = 60) {
    const getMinutes = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + Math.floor(minutes / 10) * 10;
    };

    const formatTime = (minutes) => {
      const hours = String(Math.floor(minutes / 60)).padStart(2, "0");
      const mins = String(minutes % 60).padStart(2, "0");
      return `${hours}:${mins}`;
    };

    const startMinutes = getMinutes(start) + minInterval;
    const endMinutes = getMinutes("23:59");

    const randomMinutes = (startMinutes, endMinutes) => {
      const diff = endMinutes - startMinutes;
      const randomDiff = Math.floor(Math.random() * diff);
      return startMinutes + Math.floor(randomDiff / 10) * 10;
    };

    const nextMinutes = randomMinutes(startMinutes, endMinutes);
    return formatTime(nextMinutes);
  }

  generateObjects() {
    const objects = [];

    for (let i = 0; i < 50; i++) {
      const [depStartTime, depEndTime] = this.generateTime();
      const [retStartTime, retEndTime] = this.generateTime();
      const transfer = this.generateTransfer();
      const transferWay = this.generateTransferWay(transfer);
      const transfers = {};

      if (transfer !== "none") {
        if (transfer === "1") {
          if (transferWay === "departure") {
            const depFirstTransferStart = this.generateSequentialTime(
              depStartTime,
              60
            );
            const depFirstTransferEnd = this.generateSequentialTime(
              depFirstTransferStart,
              60
            );
            transfers.depFirstTransferStart = depFirstTransferStart;
            transfers.depFirstTransferEnd = depFirstTransferEnd;
          } else {
            const retFirstTransferStart = this.generateSequentialTime(
              retStartTime,
              60
            );
            const retFirstTransferEnd = this.generateSequentialTime(
              retFirstTransferStart,
              60
            );
            transfers.retFirstTransferStart = retFirstTransferStart;
            transfers.retFirstTransferEnd = retFirstTransferEnd;
          }
        } else if (transfer === "2") {
          if (transferWay === "departure") {
            const depFirstTransferStart = this.generateSequentialTime(
              depStartTime,
              60
            );
            const depFirstTransferEnd = this.generateSequentialTime(
              depFirstTransferStart,
              60
            );
            const depSecondTransferStart = this.generateSequentialTime(
              depFirstTransferEnd,
              60
            );
            const depSecondTransferEnd = this.generateSequentialTime(
              depSecondTransferStart,
              60
            );
            transfers.depFirstTransferStart = depFirstTransferStart;
            transfers.depFirstTransferEnd = depFirstTransferEnd;
            transfers.depSecondTransferStart = depSecondTransferStart;
            transfers.depSecondTransferEnd = depSecondTransferEnd;
          } else if (transferWay === "return") {
            const retFirstTransferStart = this.generateSequentialTime(
              retStartTime,
              60
            );
            const retFirstTransferEnd = this.generateSequentialTime(
              retFirstTransferStart,
              60
            );
            const retSecondTransferStart = this.generateSequentialTime(
              retFirstTransferEnd,
              60
            );
            const retSecondTransferEnd = this.generateSequentialTime(
              retSecondTransferStart,
              60
            );
            transfers.retFirstTransferStart = retFirstTransferStart;
            transfers.retFirstTransferEnd = retFirstTransferEnd;
            transfers.retSecondTransferStart = retSecondTransferStart;
            transfers.retSecondTransferEnd = retSecondTransferEnd;
          } else {
            const depFirstTransferStart = this.generateSequentialTime(
              depStartTime,
              60
            );
            const depFirstTransferEnd = this.generateSequentialTime(
              depFirstTransferStart,
              60
            );
            const retFirstTransferStart = this.generateSequentialTime(
              retStartTime,
              60
            );
            const retFirstTransferEnd = this.generateSequentialTime(
              retFirstTransferStart,
              60
            );
            transfers.depFirstTransferStart = depFirstTransferStart;
            transfers.depFirstTransferEnd = depFirstTransferEnd;
            transfers.retFirstTransferStart = retFirstTransferStart;
            transfers.retFirstTransferEnd = retFirstTransferEnd;
          }
        } else if (transfer === "3" || transfer === "4") {
          const depFirstTransferStart = this.generateSequentialTime(
            depStartTime,
            60
          );
          const depFirstTransferEnd = this.generateSequentialTime(
            depFirstTransferStart,
            60
          );
          const depSecondTransferStart = this.generateSequentialTime(
            depFirstTransferEnd,
            60
          );
          const depSecondTransferEnd = this.generateSequentialTime(
            depSecondTransferStart,
            60
          );
          const retFirstTransferStart = this.generateSequentialTime(
            retStartTime,
            60
          );
          const retFirstTransferEnd = this.generateSequentialTime(
            retFirstTransferStart,
            60
          );
          const retSecondTransferStart = this.generateSequentialTime(
            retFirstTransferEnd,
            60
          );
          const retSecondTransferEnd = this.generateSequentialTime(
            retSecondTransferStart,
            60
          );
          transfers.depFirstTransferStart = depFirstTransferStart;
          transfers.depFirstTransferEnd = depFirstTransferEnd;
          transfers.depSecondTransferStart = depSecondTransferStart;
          transfers.depSecondTransferEnd = depSecondTransferEnd;
          transfers.retFirstTransferStart = retFirstTransferStart;
          transfers.retFirstTransferEnd = retFirstTransferEnd;
          transfers.retSecondTransferStart = retSecondTransferStart;
          transfers.retSecondTransferEnd = retSecondTransferEnd;
        }
      }

      const depTransferCity = transfers.depFirstTransferStart
        ? [this.generateCityNames()]
        : [];
      if (transfers.depSecondTransferStart)
        depTransferCity.push(this.generateCityNames());

      const retTransferCity = transfers.retFirstTransferStart
        ? [this.generateCityNames()]
        : [];
      if (transfers.retSecondTransferStart)
        retTransferCity.push(this.generateCityNames());

      const generatedObject = {
        id: this.generateId(i),
        from: this.from,
        fromCityId: this.generateFromCityId(),
        to: this.to,
        toCityId: this.generateToCityId(),
        departure: this.departure,
        return: this.returnDate,
        way: this.generateWay(),
        class: this.generateClass(),
        depStartTime: depStartTime,
        depEndTime: depEndTime,
        retStartTime: retStartTime,
        retEndTime: retEndTime,
        transfer: transfer,
        price: this.generatePrice(),
        airlines: {
          departure: "Pegasus",
          return: "Turkish Airlines",
        },
      };

      if (transfers.depFirstTransferStart) {
        generatedObject.depFirstTransferStart = transfers.depFirstTransferStart;
        generatedObject.depFirstTransferEnd = transfers.depFirstTransferEnd;
      }

      if (transfers.depSecondTransferStart) {
        generatedObject.depSecondTransferStart =
          transfers.depSecondTransferStart;
        generatedObject.depSecondTransferEnd = transfers.depSecondTransferEnd;
      }

      if (transfers.retFirstTransferStart) {
        generatedObject.retFirstTransferStart = transfers.retFirstTransferStart;
        generatedObject.retFirstTransferEnd = transfers.retFirstTransferEnd;
      }

      if (transfers.retSecondTransferStart) {
        generatedObject.retSecondTransferStart =
          transfers.retSecondTransferStart;
        generatedObject.retSecondTransferEnd = transfers.retSecondTransferEnd;
      }

      if (transfers.depFirstTransferStart || transfers.depSecondTransferStart) {
        generatedObject.depTransferCity = depTransferCity.map(
          (city) => city.short
        );
        generatedObject.depTransferCityNames = depTransferCity.map(
          (city) => city.full
        );
      }

      if (transfers.retFirstTransferStart || transfers.retSecondTransferStart) {
        generatedObject.retTransferCity = retTransferCity.map(
          (city) => city.short
        );
        generatedObject.retTransferCityNames = retTransferCity.map(
          (city) => city.full
        );
      }

      if (transferWay) generatedObject.transferWay = transferWay;

      objects.push(generatedObject);
    }

    return objects;
  }
}

export default ObjectGenerator;
