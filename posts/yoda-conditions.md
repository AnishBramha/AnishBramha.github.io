### Aww, shucks!

Okay, so we've all been there once: confronting an angry compiler yelling at you, or a silent compiler letting you shoot yourself in the foot while printing random emojis to the terminal.

```c
... if (x = 5) { ...
```

Ahh! The classic `'='` versus `'=='` error! Because C evaluates the R-value and then assigns it to the L-value, returning the assigned value as an expression, the boolean condition receives a valid argument and doesn't complain much.


### There's a workaround?

Unless you're actively working in C and want to write concise code, this is almost always certainly a mistake. Its workaround has a quite an interesting name... *Yoda Conditions*.

It is implemented exactly as it sounds: reverse the order of the operands in the equality so you almost assign to a literal/R-value, which will always throw an error.

Like so:

```c
if (5 = x) // yuck
...
if (strlen(str) = x) // yikes
```

It also helps in readibility:

```c
// 0 < x <= n
if ((0 < x) && (x <= n)) { ...
```


### Look it up

Over [here](https://en.wikipedia.org/wiki/Yoda_conditions)


<div style="text-align: center;">

<img src="/posts/assets/yoda.png" alt="Yoda" width="15%">

*The assignment, mistake it you will for an equality*

</div>






