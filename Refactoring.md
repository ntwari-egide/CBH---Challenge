# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### "should return the partitionKey property of the event if it exists"
- This test verifies that the deterministicPartitionKey function returns the partitionKey property of the event object when it exists. This is important because the function is designed to prioritize the use of the partitionKey property when it is present, and this test ensures that the function is correctly using the partitionKey property in this scenario.

### "should return a hash of the event if it does not have a partitionKey property"
- This test verifies that the deterministicPartitionKey function generates a hash of the event object when the event does not have a partitionKey property. This is important because the function is designed to generate a hash of the event in this scenario, and this test ensures that the function is correctly generating the hash.

### "should return a hash of a non-string candidate if the candidate is longer than MAX_PARTITION_KEY_LENGTH"
- This test creates an event object with a partitionKey property that is an object with a string property that is longer than MAX_PARTITION_KEY_LENGTH. It then stringifies the partitionKey object and generates a hash of the resulting string using the SHA3-512 algorithm. It then calls the deterministicPartitionKey function with the event object and expects the function to return the hash that was generated.

### "should return TRIVIAL_PARTITION_KEY if the event is falsy"
- This test verifies that the deterministicPartitionKey function returns the TRIVIAL_PARTITION_KEY constant when the event argument is falsy. This is important because the function is designed to handle a falsy event argument and return a default value in this scenario, and this test ensures that the function is correctly returning the default value.