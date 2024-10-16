---
layout: post
title: Beams with Circuits
category: Mechanics
tags: Mechanics
---

<a href="/assets/notes/2024-10-13-Beams with Circuit.pdf">PDF</a>

# 1 Beam with connecting circuit

| <img src="file:///Users/wang/Documents/record/docs/Non-Hermitian/assets/Screenshot of Preview (12-19-23, 15-04-31).png" alt="Screenshot of Preview (12-19-23, 15-04-31)" style="zoom:50%;" /> |
| :----------------------------------------------------------: |
| <img src="file:///Users/wang/Documents/record/docs/Non-Hermitian/assets/Screenshot of Preview (12-19-23, 15-10-26).png" alt="Screenshot of Preview (12-19-23, 15-10-26)" style="zoom:50%;" /> |
|                                                              |

The constitutive law is
$$
\left[\begin{array}{l}
\mathbf{D} \\
\mathbf{S}
\end{array}\right]=\left[\begin{array}{ll}
\mathbf{e}^T & \mathbf{d} \\
\mathbf{d}_t & \mathbf{s}^E
\end{array}\right]\left[\begin{array}{l}
\mathbf{E} \\
\mathbf{T}
\end{array}\right]
$$
Assume the field in the piezo patch is uniform, we have the relation after Laplace transform
$$
\mathbf{V}(s)=\mathbf{L} \cdot \mathbf{E}(s), \quad \mathbf{I}(s)=s \mathbf{A} \cdot \mathbf{D}(s)
$$
Then the constitutive law can be transformed as
$$
\left[\begin{array}{l}
\mathbf{I} \\
\mathbf{S}
\end{array}\right]=\left[\begin{array}{cc}
s \mathbf{A} \varepsilon^T \mathbf{L}^{-1} & s\mathrm{\boldsymbol{Ad}} \\
\mathbf{d}_t \mathbf{L}^{-1} & \mathbf{s}^{\mathrm{E}}
\end{array}\right]\left[\begin{array}{l}
\mathbf{V} \\
\mathbf{T}
\end{array}\right]
$$
We define the capacity of piezo patch as
$$
A_i \varepsilon_i^T / L_i=C_{p i}^T
$$
Then Eq. (3) can be rewritten as
$$
\left[\begin{array}{c}
\mathbf{I} \\
\mathbf{S}
\end{array}\right]=\left[\begin{array}{cc}
s \mathbf{C}_p^T & s \mathbf{A d} \\
\mathbf{d}_t \mathbf{L}^{-1} & \mathbf{s}^E
\end{array}\right]\left[\begin{array}{l}
\mathbf{V} \\
\mathbf{T}
\end{array}\right]=\left[\begin{array}{cc}
\mathbf{Y}^D(s) & s \mathbf{A d} \\
\mathbf{d}_t \mathbf{L}^{-1} & \mathbf{s}^E
\end{array}\right]\left[\begin{array}{l}
\mathbf{V} \\
\mathbf{T}
\end{array}\right],
$$
where $\mathbf{Y}^D(s)$ is the open circuit admittance of the piezoelectric patch.

For shunted piezoelectric applications, 
$$
\left[\begin{array}{l}
\mathbf{I} \\
\mathbf{S}
\end{array}\right]=\left[\begin{array}{cc}
\mathbf{Y}^{E L} & s \mathbf{A d} \\
\mathbf{d}_{\mathbf{t}} \mathbf{L}^{-1} & \mathbf{S}^E
\end{array}\right]\left[\begin{array}{l}
\mathbf{V} \\
\mathbf{T}
\end{array}\right] \text { where } \quad \mathbf{Y}^{E L}=\mathbf{Y}^D+\mathbf{Y}^{S U}
$$


The first equation gives
$$
\mathbf{V}=\left(\mathbf{Z}^{E L}\right) \mathbf{I}-\left(\mathbf{Z}^{E L} s \mathbf{A d}\right) \mathbf{T}
$$
and inserting into second equation gives
$$
\mathbf{S}=\left[\mathbf{s}^E-\mathbf{d}_t \mathbf{L}^{-1} \mathbf{Z}^{E L} s \mathbf{A d}\right] \mathbf{T}+\left[\mathbf{d}_t \mathbf{L}^{-1} \mathbf{Z}^{E L}\right] \mathbf{I} .
$$
The mechanical compliance is
$$
\mathbf{s}^{S U}=\left[\mathbf{s}^E-\mathbf{d}_t \mathbf{L}^{-1} \mathbf{Z}^{E L} \boldsymbol{s A d}\right] .
$$
Upon noting that with constant stress
$$
\begin{gathered}
\mathbf{Z}^E(\mathrm{~s})=\mathbf{0}=\text { short circuit electrical impedance, } \\
\mathbf{Z}^D(s)=\left(\mathbf{C}_p^T s\right)^{-1}=\text { open circuit electrical impedance, }
\end{gathered}
$$
and that
$$
s \mathbf{L}^{-1} \boldsymbol{\varepsilon}^T \mathbf{A}=\mathbf{C}_p^T s,
$$
equation (16) can be put in the form
$$
\mathbf{s}^{S U}=\left[\mathbf{s}^E-\mathbf{d}_{\mathbf{t}} \overline{\mathbf{Z}}^{E L}\left(\boldsymbol{\varepsilon}^T\right)^{-1} \mathbf{d}\right],
$$
where the matrix of non-dimensional electrical impedances is defined as
$$
\overline{\mathbf{Z}}^{E L}=\mathbf{Z}^{E L}\left(\mathbf{Z}^D\right)^{-1}=\left(s \mathbf{C}_p^T+\mathbf{Y}^{S U}\right)^{-1} s \mathbf{C}_p^T
$$
Here, we introduce the electromechanical coupling coefficients
$$
\begin{gathered}
\text { shear, } k_{15}=d_{15} / \sqrt{s_{55}^E \varepsilon_1^T}=k_{24}, \quad \text { transverse, } k_{31}=d_{31} / \sqrt{s_{11}^E \varepsilon_3^T}=k_{32}, \\
\text { longitudinal, } k_{33}=d_{33} / \sqrt{s_{33}^E \varepsilon_3^T},
\end{gathered}
$$
or, in the notation used, for force in the $j$ th direction and field in the $i$ th direction
$$
k_{i j}=d_{i j} / \sqrt{s_{j j}^E \varepsilon_i^T} \text {. }
$$

Substituting equation (25) into (23) gives
$$
s_{j i}^{S U}=s_{j j}^E\left[1-k_{i j}^2 \bar{Z}_i^{E L}\right] .
$$

## 1.1 Shunted with negative capacity

For our problem, the electric field is along $z$ direction and stress is along $x$ direction. So we have
$$
s_{33}^{S U} = s_{33}^E\left[1-k_{31}^2 \bar{Z}_1^{E L}\right] = s_{33}^E\left[1- \frac{ s C_p^T k_{31}^2}{s C_p^T+Y^{S U}}\right] = s_{33}^E \left[\frac{ s C_p^T (1-k_{31}^2)+Y^{SU}}{s C_p^T+Y^{S U}}\right]
$$
Then we have 
$$
E_{\mathrm{p}}^{\mathrm{SU}}(\omega)=E_{\mathrm{p}}^E \frac{\mathrm{i} \omega C_{\mathrm{p}}^T+Y^{\mathrm{SU}}}{\mathrm{i} \omega C_{\mathrm{p}}^T\left(1-k_{31}^2\right)+Y^{\mathrm{SU}}}
$$
where $s=i\omega$.

If shunted with a negative capacity, we have
$$
Y^{SU} = -i\omega C'=-i\omega H C_0
$$
So the shunting Young's modulus is (see reference [1])
$$
E_{\mathrm{p}}^{\mathrm{SU}}(\omega)=E_{\mathrm{p}}^E \frac{C' - C_{\mathrm{p}}^T}{C' - C_{\mathrm{p}}^T\left(1-k_{31}^2\right)}
$$
or
$$
E_{\mathrm{p}}^{\mathrm{SU}}(\omega)=E_{\mathrm{p}}^E \frac{C' - C_{\mathrm{p}}^T}{C' - C_{\mathrm{p}}^S}
$$
where $C_p^S = (1-k_{31}^2)C_p^T, \ C_{p}^T =  A \varepsilon_{33}^T / d$, which is the result from reference [3,4].

Finally, 
$$
\begin{aligned}
&E_{e q}=\frac{E_b I_b+2 E_p^{S U} I_p}{I_b+2 I_p}\\
&I_b=\frac{b H^3}{12}, \quad I_p=\frac{b h_p^3}{12}+b h_p\left(\frac{H}{2}+\frac{h_p}{2}\right)^2
\end{aligned}
$$





## 1.2 Shunting circuit

| <img src="file:///Users/wang/Documents/record/docs/Non-Hermitian/assets/Screenshot of Preview (2-11-24, 16-44-32).png" alt="Screenshot of Preview (2-11-24, 16-44-32)" style="zoom:50%;" /> |
| :----------------------------------------------------------: |
|                       Circuit diagram                        |

The impedance is derived in the following picture.

| <img src="file:///Users/wang/Documents/record/docs/Non-Hermitian/assets/Screenshot of Photos (2-11-24, 17-01-17).png" alt="Screenshot of Photos (2-11-24, 17-01-17)" style="zoom:20%;" /> |
| :----------------------------------------------------------: |
|                   Derivation of impedance                    |
|                                                              |

Now we have
$$
Z_2 = \frac{1}{j\omega C + 1/R_0}, \quad Z_3 = R_1, \quad Z_4 = R_2
$$
Then we have impedance 
$$
Z_{\text{in}} =- \frac{R_1}{R_2\left(j\omega C + 1/R_0\right)} = \frac{1}{j\omega C_N}
$$
where $R_0$ is very big and $1/R_0$ can be neglected. The negative capacity is
$$
C_N = -\frac{R_2}{R_1} C
$$





# 2 Reference

> [1] Hagood, N. W., & Von Flotow, A. (1991). Damping of structural vibrations with piezoelectric materials and passive electrical networks. *Journal of sound and vibration*, *146*(2), 243-268.
>
> [2] Beck, B. S., Cunefare, K. A., & Collet, M. (2013). The power output and efficiency of a negative capacitance shunt for vibration control of a flexural system. *Smart Materials and Structures*, *22*(6), 065009.
>
> [3] Trainiti, G., Xia, Y., Marconi, J., Cazzulani, G., Erturk, A., & Ruzzene, M. (2019). Time-periodic stiffness modulation in elastic metamaterials for selective wave filtering: Theory and experiment. *Physical review letters*, *122*(12), 124301.