---
layout: post
title: Scherieffer Wolff Transformation
category: Physics
tags: Physics
---

<a href="/assets/notes/Effective Mass spring.pdf">PDF</a>



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
and then from Eq. (7), we have
$$
K'_d =K_{0}'+\frac{1}{2}[S, K_1']+\mathcal{O}\left(h^{3}\right)
$$

| <img src="https://raw.github.com/wangshaoyun/image/master/202206071210418.png" style="zoom:40%;" /> | <img src="https://raw.github.com/wangshaoyun/image/master/202206071210268.png" style="zoom:40%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

Fig. 4. Frequency spectrum for $k_1 = k_2 = 10, h=1, m_1 = m_2 = M_1 = M_2 = 1$. (a) Black lines are from exact solution Eq. (3), and red dash lines are from SW transformation. (b) The error is propotional to $h^3$.

| <img src="https://raw.github.com/wangshaoyun/image/master/202206071211868.png" style="zoom:40%;" /> | <img src="https://raw.github.com/wangshaoyun/image/master/202206071212583.png" style="zoom:40%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

Fig. 5. Frequency spectrum for $k_1 =10, k_2 = 15, h=1, m_1 = m_2 = M_1 = M_2 = 1$. (a) Black lines are from exact solution Eq. (3), and red dash lines are from SW transformation. (b) The error is propotional to $h^3$.