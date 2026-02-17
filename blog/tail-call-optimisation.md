## Tail–Call Optimisation


### Introduction – Procedure & Process

A procedure can be described as a close cousin to a mathematical function. A procedure is like a description of an algorithm: it tells you how something is done.

Take, for example, a simple procedure that computes the factorial of a number:

```lisp
(defun (fact n)
    (if (= n 0) 1
        (* n (fact (- n 1)))
    )
)
```

Procedures can be classified on the basis of their manner of definition, i.e., either recursive or iterative. In my understanding, this distinction is primarily based on what state is kept track of. Recursive procedures are quite easy to identify, since they are usually defined in terms of themselves, and they maintain the states of one or more of their previous calls (note that previous does not necessarily mean ordering). This *state* is usually maintained in data structures like the stack, either manually or as in most cases, provided by the programming language. The `fact` procedure defined above is clearly recursive.


Iterative procedures, on the other hand, usually maintain an *accumulator* state, which is independent of any procedure calls and has to be maintained by hand: you do not get the luxury of the procedure doing it for you (like a recursive call stack). We could rewrite the `fact` procedure iteratively:

```c
int fact(int n) {
    int acc = 1; // 0!
    for (int i = 1; i < n; i++)
        acc *= i;
    return acc;
}
```

It's worth pausing here to think about the *evolution* of the procedure as it executes on a given input and performs the specified computation. Intuitively, it seems that the original recursive `fact` procedure is *lazy*, in the sense that it defers the multiplication to the very end, and performs it only when it is absolutely necessary to move on to the next state. This is the chain of calls that take place:


```lisp
(fact 3)
= 3 * (fact 2)
= 3 * 2 * (fact 1)
= 3 * 2 * 1 * (fact 0)
= 3 * 2 * 1 * 0
= 3 * 2 * 1
= 3 * 2
= 6
```

In comparison, the iterative procedure seems very *eager* and updates the accumulator on the fly.


```c
i = 1; acc = 1 * 1 = 1;
i = 2; acc = 1 * 2 = 2;
i = 3; acc = 2 * 3 = 6;
```


This is precisely the difference between a recursive and an iterative process, where a process is the local *evolution* of a procedure, where *local* is read as 'for that input'. In other words, if a procedure is a black box, the very thing that it is trying to abstract away is the process that it generates.


### What kind of processes can a procedure generate?


Think about this: does the nature of a process, whether recursive or iterative, depend, in any way, upon the nature of the procedure that generates it? I mean, from the above examples, it looks like an iterative procedure generates an iterative process and a recursive procedure generates a recursive process.


**Lemma**: An iterative procedure (when not allowed unbounded state storage like a stack which could potentially simulate recursion) cannot generate a recursive process.

**Proof**: Suppose, for contradiction, that an iterative procedure is able to generate a recursive process. This means that we can represent the entire execution of the process (local to an input) using deferred operations. Let the depth of recursion be **_N_** units. Since the procedure is iterative, we can have a storage for the state, say **_M_** units. Since recursive depth is unbounded (hence the infamous stack overflows), we can easily set **_N_ > _M_**. This means that at some point in the recursion, by the pigeonhole principle, we exceed the capacity of the state storage and we lose state information, which means that the procedure fails on some inputs. This is a contradiction. [**_QED_**]


With that neat little case out of the way, we are left with one final case: a recursive procedure which can generate an iterative process.


### Tail Recursion

Take a look at the `fact` procedure rewritten as follows (assuming that all function parameters are evaluated before being passed):

```lisp
(defun (_fact n acc)
    (if (= n 0) acc
        (_fact (- n 1) (n * acc))
    )
)

(defun (fact n)
    (_fact n 1)
)
```

If we trace the recursive calls, we get the following:

```lisp
(_fact 3 1)
(_fact 2 (3 * 1)) = (_fact 2 3)
(_fact 1 (2 * 3)) = (_fact 1 6)
(_fact 0 (1 * 6)) = (_fact 0 6)
= 6
```

This is exactly the same structure as the iterative procedure we'd seen earlier. There's no *memory* that the recursion needs to preserve, because we carry that information in bounded storage at every step. We also do not need to return from a deeper call to a higher one, because there is no memory to work with (even if we did, the call would exit immediately). Hence, the process is now iterative.

**Note**: If we get a little formal, we observe that the asymptotic running time is **_O(N)_** and asymptotic storage is **_O(N)_** for an input **_N_** in the recursive process. In an iterative process, the running time remains the same, but the asymptotic storage is now constant (or **_O(1)_**). The savings obtained by the iterative process are quite apparent.

The recursive call to the procedure itself in this case is called the **tail call**. Usually, a tail call is the last statement in a tail-recursive procedure. Such a recursive procedure that generates an iterative process is said to be tail-recursive.



### Optimisation

Now we can avoid the entire fiasco of maintaining a stack and all that extra storage space by converting recursive procedures to tail-recursive procedures whenever it makes sense to eliminate the extra memory.

**Note**: While not every recursive procedure can be converted effectively to tail-recursive procedures, there's this interesting technique called [**Continuation Passing Style**](https://en.wikipedia.org/wiki/Continuation-passing_style) which can be used to turn any recursive procedure into a chain of tail calls (but you cannot always cheat space complexity).

The need for such optimisations becomes very clear when look at the Assembly produced upon compilation. Look at the following C snippet:

```c
int fact1(int n) {
    return (n <= 0) ? 1 : (n * fact1(n - 1));
}

int _fact(int n, int res) {
    return (n <= 0) ? res : _fact(n - 1, n * res);
}

int fact2(int n) {
    return _fact(n, 1);
}
```

For my ARM64 machine (compiled with clang with O1 setting), the Assembly generated (after stripping out all the irrelevant layers of bookkeeping and cleaning up a bit) looks something like this for `fact1`:

```asm
_fact1:                            ; branch
    sub	    sp, sp, #32
    stp	    x29, x30, [sp, #16]
    add	    x29, sp, #16
    str      x0, [sp, #8]
    subs     x8, x0, #0
    bgt      LBB0_2
    b        LBB0_1

LBB0_1:                             ; base case
    mov	    x0, #1
    b	    LBB0_3

LBB0_2:                             ; recursion
    ldr	    x8, [sp, #8]
    subs     x0, x8, #1
    bl	    _fact1
    ldr	    x8, [sp, #8]
    mul	    x0, x0, x8
    b	    LBB0_3

LBB0_3:                             ; cleanup
    ldp	    x29, x30, [sp, #16]
    add	    sp, sp, #32
    ret

_main:                      ; hypothetical main
    b       _fact1
```

And this is for `fact2`:

```asm
__fact:                            ; branch
    subs    x8, x0, #1
    blt     LBB1_2
    b       LBB1_1

LBB1_1:                             ; iteration
    mul    x1, x1, x0
    subs   x0, x0, #1
    bgt    LBB1_1
    b      LBB1_2

LBB1_2:                              ; cleanup
    mov    x0, x1
    ret

_fact2:                         ; wrapper
    mov    x1, #1
    b      __fact

_main:                      ; hypothetical main
    mov    x0, w8          ; scratch register
    b      _fact2
```


Clearly, one can notice the significant difference in the way the jumps are handled. In the tail-recursive case, the jump is unconditional (`b __fact` versus `blt _fact1`) and does not save its registers on to the stack before jumping, unlike the naïve method, which does that. Not that one comes across writing Assembly manually in this manner everyday, but it illustrates the point.


### Dynamic Programming

[Dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) is a method of improving upon/rewriting a 'Divide and Conquer' strategy by eliminating redundant subproblems. This technique is called memoisation. In a way, certain kinds of memoisation actually are tail recursion, such as the following algorithm for computing the *n*<sup>th</sup> Fibonacci number.

```lisp
(defun (_fib n a b)     ;; driver
    (if (= n 0) a
        (_fib (- n 1) b (+ a b))
    )
)

(defun (fib n)          ;; wrapper
    (_fib n 0 1)
)
```

Here, the 'memoised' part is acutally the variables *a* and *b*, and the updates happen uniquely at the tail call. This is a bottom up approach of dynamic programming.






