---
layout: page
title: guide-dog robot
description: Human-centered quadruped mobility assistance for blind and low-vision travelers.
img: assets/img/guide_dog_project_cover.jpg
importance: 1
category: perception
related_publications: false
---

Our guide-dog robot is a human-centered mobility assistance system for blind and
low-vision (BLV) travelers. We combine interviews and observations with guide-dog
handlers and trainers, vision-based navigation, semantic planning, quadruped
locomotion, and human-robot interaction to build a robot that can guide a person
through real environments safely and comfortably.

The work spans the complete guiding experience: learning routes, understanding
sidewalks and tactile paving, avoiding obstacles while responding to handler cues,
climbing stairs, and walking quietly and stably beside a person. The linked papers,
datasets, and competition project below document the research progression from
human-centered requirements to field-ready navigation and assistive perception.

<div class="row">
  <div class="col-md-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/guide_dog_project_cover.jpg" title="Guide dog robot project" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-4 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/guide_dog_interviews.png" title="Human-centered guide dog robot interviews" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">A human-centered guide-dog robot project informed by handlers, trainers, and BLV users.</div>

<h2 class="mt-5">Research and Projects</h2>

<h3><a href="https://guidedogrobot-navigation.github.io/">GuideNav: User-Informed Development of a Vision-Only Robotic Navigation Assistant for Blind Travelers</a></h3>
<p>GuideNav is a vision-only teach-and-repeat system inspired by guide-dog training. A sighted person demonstrates a route, then the quadruped uses visual place recognition, temporal filtering, and relative pose estimation to repeat it without LiDAR or depth sensors. Field tests achieved kilometer-scale route following across five outdoor environments. The paper received an HRI 2026 Honourable Mention Award.</p>

<h3><a href="https://guidedogrobot-hgidataset.github.io/">GuideData: Handler-Guide Dog Interaction Dataset</a></h3>
<p>GuideData is a human-centered dataset built from interviews and observations involving 40 BLV participants, guide-dog trainers, and an O&amp;M specialist. It captures real interactions across sidewalk navigation, stairs, street crossings, obstacle avoidance, guide-dog familiarization, harness cues, and blindfolded walking, providing evidence for designing assistive robots around how people and guide dogs actually work together.</p>

<h3><a href="https://guidedogrobot-tactile.github.io/">GuideTWSI: Tactile Walking Surface Indicator Dataset</a></h3>
<p>GuideTWSI addresses reliable detection of tactile paving, a safety-critical landmark for BLV travelers. It combines curated real data, more than 15,000 photorealistic synthetic samples, and robot-collected data across diverse materials, weather, lighting, and viewpoints. Synthetic augmentation improved segmentation by up to 29 mIoU points, and the deployed robot stopped at truncated domes with 96.15% success. The work was an ICRA 2026 Award Finalist.</p>

<h3><a href="https://guidedogrobot-stairclimbing.github.io/">Human-Centered Development of Guide Dog Robots: Quiet and Stable Locomotion Control</a></h3>
<p>This paper develops a slow-stepping, smooth-contact controller that reduces noise and jerky motion while maintaining human walking speed and stable balance over non-flat terrain. Tested on a Unitree Go1 and evaluated with four BLV individuals, the controller reduced walking noise to roughly half that of the default controller. The work was presented as an ICRA 2026 Oral Presentation.</p>

<h3><a href="https://guidedogrobot-obstacleavoid.github.io/">System Configuration and Navigation of a Guide Dog Robot</a></h3>
<p>This system combines a rigid harness interface with a semantic-aware local planner. The handler communicates speed and turning intent through leash tension and handle motion, while the robot uses scene semantics and the handler's relative position to generate collision-free paths. Indoor blindfolded tests demonstrated guide-dog-like obstacle avoidance at a typical walking speed of 0.7 m/s.</p>

<h3><a href="https://hchlhwang.github.io/SToP/">SToP: Synthetic Data for Robotic Mobility Aids</a></h3>
<p>SToP studies how synthetic data generated in Unreal Engine 4 can improve perception for robotic mobility aids. The project evaluates synthetic augmentation for tactile-paving detection and scene description, including models that recognize paving from robot-relevant viewpoints and describe street-crossing scenes in ways aligned with BLV information needs. The associated paper and released data support reproducible assistive-perception research.</p>

<h2 class="mt-5">Competition</h2>

<h3><a href="https://hchlhwang.github.io/Cybathlon/">CYBATHLON Challenges 2023: Vision Assistance Race</a></h3>
<p>Team FlashLight participated in the inaugural CYBATHLON Vision Assistance Race, an assistive-technology competition organized by ETH Zurich. The robot completed two tasks for blind or visually impaired pilots: navigating a sidewalk course without obstacles and serving food by pouring water, carrying a tray, and placing utensils. The team placed second of two teams and used the competition to identify the gap between solutions that work in controlled trials and robust systems for everyday mobility.</p>

<p class="mt-3">See the <a href="https://www.umass.edu/robotics/daros/research/guide-dog-robot">UMass Robotics guide-dog robot project</a> for the broader research overview.</p>
