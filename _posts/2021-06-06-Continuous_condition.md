---
layout: post
title: Continuous Condition
category: Mechanics
tags: Mechanics
---

## Displacement

Obviously, according to the continuous condition, the displacements $\vec{u}$ are continuous at the surface $S$. If it is not, there are holes or overlaps in the body which is contradictory to the continuous condition.

Assume the interface $S$ is $z=0$. 

Solarized dark             |  Solarized Ocean
:-------------------------:|:-------------------------:
<img src="https://raw.github.com/wangshaoyun/image/master/202410121435547.png" style="zoom:30%;" />  | <img src="https://raw.github.com/wangshaoyun/image/master/202410121434247.png" style="zoom:30%;" /> 

## Derivatives of displacements

The derivatives of the displacements along the tangent direction on the surface are continuous too. The definitions of two derivatives on both surfaces are:

\[
u_{i,j}^1 = \frac{\partial u_i^1}{\partial x_j} = \lim_{\Delta x_i \rightarrow 0} \frac{u^1(x_i + \Delta x_i) - u^1(x_i)}{\Delta x_i}
\]

\[
u_{i,j}^2 = \frac{\partial u_i^2}{\partial x_j} = \lim_{\Delta x_i \rightarrow 0} \frac{u^2(x_i + \Delta x_i) - u^2(x_i)}{\Delta x_i}, \quad i=1,2,3;\, j=1,2
\]

And because of the continuous condition of $\vec{u}$, we have:

\[
u^1(x_i + \Delta x_i) = u^2(x_i + \Delta x_i) \quad \text{and} \quad u^1(x_i) = u^2(x_i)
\]

Therefore, we have:

\[
u_{i,j}^1 = u_{i,j}^2
\]

## Stress

According to the static condition (without inertial force), we have:

\[
\sigma_{ij}^1 n_j - \sigma_{ij}^2 n_j = \sigma_{ij,j}^1 - \sigma_{ij,j}^2 = \rho_1 \ddot{u}_i - \rho_2 \ddot{u}_i = 0
\]

Therefore, $\sigma_{33}, \sigma_{13}, \sigma_{23}$ are continuous. 

## Strain

According to the constitutive law:

\[
\begin{aligned}
\varepsilon_{11} &= \frac{1}{E} \left( \sigma_{11} - \nu (\sigma_{22} + \sigma_{33}) \right) \\
\varepsilon_{22} &= \frac{1}{E} \left( \sigma_{22} - \nu (\sigma_{11} + \sigma_{33}) \right) \\
\varepsilon_{33} &= \frac{1}{E} \left( \sigma_{33} - \nu (\sigma_{11} + \sigma_{22}) \right) \\
\varepsilon_{12} &= \frac{1}{2G} \sigma_{12} \\
\varepsilon_{13} &= \frac{1}{2G} \sigma_{13} \\
\varepsilon_{23} &= \frac{1}{2G} \sigma_{23}
\end{aligned}
\]

And the definition of strain:

\[
\begin{aligned}
\varepsilon_{11} &= \frac{\partial u_1}{\partial x_1} \\
\varepsilon_{22} &= \frac{\partial u_2}{\partial x_2} \\
\varepsilon_{33} &= \frac{\partial u_3}{\partial x_3} \\
\varepsilon_{12} &= \frac{1}{2} \left( \frac{\partial u_1}{\partial x_2} + \frac{\partial u_2}{\partial x_1} \right) \\
\varepsilon_{13} &= \frac{1}{2} \left( \frac{\partial u_1}{\partial x_3} + \frac{\partial u_3}{\partial x_1} \right) \\
\varepsilon_{23} &= \frac{1}{2} \left( \frac{\partial u_2}{\partial x_3} + \frac{\partial u_3}{\partial x_2} \right)
\end{aligned}
\]

Therefore, $\varepsilon_{11}, \varepsilon_{22}, \varepsilon_{12}$ are continuous.

## Conclusion

|               | Continuous                       | Uncontinuous             | Undetermined        |
| :-----------: | :------------------------------: | :----------------------: | :-----------------: |
| Displacements | $u_1, u_2, u_3$                  | /                        | /                   |
|    Stress     | $\sigma_{33}, \sigma_{13}, \sigma_{23}$ | $\sigma_{12}$   | $\sigma_{11}, \sigma_{22}$ |
|    Strain     | $\varepsilon_{11}, \varepsilon_{22}, \varepsilon_{12}$ | $\varepsilon_{13}, \varepsilon_{23}$ | $\varepsilon_{33}$ |
