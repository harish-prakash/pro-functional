## Philosophy

There is no such thing as a "correct" programming paradigm. Every known paradigm
might seem to be the best fit for certain problems. Furthermore, smaller the
problem, more fitting might seem a paradigm.

It is impractical to arm and maintain unique solutions for every small piece of
your application. Functional programming is a goldilocks paradigm which serves
most situations with least degradation in performance.

Functional programming is near impossible or inefficient when it comes to
real-time systems due to the stateless nature of the paradigm. Unless you are
programming a rover on mars, functional programming makes your code testable and
maintainable.

Writing pure-functions have their own pitfalls, especially with industry
standard practices like fail-fast. Some of these arise due to miseducation that
is blindly passed down
