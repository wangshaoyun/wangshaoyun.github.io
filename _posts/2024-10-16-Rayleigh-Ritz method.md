---
layout: post
title: Scherieffer Wolff Transformation
category: Physics
tags: Physics
---

<a href="/assets/notes/2024-10-16-Rayleigh-Ritz method.pdf">PDF</a>



Bold letters means matrix or vectors: $\boldsymbol A$ 

Bold letters with subscripts means the $i$ th row and $j$ th column block matrix in matrix $\boldsymbol A$: $\boldsymbol A_{ij}$

The $k$ th row and $l$ th column element in $i$ th row and $j$ th column block matrix $\boldsymbol A_{ij}$ in matrix $\boldsymbol A$: $(A_{ij})_{kl}$

## 0.1 Eq(14)

$$
\begin{array}{c}
U(\xi, \eta, \zeta)=\sum_{i=1}^{I_1} \sum_{j=1}^{J_1} \sum_{k=1}^{K_1} B^1_{i j k} P_{i}(\xi) P_{j}(\eta) P_{k}(\zeta), \\
V(\xi, \eta, \zeta)=\sum_{i=1}^{I_2} \sum_{j=1}^{J_2} \sum_{k=1}^{K_3} B^2_{i j k} P_{i}(\xi) P_{j}(\eta) P_{k}(\zeta), \\
W(\xi, \eta, \zeta)=\sum_{i=1}^{I_3} \sum_{j=1}^{J_3} \sum_{k=1}^{K_3} B^3_{i j k} P_{i}(\xi) P_{j}(\eta) P_{k}(\zeta).
\end{array}
$$

We use the following relation $(i,j,k)=(1,1,1),(1,1,2),\ldots, (1,1,K), (1,2,1), \ldots, (1,2,K), \ldots, (1,J,K), \ldots, (I,J,K) \rightarrow p = 1,2,3 \ldots, IJK$  to transform the counting indices $(i,j,k)$ to a new index $p$. Then, we collect the coefficients $B^m_{i j k}, m=1,2,3$  into new vectors $\boldsymbol A_m$ where the $p$th element $(\boldsymbol A_m)_p=B^m_{ijk}$. And we collect all the coefficients into a big vector which is $\boldsymbol A = (\boldsymbol A_1,\boldsymbol A_2,\boldsymbol A_3)$.Therefore, we have
$$
\begin{array}{c}
U(\xi, \eta, \zeta)=\sum_{i=1}^{I_1} \sum_{j=1}^{J_1} \sum_{k=1}^{K_1} (A_1)_p P_{i}(\xi) P_{j}(\eta) P_{k}(\zeta), \\
V(\xi, \eta, \zeta)=\sum_{i=1}^{I_2} \sum_{j=1}^{J_2} \sum_{k=1}^{K_3} (A_2)_p P_{i}(\xi) P_{j}(\eta) P_{k}(\zeta),\\
W(\xi, \eta, \zeta)=\sum_{i=1}^{I_3} \sum_{j=1}^{J_3} \sum_{k=1}^{K_3} (A_3)_p P_{i}(\xi) P_{j}(\eta) P_{k}(\zeta).
\end{array}
$$

##Eq 16

$$
\Pi=V_{\max }-T_{\max } \rightarrow L=V_{\max }-T_{\max }
$$

## 0.2 Eq 17

$$
\frac{\partial L}{\partial B^1_{i j k}}=0, \frac{\partial L}{\partial B^2_{i j k}}=0, \frac{\partial L}{\partial B^3_{i j k}}=0 .
$$

By using the index transform, we have
$$
\frac{\partial L}{\partial (A_1)_p}=0, \frac{\partial L}{\partial (A_2)_p}=0, \frac{\partial L}{\partial (A_3)_p}=0 .
$$

## 0.3 Eq21 

$$
\left[\begin{array}{ll}
\boldsymbol \Pi_{11} & \boldsymbol \Pi_{12} & \boldsymbol \Pi_{13} \\
\boldsymbol \Pi_{21} & \boldsymbol \Pi_{22} & \boldsymbol \Pi_{23}\\
\boldsymbol \Pi_{31} & \boldsymbol \Pi_{32} & \boldsymbol \Pi_{33} 
\end{array}\right]
\left[\begin{array}{l}
{\boldsymbol A_1} \\
{\boldsymbol A_2} \\
{\boldsymbol A_3}
\end{array}\right]
=\left[\begin{array}{c}
{\boldsymbol 0} \\
{\boldsymbol 0} \\
{\boldsymbol 0}
\end{array}\right] .
$$

where 
$$
(\Pi_{ij})_{pq} = \frac{\partial^2 L}{\partial (A_i)_p \partial (A_j)_q}
$$
In fact, 
$$
\boldsymbol \Pi= \boldsymbol K -\omega^2 \boldsymbol M
$$
and
$$
(K_{ij})_{pq} = \frac{\partial^2 V_{\rm max}}{\partial (A_i)_p \partial (A_j)_q}
$$

$$
\omega^2(M_{ij})_{pq} = \frac{\partial^2 T_{\rm max}}{\partial (A_i)_p \partial (A_j)_q}
$$


$$
\begin{aligned}
\Pi_{11}=\frac{\partial L}{\partial (A_1)_p}=& \frac{E c}{2 \lambda(1+v)} \int_{-1}^{1} \int_{-1}^{1} \int_{-1}^{1}\left\{\frac { v } { 1 - 2 v } \left(\bar{\varepsilon}_{\xi \xi}+\bar{\varepsilon}_{\eta \eta}\right.\right.\\
&\left.+\bar{\varepsilon}_{\zeta \zeta}\right) \lambda P_{l}(\xi) \frac{\partial P_{m}(\eta)}{\partial(\eta)} P_{n}(\zeta)+\lambda \bar{\varepsilon}_{\eta \eta} P_{l}(\xi) \frac{\partial P_{m}(\eta)}{\partial(\eta)} P_{n}(\zeta) \\
&+\frac{1}{2}\left[\bar{\varepsilon}_{\xi \eta} \frac{\partial P_{l}(\xi)}{\partial(\xi)} P_{m}(\eta) P_{n}(\zeta)\right.\\
&\left.\left.+\frac{\lambda}{\gamma} \bar{\varepsilon}_{\eta \zeta} P_{l}(\xi) P_{m}(\eta) \frac{\partial P_{n}(\zeta)}{\partial(\zeta)}\right]\right\} d \xi d \eta d \zeta \\
&+\frac{\bar{E} c}{2 \lambda(1+\bar{v})} \int_{-1}^{1} \int_{-1}^{1} \int_{1}^{1+\frac{2 \bar{c}}{c}}\left\{\frac{\bar{v}}{1-2 \bar{v}}\left(\bar{\varepsilon}_{\xi \xi}+\bar{\varepsilon}_{\eta \eta}+\bar{\varepsilon}_{\zeta \zeta}\right)\right.\\
& \cdot \lambda P_{l}(\xi) \frac{\partial P_{m}(\eta)}{\partial(\eta)} P_{n}(\zeta)+\lambda \bar{\varepsilon}_{\eta \eta} P_{l}(\xi) \frac{\partial P_{m}(\eta)}{\partial(\eta)} P_{n}(\zeta) \\
&+\frac{1}{2}\left[\bar{\varepsilon}_{\xi \eta} \frac{\partial P_{l}(\xi)}{\partial(\xi)} P_{m}(\eta) P_{n}(\zeta)\right.\\
&\left.\left.+\frac{\lambda}{\gamma} \bar{\varepsilon}_{\eta \zeta} P_{l}(\xi) P_{m}(\eta) \frac{\partial P_{n}(\zeta)}{\partial(\zeta)}\right]\right\} d \xi d \eta d \zeta \\
&-\left\{\frac{\rho}{8} a b c \omega^{2} \int_{-1}^{1} \int_{-1}^{1} \int_{-1}^{1} V\left[P_{l}(\xi) P_{m}(\eta) P_{n}(\zeta)\right] d \xi d \eta d \zeta\right.\\
&\left.+\frac{\bar{\rho}}{8} a b c \omega^{2} \int_{-1}^{1} \int_{-1}^{1} \int_{1}^{1+\frac{2 \bar{c}}{c}} V\left[P_{l}(\xi) P_{m}(\eta) P_{n}(\zeta)\right] d \xi d \eta d \zeta\right\}
\end{aligned}
$$
