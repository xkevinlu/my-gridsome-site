---
title: Visualizing an Epidemic
date: 2020-05-09 
author: Kevin Lu
image: https://www.colorsandcode.com/assets/visualizing-an-epidemic/splash2.PNG
---
<iframe src="https://xkevinlu.github.io/wundercat/simulation0.html" scrolling="no" width="100%" height="650" style="border:0px"></iframe>
How does an outbreak of a single case of coronavirus grow into over 3.6 million cases worldwide in just a few months? Today the US alone has over 1.2 million cases, yet just two months ago there were less than 50 reported cases.

    chart
    
To get a better intuitive understanding of how such exponential growth occurs, it can be helpful to visualize the hypothetical spread of a disease. Let’s make some very simplified assumptions about our disease -- given a population of 250 people, assume that there are three states for individuals:

1.  **Healthy (susceptible)**: 
    These individuals are able to contract the disease.
    
2.  **Infectious**: 
    These individuals have a chance to spread the disease through contact with other healthy individuals, and will become removed after a period of time.
    
3.  **Removed**: 
    This individual has either recovered or died from being infectious. We will assume that recovery confers a lasting resistance, so that they cannot become infected again or spread the disease further.
    
## Infection chance & duration

What would we expect to happen if we change the chance of infection? We can think of infection chance as a proxy for protective measures such as better hygiene, wearing of face masks, and overall caution. For instance, let’s see how our model responds when we cut the infection rate in half to 25%:

<iframe src="https://xkevinlu.github.io/wundercat/simulation1.html" scrolling="no" width="100%" height="650" style="border:0px"></iframe>
We can see that lower chance of spread and duration both strongly help to flatten the curve. If we assume you self quarantine once you are symptomatic, we can use duration as a proxy for the incubation period where you might be unknowingly spreading the disease. For example, the CDC estimates the incubation period to be 14 days for the coronavirus. Norovirus on the other hand has an incubation period of 1-2 days. We can see our model being fairly sensitive to changes in duration as well.

## Social distancing & lockdown

Since one of our conditions of spread is contact, let’s visualize what happens when we ask people to stay at home. If 100% of the population stops moving, the infection dies fairly quickly and isn’t able to spread. In reality, not everybody can simply stop all movement -- there are still essential workers, grocery trips, and other reasons why people won’t follow the lockdown order.

<iframe src="https://xkevinlu.github.io/wundercat/simulation2.html" scrolling="no" width="100%" height="620" style="border:0px"></iframe>
    
We can see that the earlier we issue the lockdown, the less spread there is. Also, lifting the lockdown too soon can cause a resurgence of cases, potentially undoing the efforts of the initial lockdown.

## Forced quarantine / travel restriction

Finally, let's explore what happens when you issue a forced quarantine or travel restriction. Again for simplicity, we will proxy for this by introducing a simple divider that splits our population in half when we issue this restriction.

<iframe src="https://xkevinlu.github.io/wundercat/simulation3.html" scrolling="no" width="100%" height="600" style="border:0px"></iframe>

If we are able to keep 100% of the infected in one half until they recover, we guarantee preventing the spread to the other half. However, lifting these restrictions too early enable the spread to resurge and make its way through the population.

## Learnings from a toy model

While we have oversimplified the spread of our hypothetical epidemic, we can still develop an intuition for how exponential spread happens, how preventative measures can flatten the curve, and why lifting these measures too soon can be harmful.

This post was inspired by  [this article by Harry Stevens](https://www.washingtonpost.com/graphics/2020/world/corona-simulator/)  and  [this video by 3Blue1Brown.](https://www.youtube.com/watch?v=gxAaO2rsdIs)

