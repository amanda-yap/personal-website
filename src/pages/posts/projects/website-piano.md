---
layout: /src/layouts/PostLayout.astro
title: "the piano on my home page"
date: "2026-02-12"
---

For my home page, I wanted something that combined my interests, so I coded a piano. Here is the process of making it :)

## making the svg
Thankfully, a piano is not too hard to draw - it is just a bunch of rectangles! I tried to make the piano match the style of my website: minimalist, green, and sort of round.

Here's my initial svg code for the white keys of the piano:

```xml
<g fill="#F3F3ED">
    <rect x="40"  y="80" width="38" height="80" data-note="C4" class="white-key cursor-pointer"/>
    <rect x="80"  y="80" width="38" height="80" data-note="D4" class="white-key cursor-pointer"/>
    <rect x="120" y="80" width="38" height="80" data-note="E4" class="white-key cursor-pointer"/>
    <rect x="160" y="80" width="38" height="80" data-note="F4" class="white-key cursor-pointer"/>
    <rect x="200" y="80" width="38" height="80" data-note="G4" class="white-key cursor-pointer"/>
    <rect x="240" y="80" width="38" height="80" data-note="A4" class="white-key cursor-pointer"/>
    <rect x="280" y="80" width="38" height="80" data-note="B4" class="white-key cursor-pointer"/>
</g>
```

That's a lot of rectangles! And a lot of repetition. To make this a bit cleaner, I used some variables and a little bit of math.

```astro
---
// layout config
const layout = {
    startX: 40,
    whiteWidth: 38,
    whiteHeight: 80,
    whiteY: 80,
    gap: 2,
};

// notes
const whiteNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];
---
<g fill="#F3F3ED">
    {whiteNotes.map((note, i) => (
        <rect
            x={layout.startX + i * (layout.whiteWidth + layout.gap)}
            y={layout.whiteY}
            width={layout.whiteWidth}
            height={layout.whiteHeight}
            data-note={note}
            class="white-key cursor-pointer"
        />
    ))}
</g>
```

This was similarly done for the black keys. I stored their x values into an array instead of calculating them since the black keys are not evenly spaced; I found this sufficient since my piano is small.


## making the sound

When a key is clicked, the corresponding note should be played. Here's how this was done for my piano!


First, we make an instance of an audio context so that we can get access to the Web Audio API's features.

```js
const audioContext = new AudioContext();
```

We then make the function that will play the note. This function will be called when a key is clicked; we will pass in the frequency and duration of the note as arguments.

```js
function playTone(frequency, duration = 1) {}
```

Within this function, we can create an oscillator node to make the sound wave, and a gain node to control the volume. We then connect them so that the oscillator sends the sound to the gain node, which then sends it to the output.

```js
const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);
```

We can then set the type of sound wave we want and its frequency. A sine wave represents a pure tone, which is suitable for a soft piano sound.

```js
oscillator.type = 'sine';
oscillator.frequency.value = frequency;
```

Using the gain node, we can control the volume of the tone to make it sound more like a piano. I set the volume at 30% and decreased the volume over the duration of the tone (set to 1 second) by using an exponential ramp - an exponential decrease in volume sounds more natural to the human ears than a linear one.

Now, instead of a continuous tone, the note will be played and fade away, which is more akin to the sound of a piano!
        
```js
gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
```

Finally, we start and stop the oscillator based on the duration of the note.
```js
oscillator.start();
oscillator.stop(audioContext.currentTime + duration);
```