---
layout: /src/layouts/PostLayout.astro
title: "three-body orbits visualiser"
date: 2026-04-07
tags: []
---

[Live deployment](https://threebodysim.vercel.app)

[Github repo](https://github.com/amanda-yap/three-body-problem)


![Butterfly III](/images/butterfly3.gif)

After learning about the three-body problem in one of the computer science courses at university, I wanted to try simulate some of the known periodic three-body orbits.

I calculated the trajectories of the three bodies using RK4 (Fourth-order Runge-Kutta) and calculated the force between bodies using Newton's universal law of gravitation. I used the initial conditions for some of the periodic orbits discovered by physicists Milovan Šuvakov and Veljko Dmitrašinović.

The visualiser was made with vanilla HTML, CSS, and Javascript, making use of the HTML Canvas API for the animations. It includes a selection of various orbits, with controls to adjust speed and trail length.