## Why Lisp Might Actually Be Better Than What You Might Think


### What is Lisp?

For those who don't know, [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) (which stands for **LIS**t **P**rocessor) is a family of programming languages known for their distinct syntax, which is fully prefixed and parenthesised.

For example, in a language like C, one writes: `int x = 1 + 2;`. In Lisp (here, common lisp), it would look something like: `(setq x (+ 1 2))`.

According to Wikipedia, Lisp pioneered many concepts which we take for granted today, such as dynamic typing, garbage collection, the REPL (**R**ead-**E**val-**P**rint **L**oop), tree data structures, and many more.

<div style="text-align: center;">

<img src="/blog/assets/lisp-logo.svg" alt="The original Lisp logo" width="15%">

*It arguably has the coolest original logo of any programming language.*

</div>



### When did I first encounter Lisp?

Okay, enough history. My programming journey began, as it does for a lot of people, with C, when I was 12. As expected, I was quite naïve and could not yet appreciate the imperative paradigm of programming. Back then, programming felt like nothing more than a bunch of alien syntax which one needed to internalise in order to make the computer go beep-boop. And soon followed C++ when I was 13. Again, I didn't really appreciate the object-oriented paradigm. To me, it was like a container with 'privacy' (yeah, as in 'security', I really did think that at one point) for data for 'intruding' functions from the outside world. Little did I know the wonderful story behind it (I did Java eventually at school when I was 15, but it was the same story).

Why is all that backstory relevant? Well, I stopped programming when I had to undergo this rite of passage called JEE. I still had C and C++, but stowed away in the back of my mind. When I eventually managed to get through JEE, I was left with a gap of three months in the summer, before college began. I was fooling around, when one fine day, my elder brother told me something about a 'wizard book' and how all the cool kids at MIT do it (or at least used to). No points for guessing what book it was.


<div style="text-align: center;">

<img src="/blog/assets/sicp-cover.jpg" alt="SICP Cover Page Logo" width="25%">

*Yaarghhh! `<insert magic spell>`*

</div>


*Structure and Interpretation of Computer Programs* ([SICP](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html)) was a very strange experience for me. I was eventually gifted the book, and I did try to read it. It read like a story book, the book spoke to you, which got me interested. No terse language, and simple learn-by-example pedagogy. It was all roses and sunshine until I got past a few pages of the first chapter, where the exercises begin. I managed to get through some of them. Eventually, there was a point (and I remember encountering a special case of the Newton-Raphson method for the first time) at which the exercises required you to actially understand and internalise the text. I closed the book and let it gather dust for a months.

The programming language used in the book is called [Scheme](https://www.scheme.org/), which is a 'dialect' of Lisp. It's based on the older Lisp-1 paradigm. Funnily enough, I thought no compiler/interpreter would exist for such an old language and wrote all my code in an online REPL (yes, even tens of lines of source code). The parenthesised prefix notation seemed novel, yet unimportant to me. Why would one go to such lengths to write such terse-looking (to me, back then) code instead of writing simple C with more straightforward ways of writing the same thing?



### Functional Programming

The first programming language course I took in college was python. Since it was not a course on python as a collection of libraries, but as a language, I encountered some new concepts. The professor was 'secretly' (or implicitly) teaching programming as a discipline in itself: various paradigms, what a type is, compiler versus interpreter, and so on. One of the things he touched upon was functional programming, which was this magical way of evaluating expressions with immutable variables, no side-effects and the whole lot. Again, it seemed like a contrived way of doing things, when the imperative paradigm seemed to offer the same power. It was not until I encountered declarative expressions using functions such as 'map', 'fold' and 'filter' that I realised that there was something actually magical about this paradigm. A little poking around and I came across Haskell in a Finnish [MOOC](https://haskell.mooc.fi/). And lo and behold! A few weeks in, and I actually realised the power of declarative programming and the flexibility it offers. Basically, what I took away from that was that it allows you to focus on solving the problem itself, rather than fighting the language first and hacking it to get to work on your terms before implementing your solution. I usually solved algorithmic problems in two stages: Come up with the solution on paper, and then translate it into code. Declarative programming (unsurprisingly, of course) looks a lot like mathematics, and hence the line between the two stages blurred (at one point, I was able to model finite state machines using Scheme, during my Digital Design course). It is not necessarily any performance benefits that you gain from this paradigm, but it is the expressiveness. Eventually, I did read the introductory book on functional programming by Philip Wadler and Richard Bird, which gave a mathematical underpinning to my functional knowledge (see what I did there? :).



### SICP & Natural Languages

I was also into natural languages for a long time by then. I was and still am mostly self-taught in this field, and I developed an interest in this field called 'Computational Linguistics'.  This was right at the start of the AI bubble. I won't go down that rabbit hole here, but basically, one thing led to another, and I discovered this field of the Theory of Programming Languages. It was enlightening to find out that there was an entire field dedicated to studying, building and working and maintaining compilers, interpreters, and the lot. I picked up this book called [Crafting Interpreters](https://www.craftinginterpreters.com), and you know the rest of the journey.

Why SICP is relevant here, you might ask. Well, after I picked up natural languages (and eventually made one) and before I picked up Crafting Interpreters, there was a summer break after my freshman year. I actually tried studying SICP this time, with a more mature mind. This time, the exercises didn't seem that hard and I was able to digest the material. I also did find a proper local interpreter set-up (phew!). I came across concepts like the metacircular evaluator that Lisp is, what a type really means, what is an 'object', type dispatching and message passing. It was liberating to finally be able to understand the origins of various paradigms on programming. The book was more of an overview of the entire (mostly) field of computer science. It looks like some academician's dream of obscure bracket mania, but under the hype (is it still there?) lie these beautiful concepts, with an extremely intuitive exposition.

It all came together when I was building my second interpreter (the first one was for MIPS Assembly, and was more of a toy project) and I could put two and two together all the concepts I had internalised from SICP. Applying those concepts was the best part. The power of Lisp is quite apparent once one starts programming in it to solve puzzles (such as those in SICP). It encourages programming techniques such as tail-call optimisation, which again has deep ties with the Assembly code jumps for the same. You forget about the language itself. The language of the problem becomes the langage of the program. And yeah, don't forget the macros.

Lisp by itself is a first-class data type in Lisp. The language is just a set of trees (and that's why the parenthesised prefix notation is so powerful). It is trivial to build a parser for Lisp, as you get readymade trees by just writing code and certain errors are completely eliminated. The entire language is made of linked lists (called `cons`). It's really that simple.


```c
int arr[] = {1, 2,3, 4, 5}; // C
```

```lisp
;; lisp
(cons 1
        (cons 2
                (cons 3
                        (cons 4
                                (cons 5 nil)
                        )
                )
        )
)
;; okay, I see the parentheses now


'(1 2 3 4 5) ;; quoted data - even better
```



You can probably understand how having such a tree-based structure would aid somebody wanting to get their feet wet in this discipline.


<div style="text-align: center;">

<img src="/blog/assets/scheme-logo.svg" alt="Scheme Logo" width="20%">

*Woah!*

</div>
















