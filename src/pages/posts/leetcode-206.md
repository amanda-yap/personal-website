---
layout: ../../layouts/BlogPostLayout.astro
title: "reverse linked list"
date: "2026-02-11"
tags: ["leetcode"]
---

## the [problem](https://leetcode.com/problems/reverse-linked-list/description/)
You are given the head of a singly linked list. Reverse the list and return it.

## the solution

There are three pointers we need to consider: pointers to the previous, current, and next nodes. We need to reassign these pointers to reverse the list.

We want to iterate through the linked list and:
1. Store the next node
2. Make the current node point to the previous one (current.next = previous)
3. Move the previous pointer to the current node
4. Move to the next node in the original list


```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        previous = None
        current = head

        while current:
            temp = current.next
            current.next = previous
            previous = current
            current = temp

        return previous
```

It feels much harder to explain this solution than actually implementing it. I find that drawing things out are more useful for problems like these.