export class Molkky {
  constructor() {
    this.score = 0;
  }

  getScore() {
    return this.score;
  }

  nextScore(initialScore, lancer) {
    if (this.countQuilles(lancer) === 0) {
      return initialScore;
    } else if (this.countQuilles(lancer) > 1) {
      return this.sumScore(initialScore, this.countQuilles(lancer));
    }
    return this.sumScore(initialScore, parseInt(lancer));
  }

  countQuilles(lancer) {
    if (lancer.includes("x")) {
      return 0;
    }
    return lancer.split("-").length;
  }

  sumScore(initialScore, lancerScore) {
    const sum = initialScore + lancerScore;
    if (sum > 50) {
      return 25;
    }
    return initialScore + lancerScore;
  }

  gameScore(...lancers) {
    if (this.isLose(...lancers)) {
      return "LOSE";
    }
    lancers.forEach(lancer => {
      this.score = this.nextScore(this.getScore(), lancer);
    });
    if (this.score === 50) {
      return "WIN";
    }
    return this.score;
  }

  isLose(...lancers) {
    for (let i = 0; i <= lancers.length - 3; i++) {
      if (this.next3ThrowsLose(lancers, i)) {
        return true;
      }
    }
    return false;
  }

  next3ThrowsLose(lancers, index) {
    if (index > lancers.length - 3) {
      return false;
    }
    return this.countQuilles(lancers[index]) === 0 &&
        this.countQuilles(lancers[index+1]) === 0 &&
        this.countQuilles(lancers[index+2]) === 0;
  }

}
