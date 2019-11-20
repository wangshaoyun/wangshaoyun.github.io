---
layout: page
permalink: /projects/
title: Projects
---

# **Monte Carlo Simulation of Weak Polyelectrolytes Brushes (Still ongoing)**

+ A Monte Carlo method simulate the effect of pH on the morphology of weak polyelectrolytes
+ Constant pH titration method is used. In this method, after several Metropolis move, particle random deletion and insertion is achieved to simulate the ionization process.
+ Bond flucuation method is used to accelerate equillibrium. 
+ Slab geometry is used and Ewald summation is corrected.
+ Combine Multistep algorithm with smooth particle mesh Ewald method to calculate long-range potential
+ A new pure cell lists method based on doubly linked lists was developed to achieve nonlocal move including particle deletion and insertion. 

<ul>
    <a href=" https://github.com/wangshaoyun/Bond_Fluctuation_Method_Ewald"><div class="color-button">Code 1 in GitHub: Ewald summation</div></a>
</ul>

<ul>
    <a href=" https://github.com/wangshaoyun/Bond_Fluctuation_Method_SPME"><div class="color-button">Code 2 in GitHub: SPME method</div></a>
</ul>

# **Monte Carlo Simulation of Adsorption of Weak Polyelectrolytes on Cylinder (Still ongoing)**

+ It is similar to the former project, but configurational biased Monte Carlo is used.
+ Lenneard Jones potential, finite extensiable nonliear elastic potential (FENE) potential, bending stiffness, torsion stiffness, Coulomb potential are considered in this project.
+  Combine Multistep algorithm with smooth particle mesh Ewald method to calculate long-range potential

<ul>
    <a href="https://github.com/wangshaoyun/Configurational-Bias-Monte-Carlo/"><div class="color-button">Code and detailed description in GitHub</div></a>
</ul>  

# **Molecular Dynamics Simulation of Polyelectrolytes Brushes**

+ A molecular dynamics program for simulating Polyelectrolytes were achieved by myself.
+ The program is same efficient as open source software Lammps and Gromacs.
+ Most efficient algorithm for short-range and long-range potential are used.
+ Program were used to study morphology and charge overcompensation of star brushes.
+ Program were used to study two layer structure of mixing linear and star brushes.
+ Program were used to study condition of charge overcompensation of star brushes.
+ Program were used to study competition and bridging of brushes with trivalent salts.

<ul>
    <a href="https://github.com/wangshaoyun/MD_Brushes"><div class="color-button">Code and detailed description in GitHub</div></a>
</ul>  

# **Monte Carlo Simulation of Lennard Jones Fluid by Cell Lists Method**

+ For the calculation of short-range potential, the most common strategy is the combination of Verlet list method and cell list method [1]. Or rather, use Verlet list to calcute force and use cell list method to update Verlet list.
+ In molecular dynamics, pure cell list method without Verlet list can directly used to calculte short-range force although it is litte slowly than the combination of Verlet list method and cell list method.
+ However, there is no corresponding cell list method in Monte Carlo. This program providea this program by doubly rotated linked lists technology [2,3].
+ This a program that simulate the equation of state and radial distribution function of LJ fluid by pure cell list method [2]. 
+ This program is veried through comparing the results with them by combination of Verlet list method and cell list method. 

<ul>
    <a href="https://github.com/wangshaoyun/LJ_Fluid_Verlet_list"><div class="color-button">Code 1: Verlet lists method for LJ Fluid</div></a>
</ul>  

<ul>
    <a href="https://github.com/wangshaoyun/LJ_Fluid_Cell_list"><div class="color-button">Code 2: Cell lists method for LJ Fluid</div></a>
</ul> 

# **Searching Novel Cuts of Quartz Resonators**

+ Incremental thermo field theory was used to establish frequency-temperature relation.
+ Global optimization were achieved by solving nonlinear equations strictly.
+ All existed commercial cuts were located on my cuts curves.
+ Novel cuts with high and low inflection temperature were discovered and they can be used in extreme environment. 
+ The searching was extended to all possible orientations and novel cuts were found. Within 10 ppm of frequency shift, working temperature of these cuts is from -70degC  to 130degC  while it of the commercial AT-cut is from -15degC to 65degC.
+ The searching was strict mathematically and all potential cuts are found.
+ Prof. Y. K. Yong in Rutgers university speak highly of this work.
+ A company prepare to product it.

<ul>
    <a href="https://www.researchgate.net/profile/Shaoyun_Wang2/research"><div class="color-button">Publications in ResearchGate</div></a>
</ul> 

# **Theoretical Research in Solid Mechanics**  

+ Circular plate vibration equations of thickness mode.
+  Rayleigh wave in polar coordinate.
+ High-order deformation of plates by using power series expansion.
+ Incremental thermo field theory in continuum mechanics