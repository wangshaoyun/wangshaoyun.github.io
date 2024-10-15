---
layout: post
title: Scherieffer Wolff Transformation
category: Physics
tags: Physics
---

<a href="/assets/notes/Effective Mass spring.pdf">PDF</a>



[TOC]
# 1 The different ways to construct effective medium 

## 1.1 The problem and the direct solution 

Consider two mass-in-mass elements, $j=1,2$, interacting through a soft spring of constant $h$. Each element has an outer mass $M_{j}$ and an inner mass $m_{j}$, and a coupling spring of constant $k_{j}$. Calling the displacement of the outer mass $U_{j}$ and $u_{j}$ that of the inner mass, it comes that the system obeys the motion equation

$$ 
\left[\begin{array}{cccc}
k_{1}+h & -k_{1} & -h & 0 \\
-k_{1} & k_{1} & 0 & 0 \\
-h & 0 & k_{2}+h & -k_{2} \\
0 & 0 & -k_{2} & k_{2}
\end{array}\right]\left[\begin{array}{l}
U_{1} \\
u_{1} \\
U_{2} \\
u_{2}
\end{array}\right]=\omega^{2}\left[\begin{array}{cccc}
M_{1} & & & \\
& m_{1} & & \\
& & M_{2} & \\
& & & m_{2}
\end{array}\right]\left[\begin{array}{l}
U_{1} \\
u_{1} \\
U_{2} \\
u_{2}
\end{array}\right]
$$ 

For the unperturbated system, the equations are

$$ 
\left[\begin{array}{cccc}
k_{1} & -k_{1} & 0 & 0 \\
-k_{1} & k_{1} & 0 & 0 \\
0 & 0 & k_{2} & -k_{2} \\
0 & 0 & -k_{2} & k_{2}
\end{array}\right]\left[\begin{array}{l}
U_{1} \\
u_{1} \\
U_{2} \\
u_{2}
\end{array}\right]=\omega^{2}\left[\begin{array}{cccc}
M_{1} & & & \\
& m_{1} & & \\
& & M_{2} & \\
& & & m_{2}
\end{array}\right]\left[\begin{array}{l}
U_{1} \\
u_{1} \\
U_{2} \\
u_{2}
\end{array}\right]
$$ 

The eigenvalues are 

$$ 
0, \ 0, \ \omega_1 = \frac{M_{1} k_{1}+k_{1} m_{1}}{M_{1} m_{1}}, \ \omega_2 = \frac{M_{2} k_{2}+k_{2} m_{2}}{M_{2} m_{2}}
$$ 

and the corresponding eigenvectors are

$$ 
e_1 = [1,1,0,0]^T \\
e_2 = [0,0,1,1]^T \\
e_3 = [k_1,-k_1 M_1/m_1,0,0]^T \\
e_4 = [0,0,k_2,-k_2 M/m_2]^T
$$ 


## 1.2 First order degenerate pertubation theory 

Assume the solution as the superposition of vector $e_3$ and $e_4$

$$ 
u = x e_1 + y e_2
$$ 

Subsituting that into Eq. (1), we have

$$ 
K(xe_1+ye_2) = \omega M (x e_1 + y e_2)
$$ 

Let product of $e_1$ and $e_2$ gives the equations of the coefficients $x,y$. The equations are

$$ 
\left[\begin{array}{cc}
k_{1}^{2} h + M_1^2 k_1 \omega_1^4 & -k_{1} k_{2} h \\
-k_{1} k_{2} h & k_{2}^{2} h + M_2^2 k_2 \omega_2^4
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]=\omega^{2}\left[\begin{array}{cc}
M_{1} k_{1}^{2}\left(1+\frac{M_{1}}{m_{1}}\right) & 0 \\
0 & M_{2} k_{2}^{2}\left(1+\frac{M_{2}}{m_{2}}\right)
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]
$$ 

 If $k_1=k_2$, $m_1=m_2$, $M_1=M_2$, then $\omega_1=\omega_2$. And Eq. (7) can be reduced to 

$$ 
\left[\begin{array}{cc}
k_{1}^{2} h & -k_{1} k_{2} h \\
-k_{1} k_{2} h & k_{2}^{2} h
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]=\left(\omega^{2}-\omega_0^2\right)\left[\begin{array}{cc}
M_{1} k_{1}^{2}\left(1+\frac{M_{1}}{m_{1}}\right) & 0 \\
0 & M_{2} k_{2}^{2}\left(1+\frac{M_{2}}{m_{2}}\right)
\end{array}\right]\left[\begin{array}{l}
x \\
y
\end{array}\right]
$$ 

Since this method is the first order degenerate perturbation theory, so the error exhibit $\mathcal{O}(h^2)$. 

| <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/untitled.png" style="zoom:30%;" /> | <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/untitled123.png" style="zoom:30%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

Fig. 1. Frequency spectrum for $k_1 = k_2 = 10, h=1, m_1 = m_2 = M_1 = M_2 = 1$. (a) Black lines are from exact solution Eq. (3), and red dash lines are from first degerate perturbation theory. (b) The error is propotional to $h^2$.

| <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202206062336121.png" style="zoom:30%;" /> | <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202206062336918.png" style="zoom:30%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

Fig. 2. Frequency spectrum for $k_1 =10, k_2 = 15, h=1, m_1 = m_2 = M_1 = M_2 = 1$. (a) Black lines are from exact solution Eq. (3), and red dash lines are from first degerate perturbation theory. (b) The error is propotional to $h^2$.

## 1.3 The exact way

We transform the displacement vector to the new vector in the basis of eigenstates, or

$$ 
\left[\begin{array}{l}
U_{1} \\
u_{1} \\
U_{2} \\
u_{2}
\end{array}\right] =
\left[\begin{array}{cccc}
1 & 0 & k1 & 0 \\
1 & 0 & -k_1 M_1/m_1 & 0 \\
0 & 1 & 0 & -k_2 \\
0 & 1 & 0 & -k_2 M_2/m_2
\end{array}\right]
\left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{array}\right] \\
\text{or} \ u = Uv.
$$ 

Substituting Eq. (9) into Eq. (1), we have

$$ 
U^T K U v = \omega^2 U^T M U v
$$ 

or

$$ 
\left[\begin{array}{cccc}
h & -h & h k_{1} & -h k_{2} \\
-h & h & -h k_{1} & h k_{2} \\
h k_{1} & -h k_{1} & \frac{M_{1}^{2} k_{1}^{3}+2 m_{1} M_{1} k_{1}^{3}}{m_{1}^{2}}+k_{1}^{2}\left(h+k_{1}\right) & -h k_{1} k_{2} \\
-h k_{2} & h k_{2} & -h k_{1} k_{2} & \frac{M_{2}^{2} k_{2}^{3}+2 m_{2} M_{2} k_{2}^{3}}{m_{2}^{2}}+k_{2}^{2}\left(h+k_{2}\right)
\end{array}\right] \left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{array}\right] = 
\omega^2 \left(\begin{array}{cccc}
M_{1}+m_{1} & 0 & 0 & 0 \\
0 & M_{2}+m_{2} & 0 & 0 \\
0 & 0 & \frac{M_{1} k_{1}^{2}\left(M_{1}+m_{1}\right)}{m_{1}} & 0 \\
0 & 0 & 0 & \frac{M_{2} k_{2}^{2}\left(M_{2}+m_{2}\right)}{m_{2}}
\end{array}\right) \left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{array}\right]
$$ 

Define $H = K-\omega^2 M$, and rewirte $H=\left[\begin{array}{cc} H_{11} & H_{12} \\ H_{21} & H_{22} \end{array}\right]$ by 2 by 2 block matrices $H_{ij}$. Then the effective matrix of 2 $v_3,v_4$ is

$$ 
H_{\text{eff}} = H_{22} - H_{21}H_{11}^{-1}H_{12}.
$$ 

 The spectrum can be obtained from the vanishing of determinant of Eq. (12), or

$$ 
|H_{\text{eff}}|=0.
$$ 



| <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202206062342146.png" style="zoom:30%;" /> | <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202206062342530.png" style="zoom:30%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

Fig. 3. Frequency spectrum for (a) $k_1 = k_2 = 10, h=1, m_1 = m_2 = M_1 = M_2 = 1$. and (b) $k_1 =10, k_2 = 15, h=1, m_1 = m_2 = M_1 = M_2 = 1$. Black lines are from Eq. (3) and red dash lines are from Eq. (13).

## 1.4 Schrieffer-Wolff transform

For simplicity, we set $m_1 = m_2 = M_1 = M_2=1$, so Eq. (11) can be transformed into

$$ 
\frac{1}{2}\left[\begin{array}{cccc}
h & -h & h & -h \\
-h & h & -h & h \\
h & -h & h+4 k_{1} & -h \\
-h & h & -h & h+4 k_{2}
\end{array}\right] \left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{array}\right] = 
\omega^2 \left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{array}\right]
$$ 

We separate Eq. (14) into the leading term and perturbative term, so we have

$$ 
\frac{1}{2}\left[\begin{array}{cccc}
h & -h & 0 & 0 \\
-h & h & 0 & 0 \\
0 & 0 & h+4 k_{1} & -h \\
0 & 0 & -h & h+4 k_{2}
\end{array}\right] \left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{array}\right] + \left[\begin{array}{cccc}
0 & 0 & h & -h \\
0 & 0 & -h & h \\
h & -h & 0 & 0 \\
-h & h & 0 & 0
\end{array}\right] \left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{array}\right]  = 
\omega^2 \left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3} \\
v_{4}
\end{array}\right] \\
\text{or} \quad K v = \omega^2 v, \ \text{where} \ K = K_0+K_1.
$$ 

Now we want to do the Schrieffer-Wolff transform to separate the low frequency subspace to the high frequency subspace. We define the unitary transform $v=\mathcal{U}w$ where $\mathcal{U}=e^{S}$ and $S$ is an anti-Hermitian matrix. After the unitary transform the stiffness matrix is transformed into

$$ 
K' = e^{S} K e^{-S}
$$ 

By using the Baker-Campbell-Haussdorf formula , we have

$$ 
K^{\prime}=K+[S, K]+\frac{1}{2}[S,[S, K]]+\ldots
$$ 

or

$$ 
K^{\prime}=K_{0}+K_1+\left[S, K_{0}\right]+ [S, K_1]-\frac{1}{2}\left[S,\left[S, K_{0}\right]\right]-\frac{1}{2}[S,[S, K_1]]+\ldots
$$ 

The Hamiltonian can be made diagonal to first order in $K_1$ by choosing the generator $S$ such that

$$ 
\left[K_{0}, S\right]= K_1
$$ 

This equation always has a definite solution under the assumption that $h K_1$ is off-diagonal in the eigenbasis of $K_{0}$. Substituting this choice in the previous transformation yields:

$$ 
K^{\prime}=K_{0}+\frac{1}{2}[S, K_1]+\mathcal{O}\left(h^{3}\right)
$$ 

where $K'$ is block diagonalized so we finish the separation of low frequency subspace and high frequency subspace. The error after SW transform are $O\left(h^{3}\right)$ while it is $O\left(h^{2}\right)$ for first degenerate perturbation theory. Actually, the SW transform is the second degenerate pertubation theory which is not commonly used. 

To get $S$, let's diagonalize $K_0$ by producting a unitary transform matrix $\mathcal{U}_1$

$$ 
\left[\begin{array}{cccc}
\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0 & 0 \\
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 & 0 \\
0 & 0 & E_{11} & E_{12} \\
0 & 0 & E_{21} & E_{22}
\end{array}\right]
$$ 

where $K_1 E_i = d_i E_i$. And $K_0$ is diagonalized as

$$ 
K_0' = \left[\begin{array}{cccc}
0 & 0 & 0 & 0 \\
0 & h & 0 & 0 \\
0 & 0 & d_1 & 0 \\
0 & 0 & 0 & d_2
\end{array}\right]
$$ 

where

$$ 
d_1 = \frac{h}{2}+k_{1}+k_{2}-\frac{\sqrt{h^{2}+4 k_{1}^{2}-8 k_{1} k_{2}+4 k_{2}^{2}}}{2}\\
d_2 = \frac{h}{2}+k_{1}+k_{2}+\frac{\sqrt{h^{2}+4 k_{1}^{2}-8 k_{1} k_{2}+4 k_{2}^{2}}}{2}.
$$ 

And $K_1$ are transformed into 

$$ 
K_1' = \mathcal{U}_1^T K_1 \mathcal{U}_1
$$ 

and it is

$$ 
\left[\begin{array}{cccc}
0 & 0 & K_{11}' & K_{12}' \\
0 & 0 & K_{21}' & K_{22}' \\
K_{11}' & K_{12}' & 0 & 0 \\
K_{21}' & K_{22}' & 0 & 0
\end{array}\right]
$$ 

And the solution of $S$ is 

$$ 
S_{i j}= \left\{\begin{array}{cc}
\frac{K_{i j}^{\prime}}{d_{j}-d_{i}} & i \neq j \\
0 & i=j
\end{array}\right.
$$ 

and then from Eq. (20), we have

$$ 
K'_d =K_{0}'+\frac{1}{2}[S, K_1']+\mathcal{O}\left(h^{3}\right)
$$ 

Rotating back give the stiffness matrix whose low frequency subspace and high frequency subspace are separated

$$ 
K' = \mathcal{U}_1 K_d' \mathcal{U}_1^T
$$ 



| <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202206071210418.png" style="zoom:30%;" /> | <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202206071210268.png" style="zoom:30%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

Fig. 4. Frequency spectrum for $k_1 = k_2 = 10, h=1, m_1 = m_2 = M_1 = M_2 = 1$. (a) Black lines are from exact solution Eq. (3), and red dash lines are from SW transformation. (b) The error is propotional to $h^3$.

| <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202206071211868.png" style="zoom:30%;" /> | <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202206071212583.png" style="zoom:30%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

Fig. 5. Frequency spectrum for $k_1 =10, k_2 = 15, h=1, m_1 = m_2 = M_1 = M_2 = 1$. (a) Black lines are from exact solution Eq. (3), and red dash lines are from SW transformation. (b) The error is propotional to $h^3$.