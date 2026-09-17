---
layout: page
title: rapid perception and localization
description: Event-camera visual odometry and state estimation for highly dynamic legged robots.
img: assets/img/rapid_perception_overview.png
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

<div class="row justify-content-sm-center">
  <div class="mt-3 mt-md-0" style="max-width: 70%; margin: 0 auto;">
    {% include figure.liquid loading="eager" path="assets/img/rapid_perception_overview.png" title="Rapid perception and localization pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Terrain scanning with an RGB-D camera and event-camera-based pose estimation identify steppable regions for foothold planning in cluttered, rubble-like terrain.</div>

<h2 class="mt-5">Research and Publications</h2>

<h3><a href="https://ieeexplore.ieee.org/abstract/document/10342048/">Event Camera-Based Visual Odometry for Dynamic Motion Tracking of a Legged Robot Using Adaptive Time Surface</a></h3>
<p>An adaptive time-surface representation for event-camera data that supports visual odometry through highly dynamic legged motion, keeping track of pose and surroundings during moves that would blur a conventional camera. Presented at IROS 2023.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    <div style="position: relative; width: 100%; aspect-ratio: 16 / 9; border-radius: 0.5rem; overflow: hidden;">
      <iframe src="https://www.youtube.com/embed/-5ieQSh0g3M" title="Adaptive time-surface visual odometry" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="caption">Adaptive time-surface visual odometry running through dynamic quadruped motion.</div>

<h3><a href="https://daroslab.github.io/cear/">CEAR: Comprehensive Event Camera Dataset for Rapid Perception of Agile Quadruped Robots</a></h3>
<p>CEAR is a multimodal dataset combining event-camera data with RGB-D, IMU, LiDAR, and joint encoders, all mounted on a Mini Cheetah. It includes more than 100 real-world sequences across a range of gaits and acrobatic movements under diverse lighting conditions — the first event-camera dataset capturing this range of dynamic quadruped motion. Published in <em>IEEE Robotics and Automation Letters</em>, 2024.</p>

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    <div style="position: relative; width: 100%; aspect-ratio: 16 / 9; border-radius: 0.5rem; overflow: hidden;">
      <iframe src="https://www.youtube.com/embed/4V4F1l6xmzM" title="CEAR dataset overview" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</div>
<div class="caption">An overview of the CEAR dataset.</div>

<p class="mt-3">See the <a href="https://www.umass.edu/robotics/daros/research/rapid-perception-and-localization">UMass Robotics rapid perception and localization project</a> for the broader research overview.</p>
