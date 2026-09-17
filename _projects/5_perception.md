---
layout: page
title: rapid perception and localization
description: Event-camera visual odometry and state estimation for highly dynamic legged robots.
img: assets/img/9.jpg
importance: 2
category: perception
related_publications: false
---

Sprinting, jumping, parkour, backflips — the motions we want legged robots to
perform are exactly the ones that break conventional cameras. Rapid motion causes
severe blur and compromises pose estimation right when it matters most. We use
**event cameras**, which offer exceptional temporal resolution and dynamic range
and largely avoid this blur, but their sparse, asynchronous data stream requires
new methods for feature extraction, association, and tracking. This project
develops those methods and the datasets needed to validate them.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/9.jpg" title="Rapid perception and localization" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Placeholder image — replace with a lab photo.</div>

<h2 class="mt-5">Research and Publications</h2>

<h3><a href="https://ieeexplore.ieee.org/abstract/document/10342048/">Event Camera-Based Visual Odometry for Dynamic Motion Tracking of a Legged Robot Using Adaptive Time Surface</a></h3>
<p>An adaptive time-surface representation for event-camera data that supports visual odometry through highly dynamic legged motion, keeping track of pose and surroundings during moves that would blur a conventional camera. Presented at IROS 2023.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include video.liquid path="https://www.youtube.com/embed/-5ieQSh0g3M" class="img-fluid rounded z-depth-1" width="100%" height="360" %}
  </div>
</div>
<div class="caption">Adaptive time-surface visual odometry running through dynamic quadruped motion.</div>

<h3><a href="https://daroslab.github.io/cear/">CEAR: Comprehensive Event Camera Dataset for Rapid Perception of Agile Quadruped Robots</a></h3>
<p>CEAR is a multimodal dataset combining event-camera data with RGB-D, IMU, LiDAR, and joint encoders, all mounted on a Mini Cheetah. It includes more than 100 real-world sequences across a range of gaits and acrobatic movements under diverse lighting conditions — the first event-camera dataset capturing this range of dynamic quadruped motion. Published in <em>IEEE Robotics and Automation Letters</em>, 2024.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include video.liquid path="https://www.youtube.com/embed/4V4F1l6xmzM" class="img-fluid rounded z-depth-1" width="100%" height="360" %}
  </div>
</div>
<div class="caption">An overview of the CEAR dataset.</div>

<p class="mt-3">See the <a href="https://www.umass.edu/robotics/daros/research/rapid-perception-and-localization">UMass Robotics rapid perception and localization project</a> for the broader research overview.</p>
