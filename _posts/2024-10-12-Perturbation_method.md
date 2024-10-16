---
layout: post
title: Perturbation Method
category: Mathematics
tags: Mathematics
---

<a href="/assets/notes/2024-10-12-Perturbation Method.pdf">PDF</a>

# 1 Questions and ideas

## 1.1 Questions

1. What is slowly varying functions?
2. What does singular perturbation mean?
3. What does asymptotic series mean?
   1. A series is divergent but could give a good approximation of devergent function.
4. Uniformly asymptotic?
5. Optimal truncation?
6. Variation of parameters for inhomogeneous equations?
7. Relation between special solution and general solutions in linear and nonlinear differential equations?
   1. For linear equations, if we find two special solutions, we can find general solution by linear superposition of two special solutions. And we can get special solutions from general solution.
   2. For nonlinear equations, we cannot get general solution from special solution and vice versa. But special solution seems to be singular limit of general solutions.
8. Why do we need to transform high order equation to first order equations? 
9. **Wellposedness**:
   1. We define a well-posed problem here as one for which a unique solution exists.
10. How to recognize irregular singularities?
11. For asymptotic series, there is a optimal cutting off term. So how do we deal with large parameters? For large parameters, we need more terms but more terms give bad approximation.
    1. For large parameter and asymptotic series, we need to use special way to accelerate the convergence of the series.
12. For local analysis, we need to find the leading term and neglect small terms, how do we choose the leading term? Only by trying and checking?
13. How to choose the perturbative parameters?
14. What's the difference between perturbation series and Taylor's series?
15. What's the difference between perturbation and singular perturbation?
16. 

## 1.2 Ideas





## 1.3 Others

### 1.3.1 High-frequency approximation

A **high-frequency approximation** (or "high energy approximation") for [scattering](https://en.wikipedia.org/wiki/Scattering) or other [wave](https://en.wikipedia.org/wiki/Wave) propagation problems, in [physics](https://en.wikipedia.org/wiki/Physics) or [engineering](https://en.wikipedia.org/wiki/Engineering), is an approximation whose accuracy increases with the size of features on the scatterer or medium relative to the wavelength of the scattered particles.

[Classical mechanics](https://en.wikipedia.org/wiki/Classical_mechanics) and [geometric optics](https://en.wikipedia.org/wiki/Geometric_optics) are the most common and extreme high frequency approximation, where the wave or field properties of, respectively, [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics) and [electromagnetism](https://en.wikipedia.org/wiki/Electromagnetism) are neglected entirely.

Less extreme approximations include, the [WKB approximation](https://en.wikipedia.org/wiki/WKB_approximation), [physical optics](https://en.wikipedia.org/wiki/Physical_optics), the [geometric theory of diffraction](https://en.wikipedia.org/wiki/Geometric_theory_of_diffraction), the [uniform theory of diffraction](https://en.wikipedia.org/wiki/Uniform_theory_of_diffraction), and the [physical theory of diffraction](https://en.wikipedia.org/w/index.php?title=Physical_theory_of_diffraction&action=edit&redlink=1). When these are used to approximate [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics), they are called semiclassical approximations.
# 2 ODEs

## 2.1 Linear and nonlinear
dd
### 2.1.1 Example 2 Solution of a linear equation. 
ddd
The general solution of the homogeneous linear equation

$$
y^{\prime \prime}-\frac{1+x}{x} y^{\prime}+\frac{1}{x} y=0
$$


is

$$
y(x)=c_{1} e^{x}+c_{2}(1+x),
$$


which shows the explicitly **linear dependence** on the two constants of integration $c_{1}$ and $c_{2} .$ 

### 2.1.2 Example 3 Solutions of nonlinear equations. 

Two nonlinear differential equations which can be routinely solved (see Secs. $1.6$​ and $1.7)$​ are the Riccati equation

$$
y^{\prime}=\frac{A^{2}}{x^{4}}-y^{2}, \quad A \; \text{is a constant},
$$


whose general solution is **(How to get it?)**

$$
y(x)=\frac{1}{x}+\frac{A}{x^{2}} \frac{c_{1}-e^{2 A / x}}{c_{1}+e^{2 A / x}}
$$


and the equidimensional equation

$$
y^{\prime \prime}=y y^{\prime} / x
$$


whose general solution is **(How to get it?)**

$$
y(x)=2 c_{1} \tan \left(c_{1} \ln x+c_{2}\right)-1
$$


There is a special solution to $(1.1 .9)$​​, namely $y=c_{3}$​​, where $c_{3}$​​ is an arbitrary constant, which cannot be obtained from the general solution in $(1.1 .10)$​​ for any choice of $c_{1}$​​ and $c_{2} .$​​

Show that in addition to the special solution $y=c_{3}$ to the differential equation in $(1.1 .9)$ there is another special solution of the form $y=-2 /\left(c_{4}+\ln x\right)-1$, where $c_{4}$ is arbitrary. The derivation of the general solution to $(1.1 .9)$ is given in Example 2 of Sec. 1.7. Explain how this special solution can arise in the derivation of the general solution. Also show how this special solution can be interpreted as a singular limit of the general solution in $(1.1 .10)$​.

## 2.2 Initial-value, boundary-value, existence, uniqueness, local analysis and global analysis

* Iinitial-value problem is easier than boundary-value problem because we can use local analysis.
* There is a theorem of existence and uniqueness for initial-value problem.
* Global analysis for initial-value problem is difficult because the position of singularities may be dependent on the initial conditions
* Boundary-value problems are inherently global. It is very diffcult to state rigorous criteria for existence and uniqueness of solutions to boundary-value problems for nonlnear differential equations. Boundary-value problems for nonlinear ditferential equations may have no solution, a finite number k of solutions, or even infinitely many solutions. The same possibilities are true for linear equations except that k= 1.

### 2.2.1 Example 2 Differential equation having a non-unique solution. 

For the initial-value problem $y^{\prime}=y^{1 / 3}[y(0)=0]$ it is clear that $F$ is continuous near $x=0$ and $y=0$, but that $\partial F / \partial y$ is not. It is therefore not surprising that there are two solutions to this problem: $y=0, y=(2 x / 3)^{3 / 2}$. Notice that the general solution to the first-order equation $y^{\prime}=y^{1 / 3}$ is $y(x)=\eta\left(2 x / 3+c_{1}\right)^{3 / 2}$, where $\eta=\pm 1,0$ and $c_{1}$ is arbitrary. This general solution depends on more than the single constant of integration $c_{1} ;$ it also depends on the discrete parameter $\eta .$ In general, if $F$ in $(1.1 .1)$ is not smooth, then the solution $y(x)$ may depend on more than $n$​​ constants of integration.

## 2.3 Homogenous linear equations

### 2.3.1 Linear Independence of Solutions

The general solution of an $n$ th-order homogeneous linear equation

$$
y^{(n)}+p_{n-1}(x) y^{(n-1)}+\cdots+p_{0}(x) y=0
$$


has the particularly simple form

$$
y(x)=\sum_{j=1}^{n} c_{j} y_{j}(x)
$$



### 2.3.2 The Wronskian
There is a simple test for the linear dependence of a set of differentiable functions. The Wronskian $W(x)$ is defined as the determinant

$$
\begin{aligned}
W(x) &=W\left[y_{1}(x), y_{2}(x), \ldots, y_{n}(x)\right] \\
& \equiv \operatorname{det}\left|\begin{array}{cccc}
y_{1} & y_{2} & \cdots & y_{n} \\
y_{1}^{\prime} & y_{2}^{\prime} & \cdots & y_{n}^{\prime} \\
y_{1}^{(n-1)} & y_{2}^{(n-1)} & \cdots & y_{n}^{(n-1)}
\end{array}\right|
\end{aligned}
$$


$W(x)$ vanishes identically over an interval if and only if $\left\{y_{j}(x)\right\}$ is a linearly dependent set of functions (see Prob. 1.5). If $\left\{y_{j}(x)\right\}$ is linearly independent over some interval, then $W(x)$​ does not vanish, except possibly at isolated points.

Homogeneous linear equations have a remarkable property: the Wronskian $W(x)$ of any $n$ solutions of $(1.3 .1)$ satisfies the simple first-order equation

$$
W^{\prime}(x)=-p_{n-1}(x) W(x)
$$


(For the derivation of this equation, see Prob. 1.7.) The solution of $(1.3 .4)$ is known as Abel's formula:

$$
W(x)=\exp \left[-\int^{x} p_{n-1}(t) d t\right] .
$$



### 2.3.3 Initial-Value Problems


$$
\operatorname{det}\left[y_{j}^{(i)}\left(x_{0}\right)\right]=W\left(x_{0}\right) \neq 0
$$



#### 2.3.3.1 Example 3 Ill-posed problem-vanishing Wronskian. 

The Wronskian for the differential equation in Example 2 vanishes only at $x=0$. Thus, it is not surprising that the initial-value problem $y^{\prime \prime}-y^{\prime}(1+x) / x+y / x=0\left[y(1)=1, y^{\prime}(1)=2\right]$ is we!l posed. When these initial conditions are replaced with $y(0)=1, y^{\prime}(0)=2$, the problem is ill posed because there is no solution. When these initial conditions are replaced with $y(0)=1, y^{\prime}(0)=1$, the problem is still ill posed because the solution $y(x)=e^{x}+c\left(e^{x}-1-x\right)$ is not unique.

#### 2.3.3.2 Example 4 Ill-posed problem-nonvanishing Wronskian. 

The initial-value problem

$$
y^{\prime \prime}-6 y / x^{2}=0
$$


$\left[y(0)=6, y^{\prime}(0)=6\right]$ is ill posed because the general solution $y(x)=c_{1} x^{3}+c_{2} x^{-2}$ is either infinite or vanishing at $x=0 .$ Abel's formula (1.3.5) tells us that the Wronskian is constant everywhere, including $x=0$, and that this constant does not vanish because $y(x)$ is the general solution. Thus, unfortunately, the nonvanishing of $W(x)$ at $x=x_{0}$ in $(1.2 .1)$ is a necessary but not a sufficient condition for the wellposedness of an initial-value problem. Of course, this initialvalue problem is clearly suspect because the initial conditions are given at a discontinuity of $p_{0}(x) .$

### 2.3.4 Boundary-Value Problems


$$
\operatorname{det}\left|\begin{array}{ll}
y_{1}^{\prime}\left(x_{0}\right) & y_{2}^{\prime}\left(x_{0}\right) \\
y_{1}\left(x_{1}\right) & y_{2}\left(x_{1}\right)
\end{array}\right| \neq 0
$$



#### 2.3.4.1 Example 6 Boundary-value problem with no solution. 

Consider the boundary-value problem $y^{\prime \prime}+y=0\left[y^{\prime}(0)=0, y(\pi / 2)=1\right]$. The general solution to the differential equation is $y(x)=$ $c_{1} \sin x+c_{2} \cos x .$ The Wronskian $W(\sin x, \cos x)=-1$ is nonvanishing and the coefficient
functions of the differential equation are continuous. Nevertheless, the boundary-value problem has no solution; the condition $y^{\prime}(0)=0$ implies that $c_{1}=0$ and the remaining solution $y(x)=$ $c_{2} \cos x$ cannot satisfy $y(\pi / 2)=1$ for any value $c_{2}$ because $\cos (\pi / 2)=0$.

### 2.3.5 Solutions of homogeneous linear equations

* Constant-Coefficient Equations
* Equidimensional Equations
* Exact Equations
* Reduction of Order
* Transformation to a Known Equation

## 2.4 Inhomogeneous linear equations

### 2.4.1 Variation of Parameters

### 2.4.2 Green’s Functions

### 2.4.3 Reduction of Order

### 2.4.4 Method of Undetermined Coefficients





# 3 Local analysis

Method of Dominant Balance



## 3.1 Local analysis of $x^{3} y^{\prime \prime}=y$


$$
x^{3} y^{\prime \prime}=y
$$



One solution to (3.4.1) exhibits the behavior

$$
y(x) \sim c_{1} x^{3 / 4} e^{2 x^{-1 / 2}}, \quad x \rightarrow 0+;
$$


the other solution has the behavior

$$
y(x) \sim c_{2} x^{3 / 4} e^{-2 x^{-1 / 2}}, \quad x \rightarrow 0+\text { . }
$$


At first, we consider the general case

$$
y^{\prime \prime}+p(x) y^{\prime}+q(x) y=0
$$


near an assumed irregular singular point at $x_{0}$. Substituting $y=e^{S}$ gives

$$
S^{\prime \prime}+\left(S^{\prime}\right)^{2}+p(x) S^{\prime}+q(x)=0
$$


This equation is just as difficult to solve, but if $x_{0}$ is an irregular singular point, it is usually true that

$$
S^{\prime \prime} \ll\left(S^{\prime}\right)^{2}, \quad x \rightarrow x_{0}
$$


The asymptotic differential equation

$$
\left(S^{\prime}\right)^{2} \sim-p(x) S^{\prime}-q(x), \quad x \rightarrow x_{0}.
$$


For current case, $p(x)=0, \; q(x)=x^{-3}$​​​, we have

$$
\left(S^{\prime}\right)^{2} \sim -x^{-3}, \quad x \rightarrow 0_+.
$$


The two possible solutions are $S^{\prime}(x) \sim \pm x^{-3 / 2}(x \rightarrow 0+)$, and, therefore,

$$
S(x) \sim \pm 2 x^{-1 / 2}, \quad x \rightarrow 0+
$$


We can improve upon (3.4.11) by estimating the integration function $C(x)$, where

$$
S(x)=2 x^{-1 / 2}+C(x), \quad C(x) \ll 2 x^{-1 / 2}, \quad x \rightarrow 0+
$$


Substitute it into the original equation, we have

$$
\frac{3}{2} x^{-5 / 2}+C^{\prime \prime}-2 x^{-3 / 2} C^{\prime}+\left(C^{\prime}\right)^{2}=0
$$


Using asmptotic approximation again, we have

$$
\frac{3}{2} x^{-5 / 2} \sim 2 x^{-3 / 2} C^{\prime}, \quad x \rightarrow 0+
$$


whose solution is $C \sim \frac{3}{4} \ln x(x \rightarrow 0+)$. Note that differentiating $(3.4 .13)$ gives $C^{\prime \prime} \sim-\frac{3}{4} x^{-2}$ $(x \rightarrow 0+)$, so $C^{\prime \prime} \ll x^{-5 / 2}(x \rightarrow 0+)$ as assumed. Substituting $C(x)$ into $(3.4 .12)$ gives

$$
S(x)=2 x^{-1 / 2}+\frac{3}{4} \ln x+D(x)
$$


Step by step, we can get higher order results.















# 4 Global analysis and perturbation

Asymptotic Matching







 





# 5 WKB method from Griffith

## 5.1 Criteria and basic idea

Condition: Potential function varies very slow comparing the variation of the wave function.

The essential idea is as follows: Imagine a particle of energy $E$ moving through a region where the potential $V(x)$ is constant. If $E>V$, the wave function is of the form

$$
\psi(x)=A e^{\pm i k x}, \quad \text { with } k \equiv \sqrt{2 m(E-V)} / \hbar
$$


we define two length scales, the $\lambda_1$​ and the $\lambda_2$. The $\lambda_1$ is the wave length of wave function and $\lambda_2$​ is the wave length of $V(x)$

$$
\lambda_1 = \frac{2\pi}{k} = \hbar / \sqrt{2 m(E-V)} \\
\lambda_2 = 
$$




Basic idea: 设想 $V(x)$​不是一个常量， 但是变化相比 $\lambda$​ 非常缓慢，因此包含许多全波长的区域中的势能可以认为基本上是不变的。 这样，除了波长和振幅随 $x$​ 缓慢的变化外，可以合理地认为$\psi$​​​实际上仍然保持正弦形式。 这就是隐藏在 WKB 近似后面的核心思想。



## 5.2 Mathematical derivation

The Schrödinger equation,

$$
-\frac{\hbar^{2}}{2 m} \frac{d^{2} \psi}{d x^{2}}+V(x) \psi=E \psi
$$


can be rewritten in the following way:

$$
\frac{d^{2} \psi}{d x^{2}}=-\frac{p^{2}}{\hbar^{2}} \psi
$$


where

$$
p(x) \equiv \sqrt{2 m[E-V(x)]}
$$


Based on the basic idea, we assume that the solution keeps the same harmonic form but the amplitude and phase are dependent on the position coordinate, so that we have

$$
\psi(x)=A(x) e^{i \phi(x)}
$$


In the following derivation, the target is to obtain the function $A(x)$ and $\phi(x)$​. Using a prime to denote the derivative with respect to $x$, we find:

$$
\frac{d \psi}{d x}=\left(A^{\prime}+i A \phi^{\prime}\right) e^{i \phi}
$$


and

$$
\frac{d^{2} \psi}{d x^{2}}=\left[A^{\prime \prime}+2 i A^{\prime} \phi^{\prime}+i A \phi^{\prime \prime}-A\left(\phi^{\prime}\right)^{2}\right] e^{i \phi}
$$


Putting this into Eq. (2):

$$
A^{\prime \prime}+2 i A^{\prime} \phi^{\prime}+i A \phi^{\prime \prime}-A\left(\phi^{\prime}\right)^{2}=-\frac{p^{2}}{\hbar^{2}} A
$$


This is equivalent to two real equations, one for the real part and one for the imaginary part:

$$
A^{\prime \prime}-A\left(\phi^{\prime}\right)^{2}=-\frac{p^{2}}{\hbar^{2}} A, \quad \text { or } \quad A^{\prime \prime}=A\left[\left(\phi^{\prime}\right)^{2}-\frac{p^{2}}{\hbar^{2}}\right]
$$


and

$$
2 A^{\prime} \phi^{\prime}+A \phi^{\prime \prime}=0 . \quad \text { or } \quad\left(A^{2} \phi^{\prime}\right)^{\prime}=0
$$


For Eq. (15), the solution is obvious and it is

$$
A^{2} \phi^{\prime}=C^{2} . \quad \text { or } \quad A=\frac{C}{\sqrt{\phi^{\prime}}},
$$


Neglecting $A''$​​​​ in Eq. (14), this is an assumption, we have 

$$
\left(\phi^{\prime}\right)^{2}=\frac{p^{2}}{\hbar^{2}}, \quad \text { or } \quad \frac{d \phi}{d x}=\pm \frac{p}{\hbar}
$$


and therefore

$$
\phi(x)=\pm \frac{1}{\hbar} \int p(x) d x
$$


(I'll write this as an indefinite integral, for now-any constants can be absorbed into $C$, which may thereby become complex.) It follows that

$$
\boxed{ \psi(x) \cong \frac{C}{\sqrt{p(x)}} e^{\pm \frac{i}{\hbar} \int p(x) d x} }
$$


and the general (approximate) solution will be a linear combination of two such terms, one with each sign.

## 5.3 An alternative derivation

Problem $8.2$​ An illuminating alternative derivation of the WKB formula (Eq. (13)) is based on an expansion in powers of $\hbar$​. Motivated by the freeparticle wave function, $\psi=A \exp (\pm i p x / \hbar)$​, we write

$$
\psi(x)=e^{i f(x) / \hbar}
$$


where $f(x)$ is some complex function. (Note that there is no loss of generality here-any nonzero function can be written in this way.)

(a) Put this into Schrödinger's equation, Eq. (2), and show that

$$
\frac{d\psi}{dx} = \frac{i}{\hbar}f'e^{i f(x) / \hbar} \\
\frac{d^2\psi}{dx^2} = \left(\frac{i}{\hbar}f''-\frac{1}{\hbar^2}f'^2\right)e^{i f(x) / \hbar} \\
i \hbar f^{\prime \prime}-\left(f^{\prime}\right)^{2}+p^{2}=0
$$


(b) Write $f(x)$ as a power series in $\hbar$ :

$$
f(x)=f_{0}(x)+\hbar f_{1}(x)+\hbar^{2} f_{2}(x)+\cdots
$$


and, collecting like powers of $\hbar$, show that

$$
\left(f_{0}^{\prime}\right)^{2}=p^{2}, \quad i f_{0}^{\prime \prime}=2 f_{0}^{\prime} f_{1}^{\prime}, \quad i f_{1}^{\prime \prime}=2 f_{0}^{\prime} f_{2}^{\prime}+\left(f_{1}^{\prime}\right)^{2}, \quad \text { etc. }
$$


(c) Solve for $f_{0}(x)$​ and $f_{1}(x)$​, and show that $-$​ to first order in $\hbar-$​ you recover Eq. (13). 

$$
\frac{d f_0}{d x}=\pm \frac{p}{\hbar} \quad \text{or} \quad f_0(x)=\pm \frac{1}{\hbar} \int p(x) d x \\
i\frac{1}{\hbar} \frac{d p}{d x} = 2 \frac{p}{\hbar} \frac{d f_1}{d x} \quad \text{or} \quad f_1 = \frac{i}{2}\ln(p) + C
$$


Finally, we have

$$
\psi(x)=e^{i f(x) / \hbar} = e^{i f_0(x) / \hbar + i f_1(x)} 
= \frac{C}{\sqrt{p(x)}}e^{i \pm \frac{1}{\hbar} \int p(x) d x / \hbar}
$$





# 6 WKB from Carl. Bender

## 6.1 General

### 6.1.1 Key features

WKB theory is a powerful tool for obtaining a global approximation to the solution of a **linear differential equation** whose highest derivative is multiplied by a small parameter $\varepsilon ;$​​ it **contains boundary-layer theory** as a special case.

### 6.1.2 Application field

WKB approximation is suitable for linear differential equations **of any order**, for **initialvalue and boundary-value problems**, and for **eigenvalue problems**. It may also be used to **evaluate integrals of the solution of a differential equation**. 

### 6.1.3 Limit

The limitation of conventional WKB techniques is that they are only useful for linear equations.

## 6.2 Examples

### 6.2.1 Example 1 Approximate solution to a Schrödinger equation.
A second-order homogeneous linear differential equation is in Schrödinger form if the $y^{\prime}$​ term is absent. The approximate solutions to the Schrödinger equation

$$
\varepsilon^{2} y^{\prime \prime}=Q(x) y, \quad Q(x) \neq 0
$$


are easy to find using WKB analysis when $\varepsilon$​ is small. 

### 6.2.2 Example 2 Solution of $\varepsilon y^{\prime \prime}+y=0[y(0)=0, y(1)=1]$ as $\varepsilon \rightarrow 0+.$

Solution of $\varepsilon y^{\prime \prime}+y=0[y(0)=0, y(1)=1]$ as $\varepsilon \rightarrow 0+.$ Even though it is not possible to solve this problem using boundary-layer theory, the WKB approximation in $(10.1 .13)$, with $\varepsilon$ replaced by $\sqrt{\varepsilon}$, leads to the exact solution. For this problem $Q(x)=-1$. Thus, $(10.1 .13)$ reduces to $y(x)=c_{1} \exp (i x / \sqrt{\varepsilon})+c_{2} \exp (-i x / \sqrt{\varepsilon})$​.

### 6.2.3 Example 3 WKB solution of an initial-value problem. 

To solve the initial-value problem $\varepsilon^{2} y^{\prime \prime}=Q(x) y, \;\left[y(0)=A, y^{\prime}(0)=B\right]$​​​.

### 6.2.4 Example 4 Rederivation of a boundary-layer approximation. 

Here we show that the WKB approximation contains boundary-layer theory as a special case. Consider the familiar boundaryvalue problem

$$
\varepsilon y^{\prime \prime}+a(x) y^{\prime}+b(x) y=0, \quad y(0)=A, y(1)=B
$$


where we assume that $a(x)>0$ for $0 \leq x \leq 1$ and $\varepsilon \rightarrow 0+$.

### 6.2.5 Example 5 WKB analysis of a Sturm-Liouville problem. 

We know from our discussion of the Sturm-Liouville eigenvalue problem in Sec. $1.8$ that the boundary-value problem

$$
y^{\prime \prime}(x)+E Q(x) y(x)=0, \quad Q(x)>0, y(0)=y(\pi)=0
$$


can be solved by WKB method for high order eigenvalues or eigenfunctions.

## 6.3 Conditions for validity of the WKB

Condition 1

$$
\begin{aligned}
S_{1}(x) & \ll \frac{1}{\delta} S_{0}(x), & & \delta \rightarrow 0 \\
\delta S_{2}(x) & \ll S_{1}(x), & & \delta \rightarrow 0 \\
& \vdots & \\
\delta^{n} S_{n+1}(x) & \ll \delta^{n-1} S_{n}(x), & & \delta \rightarrow 0
\end{aligned}
$$


Condition 2

$$
\delta^{N} S_{N+1}(x) \ll 1, \quad \delta \rightarrow 0
$$




# 7 Multiscale analysis











# 8 Boundary layer theory

## 8.1 General

### 8.1.1 Key features

This construction requires one to match slowly varying outer solutions to rapidly varying inner solutions. 





# 9 Reference

> 1. Bender, C. M., & Orszag, S. A. (2013). *Advanced mathematical methods for scientists and engineers I: Asymptotic methods and perturbation theory*. Springer Science & Business Media.
> 2. Griffiths, D. J., & Schroeter, D. F. (2018). *Introduction to quantum mechanics*. Cambridge University Press.

