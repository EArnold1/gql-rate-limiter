// RATE LIMITER USING TOKEN BUCKET

export class TokenBucket {
  tokens: number;
  capacity: number;

  // timer : time for each request
  // capacity: number of requests that can be made within timer
  constructor(capacity: number, refillRate: number, timer = 1000) {
    this.tokens = capacity;
    this.capacity = capacity;
    setInterval(() => this.add(refillRate), timer);
  }

  private add(refillRate: number) {
    const refilledTokensCount = this.tokens + refillRate;

    this.tokens =
      refilledTokensCount > this.capacity ? this.capacity : refilledTokensCount;
  }

  rateLimiter() {
    if (this.tokens > 0) {
      this.tokens--;

      return;
    }

    throw new Error('You have made too many requests');
  }
}
