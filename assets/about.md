
An extension that introduces a new Attractor object — a generic, animatable driver-node for defining
relationships to one or more Locators (or other scene objects). Out of the box it powers
keyframe-interpolated "look-at" constraints, but may be extended in the future to include additional
constraint logic (IK helpers, distance triggers, multi-target blends, etc.).

**Key Features**

- **Attractor Object:** visible in Outliner, a counterpart to Locators— Applies forces to parent
bone(s) using one or more Locator targets
- **Locator Binding:** assign one or more Locators as targets via UI dropdown
- **Supports Native Interpolation Modes:** linear, smooth, bezier, step
- **Automatic Bone Drive:** computes world-space relationship each frame and writes rotations to
parent bone(s)
<!-- - **Extensible Architecture:** hook custom constraint functions (springs, limits, weighted blends)
without modifying target objects -->


