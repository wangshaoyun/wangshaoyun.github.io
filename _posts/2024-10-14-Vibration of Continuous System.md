# 1 Questions

How to make equivalence from real structures?

# 2 Vibration mode

## 2.1 longitudinal vibration

Area: $A$, Length: $L$.

Governing equation:
$$
\rho u_{tt} = E u_{xx}
$$
Frequency of lowest mode under fixed-fixed, free-free condition:
$$
\omega = \sqrt{\frac{E}{\rho}} \frac{\pi}{L}
$$
Frequency of lowest mode under fixed-free condition:
$$
\omega = \sqrt{\frac{E}{\rho}} \frac{\pi}{2L}
$$

| <img src="https://raw.github.com/wangshaoyun/image/master/Screen%20Shot%202022-01-02%20at%2017.17.41.png" style="zoom:30%;" /><img src="https://raw.github.com/wangshaoyun/image/master/Screen%20Shot%202022-01-02%20at%2017.18.24.png" style="zoom:28%;" /> |
| :----------------------------------------------------------: |

>Rao, S. S. (2019). *Vibration of continuous systems*. John Wiley & Sons.

## 2.2 Flexural vibration

The governing equation is
$$
\frac{\partial^{2}}{\partial x^{2}}\left(E I \frac{\partial^{2} w}{\partial x^{2}}\right)+\rho A \frac{\partial^{2} w}{\partial t^{2}}=f(x, t)
$$
where
$$
I=I_{y}=\iint_{A} z^{2} d A
$$
Lowest mode for beam simply supported at both ends
$$
\omega=\left(\beta_{1} l\right)^{2}\left(\frac{E I}{\rho A l^{4}}\right)^{1 / 2}=\pi^{2}\left(\frac{E I}{\rho A L^{4}}\right)^{1 / 2}.
$$
<img src="https://raw.github.com/wangshaoyun/image/master/Screen%20Shot%202022-01-02%20at%2021.30.45.png" style="zoom:50%;" />

## 2.3 Torsional Vibration of Shafts

The governing equation is
$$
\frac{\partial}{\partial x}\left(G J \frac{\partial \theta(x, t)}{\partial x}\right)+m_{t}(x, t)=I_{0} \frac{\partial^{2} \theta(x, t)}{\partial t^{2}}
$$
where $I_0 = \rho J$, $J = \int_A r^2 dA$. Uniform and without attached mass $m_t$, we have
$$
G  \frac{\partial^2 \theta(x, t)}{\partial x^2}=\rho \frac{\partial^{2} \theta(x, t)}{\partial t^{2}}
$$
Frequency of lowest mode under fixed-fixed, free-free condition:
$$
\omega = \sqrt{\frac{G}{\rho}} \frac{\pi}{L}
$$
Frequency of lowest mode under fixed-free condition:
$$
\omega = \sqrt{\frac{G}{\rho}} \frac{\pi}{2L}
$$
where 

<img src="https://raw.github.com/wangshaoyun/image/master/Screen%20Shot%202022-01-02%20at%2019.47.24.png" style="zoom:30%;" />



## 2.4 Shear vibration

Lowest frequency for shear mode is
$$
\omega=\frac{\pi}{2 b} \sqrt{\frac{\mu}{\rho}}
$$
where $b$ is half of the thickness $d$. Or
$$
\omega=\frac{\pi}{4 d} \sqrt{\frac{\mu}{\rho}}
$$
where $d$ is the thickness.

## 2.5 Bending vibration of the plate

Governing equation is
$$
D \nabla^{4} w+\rho h \ddot{w}-f=0
$$
in which $D$ represents the flexural rigidity of the plate:
$$
D=\frac{E h^{3}}{12\left(1-\nu^{2}\right)}
$$
Solution for a simply supported rectangular plate is
$$
\omega_{m n}=\lambda_{m n}^{2}\left(\frac{D}{\rho h}\right)^{1 / 2}=\pi^{2}\left[\left(\frac{m}{a}\right)^{2}+\left(\frac{n}{b}\right)^{2}\right]\left(\frac{D}{\rho h}\right)^{1 / 2}
$$
The lowest mode (if $a>b$) is
$$
\omega=\pi^{2}\left(\frac{1}{a}\right)^{2}\left(\frac{D}{\rho h}\right)^{1 / 2}
$$
Solution for circular plate is
$$
\omega_{m n}=\lambda_{m n}^{2}\left(\frac{D}{\rho h}\right)^{1 / 2}
$$
where $\lambda_{mn}$ is the solution of the following equation
$$
I_{m}(\lambda a) J_{m-1}(\lambda a)-J_{m}(\lambda a) I_{m-1}(\lambda a)=0, \quad m=0,1,2, \ldots
$$
The lowest root is $\lambda_{01} a=3.196$. Therefore, the frequency of lowest mode is
$$
\omega=\left(\frac{3.196}{a}\right)^{2}\left(\frac{D}{\rho h}\right)^{1 / 2}
$$
