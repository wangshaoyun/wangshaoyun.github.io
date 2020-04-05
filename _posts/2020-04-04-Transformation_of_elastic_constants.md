---
layout: post
title: Material constants of anisotropic linear piezoelectric material
category: Mechanics
tags: Mechanics
---

## Constitutive relations of piezoelectric material

&emsp;&emsp;The constitutive relations of linear anisotropic piezoelectric material are [1]  
<div class="text-align-center">

$$
T_{ij} = c_{ijkl}^E S_{kl} - e_{kij}E_k,  \\
D_i = e_{ikl}S_{kl} + \varepsilon_{ij}^S E_j, 
\tag{1}
$$
</div>
where $\textbf{T}$ is stress tensor, $\textbf{S}$  is strain tensor, $\textbf{E}$ is electric field, $\textbf{D}$ is electric displacement,  $c_{ijkl}^E$ are elastic constants with independent variables $\textbf{E}$, $e_{kij}$ are piezoelectric constants and $\varepsilon_{ij}^S$ are dielectric constants with independent variables $\textbf{S}$.  

The linear constitutive relations can also be expressed as  

<div class="text-align-center">

$$
S_{ij} = s_{ijkl}^E T_{kl} + d_{kij}E_k,\\
D_i = d_{ikl}T_{kl} + \varepsilon_{ij}^T E_j,
\tag{2}
$$
</div>

and  

<div class="text-align-center">

$$
S_{ij} = s_{ijkl}^D T_{kl} - g_{kij}D_k,\\
E_i = -g_{ikl}D_{kl} + \beta_{ij}^T D_j.
\tag{3}
$$
</div>

## Matrix notation

We now introduce a compact matrix notation which is more convenient to calculation by the following transformation  

| $ij$ or $kl$ |  11  |  22  |  33  | 23 or 32 | 13 or 31 | 12 or 21 |
| :----------: | :--: | :--: | :--: | :------: | :------: | :------: |
|  $p$ or $q$  |  1   |  2   |  3   |    4     |    5     |    6     |

Thus we have the mapping
<center>

$$
c_{ijkl} \rightarrow c_{pq}, e_{ikl} \rightarrow e_{ip}, T_{ij}\rightarrow T_p,
\tag{4}
$$
</center>

and the relation between $S_p$ and $S_{pq}$ are
<center>

$$
S_1=S_{11}, S_2=S_{22}, S_{3}=S_{33}, \\
S_4=S_{23}, S_5=S_{13}, S_{6}=S_{12}. \tag{5}
$$
</center>
Using Eq. (4) and (5), Eq. (1-3) are transformed to
<center>

$$
T_{p} = c_{pq}^E S_{q} - e_{kp}E_k,  \\
D_i = e_{iq}S_{q} + \varepsilon_{ij}^S E_j, 
\tag{6}
$$
</center>
<center>

$$
S_{p} = s_{pq}^E T_{q} + d_{kp}E_k,\\
D_i = d_{iq}T_{q} + \varepsilon_{ij}^T E_j,
\tag{7}
$$
</center>

and  

<center>

$$
S_{p} = s_{pq}^D T_{q} - g_{kp}D_k,\\
E_i = -g_{iq}T_{q} + \beta_{ij}^T D_j.
\tag{8}
$$
</center>

The matrices of material constants have the following relations [2]

<center>

$$
c^E_{pr}s^E_{qr}=\delta_{pq}, \quad \quad \quad \quad  c^D_{pr}s^D_{qr}=\delta_{pq},\\
\beta_{ik}^S\varepsilon^S_{jk}=\delta_{ij},\quad \quad \quad \quad \beta^T_{ik}\varepsilon^T_{jk}=\delta_{ij},\\
c^D_{pq} = c^E_{pq}+e_{kp}h_{kq},\quad\quad s^D_{pq}=s^E_{pq}-d_{kp}g_{kq},\\
\varepsilon^T_{ij}=\varepsilon^S_{ij}+D_{iq}e_{jq},\quad\quad
\beta^T_{ij}=\beta^S_{ij}-g_{iq}h_{jq},\\
e_{ip}=d_{iq}c^E_{qp},\quad\quad\quad\quad d_{ip}=\varepsilon^T_{ik}g_{kp},\\
g_{ip}=\beta^T_{ik}d_{kp},\quad\quad\quad\quad h_{ip}=g_{iq}c^D_{qp}.\\
\tag{9}
$$
</center>

The values of $c^E_{pq}, e_{kp} \; \text{and} \; \varepsilon^S_{ij}$ of different materials can be found in Ref. [1]. If we know matrices $c^E_{pq}, e_{kp} \; \text{and} \; \varepsilon^S_{ij},$ we can obtain other matrices by solving Eq. (9). 

## Transformation of matrices of material constants

Many piezoelectric materials such as quartz, piezoelectric ceramics et al. are anisotropic material. The structures we often used are plates which are cut from matrices. Due to the anisotropicity, the material constants are different if the structures are cut from the matrices with different rotational angles. To obtain the material constants with different rorational angles from the original coordinate system, we need coordinate transformation. 

For dielectric constants matrix $[\varepsilon^S]$ where we use $[\bullet]$ to represent matrix, the matrix rotated around an axis can be obtained from the following coordinate transformation

<center>

$$
[\varepsilon'^{S}]=[a][\varepsilon^S][a]^{-1},
\tag{10}
$$
</center>

where  $[a]$ is coordinate transformation matrix. 

For elasctic constants matrix $[c^E]$ which is $6\times6$ matrix, we need to use Bond transformation matrix which is developed by W. L. Bond. The transformation is
<center>

$$
[c^{E}]=[M][c^E][M]^{-1},
\tag{11}
$$
</center>

where $[M]$ is Bond transformation matrix which can be expressed by coordinate matrix $[a]$ [3]
<center>

$$
\begin{bmatrix}
a_{xx}^2 & a_{xy}^2 & a_{xz}^2 & 2a_{xy}a_{xz} & 2a_{xz}a_{xx} & 2a_{xx}a_{xy}\\
a_{yx}^2 & a_{yy}^2 & a_{yz}^2 & 2a_{yy}a_{yz} & 2a_{yz}a_{yx} & 2a_{yx}a_{yy}\\
a_{zx}^2 & a_{zy}^2 & a_{zz}^2 & 2a_{zy}a_{zz} & 2a_{zz}a_{zx} & 2a_{zx}a_{zy}\\
a_{yx}a_{zx} & a_{yy}a_{zy} & a_{yz}a_{zz} & a_{yy}a_{zz}+a_{yz}a_{zy} & a_{yx}a_{zz}+a_{yz}a_{zx} & a_{yy}a_{zx}+a_{yx}a_{zy} \\
a_{zx}a_{xx} & a_{zy}a_{xy} & a_{zz}a_{xz} & a_{xy}a_{zz}+a_{xz}a_{zy} & a_{xz}a_{zx}+a_{xx}a_{zz} & a_{xx}a_{zy}+a_{xy}a_{zx} \\
a_{xx}a_{yx} & a_{xy}a_{yy} & a_{xz}a_{yz} & a_{xy}a_{yz}+a_{xz}a_{yy} & a_{xz}a_{yx}+a_{xx}a_{yz} & a_{xx}a_{yy}+a_{xy}a_{yz} \\
\end{bmatrix}.
\tag{12}
$$
</center>

For piezoelectric constants, the transformation is
<center>

$$
[e]=[M][e][a]^{-1},
\tag{13}
$$
</center>

where $ [M] \; \text{and} \; [a]$ are Bond transformation matrix and coordinate transformation matrix respectively.


## Reference

> [1] J. S. Yang. *An Introduction to the Theory of Piezoelectricity, 2nd* (Switzerland: Springer Nature, 2018). 
>
> [2] A. H. Meitzler H. F. Tiersten, A. W. Warner, D. Berlincourt, G. A. Couqin, F. S. Welsh, *IEEE Standard on Piezoelectricity* (New York: IEEE , 1988).
>
> [3] B. A. Auld. *Acoustic Fields and Wave in Solids, Vol. 1* (New York: John Wiley & Sons, 1973).