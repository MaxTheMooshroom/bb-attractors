
import { Attractor } from './attractor';

import about from '$about.md?raw';

BBPlugin.register('attractors', {
    title: "Attractors",
    author: "Maxine Z.",
    description: "Add Attractors— animatable driver nodes— to define relationships and constraints between Locators, bones, and other scene objects in Blockbench!",
    about: about,
    version: "0.1.0-prealpha",
    icon: "phishing",
    tags: ["animation", "constraints"],
    variant: "both",
    onload: function() {
        Attractor.register();
    },
    onunload: function() {
        Attractor.unregister();
    }
});
