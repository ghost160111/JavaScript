# Promise Chaining

> __Summary__: in this doc page, you'll learn about the JavaScript promise chaining pattern that chains the promises to execute asynchronous operations in sequence.

## Introduction to the JavaScript promise chaining

Sometimes, you want to execute two or more related asynchronous operations, where the next operation starts with the result from the previous step. For example;

First, create a new promise that resolves to the number 10 after 3 seconds:


