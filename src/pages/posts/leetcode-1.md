---
layout: ../../layouts/BlogPostLayout.astro
title: "two sum"
date: "2026-02-10"
tags: ["leetcode"]
---

The one and only.

```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        num_map = {}
        n = len(nums)

        for i in range(n):
            complement = target - nums[i]
            if complement in num_map:
                return [num_map[complement], i]
            num_map[nums[i]] = i

        return []
```