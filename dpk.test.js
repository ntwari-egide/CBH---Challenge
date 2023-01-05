const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return the partitionKey property of the event if it exists", () => {
    const event = { partitionKey: "123" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("123");
  });

  it("should return a hash of the event if it does not have a partitionKey property", () => {
    const event = { foo: "bar" };
    const data = JSON.stringify(event);
    const expectedHash = crypto.createHash("sha3-512").update(data).digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedHash);
  });

  it("should return a hash of a non-string candidate if the candidate is longer than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: { foo: "a".repeat(257) } };
    const candidate = JSON.stringify(event.partitionKey);
    const expectedHash = crypto.createHash("sha3-512").update(candidate).digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedHash);
  });

  it("should return TRIVIAL_PARTITION_KEY if the event is falsy", () => {
    const result = deterministicPartitionKey(null);
    expect(result).toBe("0");
  });
});