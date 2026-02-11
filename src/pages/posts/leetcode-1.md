---
layout: ../../layouts/BlogPostLayout.astro
title: "two sum"
date: "2026-02-10"
tags: ["leetcode"]
---

Welcome to my first leetcode post. I'd like to practise communicating my thought process more clearly when solving problems. Plus, I am curious as to how these puzzles are solved :)


## the [problem](https://leetcode.com/problems/two-sum/description/)
You are given an array of integers and a target integer. Return the indices of two integers that add up to the target. You can assume that each input only has one solution. You cannot use the same element twice. You can return the indices in any order.

## brute force solution

We want to go through each pair of integers in the array until we find a pair whose sum adds up to the target - if we find this pair, we then return the indices of the pair's integers.

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []
```

This solution has a time complexity of O(n^2) as we have to iterate through each integer in the array and iterate again to get all its possible pairs. It has a constant space complexity since we use a fixed amount of memory.


## optimised solution

First, we make a hash map to store integers and their corresponding indices in the given array. We then iterate through the array to calculate the complement of each integer - what integer can we add to the current integer to make the sum equal the target?

If this complement is in our hash map, we can return the index of the current integer and the index of the complement (stored in the hash map). Otherwise, we can put the current integer and its index into the hashmap so that it can be accessed later on as a potential complement to another integer in the array.

This solution has a time complexity of O(n) since we only do one iteration, with a space complexity of O(n) for the hash map. 

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}
        n = len(nums)

        for i in range(n):
            complement = target - nums[i]
            if complement in nums_map:
                return [nums_map[complement], i]
            nums_map[nums[i]] = i

        return []
```

I did not come up with this optimal solution. I think the optimised solutions for leetcode problems are often quite unintuitive. They are definitely creative though and I'm hoping to idenitify more patterns when solving more problems.