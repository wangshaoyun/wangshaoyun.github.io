---
layout: post
title: Tight binding model
category: Physics
tags: Physics
---

[TOC]

<a href="/assets/notes/2024-10-16-Tight binding model.pdf">PDF</a>

# 1 Tight binding theory by wave function

**Condition: Single atoms in each unit cell with many obitals.** 

## 1.1 Unperturbated Hamiltonian and atomic obtals


$$
H_{\mathrm{at}} \varphi_{n}=E_{n} \varphi_{n}
$$


In Ashcroft & Mermin's book, they use $\psi_n$ instead of $\varphi_n$, but it's little bit confusing. In the following derivation, they are the same. 

## 1.2 The real Hamiltonian

The real Hamiltonian includes weak interaction between atoms.

$$
H=H_{\mathrm{at}}+\Delta U(\mathbf{r})
$$

Therefore, we can use the perturbation theory. 

## 1.3 Linear combination of atomic obitals 

Since the energy and atomic orbits are same, or degenerated, we can use degenerate perturbation theory. 

The superposition of all the orbitals of all the atoms gives the wave function of the real Hamiltonian (Image the picture of adding of the orbitals to remember. )

$$
\psi(\mathbf{r})=\sum_{\mathbf{R}} e^{i \mathbf{k} \cdot \mathbf{R}} \phi_R(\mathbf{r}-\mathbf{R})
$$

where 

$$
\phi(\mathbf{r})=\sum_{n} b_{nR} \varphi_{n}(\mathbf{r})
$$

Since the Bloch condition

$$
\psi(\mathbf{r}+\mathbf{R})=e^{i \mathbf{k\cdot R}} \psi(\mathbf{r}) \\
\sum_{\mathbf{R'}}e^{i \mathbf{k} \cdot \mathbf{R'}} \phi_{R-R'}(\mathbf{r}+\mathbf{R}-\mathbf{R'}) 
= \sum_{\mathbf{R'}}e^{i \mathbf{k} \cdot \mathbf{R'}} \sum_{n} b_{n,R-R'} \varphi_{n}(\mathbf{r+R}) \\
= \sum_{\mathbf{R'}}e^{i \mathbf{k} \cdot \mathbf{R+R'}} \sum_{n} b_{n,R-R'} \varphi_{n}(\mathbf{r})  
= \sum_{\mathbf{R'}}e^{i \mathbf{k} \cdot \mathbf{R+R'}} \sum_{n} b_{n,R'} \varphi_{n}(\mathbf{r})
$$

therefore, $b_{n,R-R'}=b_{n,R'}$, or the coefficients in different unit cell are same. Finally, we obtain the Eq. (10.6) and Eq. (10.7) in Ref. [1], 

$$
\psi(\mathbf{r})=\sum_{\mathbf{R}} e^{\boldsymbol{i} \cdot \mathbf{R}} \phi(\mathbf{r}-\mathbf{R})
$$

where

$$
\phi(\mathbf{r})=\sum_{n} b_{n} \psi_{n}(\mathbf{r})
$$


## 1.4 Solving the Schrondinger's equaion by degenerate perturbation theory

If we multiply the crystal Schrödinger equation

$$
H \psi(\mathbf{r})=\left(H_{\mathrm{at}}+\Delta U(\mathbf{r})\right) \psi(\mathbf{r})=\mathcal{E}(\mathbf{k}) \psi(\mathbf{r})
$$

by the atomic wave function $\psi_{m}^{*}(\mathbf{r})$. integrate over all $\mathbf{r}$, and use the fact that

$$
\int \psi_{m}^{*}(\mathbf{r}) H_{\mathrm{at}} \psi(\mathbf{r}) d \mathbf{r}=\int\left(H_{\mathrm{at}} \psi_{m}(\mathbf{r})\right)^{*} \psi(\mathbf{r}) d \mathbf{r}=E_{m} \int \psi_{m}^{*}(\mathbf{r}) \psi(\mathbf{r}) d \mathbf{r}
$$

we find that

$$
\left(\mathcal{E}(\mathbf{k})-E_{m}\right) \int \psi_{m}^{*}(\mathbf{r}) \psi(\mathbf{r}) d \mathbf{r}=\int \psi_{m}^{*}(\mathbf{r}) \Delta U(\mathbf{r}) \psi(\mathbf{r}) d \mathbf{r} .
$$

we arrive at an eigenvalue equation that determines the coefficients $b_{n}(\mathbf{k})$ and the Bloch energies $\varepsilon(\mathbf{k}):$

$$
\begin{aligned}
\left(\varepsilon(\mathbf{k})-E_{m}\right) b_{m}=&-\left(\varepsilon(\mathbf{k})-E_{m}\right) \sum_{n}\left(\sum_{\mathbf{R} \neq 0} \int \psi_{m}^{*}(\mathbf{r}) \psi_{n}(\mathbf{r}-\mathbf{R}) e^{\mathbf{i k} \cdot \mathbf{R}} d \mathbf{r}\right) b_{n} \\
&+\sum_{n}\left(\int \psi_{m}^{*}(\mathbf{r}) \Delta U(\mathbf{r}) \psi_{n}(\mathbf{r}) d \mathbf{r}\right) b_{n} \\
&+\sum_{n}\left(\sum_{\mathbf{R} \neq 0} \int \psi_{m}^{*}(\mathbf{r}) \Delta U(\mathbf{r}) \psi_{n}(\mathbf{r}-\mathbf{R}) e^{i \mathbf{k} \cdot \mathbf{R}} d \mathbf{r}\right) b_{n}
\end{aligned}
$$


## 1.5 APPLICATION TO AN $s$-BAND ARISING FROM A SINGLE ATOMIC $s$-LEVEL

If all the coefficients $b$ in (10.12) are zero except that for a single atomic $s$-level, then (10.12) gives directly the band structure of the corresponding $s$-band:

$$
\varepsilon(\mathbf{k})=E_{s}-\frac{\beta+\Sigma \gamma(\mathbf{R}) e^{\boldsymbol{i k} \cdot \mathbf{R}}}{1+\Sigma \alpha(\mathbf{R}) e^{\mathbf{i} \mathbf{k} \cdot \mathbf{R}}},
$$

where $E_{s}$ is the energy of the atomic $s$-level, and

$$
\begin{aligned}
\beta &=-\int d \mathbf{r} \Delta U(\mathbf{r})|\phi(\mathbf{r})|^{2}, \\
\alpha(\mathbf{R}) &=\int d \mathbf{r} \phi^{*}(\mathbf{r}) \phi(\mathbf{r}-\mathbf{R}), \\
\gamma(\mathbf{R}) &=-\int d \mathbf{r} \phi^{*}(\mathbf{r}) \Delta U(\mathbf{r}) \phi(\mathbf{r}-\mathbf{R}) .
\end{aligned}
$$

Lattice with inversion symmetry, $\alpha(\mathbf{R})=\alpha(\mathbf{-R}),\gamma(\mathbf{R})=\gamma(\mathbf{-R})$ , we have

$$
\varepsilon(\mathbf{k})=E_{s}-\beta-\sum_{n . n} \gamma(\mathbf{R}) \cos \mathbf{k} \cdot \mathbf{R}
$$

where $n.n$ means nearest neighbor interaction.

For face-centered lattice, the 12 nearest neighbors of the origin are

$$
\mathbf{R}=\frac{a}{2}(\pm 1, \pm 1,0), \quad \frac{a}{2}(\pm 1,0, \pm 1), \quad \frac{a}{2}(0, \pm 1, \pm 1)
$$

If $\mathbf{k}=\left(k_{x}, k_{y}, k_{z}\right)$, then the corresponding 12 values of $\mathbf{k} \cdot \mathbf{R}$ are

$$
\mathbf{k} \cdot \mathbf{R}=\frac{a}{2}\left(\pm k_{i}, \pm k_{j}\right), \quad i, j=x, y ; y, z ; z, x .
$$

Finally, we have

$$
\begin{aligned}
\varepsilon(\mathbf{k})=E_{s}-\beta-4 \gamma\left(\cos \frac{1}{2} k_{x} a \cos \frac{1}{2} k_{y} a\right.&\left.+\cos \frac{1}{2} k_{y} a \cos \frac{1}{2} k_{z} a+\cos \frac{1}{2} k_{z} a \cos \frac{1}{2} k_{x} a\right)
\end{aligned}
$$

where

$$
\gamma=-\int d \mathbf{r} \phi^{*}(x, y, z) \Delta U(x, y, z) \phi\left(x-\frac{1}{2} a, y-\frac{1}{2} a, z\right) .
$$


## 1.6 Relation to the Wannier function





# 2 Tight-binding model by Dirac notations

## 2.1 Wave function

The $n$-th eigenmode in $j$-th atom whose position is $\vec{\mathbf{R}}_j$ Hamiltonian is defined as $\ket{j,n}$, which satisfying the orthogonal relation

$$
\bra{j,m}\ket{j,n} = \delta_{mn}
$$



 According to the tight-binding thoery, the wave function can be experessed as the superposition of these eigenmodes.

$$
\ket{\psi} = \sum_{j,n} e^{i\vec{\mathbf{k}}\cdot\vec{\mathbf{R}}_j} b_n \ket{j,n}
$$


## 2.2 Equations of the coefficients

The Schrondinger's equations are

$$
H \ket{\psi(\mathbf{r})} = \left(H_{\mathrm{at}}+\Delta U(\mathbf{r})\right) \ket{\psi(\mathbf{r})} = \mathcal{E}(\mathbf{k}) \ket{\psi(\mathbf{r})}
$$

Acting the $\bra{0,m}$ on the Schrondinger's equaions, we have

$$
(\mathcal{E}(\mathbf{k}) - E_m) b_m = 
- (\mathcal{E}(\mathbf{k}) - E_m) \sum_n \left( \sum_{\vec{\mathbf{R}}\neq 0}\bra{0,m}\ket{j,n}e^{i\vec{\mathbf{k}}\cdot\vec{\mathbf{R}}_j}\right)  b_n 
+ \sum_{n} \bra{0,m}\Delta U\ket{0,n}b_n + \sum_n \left( \sum_{\vec{\mathbf{R}}\neq 0}\bra{0,m}\Delta U\ket{j,n}e^{i\vec{\mathbf{k}}\cdot\vec{\mathbf{R}}_j}\right)  b_n 
$$

For single orbital case, 



$$
\varepsilon(\mathbf{k})=E_{s}-\frac{\beta+\Sigma \gamma(j) e^{\boldsymbol{i k} \cdot \mathbf{R}}}{1+\Sigma \alpha(j) e^{\mathbf{i} \mathbf{k} \cdot \mathbf{R}}},
$$

where $E_{s}$ is the energy of the atomic $s$-level, and

$$
\begin{aligned}
&\beta =-\int d \mathbf{r} \Delta U(\mathbf{r}) \bra{0}\ket{0}, \\
&\alpha(\mathbf{R}) =\int d \mathbf{r} \bra{0}\ket{j}, \\
&\gamma(\mathbf{R}) =-\int d \mathbf{r} \bra{0} \Delta U \ket{j}.
\end{aligned}
$$



The following results are similar, but this notation is more simplified for complex cases.



# 3 Tight-binding model by second quantization language

## 3.1 Second quantization language

The eigenvector of Hamiltonian is defined as $\ket{\lambda}$, which can be written as

$$
\ket{\lambda} = a_\lambda^\dagger \ket{0}
$$

and the occupation number operator is

$$
\hat{n}_{\lambda}=a_{\lambda}^{\dagger} a_{\lambda}
$$

The one body operator is

$$
\hat{o}=\sum_{i} o_{\lambda_{i}}\left|\lambda_{i}\right\rangle\left\langle\lambda_{i}\right|, \quad o_{\lambda_{i}}=\left\langle\lambda_{i}|\hat{o}| \lambda_{i}\right\rangle
$$

With this definition, one finds that

$$
\begin{aligned}
\left\langle n_{\lambda_{1}}^{\prime}, n_{\lambda_{2}}^{\prime}, \ldots\left|\hat{\mathcal{O}}_{1}\right| n_{\lambda_{1}}, n_{\lambda_{2}}, \ldots\right\rangle &=\sum_{i} o_{\lambda_{i}} n_{\lambda_{i}}\left\langle n_{\lambda_{1}}^{\prime}, n_{\lambda_{2}}^{\prime}, \ldots \mid n_{\lambda_{1}}, n_{\lambda_{2}}, \ldots\right\rangle \\
&=\left\langle n_{\lambda_{1}}^{\prime}, n_{\lambda_{2}}^{\prime}, \ldots\left|\sum_{i} o_{\lambda_{i}} \hat{n}_{\lambda_{i}}\right| n_{\lambda_{1}}, n_{\lambda_{2}}, \ldots\right\rangle
\end{aligned}
$$

Since this equality holds for any set of states, one can infer the second quantized representation of the operator $\hat{\mathcal{O}}_{1}$,

$$
\hat{\mathcal{O}}_{1}=\sum_{\lambda=0}^{\infty} o_{\lambda} \hat{n}_{\lambda}=\sum_{\lambda=0}^{\infty}\langle\lambda|\hat{o}| \lambda\rangle a_{\lambda}^{\dagger} a_{\lambda} .
$$

Using the picture transform, we have

$$
a_{\tilde{\lambda}}^{\dagger}=\sum_{\lambda}\langle\lambda \mid \tilde{\lambda}\rangle a_{\lambda}^{\dagger}, \quad a_{\tilde{\lambda}}=\sum_{\lambda}\langle\tilde{\lambda} \mid \lambda\rangle a_{\lambda}
$$

Therefore, the operator $\hat{\mathcal{O}}_{1}$ can be written as

$$
\hat{\mathcal{O}}_{1}=\sum_{\mu \nu}\langle\mu|\hat{o}| \nu\rangle a_{\mu}^{\dagger} a_{\nu} = \sum_{\mu \nu}o_{\mu\nu} a_{\mu}^{\dagger} a_{\nu} .
$$


## 3.2 For tight-binding model

The eigenmode of unperturbated system is $\ket{j,n}$, which can be expressed by generating operator

$$
\ket{j,n} = c_{j,n}^\dagger \ket{0}
$$

 The Hamiltonian expressed by second quantization language is

$$
\hat{H} = \sum_{jlmn}H_{jl,mn} c_{j,m}^\dagger c_{l,n}
$$

where $H_{jl,mn} = \bra{j,m}H\ket{l,n}$.

For the case that only one atom in each unit cell and only with one orbital, the Hamiltonian is  

$$
H=-\sum_{\mathrm{ij}}\left(t_{\mathrm{ij}} c_{i}^{\dagger} c_{j}+t_{\mathrm{ji}} c_{j}^{\dagger} c_{i}\right)+\sum_{i} V_{i} c_{i}^{\dagger} c_{i}
$$

Now, let us consider a slightly more complicated situation, i.e. a $1 \mathrm{~d}$ chain formed by two different types of atoms $(a$ and $b)$.

$$
H=-t \sum_{i}\left(a_{i}^{\dagger} b_{i}+b_{i}^{\dagger} a_{i+1}+\text { h.c. }\right)+V_{a} \sum_{i} a_{i}^{\dagger} a_{i}+V_{b} \sum b_{i}^{\dagger} b_{i}
$$





>[1] Mermin, N., Ashcroft, N. (2020). Solid State Physics. United States: Blue Kingfisher.
>
>[2] Girvin, S. M., Yang, K. (2019). Modern Condensed Matter Physics. United Kingdom: Cambridge University Press.
>
>[3] Altland, A., & Simons, B. D. (2010). *Condensed matter field theory*. Cambridge university press.



# 4 Tight-binding model in topological SAW

## 4.1 Operator in elasticity is Hermitian

### 4.1.1 Operator in elasticity is Hermitian

The governing equations in elasticity without external force can be expressed by 

$$
\rho \ddot{\boldsymbol{u}}=\operatorname{div}(\mathbf{a} \cdot \nabla \boldsymbol{u}) \quad \text{on} \quad \Omega
$$

where $\boldsymbol{a}$ is the elastic constants tensor. While the boundary conditions are assumed to be either

$$
\left.\begin{array}{r}
\text { displacement: } \boldsymbol{u}=\mathbf{0} \text { on } \partial \Omega, \\
\text { traction: } \mathbf{a} \cdot \nabla \boldsymbol{u} \cdot \boldsymbol{n}=\mathbf{0} \text { on } \partial \Omega, \\
\text { or mixed: } \boldsymbol{u}=\mathbf{0} \text { on } \partial_{d} \text { and } \mathbf{a} \cdot \nabla \boldsymbol{u}=\mathbf{0} \text { on } \partial_{\tau}
\end{array}\right\}
$$

Defining the operator $L$ as 

$$
L \boldsymbol{u} =  \frac{1}{\rho} \operatorname{div}(\mathbf{a} \cdot \nabla \boldsymbol{u})
$$

We can prove that it is Hermitian, in other words, prove the following equation

$$
\int_\Omega \boldsymbol{u}_m L \boldsymbol{u}_n dV = \int_\Omega \boldsymbol{u}_n L \boldsymbol{u}_m dV
$$


### 4.1.2 Proof

The term in left hand side is equal to

$$
\int_\Omega \boldsymbol{u}_m L \boldsymbol{u}_n dV = \int_\Omega \boldsymbol{u}_m \frac{1}{\rho} \operatorname{div}(\mathbf{a} \cdot \nabla \boldsymbol{u}_n)  dV = \int_{\partial\Omega} \frac{1}{\rho} \boldsymbol{u}_m (\mathbf{a} \cdot \nabla \boldsymbol{u}_n)  dS - \int_\Omega \frac{1}{\rho}  \nabla\boldsymbol{u}_m \cdot (\mathbf{a} \cdot \nabla \boldsymbol{u}_n)  dV = -\int_\Omega \frac{1}{\rho}  u^m_{i,j} a_{ijkl} u^n_{k,l}  dV
$$

The first term in the right hand side is equal to 0 due to the boundary condition so that we have

$$
\int_\Omega \boldsymbol{u}_m L \boldsymbol{u}_n dV = - \int_\Omega \frac{1}{\rho}  \nabla\boldsymbol{u}_m \cdot (\mathbf{a} \cdot \nabla \boldsymbol{u}_n)  dV
$$

The term in right hand side is equal to

$$
\int_\Omega \boldsymbol{u}_n L \boldsymbol{u}_m dV = \int_\Omega \boldsymbol{u}_n \frac{1}{\rho} \operatorname{div}(\mathbf{a} \cdot \nabla \boldsymbol{u}_m)  dV = \int_{\partial\Omega} \frac{1}{\rho} \boldsymbol{u}_n (\mathbf{a} \cdot \nabla \boldsymbol{u}_m)  dS - \int_\Omega \frac{1}{\rho}  \nabla\boldsymbol{u}_n \cdot (\mathbf{a} \cdot \nabla \boldsymbol{u}_m)  dV
$$

The first term in the right hand side is equal to 0 due to the boundary condition so that we have

$$
\int_\Omega \boldsymbol{u}_n L \boldsymbol{u}_m dV = - \int_\Omega \frac{1}{\rho}  \nabla\boldsymbol{u}_n \cdot (\mathbf{a} \cdot \nabla \boldsymbol{u}_m)  dV = -\int_\Omega \frac{1}{\rho}  u^n_{i,j} a_{ijkl} u^m_{k,l}  dV
$$

Since the symmetry of $\boldsymbol{a}$, or $a_{ijkl} = a_{klij}$, we have

$$
-\int_\Omega \frac{1}{\rho}  u^n_{i,j} a_{ijkl} u^m_{k,l}  dV = -\int_\Omega \frac{1}{\rho}  u^m_{i,j} a_{ijkl} u^n_{k,l}  dV
$$

or

$$
\int_\Omega \boldsymbol{u}_m L \boldsymbol{u}_n dV = \int_\Omega \boldsymbol{u}_n L \boldsymbol{u}_m dV
$$


### 4.1.3 Properties of Hermitian operators

* **The eigenvalues of an Hermitian operator are real.**

* **The eigenfunctions of an Hermitian operator are orthogonal.**

* **The eigenfunctions of an Hermitian operator form a complete set.** 



## 4.2 Tight-binding model in elasticity

<img src="https://raw.githubusercontent.com/wangshaoyun/image/master/Screen%20Shot%202022-01-24%20at%2013.46.00.png" style="zoom:30%;" />



The $\alpha$-th mode in $j$-th pillar in $n$-th unit cell is

$$
\boldsymbol{u}^{j \alpha}(\vec{r} - \vec{R_n})
$$

Since only 1 mode is excited in simulation, we just need to consider 1 mode and we can drop the $\alpha$ index directly. The eigenmode becomes

$$
\boldsymbol{u}^{j}(\vec{r}-\vec{R_n})
$$

According to the tight-binding model assumption, the displacement field can be assumed as

$$
\boldsymbol{u} = \sum_{jn} e^{i\vec{\mathbf{k}}\cdot\vec{\mathbf{R}}_n} a_{j} \boldsymbol{u}^{j}(\vec{r}-\vec{R_n})
$$

where $j=1,2,3$ and $n$ summing over all unit cells along different direction. Substituting that into the governing equations in elasticity gives

$$
L\boldsymbol{u} = - \omega ^2 \boldsymbol{u}
$$

Timing $\boldsymbol{u}^i(\vec{r})$ on the left side of the terms and then integraling them, we have

$$
\int_\Omega \boldsymbol{u}^i(\vec{r}) L \boldsymbol{u} dV = -\omega^2 \int_\Omega \boldsymbol{u}^i(\vec{r}) \boldsymbol{u} dV
$$

 Expanding the equations gives 

$$
\int_\Omega \boldsymbol{u}^i L \boldsymbol{u}^j dV a_j + \sum_{n \neq 0}\int_\Omega \boldsymbol{u}^i(\vec{r}) L \boldsymbol{u}^j(\vec{r}-\vec{R_n}) e^{i\vec{\mathbf{k}}\cdot\vec{\mathbf{R}}_n} dV a_j= -\omega^2 a_j
$$

If we only consider the nearest interaction, we have

$$
\int_\Omega \boldsymbol{u}^i L \boldsymbol{u}^j dV a_j + (e^{ik_yR_y}+e^{-ik_yR_y})\int_\Omega \boldsymbol{u}^i L \boldsymbol{u}^i dV a_i + \\
\int_\Omega \boldsymbol{u}^1(\vec{r}) L \boldsymbol{u}^3(\vec{r}-\vec{R}) e^{-ik_xR_x} dV a_3 + \int_\Omega \boldsymbol{u}^3(\vec{r}) L \boldsymbol{u}^1(\vec{r}+\vec{R}) e^{ik_xR_x} dV a_1 = -\omega^2 a_j
$$

where $i,j=1,2,3$ and $\abs{i-j}\le1$. The equation can be rewritten as

$$
K_{ij} a_j = -\omega^2 a_j
$$

where

$$
K_{ii} = \int_\Omega \boldsymbol{u}^i L \boldsymbol{u}^i dV + 2\cos{k_yR_y} \int_\Omega \boldsymbol{u}^i(\vec{r}) L \boldsymbol{u}^i(\vec{r}-\vec{R}_y) dV \\
K_{12} = K_{21} = \int_\Omega \boldsymbol{u}^1 L \boldsymbol{u}^2 dV \\
K_{23} = K_{32} = \int_\Omega \boldsymbol{u}^2 L \boldsymbol{u}^1 dV \\
K_{13} = K_{31}^\dagger =  e^{-ik_xR_x} \int_\Omega \boldsymbol{u}^1(\vec{r}) L \boldsymbol{u}^3(\vec{r}-\vec{R}_x) dV \\
$$

Since the weak interaction of the nearest wave guide, the integral region $\Omega$ can be limited to the region of connection bars. The overlaping integral is propotional to the volume of the bars. Therefore, we have

$$
K_{11} = K_{22} = K_{33} = \kappa + 2\cos{k_y R_y} \kappa_y, \\
K_{12} = k_1, \ K_{13} = k_3 e^{-ik_xR_x},\ K_{23}=k_2 \\
k_i = k_0(1+\delta \cos(2\pi i/3 + \phi)) \\
$$

where

$$
\kappa = \int_\Omega \boldsymbol{u}^i L \boldsymbol{u}^i dV, \\
\kappa_y =\int_\Omega \boldsymbol{u}^i(\vec{r}) L \boldsymbol{u}^i(\vec{r}-\vec{R}_y) dV \\
k_1 = \int_\Omega \boldsymbol{u}^1 L \boldsymbol{u}^2 dV, \\
k_2 = \int_\Omega \boldsymbol{u}^2 L \boldsymbol{u}^3 dV, \\
k_3 = \int_\Omega \boldsymbol{u}^1(\vec{r}) L \boldsymbol{u}^3(\vec{r}-\vec{R}_x) dV \\
$$

Finally, Eq. (53) can be written as the matrix form

$$
\left(\begin{array}{ccc}
\kappa + 2\kappa_y \cos{k_y R_y} & k_1 & k_3 e^{-iq_x R_x} \\
k_1 & \kappa + 2\kappa_y \cos{k_y R_y} & k_2 \\
k_3 e^{iq_x R_x} & k_2 & \kappa + 2\kappa_y \cos{k_y R_y}
\end{array}\right)  
\left(\begin{array}{c}
a_1 \\
a_2 \\
a_3 
\end{array}\right)
= -\omega^2 \left(\begin{array}{c}
a_1 \\
a_2 \\
a_3 
\end{array}\right)
$$

