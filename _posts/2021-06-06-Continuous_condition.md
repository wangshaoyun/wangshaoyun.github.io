---
layout: post
title: Contiunuous condition
category: Mechanics
tags: Mechanics

---

## Displacement

Obviously, according to the continuous condition, the displacements $\vec{u}$ is continuous at the surface $S$. If it is not, there are holes or overlaps in the body which is contradictory to the continuous condition.



Assume the interface $S$ is $z=0$. 

Solarized dark             |  Solarized Ocean
:-------------------------:|:-------------------------:
<img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202410121435547-20241012143547100.png" style="zoom:30%;" />  | <img src="/Users/wang/Documents/GitHub/wangshaoyun.github.io/_posts/assets/202410121434247-20241012143604213.png" style="zoom:30%;" /> 



## Derivatives of displacements

The derivatives of the displacements along the tangent direction on the surface is continuous too. The definition of two derivatives on both surface are
$$
u_{i,j}^1=\frac{\partial u_i^1}{\partial x_j}=\lim_{\Delta x_i \rightarrow 0} \frac{u^1(x_i + \Delta x_i) - u^1(x_i)}{\Delta x_i} \\
u_{i,j}^2=\frac{\partial u_i^2}{\partial x_j}=\lim_{\Delta x_i \rightarrow 0} \frac{u^2(x_i + \Delta x_i) - u^2(x_i)}{\Delta x_i}, i=1,2,3;j=1,2
$$
And because of the continuous condition of $\vec u$, we have
$$
u^1(x_i + \Delta x_i)=u^2(x_i + \Delta x_i)\\
u^1(x_i) = u^2(x_i).
$$
Therefore, we have
$$
u_{i,j}^1=u_{i,j}^2
$$

## Stress

According to the static condition (without inerial force), 
$$
\sigma_{ij}^1 n_j - \sigma_{ij}^2 n_j = \sigma_{ij,j}^1 - \sigma_{ij,j}^2 = \rho_1 \ddot{u}_i-\rho_2 \ddot u_i=0
$$
Therefore, $\sigma_{33}, \sigma_{13}, \sigma_{23}$ are continuous. 



## Strain

According to the constitutive law
$$
\begin{aligned}
\varepsilon_{11} &=\frac{1}{E}\left(\sigma_{11}-\nu\left(\sigma_{22}+\sigma_{33}\right)\right) \\
\varepsilon_{22} &=\frac{1}{E}\left(\sigma_{22}-\nu\left(\sigma_{11}+\sigma_{33}\right)\right) \\
\varepsilon_{33} &=\frac{1}{E}\left(\sigma_{33}-\nu\left(\sigma_{11}+\sigma_{22}\right)\right) \\
\varepsilon_{12} &=\frac{1}{2 G} \sigma_{12}\\
\varepsilon_{13} &=\frac{1}{2 G} \sigma_{13}\\
\varepsilon_{23} &=\frac{1}{2 G} \sigma_{23}
\end{aligned}
$$
And definition of strain
$$
\begin{aligned}
\varepsilon_{1 1} &= \frac{\partial u_{1}}{\partial x_{1}} \\
\varepsilon_{2 2} &= \frac{\partial u_{2}}{\partial x_{2}}  \\
\varepsilon_{3 3} &= \frac{\partial u_{3}}{\partial x_{3}}  \\
\varepsilon_{1 2} &= \frac{1}{2}\left(\frac{\partial u_{1}}{\partial x_{2}}+\frac{\partial u_{2}}{\partial x_{1}}\right)  \\
\varepsilon_{1 3} &= \frac{1}{2}\left(\frac{\partial u_{1}}{\partial x_{3}}+\frac{\partial u_{3}}{\partial x_{1}}\right) \\
\varepsilon_{2 3} &= \frac{1}{2}\left(\frac{\partial u_{2}}{\partial x_{3}}+\frac{\partial u_{3}}{\partial x_{2}}\right)
\end{aligned}
$$
Therefore, $\varepsilon_{11}, \varepsilon_{22}, \varepsilon_{1 2}$ are continuous. 

## Conclusion

|               |                       Contiunuous                       |             Uncontiunous             |       Undetermined        |
| :-----------: | :-----------------------------------------------------: | :----------------------------------: | :-----------------------: |
| Displacements |                      $u_1,u_2,u_3$                      |                  /                   |             /             |
|    Stress     |         $\sigma_{33}, \sigma_{13}, \sigma_{23}$         |            $\sigma_{12}$             | $\sigma_{22},\sigma_{33}$ |
|    Strain     | $\varepsilon_{11}, \varepsilon_{22}, \varepsilon_{1 2}$ | $\varepsilon_{13}, \varepsilon_{23}$ |    $ \varepsilon_{33}$    |



