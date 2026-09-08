---
layout: page
title: humanoid locomotion
description: Generic and dynamic locomotion control for humanoid robots across discrete terrains, including whole-body soccer kicking.
img: assets/img/humanoid_locomotion_architecture.png
importance: 1
category: locomotion
related_publications: false
---

We study how humanoid robots can learn generic, dynamic locomotion across discrete
and uneven terrain. Our control architecture combines a reinforcement-learning
policy for high-level decisions such as gait selection and step placement with
model-predictive control (MPC) and whole-body impulse control (WBIC). This lets a
robot choose between walking, jumping, and leaping from terrain height maps while
retaining the stability and precision of model-based whole-body control.

The same emphasis on dynamic, whole-body behavior extends to humanoid soccer
kicking. Using human biomechanics, trajectory optimization, and imitation
learning, we develop kinodynamically feasible kicks for PresToe, a 25-DoF
humanoid with actuated toes. In simulation, PresToe executes dynamic instep kicks
that propel the ball at speeds above 11 m/s.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/humanoid_locomotion_architecture.png" title="Learning generic and dynamic locomotion of humanoids across discrete terrains" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/humanoid_soccer_kick.png" title="A biomechanics-inspired approach to soccer kicking for humanoid robots" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Research visualizations for generic humanoid locomotion and biomechanics-inspired soccer kicking.</div>

<h2 class="mt-5">Videos</h2>

<div class="row">
  <div class="col-md-6 mt-3">
    <h3>Generic and dynamic locomotion</h3>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/h0k11Ess_kc" title="Learning Generic and Dynamic Locomotion of Humanoids Across Discrete Terrains" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="col-md-6 mt-3">
    <h3>Biomechanics-inspired soccer kicking</h3>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Tx7TbmW85Yk" title="A Biomechanics-Inspired Approach to Soccer Kicking for Humanoid Robots" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>

<p class="mt-3">Learn more in the <a href="https://www.umass.edu/robotics/projects/humanoid-robot-control">UMass Robotics humanoid robot control project</a>.</p>
