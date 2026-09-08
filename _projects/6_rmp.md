---
layout: page
title: reactive collision-free locomotion
description: Integrating Riemannian Motion Policies with whole-body control for collision-free dynamic legged locomotion.
img: assets/img/rmp_test.png
importance: 3
category: locomotion
related_publications: false
---

In dynamic legged locomotion, the size of the valid stepping region determines how
much center-of-mass velocity a robot can safely regulate. Conventional approaches
often restrict lateral stepping to prevent the legs from crossing and colliding,
but this also prevents aggressive stabilizing steps that could improve balance and
robustness to external disturbances.

We address this trade-off with an RMPflow-based reactive collision-avoidance swing
leg controller. The controller steers the swing foot toward its planned step while
avoiding collisions between the robot's links. By using the full kinematically
reachable region as a valid stepping area, the approach widens the robot's
stability margin and improves recovery from disturbances.

<div class="row">
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/rmp_test.png" title="RMPflow collision-free legged locomotion simulation" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/rmp_pat_configuration.png" title="Robot configurations for RMP-based locomotion" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Simulation and robot configurations illustrating reactive, collision-free stepping.</div>

<h2 class="mt-5">Video</h2>

<div class="row">
  <div class="col-md-8 mt-3">
    <h3>Riemannian Motion Policy and whole-body control</h3>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gLZGXWcKfnI" title="Integration of Riemannian Motion Policy and Whole-Body Control for Dynamic Legged Locomotion" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>

<p class="mt-3">Learn more in the <a href="https://www.umass.edu/robotics/projects/integration-riemannian-motion-policy-whole-body-control-collision-free-legged-locomotion">UMass Robotics RMP project</a>.</p>
